import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Users, TrendingUp, ArrowRight } from 'lucide-react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  const pillars = [
    {
      num: "01",
      badge: "100% Specialized",
      title: "Exclusively Tech & Growth",
      description: "Unlike generalist agencies, we focus solely on software engineering, Python, React, Cloud, DevOps, and performance digital marketing."
    },
    {
      num: "02",
      badge: "Pre-Vetted Talent",
      title: "Code & Architecture Vetting",
      description: "Every candidate undergoes practical coding challenges, portfolio evaluations, and architectural interviews before you ever meet them."
    },
    {
      num: "03",
      badge: "48-72h Shortlists",
      title: "Accelerated Hiring Velocity",
      description: "Receive verified candidate shortlists in under 72 hours, cutting down your hiring turnaround while maintaining exceptional standards."
    },
    {
      num: "04",
      badge: "Dubai & Worldwide",
      title: "Global Reach & UAE Expertise",
      description: "Access elite remote and relocation-ready engineers globally, with comprehensive guidance on UAE labor compliance and seamless onboarding."
    },
    {
      num: "05",
      badge: "90-Day Guarantee",
      title: "Guaranteed Hiring Quality",
      description: "Every placement is backed by our 90-day replacement warranty and a 94% retention rate, ensuring complete security and long-term organizational fit."
    }
  ];

  const topRow = pillars.slice(0, 3);
  const bottomRow = pillars.slice(3, 5);

  return (
    <section className="why-section section-padding">
      <div className="container">
        
        {/* Section Header */}
        <div className="why-header text-center" data-aos="fade-up">
          <span className="section-label">Why Choose Us</span>
          <h2>Engineered for High-Growth Tech &amp; Marketing Teams</h2>
          <p className="why-subhead">
            We combine rigorous technical screening, rapid turnaround times, and verified candidate quality to help you build high-performing teams with complete confidence.
          </p>
        </div>

        {/* 3 + 2 Cards Layout with Numbers */}
        <div className="why-cards-container">
          
          {/* Row 1: 3 Cards */}
          <div className="why-row-top">
            {topRow.map((item, idx) => (
              <div className="why-feature-card" key={idx} data-aos="fade-up" data-aos-delay={idx * 100}>
                <div className="card-header-row">
                  <span className="card-num">{item.num}</span>
                  <span className="card-badge">{item.badge}</span>
                </div>
                <h3 className="card-title">{item.title}</h3>
                <p className="card-desc">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Row 2: 2 Cards Centered */}
          <div className="why-row-bottom">
            {bottomRow.map((item, idx) => (
              <div className="why-feature-card" key={idx + 3} data-aos="fade-up" data-aos-delay={(idx + 3) * 100}>
                <div className="card-header-row">
                  <span className="card-num">{item.num}</span>
                  <span className="card-badge">{item.badge}</span>
                </div>
                <h3 className="card-title">{item.title}</h3>
                <p className="card-desc">{item.description}</p>
              </div>
            ))}
          </div>

        </div>

        {/* Bottom Trust Guarantee Banner */}
        <div className="why-trust-banner" data-aos="fade-up" data-aos-delay="200">
          <div className="trust-stats-row">
            <div className="trust-stat-item">
              <div className="trust-stat-icon">
                <Award size={22} />
              </div>
              <div>
                <h4>90-Day Placement Guarantee</h4>
                <p>Free candidate replacement warranty</p>
              </div>
            </div>

            <div className="trust-stat-item">
              <div className="trust-stat-icon">
                <Users size={22} />
              </div>
              <div>
                <h4>94% Retention Rate</h4>
                <p>Long-term organizational stability</p>
              </div>
            </div>

            <div className="trust-stat-item">
              <div className="trust-stat-icon">
                <TrendingUp size={22} />
              </div>
              <div>
                <h4>45% Faster Time-to-Hire</h4>
                <p>Immediate engineering productivity</p>
              </div>
            </div>
          </div>

          <div className="trust-cta-wrap">
            <Link 
              to="/contact" 
              className="btn btn-primary" 
              onClick={() => window.scrollTo(0, 0)}
            >
              Hire Elite Talent <ArrowRight size={18} />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
