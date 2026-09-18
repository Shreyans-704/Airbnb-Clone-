import { useState } from 'react';
import { property } from '../../data/property';
import GuestFavourite from '../GuestFavourite/GuestFavourite';
import './PropertyContent.css';

const OutdoorIcon = ({ size = 26, strokeWidth = 1.5, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...props}
  >
    <line x1="3" y1="18" x2="29" y2="18" />
    <path d="M5.5 18v7a1 1 0 0 0 1 1h19a1 1 0 0 0 1-1v-7" />
    <path d="M13.5 18c0-2.5.9-4.5 2.5-4.5s2.5 2 2.5 4.5" />
    <path d="M8.5 18c0-3.5.5-6.5 2.5-9.5 1 2 2 2.5 3 2.5.8-2 1.2-5 2-8 1.5 2.5 4 5 5 7.5.8 2 1.5 4.5 1.5 7.5" />
  </svg>
);

const CoolIcon = ({ size = 26, strokeWidth = 1.5, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...props}
  >
    <circle cx="16" cy="16" r="2.5" />
    {[0, 90, 180, 270].map((deg) => (
      <path
        key={deg}
        d="M14.5 13.8C13 9 10.5 6.5 12.5 3.5c2.5-1.5 5.5.5 5 5-.3 2.5-1.5 4.3-2 5.3"
        transform={`rotate(${deg} 16 16)`}
      />
    ))}
  </svg>
);

const SelfCheckInIcon = ({ size = 26, strokeWidth = 1.5, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...props}
  >
    <line x1="3" y1="28" x2="29" y2="28" />
    <path d="M7 28V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v22" />
    <line x1="21" y1="4" x2="21" y2="28" />
    <circle cx="17.5" cy="17" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const iconMap = {
  home: OutdoorIcon,
  snowflake: CoolIcon,
  key: SelfCheckInIcon,
};

export default function PropertyContent() {
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  return (
    <div className="property-content">
      {/* Property Overview */}
      <section className="property-overview">
        <h2 className="overview-title">
          {property.type} in {property.location}
        </h2>
        <p className="overview-details">
          {property.guests} guests · {property.bedrooms} bedroom · {property.beds} bed · {property.bathrooms} bathroom
        </p>
      </section>

      {/* Guest Favourite Badge */}
      <GuestFavourite />

      {/* Host Summary */}
      <section className="host-summary">
        <div className="host-avatar-container">
          <div className="host-avatar">
            <span className="host-avatar-letter">MIRASHYA</span>
          </div>
          <span className="host-badge" aria-label="Verified host">✓</span>
        </div>
        <div className="host-info">
          <h3 className="host-name">Hosted by {property.title.includes('Mirashya') ? 'Mirashya Homes' : 'Host'}</h3>
          <p className="host-tenure">2 years hosting</p>
        </div>
      </section>

      <hr className="section-divider" />

      {/* Highlights */}
      <section className="highlights">
        {property.highlights.map((highlight, index) => {
          const IconComponent = iconMap[highlight.icon] || OutdoorIcon;
          return (
            <div className="highlight-item" key={index}>
              <div className="highlight-icon">
                <IconComponent size={26} strokeWidth={1.5} />
              </div>
              <div className="highlight-text">
                <h4 className="highlight-title">{highlight.title}</h4>
                <p className="highlight-desc">{highlight.description}</p>
              </div>
            </div>
          );
        })}
      </section>

      <hr className="section-divider" />

      {/* Description */}
      <section className="description">
        <div className="translated-notice">
          <p>
            {property.translatedNotice} <button className="show-original-btn" type="button"><strong>Show original</strong></button>
          </p>
        </div>
        <div className={`description-text ${isDescriptionExpanded ? 'expanded' : ''}`}>
          <p>{property.description}</p>
        </div>
        <button
          className="show-more-btn"
          type="button"
          aria-expanded={isDescriptionExpanded}
          onClick={() => setIsDescriptionExpanded((prev) => !prev)}
        >
          <span>{isDescriptionExpanded ? 'Show less' : 'Show more'}</span> <span className="show-more-arrow" aria-hidden="true">›</span>
        </button>
      </section>
    </div>
  );
}
