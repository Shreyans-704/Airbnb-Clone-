import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, Share, Heart, Check } from 'lucide-react';
import { galleryImages } from '../../data/gallery';
import { useBodyScrollLock } from '../../hooks/useBodyScrollLock';
import './PhotoTour.css';

export default function PhotoTour({ isOpen, onClose, onImageClick, isViewerOpen = false }) {
  useBodyScrollLock(isOpen);

  const [isSaved, setIsSaved] = useState(false);
  const [copied, setCopied] = useState(false);
  const backBtnRef = useRef(null);
  const wasOpenRef = useRef(false);

  // Auto-focus the back button only on initial open of Photo Tour
  useEffect(() => {
    if (isOpen && !wasOpenRef.current) {
      backBtnRef.current?.focus({ preventScroll: true });
    }
    wasOpenRef.current = isOpen;
  }, [isOpen]);

  // Handle escape key — only close Photo Tour if Lightbox viewer is NOT currently active
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen && !isViewerOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, isViewerOpen, onClose]);

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

  // Group photos by category
  const categories = Array.from(new Set(galleryImages.map((img) => img.category)));

  return (
    <div className="photo-tour-overlay" role="dialog" aria-modal="true" aria-label="Photo tour">
      {/* Top sticky bar */}
      <header className="photo-tour-header">
        <button
          ref={backBtnRef}
          className="photo-tour-back-btn"
          onClick={onClose}
          type="button"
          aria-label="Back to listing"
        >
          <ChevronLeft size={20} />
        </button>

        <div className="photo-tour-actions">
          <button
            className="photo-tour-action-btn"
            type="button"
            onClick={handleShare}
            aria-label="Share listing"
          >
            {copied ? <Check size={16} color="var(--color-success, #008A05)" /> : <Share size={16} />}
            <span>{copied ? 'Link copied!' : 'Share'}</span>
          </button>
          <button
            className={`photo-tour-action-btn ${isSaved ? 'is-saved' : ''}`}
            type="button"
            onClick={handleSave}
            aria-label={isSaved ? 'Remove from wishlist' : 'Save to wishlist'}
          >
            <Heart
              size={16}
              fill={isSaved ? 'var(--color-primary, #FF385C)' : 'none'}
              color={isSaved ? 'var(--color-primary, #FF385C)' : 'currentColor'}
            />
            <span>{isSaved ? 'Saved' : 'Save'}</span>
          </button>
        </div>
      </header>

      {/* Main content */}
      <main className="photo-tour-content">
        <div className="photo-tour-inner">
          <h1 className="photo-tour-title">Photo tour</h1>

          {categories.map((category) => {
            const images = galleryImages.filter((img) => img.category === category);
            return (
              <section className="photo-tour-category" key={category} aria-labelledby={`category-${category}`}>
                <h2 className="photo-tour-category-title" id={`category-${category}`}>
                  {category}
                </h2>
                <div className="photo-tour-grid">
                  {images.map((img) => {
                    const globalIndex = galleryImages.findIndex((item) => item.id === img.id);
                    return (
                      <figure
                        className="photo-tour-item"
                        key={img.id}
                        role="button"
                        tabIndex={0}
                        aria-label={`View photo: ${img.alt}`}
                        onClick={() => onImageClick?.(globalIndex)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            onImageClick?.(globalIndex);
                          }
                        }}
                      >
                        <img src={img.src} alt={img.alt} loading="lazy" />
                        <figcaption className="photo-tour-caption">{img.alt}</figcaption>
                      </figure>
                    );
                  })}
                </div>
              </section>
            );
          })}
        </div>
      </main>
    </div>
  );
}

