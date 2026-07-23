import React from 'react';
import { Link } from 'react-router-dom';
import ServicesCards from '../components/ServicesCards';

const Services = () => {
  return (
    <div className="services-page">
      <div className="page-header bg-primary text-white" style={{ padding: '80px 0', textAlign: 'center' }}>
        <h1>Our Services</h1>
        <div className="breadcrumb" style={{ fontSize: '1rem', marginTop: '15px' }}>
          <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link> <span style={{ margin: '0 10px' }}>/</span> <span style={{ opacity: 0.8 }}>Services</span>
        </div>
        <p style={{ marginTop: '20px' }}>Discover the tailored IT solutions we provide to scale your business.</p>
      </div>
      <ServicesCards />
    </div>
  );
};

export default Services;