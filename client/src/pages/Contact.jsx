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
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setErrorMsg('');
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim() || !formData.acceptedTerms) {
      setErrorMsg('Please complete all required fields and accept the Terms & Conditions.');
      return;
    }

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
      <div className="page-header contact-page-header">
        <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 3 }}>
          <div className="header-pill-badge">
            GET IN TOUCH
          </div>
          <h1>
            Contact <span className="header-highlight">Us</span>
          </h1>
          <p>
            Have questions or a project in mind? Reach out to our global teams in Dubai and Chennai.
          </p>
        </div>
      </div>

      <div className="contact-section-wrapper">
        <div className="container">
          <div className="contact-layout-grid">

            {/* Left Column: Connect with us */}
            <div className="contact-info-col">
              <h2>Connect with us</h2>

              <div className="contact-items-list">
                <div className="contact-info-item">
                  <div className="contact-icon-squircle">
                    <MapPin size={22} aria-hidden="true" />
                  </div>
                  <div className="contact-details">
                    <h3>Dubai Office</h3>
                    <p>Dubai Creek Tower - 1st St - Riggat Al Buteen</p>
                    <a href="tel:+971547405625">+971 54 740 5625</a>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-icon-squircle">
                    <MapPin size={22} aria-hidden="true" />
                  </div>
                  <div className="contact-details">
                    <h3>India Office</h3>
                    <p>Tamilnadu, Chennai</p>
                    <a href="tel:+919789569391">+91 9789569391</a>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-icon-squircle">
                    <Mail size={22} aria-hidden="true" />
                  </div>
                  <div className="contact-details">
                    <h3>Mail Id</h3>
                    <a href="mailto:info@jasync.com">info@jasync.com</a>
                    <a href="mailto:hr@thejobsync.com">hr@thejobsync.com</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Solid Corporate Contact Form Card */}
            <div className="contact-form-card">
              {submitted ? (
                <div style={{ padding: '3rem 1.5rem', textAlign: 'center' }} role="status" aria-live="polite">
                  <div style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '8px',
                    backgroundColor: 'var(--gold)',
                    color: 'var(--navy)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1.35rem'
                  }}>
                    <CheckCircle2 size={32} aria-hidden="true" />
                  </div>
                  <h3 style={{ fontSize: '1.7rem', color: 'var(--navy)', marginBottom: '0.75rem', fontWeight: 800 }}>
                    Message Received!
                  </h3>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: '1.02rem', lineHeight: 1.65, maxWidth: '440px', margin: '0 auto' }}>
                    Thank you for reaching out. Our recruitment and project advisors will get in touch with you shortly.
                  </p>
                </div>
              ) : (
                <form className="contact-form-grid" onSubmit={handleSubmit}>
                  {errorMsg && (
                    <div className="contact-error-banner" role="alert">
                      {errorMsg}
                    </div>
                  )}

                  <div className="form-row-dual">
                    <div className="contact-field-group">
                      <label htmlFor="contact-name" className="contact-field-label">Your Name *</label>
                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        className="contact-input-field"
                        required
                      />
                    </div>
                    <div className="contact-field-group">
                      <label htmlFor="contact-email" className="contact-field-label">Email Address *</label>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="name@company.com"
                        className="contact-input-field"
                        required
                      />
                    </div>
                  </div>

                  <div className="contact-field-group">
                    <label htmlFor="contact-phone" className="contact-field-label">Phone Number</label>
                    <input
                      id="contact-phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. +971 54 740 5625"
                      className="contact-input-field"
                    />
                  </div>

                  <div className="contact-field-group">
                    <label htmlFor="contact-message" className="contact-field-label">Tell Us About Your Project *</label>
                    <textarea
                      id="contact-message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe your hiring needs or project goals"
                      rows="5"
                      className="contact-input-field"
                      required
                      style={{ resize: 'vertical' }}
                    ></textarea>
                  </div>

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

                  <div className="contact-btn-wrapper">
                    <button type="submit" className="contact-submit-btn">
                      <span>Send Message</span>
                      <span className="btn-icon-bubble" aria-hidden="true">
                        <ArrowRight size={16} />
                      </span>
                    </button>
                    <span className="contact-btn-note">
                      <Lock size={14} style={{ color: 'var(--gold-text)' }} aria-hidden="true" />
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
