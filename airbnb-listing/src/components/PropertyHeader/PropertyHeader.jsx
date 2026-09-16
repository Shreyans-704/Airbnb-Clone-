import { useState } from 'react';
import { Upload, Heart, Check } from 'lucide-react';
import { property } from '../../data/property';
import './PropertyHeader.css';

export default function PropertyHeader() {
  const [isSaved, setIsSaved] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    try {
      if (navigator.clipboard && window.location.href) {
        await navigator.clipboard.writeText(window.location.href);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleSave = () => {
    setIsSaved((prev) => !prev);
  };

  return (
    <div className="property-header">
      <h1 className="property-title">{property.title}</h1>
      <div className="property-actions">
        <button
          className="action-btn"
          type="button"
          onClick={handleShare}
          aria-label="Share this listing"
        >
          {copied ? <Check size={16} color="var(--color-success, #008A05)" /> : <Upload size={16} strokeWidth={2} />}
          <span className="action-btn-text">{copied ? 'Link copied!' : 'Share'}</span>
        </button>
        <button
          className={`action-btn ${isSaved ? 'is-saved' : ''}`}
          type="button"
          onClick={handleSave}
          aria-label={isSaved ? 'Remove from wishlist' : 'Save to wishlist'}
        >
          <Heart
            size={16}
            strokeWidth={2}
            fill={isSaved ? 'var(--color-primary, #FF385C)' : 'none'}
            color={isSaved ? 'var(--color-primary, #FF385C)' : 'currentColor'}
          />
          <span className="action-btn-text">{isSaved ? 'Saved' : 'Save'}</span>
        </button>
      </div>
    </div>
  );
}
