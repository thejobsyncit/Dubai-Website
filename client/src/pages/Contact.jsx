import React, { useState } from 'react';
import { MapPin, Mail, ArrowRight, CheckCircle2, Lock } from 'lucide-react';
import './Page.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    acceptedTerms: false
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        acceptedTerms: false
      });
    }, 5000);
  };

  return (
    <div className="contact-page page-wrapper">
      {/* Header Banner (Matches Reference Structure with Brand Amber/Plum) */}
      <div className="page-header contact-page-header">
        <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 3 }}>
          <div className="header-pill-badge" data-aos="fade-down">
            GET IN TOUCH
          </div>
          <h1 data-aos="fade-up">
            Contact <span className="header-highlight">Us</span>
          </h1>
          <p data-aos="fade-up" data-aos-delay="100">
            Have questions or a project in mind? Reach out to our global teams in Dubai and Chennai.
          </p>
        </div>

        {/* Crisp Wave Divider */}
        <div className="page-header-curve">
          <svg viewBox="0 0 1440 90" fill="none" preserveAspectRatio="none">
            <path 
              d="M0,45 C380,95 720,18 1080,58 C1260,78 1380,48 1440,38 L1440,90 L0,90 Z" 
              fill="var(--cream)" 
            />
          </svg>
        </div>
      </div>
      
      {/* Main Content: Two-Column Connect & Form Layout */}
      <div className="contact-section-wrapper">
        <div className="container">
          <div className="contact-layout-grid">
            
            {/* Left Column: Connect with us */}
            <div className="contact-info-col" data-aos="fade-up" data-aos-delay="100">
              <h2>Connect with us</h2>
              
              <div className="contact-items-list">
                {/* Dubai Office */}
                <div className="contact-info-item">
                  <div className="contact-icon-squircle">
                    <MapPin size={24} />
                  </div>
                  <div className="contact-details">
                    <h3>Dubai Office</h3>
                    <p>Dubai Creek Tower - 1st St - Riggat Al Buteen</p>
                    <a href="tel:+971547405625">+971 54 740 5625</a>
                  </div>
                </div>

                {/* India Office */}
                <div className="contact-info-item">
                  <div className="contact-icon-squircle">
                    <MapPin size={24} />
                  </div>
                  <div className="contact-details">
                    <h3>India Office</h3>
                    <p>Tamilnadu, Chennai</p>
                    <a href="tel:+919789569391">+91 9789569391</a>
                  </div>
                </div>

                {/* Mail Id */}
                <div className="contact-info-item">
                  <div className="contact-icon-squircle">
                    <Mail size={24} />
                  </div>
                  <div className="contact-details">
                    <h3>Mail Id</h3>
                    <a href="mailto:info@jasync.com">info@jasync.com</a>
                    <a href="mailto:hr@thejobsync.com">hr@thejobsync.com</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form Card */}
            <div className="contact-form-card" data-aos="fade-up" data-aos-delay="200">
              {submitted ? (
                <div style={{ padding: '3.5rem 2rem', textAlign: 'center' }}>
                  <div style={{ 
                    width: '64px', 
                    height: '64px', 
                    borderRadius: '50%', 
                    background: 'linear-gradient(135deg, #FBBF24 0%, #F59E0B 100%)', 
                    color: '#1A1D36', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    margin: '0 auto 1.5rem',
                    boxShadow: '0 8px 20px rgba(245, 158, 11, 0.35)'
                  }}>
                    <CheckCircle2 size={34} />
                  </div>
                  <h3 style={{ fontSize: '1.8rem', color: 'var(--plum)', marginBottom: '0.8rem', fontWeight: 800 }}>
                    Message Received!
                  </h3>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: '1.05rem', lineHeight: 1.6, maxWidth: '440px', margin: '0 auto' }}>
                    Thank you for reaching out. Our recruitment and project advisors will get in touch with you shortly.
                  </p>
                </div>
              ) : (
                <form className="contact-form-grid" onSubmit={handleSubmit}>
                  {/* Row 1: Your Name & Email Address */}
                  <div className="form-row-dual">
                    <div>
                      <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name *" 
                        className="contact-input-field" 
                        required 
                      />
                    </div>
                    <div>
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email Address *" 
                        className="contact-input-field" 
                        required 
                      />
                    </div>
                  </div>

                  {/* Row 2: Phone Number */}
                  <div>
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone Number (e.g. +971 54 740 5625)" 
                      className="contact-input-field" 
                    />
                  </div>

                  {/* Row 3: Tell Us About Project */}
                  <div>
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell Us About Project *" 
                      rows="5" 
                      className="contact-input-field" 
                      required
                      style={{ resize: 'vertical' }}
                    ></textarea>
                  </div>

                  {/* Row 4: Terms Checkbox */}
                  <label className="contact-terms-row">
                    <input 
                      type="checkbox" 
                      name="acceptedTerms"
                      checked={formData.acceptedTerms}
                      onChange={handleChange}
                      required 
                    />
                    <span>I accept your Terms &amp; Conditions</span>
                  </label>

                  {/* Row 5: Modern Action Button */}
                  <div className="contact-btn-wrapper">
                    <button type="submit" className="contact-submit-btn">
                      <span>Send Message</span>
                      <span className="btn-icon-bubble">
                        <ArrowRight size={17} />
                      </span>
                    </button>
                    <span className="contact-btn-note">
                      <Lock size={14} style={{ color: 'var(--orange)' }} />
                      Guaranteed response within 24 hours
                    </span>
                  </div>
                </form>
              )}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;