import React from 'react';
import ServicesCards from '../components/ServicesCards';
import './Page.css';

const Services = () => {
  return (
    <div className="services-page page-wrapper">
      <div className="page-header services-page-header">
        <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 3 }}>
          <div className="header-pill-badge" data-aos="fade-down">
            OUR EXPERTISE
          </div>
          <h1 data-aos="fade-up">
            Our <span className="header-highlight">Services</span>
          </h1>
          <p data-aos="fade-up" data-aos-delay="100">
            Connecting skilled IT professionals and digital marketing talent with leading companies worldwide.
          </p>
        </div>

        {/* Crisp Single-Layer Fluid Wave Divider */}
        <div className="page-header-curve">
          <svg viewBox="0 0 1440 90" fill="none" preserveAspectRatio="none">
            <path 
              d="M0,45 C380,95 720,18 1080,58 C1260,78 1380,48 1440,38 L1440,90 L0,90 Z" 
              fill="var(--cream)" 
            />
          </svg>
        </div>
      </div>

      <ServicesCards />
    </div>
  );
};

export default Services;