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
      </div>

      <ServicesCards />
    </div>
  );
};

export default Services;