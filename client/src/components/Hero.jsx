import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <img src="/dubai_business_hero.png" alt="Dubai DIFC Business Skyscraper Background" className="hero-bg-img" />
      <div className="hero-bg-overlay"></div>
      
      <div className="container hero-container">
        <div className="hero-content" data-aos="fade-up">
          <span className="hero-subtitle">PREMIER RECRUITMENT AGENCY IN UAE</span>
          <h1>
            Connecting Talent <br/>
            with <span className="text-gradient">Opportunity</span>
          </h1>
          <p>
            We provide expert staffing and HR solutions across the UAE, helping businesses build high-performing teams and professionals find their dream careers.
          </p>
          <Link to="/about" className="btn btn-gold" onClick={() => window.scrollTo(0, 0)}>Discover More</Link>
        </div>

        <div className="experience-card glass-card" data-aos="fade-left" data-aos-delay="300">
          <div className="exp-info">
            <h2>15+</h2>
            <p>Years of <br/> Experience</p>
          </div>
          <div className="exp-image">
            <img src="/real_hero_exp.jpg" alt="Experience" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;