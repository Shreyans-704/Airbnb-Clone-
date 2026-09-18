import { Star, ShieldCheck, MapPin, GraduationCap } from 'lucide-react';
import { host } from '../../data/host';
import './HostSection.css';

export default function HostSection() {
  return (
    <section className="host-section" aria-labelledby="host-heading">
      <h2 className="host-section-heading" id="host-heading">Meet your host</h2>

      <div className="host-card-container">
        {/* ── Left column ── */}
        <div className="host-left-col">
          {/* Profile card */}
          <div className="host-profile-card">
            {/* Avatar side */}
            <div className="host-avatar-side">
              <div className="host-avatar-wrapper">
                <div className="host-avatar-large">
                  <span className="host-avatar-initials">MIRASHYA</span>
                </div>
                <span className="host-badge-check" aria-label="Verified">✓</span>
              </div>
              <h3 className="host-card-name">{host.name}</h3>
              <span className="host-card-type">Host</span>
            </div>

            {/* Stats side */}
            <div className="host-stats-side">
              <div className="host-stat-item">
                <span className="host-stat-val">{host.totalReviews.toLocaleString()}</span>
                <span className="host-stat-lbl">Reviews</span>
              </div>
              <div className="host-stat-item">
                <span className="host-stat-val">
                  {host.rating}
                  <Star size={13} fill="#000" stroke="#000" style={{ display: 'inline', verticalAlign: '-1px', marginLeft: '2px' }} />
                </span>
                <span className="host-stat-lbl">Rating</span>
              </div>
              <div className="host-stat-item">
                <span className="host-stat-val">{host.yearsHosting}</span>
                <span className="host-stat-lbl">Years hosting</span>
              </div>
            </div>
          </div>

          {/* Host bio rows below card */}
          <div className="host-bio-rows">
            <div className="host-bio-row">
              <MapPin size={18} strokeWidth={1.5} className="host-bio-icon" />
              <span>Born in the 80s</span>
            </div>
            <div className="host-bio-row">
              <GraduationCap size={18} strokeWidth={1.5} className="host-bio-icon" />
              <span>Where I went to school: NICMAR GOA</span>
            </div>
          </div>
        </div>

        {/* ── Right column ── */}
        <div className="host-details-col">
          {/* Co-hosts */}
          <div className="host-cohosts">
            <h4 className="host-cohosts-title">Co-Hosts</h4>
            <div className="host-cohosts-grid">
              {host.coHosts.map((cohost, index) => (
                <div className="cohost-item" key={index}>
                  <div className="cohost-avatar">{cohost.name[0]}</div>
                  <span className="cohost-name">{cohost.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Host details */}
          <div className="host-detail-item">
            <h4 className="host-info-title">Host details</h4>
            <p className="host-info-sub host-info-sub--link">Response rate: {host.responseRate}</p>
            <p className="host-info-sub host-info-sub--link">Responds {host.responseTime}</p>
          </div>

          <button className="host-message-btn" type="button">
            Message host
          </button>

          <div className="host-protection-notice">
            <ShieldCheck size={18} className="protection-icon" />
            <span>
              To help protect your payment, always use Airbnb to send money and communicate with hosts.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
