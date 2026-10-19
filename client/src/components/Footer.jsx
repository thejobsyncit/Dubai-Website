import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        
        <div className="footer-col">
          <div className="footer-logo">
            <img src="/jasync-logo-dark-bg.svg" alt="THE JASYNC Logo" />
            <h3 className="footer-title">THE JASYNC</h3>
          </div>
          <p className="footer-desc">
            IT &amp; Digital Marketing Recruitment Agency. We connect skilled IT professionals and digital marketing talent with leading companies, helping candidates build rewarding careers and employers find the right talent.
          </p>
          <div className="footer-socials">
            <a href="https://www.facebook.com/profile.php?id=61592002726358" target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="Facebook">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            <a href="https://www.instagram.com/thejasyncdubai/" target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="Instagram">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="https://www.linkedin.com/in/thejasync-undefined-b78755425/" target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="LinkedIn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a href="https://www.youtube.com/@TheJasync" target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="YouTube">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
            </a>
          </div>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">Recruitment Practice</h4>
          <ul className="footer-links-simple">
            <li><Link to="/services">Software &amp; Web Development</Link></li>
            <li><Link to="/services">Python &amp; Backend Engineering</Link></li>
            <li><Link to="/services">React &amp; Frontend Talent</Link></li>
            <li><Link to="/services">Performance &amp; Paid Media</Link></li>
            <li><Link to="/services">SEO &amp; Content Marketing</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">Contact Us</h4>
          <ul className="footer-links">
            <li>
              <Phone size={18} style={{ color: 'var(--orange)' }} />
              <span className="text-white">+971 54 740 5625</span>
            </li>
            <li>
              <Mail size={18} style={{ color: 'var(--orange)' }} />
              <span className="text-white">info@jasync.com</span>
            </li>
            <li>
              <Globe size={18} style={{ color: 'var(--orange)' }} />
              <span className="text-white">www.thejasync.com</span>
            </li>
            <li>
              <MapPin size={18} style={{ color: 'var(--orange)', flexShrink: 0 }} />
              <span className="text-white">Dubai Creek Tower - 1st St - Deira-Riggat Al Buteen</span>
            </li>
          </ul>
        </div>

      </div>
      <div className="footer-bottom">
        <div className="container text-center">
          <p>&copy; {new Date().getFullYear()} THE JASYNC. IT &amp; Digital Marketing Recruitment Agency. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
