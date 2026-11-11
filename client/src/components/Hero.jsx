import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <img src="/background_for_jasync.jpg" alt="Modern Dubai Business Cityscape" className="hero-bg-img" />
      <div className="hero-bg-overlay" aria-hidden="true"></div>

      <div className="container hero-container">
        <div className="hero-content">
          <span className="hero-subtitle">IT &amp; DIGITAL MARKETING RECRUITMENT AGENCY</span>
          <h1>
            Connecting Talent <br />
            with <span className="hero-opportunity">Global Opportunities.</span>
          </h1>
          <p>
            We connect skilled IT professionals and digital marketing talent with leading companies, helping candidates build rewarding careers and employers find the right talent.
          </p>
          <div className="hero-actions">
            <Link to="/services" className="btn btn-hero" onClick={() => window.scrollTo(0, 0)}>
              Explore Opportunities <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <Link to="/contact" className="btn btn-hero-secondary" onClick={() => window.scrollTo(0, 0)}>
              Contact Our Team
            </Link>
          </div>
        </div>

        <div className="experience-card">
          <div className="exp-info">
            <h2>15+</h2>
            <p>Years of <br /> Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
