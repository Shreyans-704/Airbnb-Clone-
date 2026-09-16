import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { nearbyListings } from '../../data/nearbyListings';
import './NearbyListings.css';

export default function NearbyListings() {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(nearbyListings.length / itemsPerPage);

  const currentItems = nearbyListings.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const handlePrev = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1));
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <section className="nearby-section" aria-labelledby="nearby-heading">
      <div className="nearby-header">
        <h2 className="nearby-heading" id="nearby-heading">More stays nearby</h2>
        <div className="nearby-nav">
          <span className="nearby-page-indicator">
            {currentPage + 1} / {totalPages}
          </span>
          <div className="nearby-nav-buttons">
            <button
              className="nearby-nav-btn"
              onClick={handlePrev}
              disabled={currentPage === 0}
              type="button"
              aria-label="Previous stays"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              className="nearby-nav-btn"
              onClick={handleNext}
              disabled={currentPage >= totalPages - 1}
              type="button"
              aria-label="Next stays"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>

      <div className="nearby-grid">
        {currentItems.map((item) => (
          <div className="nearby-card" key={item.id}>
            <div className="nearby-img-wrapper">
              <img src={item.image} alt={item.title} className="nearby-img" loading="lazy" />
            </div>
            <div className="nearby-content">
              <h3 className="nearby-title">{item.title}</h3>
              <div className="nearby-meta">
                <span className="nearby-price">{formatPrice(item.price)}</span>
                <span className="nearby-rating">
                  <Star size={12} fill="#000" stroke="#000" style={{ display: 'inline', verticalAlign: '-1px' }} /> {item.rating.toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
