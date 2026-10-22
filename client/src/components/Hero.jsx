import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <img src="/background_for_jasync.jpg" alt="Modern Dubai Business Cityscape" className="hero-bg-img" />
      <div className="hero-bg-overlay"></div>
      
      <div className="container hero-container">
        <div className="hero-content" data-aos="fade-up">
          <span className="hero-subtitle">IT &amp; DIGITAL MARKETING RECRUITMENT AGENCY.</span>
          <h1>
            Connecting Talent <br/>
            with <span className="hero-opportunity">Global Opportunities.</span>
          </h1>
          <p>
            We connect skilled IT professionals and digital marketing talent with leading companies, helping candidates build rewarding careers and employers find the right talent.
          </p>
          <div className="hero-actions">
            <Link to="/services" className="btn btn-hero" onClick={() => window.scrollTo(0, 0)}>
              Explore Opportunities <ArrowRight size={18} />
            </Link>
          </div>
        </div>

        <div className="experience-card glass-card" data-aos="fade-left" data-aos-delay="300">
          <div className="exp-info">
            <h2>15+</h2>
            <p>Years of <br/> Experience</p>
          </div>
        </div>
      </div>

      {/* Bottom curved shape divider merging Hero into next section */}
      <div className="hero-shape-divider" aria-hidden="true">
        <svg viewBox="0 0 1440 90" preserveAspectRatio="none">
          <path
            d="M0,32 C280,72 540,10 880,48 C1160,80 1340,32 1440,45 L1440,90 L0,90 Z"
            fill="rgba(250, 250, 252, 0.45)"
          />
          <path
            d="M0,48 C320,18 600,62 940,28 C1180,58 1350,30 1440,38 L1440,90 L0,90 Z"
            fill="rgba(251, 191, 36, 0.18)"
          />
          <path
            d="M0,58 C380,18 720,70 1060,32 C1260,10 1390,40 1440,44 L1440,90 L0,90 Z"
            fill="#FAFAFC"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;