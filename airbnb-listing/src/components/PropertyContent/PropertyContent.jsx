import { property } from '../../data/property';
import GuestFavourite from '../GuestFavourite/GuestFavourite';
import { Home, Snowflake, KeyRound } from 'lucide-react';
import './PropertyContent.css';

const iconMap = {
  home: Home,
  snowflake: Snowflake,
  key: KeyRound,
};

export default function PropertyContent() {
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
          const IconComponent = iconMap[highlight.icon] || Home;
          return (
            <div className="highlight-item" key={index}>
              <div className="highlight-icon">
                <IconComponent size={24} strokeWidth={1.5} />
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
        <div className="description-text">
          <p>{property.description}</p>
        </div>
        <button className="show-more-btn" type="button">
          Show more <span aria-hidden="true">›</span>
        </button>
      </section>
    </div>
  );
}
