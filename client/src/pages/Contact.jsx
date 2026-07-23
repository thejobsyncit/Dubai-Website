import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div className="page-wrapper">
      <div className="page-header">
        <div className="container">
          <h1 data-aos="fade-up">Contact Us</h1>
          <div className="breadcrumb" data-aos="fade-up" data-aos-delay="100">
            <Link to="/">Home</Link> <span style={{ margin: '0 10px', color: 'var(--color-text-light)' }}>/</span> <span style={{ color: 'var(--color-white)' }}>Contact Us</span>
          </div>
          <p data-aos="fade-up" data-aos-delay="200">Get in touch with us for your business needs.</p>
        </div>
      </div>
      <div className="container page-content">
        <div className="content-box" style={{ maxWidth: '600px', margin: '-5rem auto 0' }} data-aos="fade-up" data-aos-delay="300">
          <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <input type="text" placeholder="Your Name" className="form-input" />
            <input type="email" placeholder="Your Email" className="form-input" />
            <input type="tel" placeholder="Your Phone Number" className="form-input" />
            <textarea placeholder="Your Message" rows="5" className="form-input"></textarea>
            <button type="submit" className="btn btn-primary" style={{ padding: '1rem', border: 'none', cursor: 'pointer', marginTop: '10px' }}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;