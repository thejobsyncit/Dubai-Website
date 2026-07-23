import React from 'react';
import { Link } from 'react-router-dom';
import AboutFeature from '../components/AboutFeature';

const About = () => {
  return (
    <div className="page-wrapper">
      <div className="page-header">
        <div className="container">
          <h1 data-aos="fade-up">About Us</h1>
          <div className="breadcrumb" data-aos="fade-up" data-aos-delay="100">
            <Link to="/">Home</Link> <span style={{ margin: '0 10px', color: 'var(--color-text-light)' }}>/</span> <span style={{ color: 'var(--color-white)' }}>About Us</span>
          </div>
          <p data-aos="fade-up" data-aos-delay="200">Learn more about our mission, vision, and team.</p>
        </div>
      </div>
      <AboutFeature />
    </div>
  );
};

export default About;