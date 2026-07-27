import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, CheckCircle, ArrowRight } from 'lucide-react';
import ServicesCards from '../components/ServicesCards';
import './Page.css';

const Services = () => {
  return (
    <div className="services-page page-wrapper">
      <div className="page-header bg-primary text-white">
        <div className="container" style={{ textAlign: 'center' }}>
          <h1>Executive Service Solutions</h1>
          <div className="breadcrumb" style={{ fontSize: '1rem', marginTop: '15px', marginBottom: '15px' }}>
            <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link> <span style={{ margin: '0 10px' }}>/</span> <span style={{ opacity: 0.8 }}>Services</span>
          </div>
          <p>Bespoke human capital scaling and mission-critical engineering architectures for high-growth enterprises.</p>
        </div>
      </div>

      <div className="container page-content">
        <div className="content-box" style={{ maxWidth: '1050px', margin: '-3rem auto 2rem', padding: '3rem 4rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '30px', background: 'linear-gradient(135deg, #FFFFFF 0%, #F0F4F8 100%)' }}>
          <div style={{ flex: '1 1 500px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', background: 'rgba(212, 175, 55, 0.12)', border: '1px solid rgba(212, 175, 55, 0.35)', borderRadius: '50px', color: 'var(--color-gold)', fontWeight: '700', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '15px' }}>
              <Sparkles size={16} /> Bespoke Engagement Models
            </div>
            <h2 style={{ fontSize: '2.3rem', color: 'var(--color-primary)', marginBottom: '1rem' }}>Engineered for Enterprise Impact</h2>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.08rem', lineHeight: '1.8' }}>
              We do not provide off-the-shelf templates. Every client engagement begins with a deep architectural audit of your current tech stack or workforce bottlenecks, followed by a custom-curated deployment plan.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', flex: '1 1 300px', background: '#FFFFFF', padding: '2rem', borderRadius: '18px', border: '1px solid #E2E8F0', boxShadow: '0 10px 25px rgba(6, 78, 59, 0.05)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontWeight: '700', color: 'var(--color-primary)' }}>
              <CheckCircle size={20} className="text-gold" /> Dedicated Account Director
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontWeight: '700', color: 'var(--color-primary)' }}>
              <CheckCircle size={20} className="text-gold" /> Zero-Risk Talent Replacement
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontWeight: '700', color: 'var(--color-primary)' }}>
              <CheckCircle size={20} className="text-gold" /> ISO 27001 Certified Security
            </div>
            <Link to="/contact" className="btn btn-gold" style={{ marginTop: '15px', width: '100%' }}>
              Request Custom Proposal <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>

      <ServicesCards />
    </div>
  );
};

export default Services;