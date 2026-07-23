import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="page-header bg-primary text-white" style={{ padding: '80px 0', textAlign: 'center' }}>
        <h1>Contact Us</h1>
        <div className="breadcrumb" style={{ fontSize: '1rem', marginTop: '15px' }}>
          <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link> <span style={{ margin: '0 10px' }}>/</span> <span style={{ opacity: 0.8 }}>Contact Us</span>
        </div>
        <p style={{ marginTop: '20px' }}>Get in touch with us for your business needs.</p>
      </div>
      <div className="container" style={{ marginTop: '50px', marginBottom: '50px' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <input type="text" placeholder="Your Name" style={{ padding: '15px', borderRadius: '5px', border: '1px solid #ccc' }} />
            <input type="email" placeholder="Your Email" style={{ padding: '15px', borderRadius: '5px', border: '1px solid #ccc' }} />
            <input type="tel" placeholder="Your Phone Number" style={{ padding: '15px', borderRadius: '5px', border: '1px solid #ccc' }} />
            <textarea placeholder="Your Message" rows="5" style={{ padding: '15px', borderRadius: '5px', border: '1px solid #ccc' }}></textarea>
            <button type="submit" className="btn bg-primary text-white" style={{ padding: '15px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;