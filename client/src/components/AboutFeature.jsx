import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import './AboutFeature.css';

const AboutFeature = () => {
  const [currentImage, setCurrentImage] = React.useState(0);

  const images = [
    "/about_1.jpg",
    "/about_2.jpg",
    "/about_3.jpg"
  ];

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section className="about-section section-padding">
      <div className="container">

        <div className="about-header">
          <h2>About Our Company</h2>
          <div className="about-header-line"></div>
        </div>

        <div className="about-cards-grid">

          <div className="about-card about-card-left">
            <div className="about-card-img-wrap">
              {images.map((imgSrc, idx) => (
                <img
                  key={idx}
                  src={imgSrc}
                  alt={`TheJaySync Showcase ${idx + 1}`}
                  className={`about-card-img ${idx === currentImage ? 'active' : ''}`}
                />
              ))}
              <div className="about-card-img-overlay" aria-hidden="true"></div>

              <div className="about-card-badge">
                <h3>THE JASYNC</h3>
                <p>Specialized IT &amp;<br />Digital Marketing Recruitment</p>
              </div>
            </div>
          </div>

          <div className="about-card about-card-right">
            <div className="about-card-body">
              <span className="about-card-pill">ABOUT THE JASYNC</span>
              <h2>Connecting Specialized Tech &amp; Marketing Talent with Industry Leaders</h2>

              <p className="text-light">
                Headquartered at Dubai Creek Tower, THE JASYNC bridges the gap between elite software engineers, web developers, and performance marketers with top organizations across the UAE and worldwide. Our tailored recruitment approach ensures exceptional technical talent and culture fit for fast-moving teams.
              </p>

              <ul className="feature-list">
                <li>
                  <CheckCircle2 className="check-icon" size={20} aria-hidden="true" />
                  <span>Rigorous Technical &amp; Coding Screening (Python, React, Cloud DevOps)</span>
                </li>
                <li>
                  <CheckCircle2 className="check-icon" size={20} aria-hidden="true" />
                  <span>Vetted Performance Marketers, SEO &amp; Growth Strategists</span>
                </li>
                <li>
                  <CheckCircle2 className="check-icon" size={20} aria-hidden="true" />
                  <span>Tailored Sourcing for Contract, Permanent &amp; Distributed Remote Teams</span>
                </li>
              </ul>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutFeature;
