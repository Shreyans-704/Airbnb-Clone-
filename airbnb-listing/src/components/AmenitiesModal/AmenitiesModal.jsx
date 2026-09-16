import { useEffect, useRef, useCallback } from 'react';
import { X, Wind, Droplets, Thermometer, Bath, Bed, Shirt,
  Tv, BookOpen, Monitor, Snowflake, Fan, ShieldAlert, Flame, Cross,
  Camera, Wifi, Laptop, UtensilsCrossed, Utensils, Coffee, Wine,
  Car, Waves, Dumbbell, ArrowUpDown, PawPrint, Luggage, Calendar,
  KeyRound, User, Umbrella, Building, Fence, Armchair, CookingPot,
  CupSoda, Sandwich, Microwave, ChefHat
} from 'lucide-react';
import { amenitiesAll } from '../../data/amenities';
import { useBodyScrollLock } from '../../hooks/useBodyScrollLock';
import './AmenitiesModal.css';

const iconMap = {
  'wind': Wind, 'spray-can': Wind, 'droplets': Droplets, 'thermometer': Thermometer,
  'bath': Bath, 'washing-machine': Waves, 'hanger': Shirt, 'bed': Bed,
  'pillow': Bed, 'iron': Thermometer, 'shirt': Shirt, 'tv': Tv,
  'book-open': BookOpen, 'monitor': Monitor, 'snowflake': Snowflake,
  'fan': Fan, 'alarm-smoke': ShieldAlert, 'flame': Flame, 'cross': Cross,
  'camera': Camera, 'wifi': Wifi, 'laptop': Laptop,
  'utensils-crossed': UtensilsCrossed, 'utensils': Utensils, 'coffee': Coffee,
  'wine': Wine, 'car': Car, 'waves': Waves, 'dumbbell': Dumbbell,
  'arrow-up-down': ArrowUpDown, 'paw-print': PawPrint, 'luggage': Luggage,
  'calendar': Calendar, 'key': KeyRound, 'user': User,
  'umbrella': Umbrella, 'building': Building, 'fence': Fence,
  'armchair': Armchair, 'cooking-pot': CookingPot, 'cup-soda': CupSoda,
  'sandwich': Sandwich, 'microwave': Microwave, 'chef-hat': ChefHat,
};

export default function AmenitiesModal({ isOpen, onClose }) {
  const modalRef = useRef(null);
  const closeButtonRef = useRef(null);
  const previousFocusRef = useRef(null);

  useBodyScrollLock(isOpen);

  // Save and restore focus
  useEffect(() => {
    if (isOpen) {
      previousFocusRef.current = document.activeElement;
      setTimeout(() => closeButtonRef.current?.focus(), 50);
    } else if (previousFocusRef.current) {
      previousFocusRef.current.focus();
    }
  }, [isOpen]);

  // Escape key handler
  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape') {
      onClose();
    }
    // Focus trap
    if (e.key === 'Tab' && modalRef.current) {
      const focusable = modalRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;

  return (
    <div className="amenities-modal-backdrop" onClick={onClose} role="presentation">
      <div
        className="amenities-modal"
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="amenities-modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="amenities-modal-header">
          <button
            className="amenities-modal-close"
            onClick={onClose}
            ref={closeButtonRef}
            aria-label="Close"
            type="button"
          >
            <X size={16} strokeWidth={2.5} />
          </button>
        </div>
        <div className="amenities-modal-content custom-scrollbar">
          <h2 id="amenities-modal-title" className="amenities-modal-title">
            What this place offers
          </h2>
          {amenitiesAll.map((category, catIndex) => (
            <div className="amenities-category" key={catIndex}>
              <h3 className="amenities-category-title">{category.category}</h3>
              {category.items.map((item, itemIndex) => {
                const Icon = iconMap[item.icon] || ShieldAlert;
                return (
                  <div className="amenities-modal-item" key={itemIndex}>
                    <Icon size={24} strokeWidth={1.5} />
                    <span className={`amenities-modal-name ${!item.available ? 'amenity-strikethrough' : ''}`}>
                      {item.name}
                    </span>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
