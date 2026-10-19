import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import './AboutFeature.css';

const AboutFeature = () => {
  const [currentImage, setCurrentImage] = React.useState(0);

  // =========================================================================
  // SHOWCASE IMAGES (Auto-scrolling Slideshow)
  // CHANGE IMAGES HERE: Replace image paths below
  // =========================================================================
  const images = [
    "/about_1.jpg", // Image 1 (About us 1)
    "/about_2.jpg", // Image 2 (About us 2)
    "/about_3.jpg"  // Image 3 (About us 3)
  ];

  // Automatic Smooth Image Scroll / Slideshow every 4 seconds
  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section className="about-section section-padding">
      <div className="container">
        
        {/* Centered Section Header */}
        <div className="about-header" data-aos="fade-up">
          <Link 
            to="/about" 
            className="section-label" 
            onClick={() => window.scrollTo(0, 0)}
          >
            About Our Company
          </Link>
        </div>

        {/* Dual Cards Grid (Equal Alignment & Height) */}
        <div className="about-cards-grid">
          
          {/* Left Card: Automatic Scrolling Image Showcase Card */}
          <div className="about-card about-card-left" data-aos="fade-right">
            <div className="about-card-img-wrap">
              {images.map((imgSrc, idx) => (
                <img 
                  key={idx}
                  src={imgSrc} 
                  alt={`TheJaySync Showcase ${idx + 1}`} 
                  className={`about-card-img ${idx === currentImage ? 'active' : ''}`}
                />
              ))}
              <div className="about-card-img-overlay"></div>
              
              {/* Company Badge (Updated for TheJaySync) */}
              <div className="about-card-badge">
                <h3>THE JASYNC</h3>
                <p>Specialized IT &amp;<br/>Digital Marketing Recruitment</p>
              </div>
            </div>
          </div>

          {/* Right Card: Content Card */}
          <div className="about-card about-card-right" data-aos="fade-left" data-aos-delay="150">
            <div className="about-card-body">
              <h2>Connecting Specialized Tech &amp; Marketing Talent with Industry Leaders</h2>
              
              <p className="text-light">
                We bridge the gap between elite software engineers, web developers, and performance marketers with top organizations across the UAE and worldwide. Our tailored recruitment approach ensures exceptional technical talent and culture fit for fast-moving teams.
              </p>

              <ul className="feature-list">
                <li>
                  <CheckCircle2 className="check-icon" size={20} />
                  <span>Rigorous Technical &amp; Coding Screening (Python, React, Cloud)</span>
                </li>
                <li>
                  <CheckCircle2 className="check-icon" size={20} />
                  <span>Vetted Performance Marketers, SEO &amp; Growth Strategists</span>
                </li>
                <li>
                  <CheckCircle2 className="check-icon" size={20} />
                  <span>Tailored Sourcing for Contract, Permanent &amp; Remote Teams</span>
                </li>
              </ul>

              <div className="about-card-action">
                <Link 
                  to="/about" 
                  className="btn btn-primary read-more-btn" 
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Read More <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutFeature;
