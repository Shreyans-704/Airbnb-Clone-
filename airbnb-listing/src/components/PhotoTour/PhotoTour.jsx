import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, Share, Heart, Check } from 'lucide-react';
import { galleryImages } from '../../data/gallery';
import { useBodyScrollLock } from '../../hooks/useBodyScrollLock';
import './PhotoTour.css';

const categoryFeatures = {
  'Living Area': 'Sofa · Air conditioning · Ceiling fan · TV',
  'Outdoor & Patio': 'Outdoor patio · Stone tiles · Ambient wall lamps · Lounge seating',
  'Jacuzzi & Wellness': 'Ceiling fan · Hot tub · Private deck',
  'Bedroom': '1 double bed · Air conditioning · Wooden floor · Wardrobe',
  'Bathroom': 'Ensuite bathroom · Rain shower · Vanity mirror · Hot water',
  'Kitchen & Dining': 'Full kitchen · Refrigerator · Microwave · Electric kettle',
  'Pool & Amenities': 'Swimming pool · Tropical palm trees · Sun loungers',
  'Exterior': 'Amor De Goa complex · Tropical landscaping · Gated security',
  'Neighborhood': 'Candolim beach · Walking distance to cafés · Sunset views',
};

export default function PhotoTour({ isOpen, onClose, onImageClick, isViewerOpen = false }) {
  useBodyScrollLock(isOpen);

  const [isSaved, setIsSaved] = useState(false);
  const [copied, setCopied] = useState(false);
  const [activeCategory, setActiveCategory] = useState(galleryImages[0]?.category || '');
  const backBtnRef = useRef(null);
  const wasOpenRef = useRef(false);
  const scrollContainerRef = useRef(null);

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

  const handleScrollToCategory = (category) => {
    setActiveCategory(category);
    const id = `tour-cat-${category.replace(/\s+/g, '-').toLowerCase()}`;
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  if (!isOpen) return null;

  // Distinct categories in gallery
  const categories = Array.from(new Set(galleryImages.map((img) => img.category)));

  return (
    <div
      ref={scrollContainerRef}
      className="photo-tour-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="Photo tour"
    >
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

        <h1 className="photo-tour-header-title">Photo tour</h1>

        <div className="photo-tour-actions">
          <button
            className="photo-tour-action-btn"
            type="button"
            onClick={handleShare}
            aria-label="Share listing"
          >
            {copied ? <Check size={16} color="var(--color-success, #008A05)" /> : <Share size={16} />}
            <span className="photo-tour-action-text">{copied ? 'Link copied!' : 'Share'}</span>
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
            <span className="photo-tour-action-text">{isSaved ? 'Saved' : 'Save'}</span>
          </button>
        </div>
      </header>

      {/* Main content */}
      <main className="photo-tour-content">
        <div className="photo-tour-inner">
          {/* Top thumbnail strip */}
          <nav className="photo-tour-nav-strip" aria-label="Photo categories">
            {categories.map((category) => {
              const firstImg = galleryImages.find((img) => img.category === category);
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  className={`photo-tour-thumb-btn ${isActive ? 'is-active' : ''}`}
                  onClick={() => handleScrollToCategory(category)}
                  aria-label={`Jump to ${category}`}
                >
                  <div className="photo-tour-thumb-img-wrap">
                    <img src={firstImg?.src} alt="" loading="lazy" />
                  </div>
                  <span className="photo-tour-thumb-label">{category}</span>
                </button>
              );
            })}
          </nav>

          {/* Room sections with left details & right photo grid */}
          <div className="photo-tour-rooms">
            {categories.map((category) => {
              const images = galleryImages.filter((img) => img.category === category);
              const catId = `tour-cat-${category.replace(/\s+/g, '-').toLowerCase()}`;

              return (
                <section
                  className="photo-tour-room-section"
                  key={category}
                  id={catId}
                  aria-labelledby={`${catId}-title`}
                >
                  <div className="photo-tour-room-info">
                    <h2 className="photo-tour-room-title" id={`${catId}-title`}>
                      {category}
                    </h2>
                    {categoryFeatures[category] && (
                      <p className="photo-tour-room-features">{categoryFeatures[category]}</p>
                    )}
                  </div>

                  <div className={`photo-tour-room-gallery count-${Math.min(images.length, 3)}`}>
                    {images.map((img, idx) => {
                      const globalIndex = galleryImages.findIndex((item) => item.id === img.id);
                      const isHero = idx === 0 && images.length > 1;

                      return (
                        <div
                          className={`photo-tour-photo-wrap ${isHero ? 'is-hero' : ''}`}
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
                        </div>
                      );
                    })}
                  </div>
                </section>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}
