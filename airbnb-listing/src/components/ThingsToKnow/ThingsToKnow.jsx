import { Calendar, Key, Shield } from 'lucide-react';
import './ThingsToKnow.css';

export default function ThingsToKnow() {
  return (
    <section className="things-to-know" aria-labelledby="ttk-heading">
      <h2 className="ttk-heading" id="ttk-heading">Things to know</h2>

      <div className="ttk-grid">
        {/* Column 1: Cancellation policy */}
        <div className="ttk-column">
          <div className="ttk-icon-wrapper">
            <Calendar size={22} />
          </div>
          <h3 className="ttk-col-title">Cancellation policy</h3>
          <p className="ttk-text">
            Free cancellation before 17 October. Cancel before check-in on 18 October for a partial refund.
          </p>
          <p className="ttk-subtext">Review this host's full policy for details.</p>
          <a href="#cancellation" className="ttk-link" onClick={(e) => e.preventDefault()}>
            Learn more
          </a>
        </div>

        {/* Column 2: House rules */}
        <div className="ttk-column">
          <div className="ttk-icon-wrapper">
            <Key size={22} />
          </div>
          <h3 className="ttk-col-title">House rules</h3>
          <ul className="ttk-list">
            <li>Check-in after 2:00 pm</li>
            <li>Checkout before 11:00 am</li>
            <li>3 guests maximum</li>
          </ul>
          <a href="#rules" className="ttk-link" onClick={(e) => e.preventDefault()}>
            Learn more
          </a>
        </div>

        {/* Column 3: Safety & property */}
        <div className="ttk-column">
          <div className="ttk-icon-wrapper">
            <Shield size={22} />
          </div>
          <h3 className="ttk-col-title">Safety & property</h3>
          <ul className="ttk-list">
            <li>Carbon monoxide alarm not reported</li>
            <li>Smoke alarm not reported</li>
            <li>Exterior security cameras on property</li>
          </ul>
          <a href="#safety" className="ttk-link" onClick={(e) => e.preventDefault()}>
            Learn more
          </a>
        </div>
      </div>
    </section>
  );
}
