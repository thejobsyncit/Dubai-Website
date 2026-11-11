import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MapPin, Mail, PhoneCall, Menu, X } from 'lucide-react';
import BrandMark from './ui/BrandMark';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  };

  return (
    <header className={`navbar-wrapper ${scrolled ? 'is-scrolled' : ''}`}>
      {/* Solid Deep Navy Top Utility Bar */}
      <div className="topbar">
        <div className="container topbar-container">
          <div className="topbar-left">
            <span className="topbar-item">
              <MapPin size={14} className="topbar-icon" aria-hidden="true" />
              Dubai Creek Tower - Riggat Al Buteen
            </span>
            <a href="mailto:info@jasync.com" className="topbar-item topbar-link">
              <Mail size={14} className="topbar-icon" aria-hidden="true" />
              info@jasync.com
            </a>
          </div>
          <div className="topbar-right">
            <div className="topbar-socials">
              <a href="https://www.facebook.com/profile.php?id=61592002726358" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Facebook">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="https://www.instagram.com/thejasyncdubai/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/thejasync-undefined-b78755425/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="https://www.youtube.com/@TheJasync" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="YouTube">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Solid Warm-White Main Navbar */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} aria-label="Primary navigation">
        <div className="container nav-container">
          <Link to="/" className="logo" onClick={closeMobileMenu} aria-label="THE JASYNC Home">
            <BrandMark theme="light" showWordmark={false} />
            <div className="logo-text">
              THE JASYNC
            </div>
          </Link>

          <button
            type="button"
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="primary-navigation-list"
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
          >
            {mobileMenuOpen ? <X size={26} aria-hidden="true" /> : <Menu size={26} aria-hidden="true" />}
          </button>

          <ul id="primary-navigation-list" className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
            <li><Link to="/" className={currentPath === '/' ? 'active' : ''} onClick={closeMobileMenu}>Home</Link></li>
            <li><Link to="/about" className={currentPath === '/about' ? 'active' : ''} onClick={closeMobileMenu}>About Us</Link></li>
            <li><Link to="/services" className={currentPath === '/services' ? 'active' : ''} onClick={closeMobileMenu}>Service</Link></li>
            <li><Link to="/blog" className={currentPath === '/blog' ? 'active' : ''} onClick={closeMobileMenu}>Blog</Link></li>
            <li><Link to="/contact" className={currentPath === '/contact' ? 'active' : ''} onClick={closeMobileMenu}>Contact Us</Link></li>
            <li><Link to="/faq" className={currentPath === '/faq' ? 'active' : ''} onClick={closeMobileMenu}>FAQ</Link></li>

            <li className="mobile-contact-item">
              <div className="mobile-contact-info">
                <a href="tel:+971547405625" className="mobile-call-btn">
                  <PhoneCall size={18} aria-hidden="true" />
                  <span>Call us: +971 54 740 5625</span>
                </a>
                <a href="mailto:info@jasync.com" className="mobile-mail-btn">
                  <Mail size={18} aria-hidden="true" />
                  <span>info@jasync.com</span>
                </a>
              </div>
              <div className="mobile-socials">
                <a href="https://www.facebook.com/profile.php?id=61592002726358" target="_blank" rel="noopener noreferrer" className="mobile-social-icon" aria-label="Facebook">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </a>
                <a href="https://www.instagram.com/thejasyncdubai/" target="_blank" rel="noopener noreferrer" className="mobile-social-icon" aria-label="Instagram">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
                <a href="https://www.linkedin.com/in/thejasync-undefined-b78755425/" target="_blank" rel="noopener noreferrer" className="mobile-social-icon" aria-label="LinkedIn">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
                <a href="https://www.youtube.com/@TheJasync" target="_blank" rel="noopener noreferrer" className="mobile-social-icon" aria-label="YouTube">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
