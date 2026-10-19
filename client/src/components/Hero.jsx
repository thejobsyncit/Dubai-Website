import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <img src="/dubai_night.jpg" alt="Dubai Burj Khalifa Sunset Skyline" className="hero-bg-img" />
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

      {/* Elegant Curved Divider at the end of the image */}
      <div className="hero-bottom-curve">
        <svg 
          viewBox="0 0 1440 100" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          preserveAspectRatio="none"
        >
          <path 
            d="M0,30 C360,90 720,10 1080,60 C1260,85 1380,50 1440,40 L1440,100 L0,100 Z" 
            fill="rgba(247, 245, 235, 0.45)"
          />
          <path 
            d="M0,55 C320,105 680,35 1040,80 C1240,105 1360,75 1440,65 L1440,100 L0,100 Z" 
            fill="#F7F5EB"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;