import { Star, ShieldCheck } from 'lucide-react';
import { host } from '../../data/host';
import './HostSection.css';

export default function HostSection() {
  return (
    <section className="host-section" aria-labelledby="host-heading">
      <h2 className="host-section-heading" id="host-heading">Meet your host</h2>

      <div className="host-card-container">
        {/* Left Card: Badge Profile */}
        <div className="host-profile-card">
          <div className="host-avatar-wrapper">
            <div className="host-avatar-large">
              <span className="host-avatar-initials">M</span>
            </div>
            <h3 className="host-card-name">{host.name}</h3>
            <span className="host-card-type">Host</span>
          </div>

          <div className="host-stats-grid">
            <div className="host-stat-item">
              <span className="host-stat-val">{host.totalReviews}</span>
              <span className="host-stat-lbl">Reviews</span>
            </div>
            <div className="host-stat-divider" />
            <div className="host-stat-item">
              <span className="host-stat-val">
                {host.rating} <Star size={14} fill="#000" stroke="#000" style={{ display: 'inline', verticalAlign: '-1px' }} />
              </span>
              <span className="host-stat-lbl">Rating</span>
            </div>
            <div className="host-stat-divider" />
            <div className="host-stat-item">
              <span className="host-stat-val">{host.yearsHosting}</span>
              <span className="host-stat-lbl">Years hosting</span>
            </div>
          </div>
        </div>

        {/* Right Card: Host Info & Details */}
        <div className="host-details-col">
          <div className="host-detail-item">
            <h4 className="host-info-title">Host details</h4>
            <p className="host-info-sub">Response rate: {host.responseRate}</p>
            <p className="host-info-sub">Responds {host.responseTime}</p>
          </div>

          <div className="host-cohosts">
            <h4 className="host-cohosts-title">Co-hosts</h4>
            <div className="host-cohosts-list">
              {host.coHosts.map((cohost, index) => (
                <div className="cohost-chip" key={index}>
                  <div className="cohost-avatar">{cohost.name[0]}</div>
                  <span className="cohost-name">{cohost.name}</span>
                </div>
              ))}
            </div>
          </div>

          <p className="host-description-text">{host.description}</p>

          <button className="host-message-btn" type="button">
            Message Host
          </button>

          <div className="host-protection-notice">
            <ShieldCheck size={18} className="protection-icon" />
            <span>
              To protect your payment, never transfer money or communicate outside of the Airbnb website or app.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
