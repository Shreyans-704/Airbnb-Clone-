import { useState } from 'react';
import { Star } from 'lucide-react';
import { reviews, ratingCategories, overallRating, totalReviews, reviewTags } from '../../data/reviews';
import laurelLeft from '../../assets/laurel-left.png';
import laurelRight from '../../assets/laurel-right.png';
import './Reviews.css';

/* Category icons matching the reference — thin stroke outline style */
function CategoryIcon({ type }) {
  switch (type) {
    case 'cleanliness':
      /* Spray bottle — outline stroke */
      return (
        <svg viewBox="0 0 32 32" className="cat-icon" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M13 4h4v4h-4z"/>
          <path d="M17 6h5l1 3h-7z"/>
          <path d="M11 8h8v3l2 2v13a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V13l2-2V8z"/>
          <path d="M9 15h10"/>
          <circle cx="22" cy="7" r="1.5" fill="currentColor" stroke="none"/>
        </svg>
      );
    case 'accuracy':
      /* Circle with checkmark — outline stroke */
      return (
        <svg viewBox="0 0 32 32" className="cat-icon" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="16" cy="16" r="13"/>
          <polyline points="10 16.5 14 20.5 22 12.5"/>
        </svg>
      );
    case 'checkin':
      /* Magnifying glass with key/door — outline stroke */
      return (
        <svg viewBox="0 0 32 32" className="cat-icon" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="13" cy="18" r="6"/>
          <line x1="18" y1="23" x2="26" y2="29"/>
          <path d="M9 18h8M13 14v8" strokeWidth="1.5"/>
        </svg>
      );
    case 'communication':
      /* Speech bubble — outline stroke */
      return (
        <svg viewBox="0 0 32 32" className="cat-icon" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 5h22a2 2 0 0 1 2 2v15a2 2 0 0 1-2 2H10l-5 5V7a2 2 0 0 1 2-2z"/>
        </svg>
      );
    case 'location':
      /* Folded map — outline stroke */
      return (
        <svg viewBox="0 0 32 32" className="cat-icon" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="4 7 12 4 20 8 28 5 28 25 20 28 12 24 4 27"/>
          <line x1="12" y1="4" x2="12" y2="24"/>
          <line x1="20" y1="8" x2="20" y2="28"/>
        </svg>
      );
    case 'value':
      /* Price tag — outline stroke */
      return (
        <svg viewBox="0 0 32 32" className="cat-icon" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17.5 3H28v10.5L17.5 24a2 2 0 0 1-2.83 0l-6.67-6.67a2 2 0 0 1 0-2.83z"/>
          <circle cx="23" cy="9" r="2"/>
        </svg>
      );
    default:
      return null;
  }
}


/* Laurel flanking the 4.95 rating — matching the reference */
function LaurelLeft() {
  return (
    <img
      src={laurelLeft}
      alt=""
      className="reviews-laurel reviews-laurel-left"
      aria-hidden="true"
      draggable="false"
      width="70"
      height="126"
    />
  );
}

function LaurelRight() {
  return (
    <img
      src={laurelRight}
      alt=""
      className="reviews-laurel reviews-laurel-right"
      aria-hidden="true"
      draggable="false"
      width="70"
      height="126"
    />
  );
}

export default function Reviews() {
  const [expandedReviews, setExpandedReviews] = useState({});

  const toggleReview = (id) => {
    setExpandedReviews(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className="reviews" id="reviews" aria-labelledby="reviews-heading">

      {/* ── Hero: 4.95 + Laurels ── */}
      <div className="reviews-hero">
        <div className="reviews-score-row">
          <LaurelLeft />
          <span className="reviews-score" id="reviews-heading">{overallRating}</span>
          <LaurelRight />
        </div>
        <p className="reviews-gf-label">Guest favourite</p>
        <p className="reviews-gf-desc">
          This home is a guest favourite based on ratings, reviews and reliability
        </p>
        <button className="reviews-how-link" type="button">How reviews work</button>
      </div>

      {/* ── Rating Breakdown Row ── */}
      <div className="reviews-breakdown">
        {/* Overall rating — bar chart */}
        <div className="breakdown-col breakdown-overall">
          <p className="breakdown-col-title">Overall rating</p>
          <div className="rating-bars-list">
            {[5, 4, 3, 2, 1].map((star) => {
              const count = star === 5 ? 17 : star === 4 ? 2 : 0;
              const pct = (count / totalReviews) * 100;
              return (
                <div className="rating-bar-row" key={star}>
                  <span className="rating-bar-label">{star}</span>
                  <div className="rating-bar-track">
                    <div className="rating-bar-fill" style={{ width: `${pct}%` }} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Category columns */}
        {ratingCategories.map((cat, i) => (
          <div className="breakdown-col breakdown-category" key={i}>
            <p className="breakdown-col-title">{cat.name}</p>
            <p className="breakdown-score">{cat.score.toFixed(1)}</p>
            <CategoryIcon type={cat.icon} />
          </div>
        ))}
      </div>

      {/* ── Review Tag Pills ── */}
      <div className="reviews-tags">
        {reviewTags.map((tag, i) => (
          <button className="review-tag" key={i} type="button">
            <span className="review-tag-emoji" aria-hidden="true">{tag.emoji}</span>
            <span className="review-tag-label">{tag.label}</span>
            <span className="review-tag-count">{tag.count}</span>
          </button>
        ))}
      </div>

      {/* ── Review Cards Grid ── */}
      <div className="reviews-grid">
        {reviews.map((review) => {
          const isExpanded = expandedReviews[review.id];
          const needsToggle = review.showMore;
          return (
            <article className="review-card" key={review.id}>
              {/* Avatar + Name + Duration */}
              <div className="review-header">
                <div className="review-avatar-wrap">
                  {review.avatar ? (
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className="review-avatar-img"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.nextSibling.style.display = 'flex';
                      }}
                    />
                  ) : null}
                  <div
                    className="review-avatar-letter"
                    style={{ display: review.avatar ? 'none' : 'flex' }}
                  >
                    {review.name[0]}
                  </div>
                </div>
                <div className="review-meta">
                  <span className="review-name">{review.name}</span>
                  <span className="review-duration">{review.airbnbDuration}</span>
                </div>
              </div>

              {/* Stars + Date */}
              <div className="review-rating-date">
                <div className="review-stars">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star
                      key={s}
                      size={10}
                      fill={s <= review.rating ? '#000' : 'none'}
                      stroke="#000"
                    />
                  ))}
                </div>
                <span className="review-dot">·</span>
                <span className="review-date">{review.date}</span>
              </div>

              {/* Review text */}
              <p className={`review-text${isExpanded ? ' expanded' : ''}`}>{review.text}</p>

              {/* Show more / Show less */}
              {needsToggle && (
                <button
                  className="review-show-more"
                  type="button"
                  onClick={() => toggleReview(review.id)}
                >
                  {isExpanded ? 'Show less' : 'Show more'}
                </button>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}
