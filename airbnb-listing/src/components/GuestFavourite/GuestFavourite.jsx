import { property } from '../../data/property';
import { Star } from 'lucide-react';
import './GuestFavourite.css';

const LaurelLeft = () => (
  <svg width="22" height="34" viewBox="0 0 22 34" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 32C14 26 12 18 19 6" stroke="#222222" strokeWidth="1.8" strokeLinecap="round"/>
    <path d="M17 10C13 11 9 10 9 7C9 5 12 5 15 7" stroke="#222222" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M15 16C11 17 7 16 7 13C7 11 10 11 13 13" stroke="#222222" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14 23C10 24 6 22 6 19C6 17 9 17 12 20" stroke="#222222" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M15 29C11 30 7 28 8 25C9 23 12 24 14 27" stroke="#222222" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const LaurelRight = () => (
  <svg width="22" height="34" viewBox="0 0 22 34" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: 'scaleX(-1)' }}>
    <path d="M18 32C14 26 12 18 19 6" stroke="#222222" strokeWidth="1.8" strokeLinecap="round"/>
    <path d="M17 10C13 11 9 10 9 7C9 5 12 5 15 7" stroke="#222222" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M15 16C11 17 7 16 7 13C7 11 10 11 13 13" stroke="#222222" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14 23C10 24 6 22 6 19C6 17 9 17 12 20" stroke="#222222" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M15 29C11 30 7 28 8 25C9 23 12 24 14 27" stroke="#222222" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function GuestFavourite() {
  return (
    <div className="guest-favourite">
      <div className="gf-left">
        <div className="gf-badge">
          <LaurelLeft />
          <div className="gf-badge-text">
            <span className="gf-label-top">Guest</span>
            <span className="gf-label-bottom">favourite</span>
          </div>
          <LaurelRight />
        </div>
        <p className="gf-description">
          One of the most loved homes on Airbnb, according to guests
        </p>
      </div>
      <div className="gf-right">
        <div className="gf-rating">
          <span className="gf-rating-number">{property.rating}</span>
          <div className="gf-stars">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} size={11} fill="#000" stroke="#000" />
            ))}
          </div>
        </div>
        <div className="gf-divider" aria-hidden="true"></div>
        <div className="gf-reviews">
          <span className="gf-reviews-number">{property.reviewCount}</span>
          <span className="gf-reviews-label">Reviews</span>
        </div>
      </div>
    </div>
  );
}
