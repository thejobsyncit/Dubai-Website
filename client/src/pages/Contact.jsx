import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, PhoneCall, MapPin, Send, Briefcase, UserCheck } from 'lucide-react';
import './Page.css';

const Contact = () => {
  const [formType, setFormType] = useState('employer'); // 'employer' | 'candidate'
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="contact-page page-wrapper">
      <div className="page-header">
        <div className="container" style={{ textAlign: 'center' }}>
          <h1>Connect With THE JASYNC</h1>
          <div className="breadcrumb" style={{ fontSize: '1rem', marginTop: '15px', marginBottom: '15px' }}>
            <Link to="/" style={{ color: '#FFFFFF', textDecoration: 'none' }}>Home</Link> <span style={{ margin: '0 10px' }}>/</span> <span style={{ opacity: 0.85 }}>Contact Us</span>
          </div>
          <p>Whether you are hiring specialized talent or exploring your next career milestone, our team is ready to assist you.</p>
        </div>
      </div>
      
      <div className="container page-content">
        <div className="content-box" style={{ maxWidth: '880px', margin: '-3rem auto 0', padding: '3.5rem 3rem' }}>
          
          {/* Dual Toggle for Employers and Candidates */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '2.5rem' }}>
            <button
              type="button"
              onClick={() => setFormType('employer')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '0.75rem 1.75rem',
                borderRadius: '50px',
                border: formType === 'employer' ? '2px solid var(--orange)' : '1px solid var(--cream-dark)',
                background: formType === 'employer' ? 'var(--orange)' : 'var(--white)',
                color: formType === 'employer' ? 'var(--white)' : 'var(--plum)',
                fontWeight: '700',
                cursor: 'pointer',
                fontSize: '0.95rem',
                transition: 'all 0.2s ease'
              }}
            >
              <Briefcase size={18} /> I Want to Hire Talent
            </button>
            <button
              type="button"
              onClick={() => setFormType('candidate')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '0.75rem 1.75rem',
                borderRadius: '50px',
                border: formType === 'candidate' ? '2px solid var(--orange)' : '1px solid var(--cream-dark)',
                background: formType === 'candidate' ? 'var(--orange)' : 'var(--white)',
                color: formType === 'candidate' ? 'var(--white)' : 'var(--plum)',
                fontWeight: '700',
                cursor: 'pointer',
                fontSize: '0.95rem',
                transition: 'all 0.2s ease'
              }}
            >
              <UserCheck size={18} /> I Want to Submit My Resume
            </button>
          </div>

          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <h2>{formType === 'employer' ? 'Request IT & Marketing Talent' : 'Submit Your Resume & Profile'}</h2>
            <p style={{ color: 'var(--color-text-muted)' }}>
              {formType === 'employer' 
                ? 'Tell us about the software engineering, Python, React, web development or marketing talent you need.'
                : 'Share your background in software engineering, web development, SEO, performance marketing or content strategy.'
              }
            </p>
          </div>

          {submitted ? (
            <div style={{ padding: '2rem', background: 'var(--white)', borderRadius: '16px', border: '1px solid var(--orange)', textAlign: 'center', color: 'var(--plum)' }}>
              <h3 style={{ marginBottom: '8px', color: 'var(--orange-hover)' }}>Thank you for reaching out!</h3>
              <p style={{ margin: 0, color: 'var(--color-text-muted)' }}>Our recruitment team will review your submission and contact you shortly.</p>
            </div>
          ) : (
            <form style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '22px' }} onSubmit={handleSubmit}>
              <div style={{ gridColumn: 'span 1' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: 'var(--plum)' }}>Full Name</label>
                <input type="text" placeholder="Your Name" className="form-input" required />
              </div>

              <div style={{ gridColumn: 'span 1' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: 'var(--plum)' }}>Email Address</label>
                <input type="email" placeholder="name@domain.com" className="form-input" required />
              </div>

              <div style={{ gridColumn: 'span 1' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: 'var(--plum)' }}>Phone / WhatsApp</label>
                <input type="tel" placeholder="+971 54 000 0000" className="form-input" required />
              </div>

              <div style={{ gridColumn: 'span 1' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: 'var(--plum)' }}>
                  {formType === 'employer' ? 'Target Hiring Discipline' : 'Primary Specialization'}
                </label>
                <select className="form-input" required defaultValue="">
                  <option value="" disabled>Select specialization</option>
                  <option value="python">Python &amp; Backend Engineering</option>
                  <option value="react">React &amp; Frontend Development</option>
                  <option value="fullstack">Full-Stack &amp; Web Development</option>
                  <option value="seo">SEO &amp; Content Marketing</option>
                  <option value="performance">Performance &amp; Paid Media Marketing</option>
                  <option value="social">Social Media &amp; Community</option>
                  <option value="cloud">Cloud &amp; DevOps Engineering</option>
                  <option value="other">Other Technical / Marketing Role</option>
                </select>
              </div>

              {formType === 'candidate' && (
                <div style={{ gridColumn: 'span 2' }}>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: 'var(--plum)' }}>LinkedIn or Portfolio / GitHub URL</label>
                  <input type="url" placeholder="https://linkedin.com/in/... or https://github.com/..." className="form-input" />
                </div>
              )}

              <div style={{ gridColumn: 'span 2' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: 'var(--plum)' }}>
                  {formType === 'employer' ? 'Role Requirements & Hiring Timeline' : 'Career Summary & Preferred Roles'}
                </label>
                <textarea 
                  placeholder={formType === 'employer' ? 'Describe the tech stack, seniority, timeline, and whether you prefer onsite UAE or remote...' : 'Describe your tech stack, years of experience, current location, and role preferences...'} 
                  rows="4" 
                  className="form-input" 
                  required
                ></textarea>
              </div>

              <div style={{ gridColumn: 'span 2', textAlign: 'center', marginTop: '6px' }}>
                <button type="submit" className="btn btn-orange" style={{ width: '100%', padding: '1rem', fontSize: '1.05rem', justifyContent: 'center' }}>
                  <Send size={18} /> {formType === 'employer' ? 'Submit Hiring Inquiry' : 'Submit Resume & Profile'}
                </button>
              </div>
            </form>
          )}
          
          <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '20px', marginTop: '3.5rem', paddingTop: '2.5rem', borderTop: '1px solid var(--cream-dark)', textAlign: 'center' }}>
            <div>
              <PhoneCall size={24} className="text-orange" style={{ margin: '0 auto 10px' }} />
              <h4 style={{ color: 'var(--plum)', marginBottom: '4px' }}>Direct Phone</h4>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)' }}>+971 54 740 5625</p>
            </div>
            <div>
              <Mail size={24} className="text-orange" style={{ margin: '0 auto 10px' }} />
              <h4 style={{ color: 'var(--plum)', marginBottom: '4px' }}>Recruitment Email</h4>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)' }}>info@jasync.com</p>
            </div>
            <div>
              <MapPin size={24} className="text-orange" style={{ margin: '0 auto 10px' }} />
              <h4 style={{ color: 'var(--plum)', marginBottom: '4px' }}>Dubai Headquarters</h4>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)' }}>Dubai Creek Tower, Deira</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;