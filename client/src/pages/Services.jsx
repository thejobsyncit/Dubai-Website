import React from 'react';
import { Link } from 'react-router-dom';
import ServicesCards from '../components/ServicesCards';

const Services = () => {
  return (
    <div className="page-wrapper">
      <div className="page-header">
        <div className="container">
          <h1 data-aos="fade-up">Our Services</h1>
          <div className="breadcrumb" data-aos="fade-up" data-aos-delay="100">
            <Link to="/">Home</Link> <span style={{ margin: '0 10px', color: 'var(--color-text-light)' }}>/</span> <span style={{ color: 'var(--color-white)' }}>Services</span>
          </div>
          <p data-aos="fade-up" data-aos-delay="200">Discover the tailored IT solutions we provide to scale your business.</p>
        </div>
      </div>
      <ServicesCards />
    </div>
  );
};

export default Services;