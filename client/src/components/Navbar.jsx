import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MapPin, Mail, Clock, PhoneCall } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <>
      {/* Top Bar */}
      <div className="topbar">
        <div className="container topbar-container">
          <div className="topbar-left">
            <span className="topbar-item">
              <MapPin size={14} />
              Dubai Creek Tower - 1st St - Deira-Riggat Al Buteen
            </span>
            <span className="topbar-item">
              <Mail size={14} />
              info@jasync.com
            </span>
          </div>
          <div className="topbar-right">
            <span className="topbar-item">
              <Clock size={14} />
              Office Hours: 9:00 AM to 06:00 PM
            </span>
            <div className="topbar-socials">
              <a href="#" className="social-icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="social-icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="social-icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="#" className="social-icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="navbar">
        <div className="container nav-container">
          <Link to="/" className="logo">
            <img src="/logo.jpg" alt="THE JASYNC Logo" className="brand-logo" />
            <div className="logo-text">
              THE JASYNC
            </div>
          </Link>

          <ul className="nav-links">
            <li><Link to="/" className={currentPath === '/' ? 'active' : ''}>Home</Link></li>
            <li><Link to="/about" className={currentPath === '/about' ? 'active' : ''}>About Us</Link></li>
            <li><Link to="/services" className={currentPath === '/services' ? 'active' : ''}>Service</Link></li>
            <li><Link to="/blog" className={currentPath === '/blog' ? 'active' : ''}>Blog</Link></li>
            <li><Link to="/contact" className={currentPath === '/contact' ? 'active' : ''}>Contact Us</Link></li>
            <li><Link to="/faq" className={currentPath === '/faq' ? 'active' : ''}>FAQ</Link></li>
          </ul>

          <div className="nav-contact">
            <PhoneCall size={24} className="text-primary" />
            <div>
              <span className="nav-contact-label">Call us today:</span>
              <span className="nav-contact-number">+971 54 740 5625</span>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
