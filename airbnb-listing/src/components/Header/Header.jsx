import { useState, useEffect, useRef } from 'react';
import { Home, Search, Globe, Menu, User } from 'lucide-react';
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
          <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: 32, width: 32, fill: '#FF385C' }}>
            <path d="M16 1c2.008 0 3.463.963 4.751 3.269l.533 1.025c1.954 3.83 6.114 12.54 7.1 14.836l.145.353c.667 1.591.91 2.472.96 3.396l.01.415.001.228c0 4.062-2.907 6.478-6.353 6.478-2.025 0-4.078-.892-5.735-2.517a26 26 0 0 1-1.27-1.414l-.14-.166-.14.166a26 26 0 0 1-1.271 1.414c-1.657 1.625-3.71 2.517-5.735 2.517-3.446 0-6.353-2.416-6.353-6.478 0-.706.088-1.44.325-2.24l.143-.473.072-.2.09-.226.088-.21c.833-1.958 4.53-10.03 6.616-13.769l.537-1.025C11.537 1.963 12.992 1 15 1h1zm0 2h-1c-1.018 0-1.946.508-3.087 2.547l-.528 1.015c-2.036 3.94-5.681 11.617-6.512 13.596l-.072.182-.064.166-.067.18a6 6 0 0 0-.258 1.594c0 2.86 2.063 4.52 4.435 4.52 1.534 0 3.1-.72 4.44-2.03.528-.516 1.01-1.073 1.45-1.614l.203-.253.205.253c.44.54.922 1.098 1.45 1.613 1.34 1.311 2.906 2.031 4.44 2.031 2.372 0 4.435-1.66 4.435-4.52 0-.517-.077-1.06-.258-1.68l-.067-.18-.064-.165-.072-.182c-.78-1.863-4.15-8.95-6.12-12.755l-.392-.84-.528-1.015C18.946 3.508 18.018 3 17 3h-1z"></path>
          </svg>
          <span className="header-logo-text">airbnb</span>
        </a>

        {/* Search Bar */}
        <div className="header-search" role="search">
          <button
            className="search-segment search-segment-location"
            type="button"
            onClick={() => scrollToSection('location')}
          >
            <Home size={15} strokeWidth={2.2} style={{ marginRight: 8, display: 'inline-flex', verticalAlign: '-1px' }} />
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
              <Menu size={16} strokeWidth={2} />
              <div className="header-avatar">
                <User size={16} strokeWidth={2} />
              </div>
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
