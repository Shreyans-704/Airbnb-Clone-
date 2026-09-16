import { useState, useEffect, useCallback, useRef } from 'react';
import { X, ChevronLeft, ChevronRight, Share, Heart, Check } from 'lucide-react';
import { galleryImages } from '../../data/gallery';
import { useBodyScrollLock } from '../../hooks/useBodyScrollLock';
import './Lightbox.css';

export default function Lightbox({ isOpen, currentIndex, onClose, onNavigate }) {
  useBodyScrollLock(isOpen);

  const [isSaved, setIsSaved] = useState(false);
  const [copied, setCopied] = useState(false);
  const overlayRef = useRef(null);
  const closeBtnRef = useRef(null);
  const triggerElementRef = useRef(null);

  const handlePrev = useCallback(() => {
    onNavigate((currentIndex - 1 + galleryImages.length) % galleryImages.length);
  }, [currentIndex, onNavigate]);

  const handleNext = useCallback(() => {
    onNavigate((currentIndex + 1) % galleryImages.length);
  }, [currentIndex, onNavigate]);

  // Focus management: move focus into Lightbox on open, restore to trigger element on close
  useEffect(() => {
    if (isOpen) {
      triggerElementRef.current = document.activeElement;
      requestAnimationFrame(() => {
        closeBtnRef.current?.focus();
      });
    } else if (triggerElementRef.current) {
      triggerElementRef.current.focus?.({ preventScroll: true });
      triggerElementRef.current = null;
    }
  }, [isOpen]);

  // Keyboard controls & focus trap
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        e.stopPropagation();
        onClose();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'Tab') {
        // Focus trap inside Lightbox
        const container = overlayRef.current;
        if (!container) return;
        const focusables = Array.from(
          container.querySelectorAll('button:not([disabled]), [tabindex="0"]')
        );
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, handlePrev, handleNext]);

  const handleShare = async () => {
    try {
      if (navigator.clipboard && window.location.href) {
        await navigator.clipboard.writeText(window.location.href);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleSave = () => {
    setIsSaved((prev) => !prev);
  };

  if (!isOpen) return null;

  const currentImage = galleryImages[currentIndex] || galleryImages[0];

  return (
    <div
      ref={overlayRef}
      className="lightbox-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="Image gallery viewer"
    >
      {/* Lightbox Header */}
      <div className="lightbox-header">
        <button
          ref={closeBtnRef}
          className="lightbox-close-btn"
          onClick={onClose}
          type="button"
          aria-label="Close viewer"
        >
          <X size={20} />
          <span>Close</span>
        </button>

        <span className="lightbox-counter" aria-live="polite">
          {currentIndex + 1} / {galleryImages.length}
        </span>

        <div className="lightbox-header-actions">
          <div className="lightbox-share-wrapper">
            <button
              className="lightbox-action-btn"
              type="button"
              aria-label={copied ? 'Link copied' : 'Share photo'}
              onClick={handleShare}
            >
              {copied ? <Check size={16} color="var(--color-success, #008A05)" /> : <Share size={16} />}
            </button>
            {copied && (
              <span className="lightbox-toast" role="status">
                Link copied!
              </span>
            )}
          </div>
          <button
            className="lightbox-action-btn"
            type="button"
            aria-label={isSaved ? 'Remove from wishlist' : 'Save to wishlist'}
            onClick={handleSave}
          >
            <Heart
              size={16}
              fill={isSaved ? 'var(--color-primary, #FF385C)' : 'none'}
              color={isSaved ? 'var(--color-primary, #FF385C)' : 'currentColor'}
            />
          </button>
        </div>
      </div>

      {/* Main Image Area */}
      <div className="lightbox-body">
        <button
          className="lightbox-nav-btn lightbox-nav-prev"
          onClick={handlePrev}
          type="button"
          aria-label="Previous photo"
        >
          <ChevronLeft size={24} />
        </button>

        <div className="lightbox-image-container">
          <img
            src={currentImage.src}
            alt={currentImage.alt}
            className="lightbox-image"
          />
          <p className="lightbox-caption">{currentImage.alt}</p>
        </div>

        <button
          className="lightbox-nav-btn lightbox-nav-next"
          onClick={handleNext}
          type="button"
          aria-label="Next photo"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
}
