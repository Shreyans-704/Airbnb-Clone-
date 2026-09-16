import { useState } from 'react';
import { ChevronDown, Flag, Plus, Minus, Check } from 'lucide-react';
import { property } from '../../data/property';
import './BookingCard.css';

export default function BookingCard() {
  const [isClaimed, setIsClaimed] = useState(false);
  const [isReserved, setIsReserved] = useState(false);
  const [isGuestOpen, setIsGuestOpen] = useState(false);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(1);

  const totalGuests = adults + children;

  const priceFormatted = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(property.totalPrice);

  const scrollToCalendar = () => {
    const el = document.getElementById('calendar');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const handleReserve = () => {
    setIsReserved(true);
    setTimeout(() => setIsReserved(false), 2500);
  };

  return (
    <aside className="booking-card" id="booking-card-widget" aria-label="Booking information">
      {/* Coupon Banner */}
      <div className="coupon-banner">
        <svg className="coupon-icon" width="22" height="22" viewBox="0 0 24 24" fill="#008a05" xmlns="http://www.w3.org/2000/svg">
          <path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z"/>
        </svg>
        <div className="coupon-text">
          <span>Get 10% off your next stay.</span>
          <a href="#" className="coupon-link" onClick={(e) => e.preventDefault()}>Terms apply</a>
        </div>
        <button
          className={`coupon-claim ${isClaimed ? 'claimed' : ''}`}
          type="button"
          onClick={() => setIsClaimed((prev) => !prev)}
        >
          {isClaimed ? 'Claimed ✓' : 'Claim'}
        </button>
      </div>

      {/* Price Card */}
      <div className="booking-price-card">
        <div className="booking-price-row">
          <span className="booking-price">{priceFormatted}</span>
          <span className="booking-price-detail">for {property.nights} nights</span>
        </div>

        {/* Date Picker */}
        <div
          className="booking-dates"
          onClick={scrollToCalendar}
          role="button"
          tabIndex={0}
          aria-label="Change check-in and checkout dates"
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              scrollToCalendar();
            }
          }}
        >
          <div className="booking-date-field booking-date-checkin">
            <span className="booking-date-label">CHECK-IN</span>
            <span className="booking-date-value">{property.checkIn}</span>
          </div>
          <div className="booking-date-field booking-date-checkout">
            <span className="booking-date-label">CHECKOUT</span>
            <span className="booking-date-value">{property.checkOut}</span>
          </div>
        </div>

        {/* Guests Field & Dropdown */}
        <div className="booking-guests-container">
          <div
            className="booking-guests-field"
            onClick={() => setIsGuestOpen((prev) => !prev)}
            role="button"
            tabIndex={0}
            aria-expanded={isGuestOpen}
            aria-label="Choose guests"
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setIsGuestOpen((prev) => !prev);
              }
            }}
          >
            <div className="booking-guests-left">
              <span className="booking-date-label">GUESTS</span>
              <span className="booking-date-value">{totalGuests} {totalGuests === 1 ? 'guest' : 'guests'}</span>
            </div>
            <ChevronDown size={16} className={`booking-guests-chevron ${isGuestOpen ? 'open' : ''}`} />
          </div>

          {isGuestOpen && (
            <div className="booking-guests-dropdown">
              <div className="guest-row">
                <div>
                  <span className="guest-type">Adults</span>
                  <span className="guest-age">Age 13+</span>
                </div>
                <div className="guest-stepper">
                  <button
                    type="button"
                    disabled={adults <= 1}
                    onClick={() => setAdults((prev) => Math.max(1, prev - 1))}
                    aria-label="Decrease adults"
                  >
                    <Minus size={14} />
                  </button>
                  <span className="guest-count">{adults}</span>
                  <button
                    type="button"
                    disabled={totalGuests >= 3}
                    onClick={() => setAdults((prev) => Math.min(3 - children, prev + 1))}
                    aria-label="Increase adults"
                  >
                    <Plus size={14} />
                  </button>
                </div>
              </div>

              <div className="guest-row">
                <div>
                  <span className="guest-type">Children</span>
                  <span className="guest-age">Ages 2–12</span>
                </div>
                <div className="guest-stepper">
                  <button
                    type="button"
                    disabled={children <= 0}
                    onClick={() => setChildren((prev) => Math.max(0, prev - 1))}
                    aria-label="Decrease children"
                  >
                    <Minus size={14} />
                  </button>
                  <span className="guest-count">{children}</span>
                  <button
                    type="button"
                    disabled={totalGuests >= 3}
                    onClick={() => setChildren((prev) => Math.min(3 - adults, prev + 1))}
                    aria-label="Increase children"
                  >
                    <Plus size={14} />
                  </button>
                </div>
              </div>

              <p className="guest-notice">This place has a maximum of 3 guests.</p>
              <button
                type="button"
                className="guest-close-btn"
                onClick={() => setIsGuestOpen(false)}
              >
                Close
              </button>
            </div>
          )}
        </div>

        {/* Cancellation */}
        <p className="booking-cancellation">
          Free cancellation before <strong>{property.cancellationDate}</strong>
        </p>

        {/* Reserve Button */}
        <button
          className={`booking-reserve-btn ${isReserved ? 'reserved' : ''}`}
          type="button"
          onClick={handleReserve}
        >
          {isReserved ? (
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
              <Check size={18} strokeWidth={2.5} /> Dates reserved!
            </span>
          ) : (
            'Reserve'
          )}
        </button>

        <p className="booking-charge-notice">You won&apos;t be charged yet</p>

        {/* Report */}
        <button className="booking-report" type="button">
          <Flag size={14} />
          <span>Report this listing</span>
        </button>
      </div>
    </aside>
  );
}
