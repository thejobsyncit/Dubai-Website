import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-bg-overlay">
        <img src="/real_hero_bg.jpg" alt="Tech Background" className="hero-bg-img" />
      </div>
      
      <div className="container hero-container">
        <div className="hero-content" data-aos="fade-up">
          <span className="hero-subtitle">PREMIER RECRUITMENT AGENCY IN UAE</span>
          <h1>
            Connecting Talent <br/>
            with Opportunity
          </h1>
          <p>
            We provide expert staffing and HR solutions across the UAE, helping businesses build high-performing teams and professionals find their dream careers.
          </p>
          <Link to="/about" className="btn btn-white hero-btn" style={{ display: 'inline-block', textDecoration: 'none' }} onClick={() => window.scrollTo(0, 0)}>Discover More</Link>
        </div>

        <div className="experience-card" data-aos="fade-left" data-aos-delay="300">
          <div className="exp-info">
            <h2>15+</h2>
            <p>Years of <br/> Experience</p>
          </div>
          <div className="exp-image">
            <img src="/real_hero_exp.jpg" alt="Experience" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;