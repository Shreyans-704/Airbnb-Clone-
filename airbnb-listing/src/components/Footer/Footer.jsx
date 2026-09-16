import { Globe } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-inner">
        <div className="footer-columns">
          <div className="footer-col">
            <h4 className="footer-col-title">Support</h4>
            <ul className="footer-links">
              <li><a href="#help" onClick={(e) => e.preventDefault()}>Help Centre</a></li>
              <li><a href="#aircover" onClick={(e) => e.preventDefault()}>AirCover</a></li>
              <li><a href="#antidiscrimination" onClick={(e) => e.preventDefault()}>Anti-discrimination</a></li>
              <li><a href="#disability" onClick={(e) => e.preventDefault()}>Disability support</a></li>
              <li><a href="#cancellation" onClick={(e) => e.preventDefault()}>Cancellation options</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">Hosting</h4>
            <ul className="footer-links">
              <li><a href="#airbnb-your-home" onClick={(e) => e.preventDefault()}>Airbnb your home</a></li>
              <li><a href="#aircover-hosts" onClick={(e) => e.preventDefault()}>AirCover for Hosts</a></li>
              <li><a href="#hosting-resources" onClick={(e) => e.preventDefault()}>Hosting resources</a></li>
              <li><a href="#community-forum" onClick={(e) => e.preventDefault()}>Community forum</a></li>
              <li><a href="#hosting-responsibly" onClick={(e) => e.preventDefault()}>Hosting responsibly</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">Airbnb</h4>
            <ul className="footer-links">
              <li><a href="#newsroom" onClick={(e) => e.preventDefault()}>Newsroom</a></li>
              <li><a href="#new-features" onClick={(e) => e.preventDefault()}>New features</a></li>
              <li><a href="#careers" onClick={(e) => e.preventDefault()}>Careers</a></li>
              <li><a href="#investors" onClick={(e) => e.preventDefault()}>Investors</a></li>
              <li><a href="#gift-cards" onClick={(e) => e.preventDefault()}>Gift cards</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-legal">
            <span>© 2026 Airbnb, Inc.</span>
            <span className="footer-dot">·</span>
            <a href="#privacy" onClick={(e) => e.preventDefault()}>Privacy</a>
            <span className="footer-dot">·</span>
            <a href="#terms" onClick={(e) => e.preventDefault()}>Terms</a>
            <span className="footer-dot">·</span>
            <a href="#sitemap" onClick={(e) => e.preventDefault()}>Sitemap</a>
            <span className="footer-dot">·</span>
            <a href="#company" onClick={(e) => e.preventDefault()}>Company details</a>
          </div>

          <div className="footer-settings">
            <button className="footer-lang-btn" type="button">
              <Globe size={16} />
              <span>English (IN)</span>
            </button>
            <button className="footer-currency-btn" type="button">
              <span>₹ INR</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
