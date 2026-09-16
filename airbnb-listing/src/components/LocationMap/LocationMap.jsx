import { Plus, Minus, Search } from 'lucide-react';
import { property } from '../../data/property';
import './LocationMap.css';

export default function LocationMap() {
  return (
    <section className="location" id="location" aria-labelledby="location-heading">
      <h2 className="location-heading" id="location-heading">{property.locationFull}</h2>

      {/* SVG Map Approximation */}
      <div className="map-container" role="img" aria-label="Map showing property location in Candolim, Goa">
        <svg className="map-svg" viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
          {/* Water background */}
          <rect width="800" height="400" fill="#D4E6F1" />

          {/* Land masses */}
          <path d="M0,0 L800,0 L800,50 Q700,80 600,60 Q500,40 400,70 Q300,100 200,80 Q100,60 0,90 Z" fill="#E8E8E0" />
          <path d="M0,400 L800,400 L800,120 Q700,100 600,140 Q500,180 400,160 Q350,150 300,170 Q200,200 100,180 Q50,170 0,200 Z" fill="#E8E8E0" />
          <path d="M200,0 L400,0 L400,400 L200,400 Q220,350 240,300 Q260,250 250,200 Q240,150 220,100 Q200,50 200,0 Z" fill="#E8E8E0" />

          {/* Road grid */}
          <g stroke="#D5D5CA" strokeWidth="1" opacity="0.6">
            <line x1="150" y1="0" x2="150" y2="400" />
            <line x1="300" y1="0" x2="300" y2="400" />
            <line x1="450" y1="0" x2="450" y2="400" />
            <line x1="600" y1="0" x2="600" y2="400" />
            <line x1="0" y1="100" x2="800" y2="100" />
            <line x1="0" y1="200" x2="800" y2="200" />
            <line x1="0" y1="300" x2="800" y2="300" />
          </g>

          {/* Approximate area circle */}
          <circle cx="400" cy="200" r="80" fill="rgba(255, 56, 92, 0.1)" stroke="rgba(255, 56, 92, 0.3)" strokeWidth="1" />

          {/* Home marker */}
          <g transform="translate(400, 200)">
            <circle r="8" fill="#FF385C" />
            <circle r="4" fill="white" />
          </g>

          {/* Place labels */}
          <text x="350" y="130" fill="#666" fontSize="11" fontFamily="Inter, sans-serif">Candolim</text>
          <text x="200" y="250" fill="#888" fontSize="10" fontFamily="Inter, sans-serif">Calangute</text>
          <text x="550" y="170" fill="#888" fontSize="10" fontFamily="Inter, sans-serif">Aguada</text>
          <text x="150" y="350" fill="#aaa" fontSize="9" fontFamily="Inter, sans-serif">Arabian Sea</text>
        </svg>

        {/* Map Controls */}
        <div className="map-controls">
          <button className="map-search-btn" type="button" aria-label="Search map">
            <Search size={14} />
          </button>
          <div className="map-zoom">
            <button className="map-zoom-btn" type="button" aria-label="Zoom in">
              <Plus size={14} />
            </button>
            <button className="map-zoom-btn" type="button" aria-label="Zoom out">
              <Minus size={14} />
            </button>
          </div>
        </div>
      </div>

      <p className="location-notice">
        Exact location will be provided after booking.
      </p>

      <div className="location-description">
        <h3 className="location-subtitle">Neighbourhood highlights</h3>
        <p className="location-text">
          Located in the heart of Candolim, this property offers easy access to
          Candolim Beach, popular restaurants, cafés, and vibrant nightlife.
          The area is known for its beautiful coastline and relaxed atmosphere,
          making it a perfect base for exploring North Goa.
        </p>
      </div>
    </section>
  );
}
