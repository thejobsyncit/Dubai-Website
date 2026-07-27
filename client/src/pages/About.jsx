import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Award, TrendingUp, Users } from 'lucide-react';
import AboutFeature from '../components/AboutFeature';
import './Page.css';

const About = () => {
  return (
    <div className="about-page page-wrapper">
      <div className="page-header bg-primary text-white">
        <div className="container" style={{ textAlign: 'center' }}>
          <h1>About Jobsync UAE</h1>
          <div className="breadcrumb" style={{ fontSize: '1rem', marginTop: '15px', marginBottom: '15px' }}>
            <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link> <span style={{ margin: '0 10px' }}>/</span> <span style={{ opacity: 0.8 }}>About Us</span>
          </div>
          <p>The UAE's premier institutional partner for executive talent acquisition and bespoke IT engineering.</p>
        </div>
      </div>
      
      <div className="container page-content">
        <div className="content-box" style={{ maxWidth: '1050px', margin: '-3rem auto 3rem', padding: '3.5rem 4rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span style={{ display: 'inline-block', padding: '6px 16px', background: 'rgba(212, 175, 55, 0.12)', color: 'var(--color-gold)', borderRadius: '50px', fontWeight: '700', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '15px' }}>
              Institutional Excellence
            </span>
            <h2 style={{ fontSize: '2.5rem', color: 'var(--color-primary)', marginBottom: '1rem' }}>Architecting Dubai's Future Workforce</h2>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.12rem', maxWidth: '750px', margin: '0 auto', lineHeight: '1.8' }}>
              Headquartered in Dubai Creek Tower, Jobsync UAE bridges the gap between ultra-high-growth enterprises and elite global tech talent. We combine UAE labor compliance expertise with Silicon Valley engineering rigor.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '25px', marginTop: '3rem' }}>
            <div style={{ padding: '2rem', background: '#F0F4F8', borderRadius: '18px', border: '1px solid #E2E8F0', textAlign: 'center' }}>
              <ShieldCheck size={36} className="text-gold" style={{ margin: '0 auto 12px' }} />
              <h3 style={{ fontSize: '1.25rem', color: 'var(--color-primary)', marginBottom: '8px' }}>100% Compliant</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', lineHeight: '1.6' }}>Fully licensed across DIFC, ADGM, and mainland UAE jurisdictions with automated visa & payroll processing.</p>
            </div>
            <div style={{ padding: '2rem', background: '#F0F4F8', borderRadius: '18px', border: '1px solid #E2E8F0', textAlign: 'center' }}>
              <TrendingUp size={36} className="text-gold" style={{ margin: '0 auto 12px' }} />
              <h3 style={{ fontSize: '1.25rem', color: 'var(--color-primary)', marginBottom: '8px' }}>Rapid Scaling</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', lineHeight: '1.6' }}>Proven track record of scaling enterprise engineering teams from 5 to 50+ developers within 30 days.</p>
            </div>
            <div style={{ padding: '2rem', background: '#F0F4F8', borderRadius: '18px', border: '1px solid #E2E8F0', textAlign: 'center' }}>
              <Award size={36} className="text-gold" style={{ margin: '0 auto 12px' }} />
              <h3 style={{ fontSize: '1.25rem', color: 'var(--color-primary)', marginBottom: '8px' }}>VIP Consulting</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', lineHeight: '1.6' }}>Dedicated Tier-1 account directors providing 24/7 bespoke strategic HR and tech infrastructure roadmap guidance.</p>
            </div>
          </div>
        </div>
      </div>

      <AboutFeature />
    </div>
  );
};

export default About;