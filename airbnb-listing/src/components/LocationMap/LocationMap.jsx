import { Plus, Minus, Search } from 'lucide-react';
import { property } from '../../data/property';
import './LocationMap.css';

export default function LocationMap() {
  return (
    <section className="location" id="location" aria-labelledby="location-heading">
      <h2 className="location-heading" id="location-heading">Where you'll be</h2>
      <p className="location-subheading">{property.locationFull}</p>

      {/* SVG Map Approximation */}
      <div className="map-container" role="img" aria-label="Map showing property location in Candolim, Goa">
        <svg className="map-svg" viewBox="0 0 960 480" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
          {/* Water background — light blue */}
          <rect width="960" height="480" fill="#acd3e6" />

          {/* Land — pale green, diagonal shoreline from top-right toward bottom-left */}
          <path d="M380,0 L960,0 L960,480 L220,480 Z" fill="#e9f0e4" />

          {/* Grid lines on land only (clipped) */}
          <clipPath id="land-clip">
            <path d="M380,0 L960,0 L960,480 L220,480 Z" />
          </clipPath>
          <g stroke="#d2d9c8" strokeWidth="0.8" opacity="0.7" clipPath="url(#land-clip)">
            <line x1="0"   y1="0"   x2="0"   y2="480" />
            <line x1="120" y1="0"   x2="120" y2="480" />
            <line x1="240" y1="0"   x2="240" y2="480" />
            <line x1="360" y1="0"   x2="360" y2="480" />
            <line x1="480" y1="0"   x2="480" y2="480" />
            <line x1="600" y1="0"   x2="600" y2="480" />
            <line x1="720" y1="0"   x2="720" y2="480" />
            <line x1="840" y1="0"   x2="840" y2="480" />
            <line x1="960" y1="0"   x2="960" y2="480" />
            <line x1="0"   y1="0"   x2="960" y2="0"   />
            <line x1="0"   y1="96"  x2="960" y2="96"  />
            <line x1="0"   y1="192" x2="960" y2="192" />
            <line x1="0"   y1="288" x2="960" y2="288" />
            <line x1="0"   y1="384" x2="960" y2="384" />
            <line x1="0"   y1="480" x2="960" y2="480" />
          </g>

          {/* Translucent green circle 1 — left side, overlapping shoreline */}
          <circle cx="300" cy="195" r="75" fill="rgba(180, 210, 165, 0.45)" />

          {/* Translucent green circle 2 — right side, on land */}
          <circle cx="672" cy="283" r="75" fill="rgba(180, 210, 165, 0.45)" />

          {/* Home marker — black circle with white house icon */}
          <g transform="translate(468, 238)">
            <circle r="22" fill="#222222" />
            {/* House icon in white */}
            <path
              d="M0,-10 L10,0 L10,9 L6,9 L6,3 L-6,3 L-6,9 L-10,9 L-10,0 Z"
              fill="white"
              strokeWidth="0"
            />
            <rect x="-3" y="3" width="6" height="6" fill="white" />
          </g>
        </svg>

        {/* Search button — top LEFT */}
        <button className="map-search-btn" type="button" aria-label="Search map">
          <Search size={14} />
        </button>

        {/* Zoom controls — top RIGHT */}
        <div className="map-zoom">
          <button className="map-zoom-btn" type="button" aria-label="Zoom in">
            <Plus size={14} />
          </button>
          <button className="map-zoom-btn" type="button" aria-label="Zoom out">
            <Minus size={14} />
          </button>
        </div>
      </div>

      <p className="location-notice">
        Exact location will be provided after booking.
      </p>

      <div className="location-description">
        <h3 className="location-subtitle">Neighbourhood highlights</h3>
        <p className="location-text">
          Located in the heart of Candolim, Amor de Goa offers a peaceful stay with easy access to beaches, cafés, and popular attractions.
        </p>
        <button className="location-show-more" type="button" onClick={(e) => e.preventDefault()}>
          Show more <span className="location-show-more-arrow">›</span>
        </button>
      </div>
    </section>
  );
}
