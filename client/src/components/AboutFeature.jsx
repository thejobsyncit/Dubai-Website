import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowLeft, ArrowRight } from 'lucide-react';
import './AboutFeature.css';

const AboutFeature = () => {
  const [currentImage, setCurrentImage] = React.useState(0);
  const images = [
    "/about_team_1784706532944.png",
    "/business_shaking_hands_1784705704439.png",
    "/tech_about_1_1784711238631.png",
    "/business_meeting_1784705676985.png",
    "/business_consultant_1784705724844.png"
  ];

  const handlePrev = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="about-section section-padding">
      <div className="container about-container">
        
        {/* Left Side: Images & Stats Box */}
        <div className="about-left" data-aos="fade-right">
          <div className="about-image-main">
            <img src={images[currentImage]} alt="Engineering Team" style={{ transition: 'opacity 0.3s ease-in-out' }} />
          </div>
          <div className="about-image-secondary" data-aos="zoom-in" data-aos-delay="300">
            <img src={images[(currentImage + 1) % images.length]} alt="Team Discussion" style={{ transition: 'opacity 0.3s ease-in-out' }} />
          </div>
          
          <div className="stats-box bg-primary" data-aos="fade-up" data-aos-delay="500">
            <h3>1M+</h3>
            <p>Overall happy<br/>Customers</p>
          </div>
          
          {/* Decorative Arrows */}
          <div className="about-arrows">
            <div className="arrow-circle" onClick={handlePrev}><ArrowLeft size={16} /></div>
            <div className="arrow-circle bg-dark" onClick={handleNext}><ArrowRight size={16} color="white" /></div>
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="about-right" data-aos="fade-left" data-aos-delay="200">
          <Link to="/about" className="section-label bg-primary text-white" style={{ display: 'inline-block', textDecoration: 'none' }} onClick={() => window.scrollTo(0, 0)}>About Us</Link>
          <h2>Scaling Engineering Teams for Growing IT Companies</h2>
          <p className="text-light">
            Helping IT companies scale faster with expert engineering talent and flexible development support. 
            Our team works closely with clients to design customized solutions aligned with their business goals.
          </p>

          <ul className="feature-list">
            <li>
              <CheckCircle2 className="check-icon" size={20} />
              <span>Tailored Recruitment Solutions</span>
            </li>
            <li>
              <CheckCircle2 className="check-icon" size={20} />
              <span>Dedicated Industry Experts</span>
            </li>
            <li>
              <CheckCircle2 className="check-icon" size={20} />
              <span>Rapid Team Scaling & Deployment</span>
            </li>
          </ul>

          <div className="awards-container">
            <div className="award-item">
              <div className="award-icon">🏆</div>
              <div>
                <h4>Certified Company</h4>
                <p>Trusted and certified for delivering quality IT solutions.</p>
              </div>
            </div>
            <div className="award-item">
              <div className="award-icon">🏅</div>
              <div>
                <h4>Award Ceremony</h4>
                <p>Proud recipient of industry awards for innovation and excellence.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutFeature;
