import { useState, useEffect } from 'react';
import { Star } from 'lucide-react';
import { property } from '../../data/property';
import './StickyNavigation.css';

const NAV_ITEMS = [
  { id: 'photos', label: 'Photos' },
  { id: 'amenities', label: 'Amenities' },
  { id: 'reviews', label: 'Reviews' },
  { id: 'location', label: 'Location' },
];

export default function StickyNavigation({ activeSection }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky navigation when scrolled past hero section (~420px)
      const scrolled = window.scrollY > 420;
      setIsVisible(scrolled);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navOffset,
        behavior: 'smooth',
      });
    }
  };

  const formattedPrice = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(property.totalPrice);

  return (
    <nav
      className={`sticky-nav ${isVisible ? 'visible' : ''}`}
      aria-label="In-page navigation"
      role="navigation"
    >
      <div className="sticky-nav-inner">
        {/* Left: Navigation links */}
        <div className="sticky-nav-links">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              className={`sticky-nav-item ${activeSection === item.id ? 'active' : ''}`}
              onClick={() => scrollToSection(item.id)}
              type="button"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Right: Price, Rating & Reserve */}
        <div className="sticky-nav-right">
          <div className="sticky-nav-price-block">
            <div className="sticky-nav-price-line">
              <span className="sticky-nav-price">{formattedPrice}</span>
              <span className="sticky-nav-nights">for {property.nights} nights</span>
            </div>
            <div className="sticky-nav-rating-line">
              <Star size={11} fill="#000" stroke="#000" style={{ display: 'inline', verticalAlign: '-1px' }} />
              <span className="sticky-nav-score"> {property.rating}</span>
              <span className="sticky-nav-dot">·</span>
              <span className="sticky-nav-review-count">{property.reviewCount} reviews</span>
            </div>
          </div>
          <button
            className="sticky-nav-reserve-btn"
            type="button"
            onClick={() => {
              const bookingEl = document.querySelector('.booking-card');
              if (bookingEl) {
                bookingEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
              }
            }}
          >
            Reserve
          </button>
        </div>
      </div>
    </nav>
  );
}
