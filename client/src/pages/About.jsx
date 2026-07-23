import React from 'react';
import { Link } from 'react-router-dom';
import AboutFeature from '../components/AboutFeature';

const About = () => {
  return (
    <div className="about-page">
      <div className="page-header bg-primary text-white" style={{ padding: '80px 0', textAlign: 'center' }}>
        <h1>About Us</h1>
        <div className="breadcrumb" style={{ fontSize: '1rem', marginTop: '15px' }}>
          <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link> <span style={{ margin: '0 10px' }}>/</span> <span style={{ opacity: 0.8 }}>About Us</span>
        </div>
        <p style={{ marginTop: '20px' }}>Learn more about our mission, vision, and team.</p>
      </div>
      <AboutFeature />
    </div>
  );
};

export default About;