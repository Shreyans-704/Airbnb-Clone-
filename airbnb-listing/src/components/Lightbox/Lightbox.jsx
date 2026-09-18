import { useEffect, useCallback, useRef } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { galleryImages } from '../../data/gallery';
import { useBodyScrollLock } from '../../hooks/useBodyScrollLock';
import './Lightbox.css';

function NineDotGridIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <circle cx="2" cy="2" r="1.5" />
      <circle cx="8" cy="2" r="1.5" />
      <circle cx="14" cy="2" r="1.5" />
      <circle cx="2" cy="8" r="1.5" />
      <circle cx="8" cy="8" r="1.5" />
      <circle cx="14" cy="8" r="1.5" />
      <circle cx="2" cy="14" r="1.5" />
      <circle cx="8" cy="14" r="1.5" />
      <circle cx="14" cy="14" r="1.5" />
    </svg>
  );
}

export default function Lightbox({ isOpen, currentIndex, onClose, onNavigate, onOpenPhotoTour }) {
  useBodyScrollLock(isOpen);

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
          className="lightbox-grid-btn"
          onClick={() => {
            onClose();
            onOpenPhotoTour?.();
          }}
          type="button"
          aria-label="Show all photos"
        >
          <NineDotGridIcon />
        </button>

        <h2 className="lightbox-title">{currentImage.category || 'Photo'}</h2>

        <div className="lightbox-header-right">
          <span className="lightbox-counter" aria-live="polite">
            {currentIndex + 1} of {galleryImages.length}
          </span>
          <button
            ref={closeBtnRef}
            className="lightbox-close-btn"
            onClick={onClose}
            type="button"
            aria-label="Close viewer"
          >
            <X size={18} />
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
          <ChevronLeft size={20} />
        </button>

        <div className="lightbox-image-container">
          <img
            src={currentImage.src}
            alt={currentImage.alt}
            className="lightbox-image"
          />
        </div>

        <button
          className="lightbox-nav-btn lightbox-nav-next"
          onClick={handleNext}
          type="button"
          aria-label="Next photo"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}
