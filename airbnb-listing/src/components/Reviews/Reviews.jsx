import { Star } from 'lucide-react';
import { reviews, ratingCategories, overallRating, totalReviews, reviewTags } from '../../data/reviews';
import './Reviews.css';

export default function Reviews() {
  return (
    <section className="reviews" id="reviews" aria-labelledby="reviews-heading">
      {/* Rating Overview */}
      <div className="reviews-overview">
        <div className="reviews-score-section">
          <div className="reviews-big-star">
            <Star size={18} fill="#000" stroke="#000" />
          </div>
          <span className="reviews-score">{overallRating}</span>
        </div>
        <div className="reviews-gf-badge">
          <span className="reviews-gf-label">Guest favourite</span>
          <p className="reviews-gf-desc">
            This home is a guest favourite based on ratings, reviews, and reliability
          </p>
        </div>
        <div className="reviews-count-section">
          <span className="reviews-count-number">{totalReviews}</span>
          <span className="reviews-count-label">Reviews</span>
        </div>
      </div>

      {/* Rating Bars */}
      <div className="reviews-rating-bars">
        <h3 className="reviews-section-title">Overall rating</h3>
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

      {/* Category Ratings */}
      <div className="reviews-categories">
        {ratingCategories.map((cat, i) => (
          <div className="reviews-category" key={i}>
            <div className="reviews-cat-header">
              <span className="reviews-cat-name">{cat.name}</span>
              <span className="reviews-cat-score">{cat.score.toFixed(1)}</span>
            </div>
            <div className="reviews-cat-bar-track">
              <div
                className="reviews-cat-bar-fill"
                style={{ width: `${(cat.score / 5) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Review Tags */}
      <div className="reviews-tags">
        {reviewTags.map((tag, i) => (
          <button className="review-tag" key={i} type="button">{tag}</button>
        ))}
      </div>

      {/* Review Cards */}
      <div className="reviews-grid">
        {reviews.map((review) => (
          <article className="review-card" key={review.id}>
            <div className="review-header">
              <div className="review-avatar">
                {review.name[0]}
              </div>
              <div className="review-meta">
                <span className="review-name">{review.name}</span>
                <span className="review-location">{review.location}</span>
              </div>
            </div>
            <div className="review-rating-date">
              <div className="review-stars">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} size={10} fill={s <= review.rating ? '#000' : 'none'} stroke="#000" />
                ))}
              </div>
              <span className="review-dot">·</span>
              <span className="review-date">{review.date}</span>
            </div>
            <p className="review-text">{review.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
