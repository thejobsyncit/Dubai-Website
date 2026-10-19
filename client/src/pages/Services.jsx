import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, CheckCircle, ArrowRight, Code, Megaphone, Users } from 'lucide-react';
import ServicesCards from '../components/ServicesCards';
import './Page.css';

const Services = () => {
  return (
    <div className="services-page page-wrapper">
      <div className="page-header">
        <div className="container" style={{ textAlign: 'center' }}>
          <h1>IT &amp; Digital Marketing Recruitment Services</h1>
          <div className="breadcrumb" style={{ fontSize: '1rem', marginTop: '15px', marginBottom: '15px' }}>
            <Link to="/" style={{ color: '#FFFFFF', textDecoration: 'none' }}>Home</Link> <span style={{ margin: '0 10px' }}>/</span> <span style={{ opacity: 0.85 }}>Services</span>
          </div>
          <p>Connecting skilled IT professionals and digital marketing talent with leading companies worldwide.</p>
        </div>
      </div>

      <div className="container page-content">
        <div className="content-box" style={{ maxWidth: '1050px', margin: '-3rem auto 2rem', padding: '3rem 4rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '30px', background: 'var(--white)' }}>
          <div style={{ flex: '1 1 500px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', background: 'var(--peach)', border: '1px solid rgba(240, 120, 36, 0.25)', borderRadius: '50px', color: 'var(--orange-hover)', fontWeight: '700', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '15px' }}>
              <Sparkles size={16} /> Specialized Recruitment Agency
            </div>
            <h2 style={{ fontSize: '2.2rem', color: 'var(--plum)', marginBottom: '1rem', lineHeight: '1.25' }}>
              Precision Sourcing for High-Impact Tech &amp; Marketing Roles
            </h2>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.08rem', lineHeight: '1.8' }}>
              Whether you need senior Python engineers, agile React and full-stack web developers, 
              or ROI-driven performance marketers and SEO leaders, we streamline the hiring process. 
              Our recruiters understand modern tech stacks and growth channels, ensuring accurate matches for both employers and job seekers.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', flex: '1 1 320px', background: 'var(--white)', padding: '2.2rem', borderRadius: '20px', border: '1px solid var(--cream-dark)', boxShadow: '0 10px 25px rgba(56, 25, 50, 0.05)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontWeight: '700', color: 'var(--plum)', fontSize: '0.98rem' }}>
              <CheckCircle size={20} className="text-orange" /> Technical &amp; Coding Evaluations
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontWeight: '700', color: 'var(--plum)', fontSize: '0.98rem' }}>
              <CheckCircle size={20} className="text-orange" /> Digital Marketing &amp; ROI Screening
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontWeight: '700', color: 'var(--plum)', fontSize: '0.98rem' }}>
              <CheckCircle size={20} className="text-orange" /> Permanent, Contract &amp; Remote Staffing
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontWeight: '700', color: 'var(--plum)', fontSize: '0.98rem' }}>
              <CheckCircle size={20} className="text-orange" /> Dedicated Hiring Support in UAE &amp; Global
            </div>
            <Link to="/contact" className="btn btn-orange" style={{ marginTop: '12px', width: '100%', justifyContent: 'center' }}>
              Hire Talent <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>

      <ServicesCards />
    </div>
  );
};

export default Services;