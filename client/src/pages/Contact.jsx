import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, PhoneCall, MapPin, Send } from 'lucide-react';
import './Page.css';

const Contact = () => {
  return (
    <div className="contact-page page-wrapper">
      <div className="page-header bg-primary text-white">
        <div className="container" style={{ textAlign: 'center' }}>
          <h1>Contact Us</h1>
          <div className="breadcrumb" style={{ fontSize: '1rem', marginTop: '15px', marginBottom: '15px' }}>
            <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link> <span style={{ margin: '0 10px' }}>/</span> <span style={{ opacity: 0.8 }}>Contact Us</span>
          </div>
          <p>Get in touch with our executive team for bespoke staffing and HR solutions.</p>
        </div>
      </div>
      
      <div className="container page-content">
        <div className="content-box" style={{ maxWidth: '850px', margin: '-3rem auto 0', padding: '3.5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <h2>Send Us A Message</h2>
            <p style={{ color: 'var(--color-text-muted)' }}>We typically respond to all corporate inquiries within 2 business hours.</p>
          </div>
          
          <form style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }} onSubmit={(e) => e.preventDefault()}>
            <div style={{ gridColumn: 'span 1' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: 'var(--color-primary)' }}>Full Name</label>
              <input type="text" placeholder="John Doe" className="form-input" required />
            </div>
            <div style={{ gridColumn: 'span 1' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: 'var(--color-primary)' }}>Email Address</label>
              <input type="email" placeholder="john@company.com" className="form-input" required />
            </div>
            <div style={{ gridColumn: 'span 2' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: 'var(--color-primary)' }}>Phone Number / WhatsApp</label>
              <input type="tel" placeholder="+971 54 000 0000" className="form-input" required />
            </div>
            <div style={{ gridColumn: 'span 2' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: 'var(--color-primary)' }}>How can we help you scale?</label>
              <textarea placeholder="Tell us about your team requirements or project goals..." rows="5" className="form-input" required></textarea>
            </div>
            <div style={{ gridColumn: 'span 2', textAlign: 'center', marginTop: '10px' }}>
              <button type="submit" className="btn btn-gold" style={{ width: '100%', padding: '1.1rem', fontSize: '1.05rem' }}>
                <Send size={18} /> Send Inquiry Now
              </button>
            </div>
          </form>
          
          <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '20px', marginTop: '3.5rem', paddingTop: '2.5rem', borderTop: '1px solid #E2E8F0', textAlign: 'center' }}>
            <div>
              <PhoneCall size={24} className="text-gold" style={{ margin: '0 auto 10px' }} />
              <h4 style={{ color: 'var(--color-primary)', marginBottom: '4px' }}>Direct Line</h4>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)' }}>+971 54 740 5625</p>
            </div>
            <div>
              <Mail size={24} className="text-gold" style={{ margin: '0 auto 10px' }} />
              <h4 style={{ color: 'var(--color-primary)', marginBottom: '4px' }}>Corporate Email</h4>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)' }}>info@jasync.com</p>
            </div>
            <div>
              <MapPin size={24} className="text-gold" style={{ margin: '0 auto 10px' }} />
              <h4 style={{ color: 'var(--color-primary)', marginBottom: '4px' }}>Dubai Headquarters</h4>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)' }}>Dubai Creek Tower, Deira</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;