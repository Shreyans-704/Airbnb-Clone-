import { useState, useEffect, useRef } from 'react';
import { Search, Globe, Menu } from 'lucide-react';
import './Header.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <header className="header" role="banner">
      <div className="header-inner">
        {/* Logo */}
        <a href="/" className="header-logo" aria-label="Airbnb home">
          <svg
            viewBox="4.25 12.6 111.5 34.8"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="presentation"
            focusable="false"
            className="header-logo-svg"
            style={{ display: 'block', height: 32, width: 'auto', fill: '#FF385C' }}
          >
            <path
              d="M63.042 21.358a2.264 2.264 0 1 1-2.264-2.264 2.257 2.257 0 0 1 2.264 2.264zm-9.34 4.55v.56a4.353 4.353 0 0 0-3.369-1.395 6.671 6.671 0 0 0-6.739 6.9 6.671 6.671 0 0 0 6.732 6.907 4.232 4.232 0 0 0 3.369-1.429v.593a.478.478 0 0 0 .485.485h2.824V25.4h-2.8a.499.499 0 0 0-.485.485zm0 8.396a3.464 3.464 0 0 1-2.824 1.429c-2.23 0-3.935-1.395-3.935-3.76s1.705-3.76 3.935-3.76a3.558 3.558 0 0 1 2.824 1.429v4.67zm5.4-8.882h3.37v13.1h-3.37V25.4zm49.967-.35a4.353 4.353 0 0 0-3.369 1.395v-7.352h-3.37V38.52h2.823a.499.499 0 0 0 .485-.485v-.593A4.313 4.313 0 0 0 109 38.871a6.691 6.691 0 0 0 6.739-6.9 6.685 6.685 0 0 0-6.739-6.9zM108.5 35.7a3.41 3.41 0 0 1-2.824-1.429V29.6a3.78 3.78 0 0 1 2.824-1.429c2.23 0 3.935 1.395 3.935 3.76s-1.705 3.76-3.935 3.76zm-7.878-4.946v7.803h-3.37v-7.413c0-2.163-.674-3.032-2.58-3.032a3.74 3.74 0 0 0-2.695 1.287v9.124h-3.37V25.4h2.648a.499.499 0 0 1 .485.485v.56a4.798 4.798 0 0 1 3.551-1.395 5.391 5.391 0 0 1 3.659 1.253c1.186.977 1.637 2.23 1.637 4.427zm-20.1-5.68a4.353 4.353 0 0 0-3.369 1.395v-7.352h-3.37V38.52h2.824a.499.499 0 0 0 .485-.485v-.593a4.313 4.313 0 0 0 3.369 1.429 6.691 6.691 0 0 0 6.739-6.9 6.644 6.644 0 0 0-6.739-6.9zM79.96 35.7a3.41 3.41 0 0 1-2.824-1.429V29.6a3.78 3.78 0 0 1 2.824-1.429c2.23 0 3.935 1.395 3.935 3.76s-1.705 3.76-3.935 3.76zm-9.08-10.63a5.344 5.344 0 0 1 1.536.175v3.1s-2.8-.923-4.528 1.044v9.165h-3.37V25.4h2.824a.499.499 0 0 1 .485.485v.56a4.576 4.576 0 0 1 3.032-1.395zM36.14 37.335l-.526-1.253-.802-1.78-.034-.034a359.93 359.93 0 0 0-7.696-15.748l-.108-.2-.83-1.67a10.02 10.02 0 0 0-1.253-1.914 5.627 5.627 0 0 0-4.461-2.129 5.849 5.849 0 0 0-4.461 2.089 12.015 12.015 0 0 0-1.253 1.914l-.943 1.846c-2.695 5.23-5.297 10.52-7.702 15.748l-.034.067c-.2.573-.485 1.16-.768 1.786q-.263.573-.526 1.253a7.83 7.83 0 0 0-.418 3.76 7.413 7.413 0 0 0 4.528 5.782 7.156 7.156 0 0 0 2.824.559 7.911 7.911 0 0 0 .903-.067 9.205 9.205 0 0 0 3.484-1.186 17.642 17.642 0 0 0 4.319-3.625 18.302 18.302 0 0 0 4.319 3.625 9.198 9.198 0 0 0 3.484 1.186 7.925 7.925 0 0 0 .903.067 7.042 7.042 0 0 0 2.824-.559 7.413 7.413 0 0 0 4.528-5.782 6.584 6.584 0 0 0-.317-3.726zm-15.708 1.813c-1.88-2.372-3.1-4.596-3.518-6.483a5.62 5.62 0 0 1-.108-2.123 3.369 3.369 0 0 1 .559-1.462 3.7 3.7 0 0 1 3.066-1.536 3.565 3.565 0 0 1 3.066 1.53 3.369 3.369 0 0 1 .559 1.462 5.6 5.6 0 0 1-.108 2.123c-.418 1.846-1.637 4.043-3.518 6.483zm13.902 1.637a5.175 5.175 0 0 1-3.174 4.043 5.276 5.276 0 0 1-2.642.384 6.853 6.853 0 0 1-2.648-.903 16.274 16.274 0 0 1-3.969-3.369c2.298-2.824 3.693-5.4 4.218-7.702a8.76 8.76 0 0 0 .175-2.965 5.654 5.654 0 0 0-.943-2.372 5.869 5.869 0 0 0-4.919-2.5 5.964 5.964 0 0 0-4.912 2.473 5.654 5.654 0 0 0-.943 2.372 7.237 7.237 0 0 0 .175 2.965c.526 2.298 1.954 4.912 4.218 7.736a15.654 15.654 0 0 1-3.969 3.369 6.853 6.853 0 0 1-2.655.93 5.573 5.573 0 0 1-2.648-.35 5.175 5.175 0 0 1-3.174-4.043 5.768 5.768 0 0 1 .317-2.695c.108-.35.276-.674.45-1.112.243-.56.526-1.152.802-1.745l.034-.067c2.406-5.2 4.98-10.485 7.67-15.647l.1-.25.836-1.604a7.642 7.642 0 0 1 1.004-1.543 3.659 3.659 0 0 1 5.573 0 7.655 7.655 0 0 1 .95 1.53l.836 1.604.1.2c2.648 5.196 5.236 10.485 7.635 15.68v.034c.276.56.526 1.186.802 1.745.175.418.35.768.45 1.112a5.883 5.883 0 0 1 .243 2.695z"
              fill="#FF385C"
              fillRule="evenodd"
            />
          </svg>
        </a>

        {/* Search Bar */}
        <div className="header-search" role="search">
          <button
            className="search-segment search-segment-location"
            type="button"
            onClick={() => scrollToSection('location')}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ marginRight: 8, flexShrink: 0, display: 'inline-block', verticalAlign: 'middle' }} aria-hidden="true">
              <circle cx="19" cy="8" r="4" fill="#88C057" />
              <rect x="18" y="11" width="2" height="6" fill="#A07044" />
              <path d="M4 10L14 7V20H4V10Z" fill="#E8ECEF" stroke="#4A5568" strokeWidth="1" strokeLinejoin="round" />
              <path d="M2.5 10.5L14.5 6.5L16 7.5L4 11.5Z" fill="#3D4852" />
              <rect x="7" y="12" width="4" height="8" rx="0.5" fill="#E02424" />
              <rect x="12" y="9.5" width="1.5" height="2" fill="#718096" />
            </svg>
            <span className="search-segment-text">Anywhere</span>
          </button>
          <span className="search-divider" aria-hidden="true"></span>
          <button
            className="search-segment search-segment-date"
            type="button"
            onClick={() => scrollToSection('calendar')}
          >
            <span className="search-segment-text">Anytime</span>
          </button>
          <span className="search-divider" aria-hidden="true"></span>
          <button
            className="search-segment search-segment-guests"
            type="button"
            onClick={() => scrollToSection('booking-card-widget')}
          >
            <span className="search-segment-text search-segment-placeholder">Add guests</span>
          </button>
          <button
            className="search-icon-btn"
            type="button"
            aria-label="Search"
            onClick={() => scrollToSection('photos')}
          >
            <Search size={14} strokeWidth={3} />
          </button>
        </div>

        {/* Right Controls */}
        <div className="header-right" ref={menuRef}>
          <button
            className="header-host-btn"
            type="button"
            onClick={() => scrollToSection('host')}
          >
            Become a host
          </button>
          <button className="header-globe-btn" type="button" aria-label="Language and region">
            <Globe size={16} strokeWidth={2} />
          </button>
          <div className="header-user-wrapper">
            <button
              className="header-user-menu"
              type="button"
              aria-label="User menu"
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen((prev) => !prev)}
            >
              <Menu size={16} strokeWidth={2.2} />
            </button>
            {isMenuOpen && (
              <div className="header-dropdown-menu" role="menu">
                <button className="header-menu-item header-menu-bold" type="button" role="menuitem">Sign up</button>
                <button className="header-menu-item" type="button" role="menuitem">Log in</button>
                <div className="header-menu-divider" role="separator"></div>
                <button className="header-menu-item" type="button" role="menuitem" onClick={() => scrollToSection('host')}>Airbnb your home</button>
                <button className="header-menu-item" type="button" role="menuitem">Help Centre</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
