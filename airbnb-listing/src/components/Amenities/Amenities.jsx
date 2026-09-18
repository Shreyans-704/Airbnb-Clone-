import {
  UtensilsCrossed, Wifi, Laptop, Car, Waves, Bath, PawPrint,
  Camera, ShieldAlert
} from 'lucide-react';
import { amenitiesPreview, totalAmenityCount } from '../../data/amenities';
import './Amenities.css';

const iconComponents = {
  'utensils-crossed': UtensilsCrossed,
  'wifi': Wifi,
  'laptop': Laptop,
  'car': Car,
  'waves': Waves,
  'bath': Bath,
  'paw-print': PawPrint,
  'camera': Camera,
  'alarm-smoke': ShieldAlert,
};

export default function Amenities({ onShowAll }) {
  return (
    <section className="amenities" id="amenities" aria-labelledby="amenities-heading">
      <h2 className="amenities-heading" id="amenities-heading">What this place offers</h2>
      <div className="amenities-grid">
        {amenitiesPreview.map((amenity, index) => {
          const Icon = iconComponents[amenity.icon] || ShieldAlert;
          return (
            <div
              className={`amenity-item ${!amenity.available ? 'amenity-unavailable' : ''}`}
              key={index}
            >
              <span className="amenity-icon-wrap">
                <Icon size={24} strokeWidth={1.5} />
              </span>
              <span className={`amenity-name ${!amenity.available ? 'amenity-strikethrough' : ''}`}>
                {amenity.name}
              </span>
            </div>
          );
        })}
      </div>
      <button
        className="amenities-show-all"
        type="button"
        onClick={onShowAll}
        aria-haspopup="dialog"
      >
        Show all {totalAmenityCount} amenities
      </button>
    </section>
  );
}
