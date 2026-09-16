import { LayoutGrid } from 'lucide-react';
import { galleryImages } from '../../data/gallery';
import './HeroGallery.css';

export default function HeroGallery({ onShowAllPhotos, onImageClick }) {
  return (
    <section className="hero-gallery" id="photos" aria-label="Property photos">
      <div className="gallery-grid">
        {/* Large left image */}
        <button
          className="gallery-item gallery-main"
          onClick={() => onImageClick?.(0)}
          type="button"
          aria-label={`View photo: ${galleryImages[0].alt}`}
        >
          <img
            src={galleryImages[0].src}
            alt={galleryImages[0].alt}
            loading="eager"
          />
        </button>

        {/* Top-right images */}
        <button
          className="gallery-item gallery-tr1"
          onClick={() => onImageClick?.(1)}
          type="button"
          aria-label={`View photo: ${galleryImages[1].alt}`}
        >
          <img
            src={galleryImages[1].src}
            alt={galleryImages[1].alt}
            loading="eager"
          />
        </button>
        <button
          className="gallery-item gallery-tr2"
          onClick={() => onImageClick?.(2)}
          type="button"
          aria-label={`View photo: ${galleryImages[2].alt}`}
        >
          <img
            src={galleryImages[2].src}
            alt={galleryImages[2].alt}
            loading="eager"
          />
        </button>

        {/* Bottom-right images */}
        <button
          className="gallery-item gallery-br1"
          onClick={() => onImageClick?.(3)}
          type="button"
          aria-label={`View photo: ${galleryImages[3].alt}`}
        >
          <img
            src={galleryImages[3].src}
            alt={galleryImages[3].alt}
            loading="lazy"
          />
        </button>
        <div
          className="gallery-item gallery-br2"
          onClick={() => onImageClick?.(4)}
          role="button"
          tabIndex={0}
          aria-label={`View photo: ${galleryImages[4].alt}`}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              onImageClick?.(4);
            }
          }}
        >
          <img
            src={galleryImages[4].src}
            alt={galleryImages[4].alt}
            loading="lazy"
          />
          <button
            className="show-all-btn"
            onClick={(e) => {
              e.stopPropagation();
              onShowAllPhotos?.();
            }}
            type="button"
          >
            <LayoutGrid size={16} strokeWidth={2} />
            <span>Show all photos</span>
          </button>
        </div>
      </div>
    </section>
  );
}
