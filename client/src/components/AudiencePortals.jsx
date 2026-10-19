import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, UserCircle2, CheckCircle2, ArrowRight, FileUp, Sparkles } from 'lucide-react';
import './AudiencePortals.css';

const AudiencePortals = () => {
  return (
    <section className="audience-portals-section">
      <div className="container">
        <div className="portals-header text-center" data-aos="fade-up">
          <span className="section-label">Empowering Both Sides of Recruitment</span>
          <h2>Tailored Solutions for Employers &amp; Candidates</h2>
          <p className="portals-subhead">
            Whether you are scaling an engineering squad or taking the next major step in your tech or marketing career, The Jasync connects you with the right opportunities.
          </p>
        </div>

        <div className="portals-grid">
          {/* Employers Portal */}
          <div className="portal-card employer-portal" data-aos="fade-up" data-aos-delay="100">
            <div className="portal-badge employer-badge">
              <Building2 size={16} />
              <span>For Employers &amp; Hiring Leaders</span>
            </div>
            
            <h3 className="portal-title">Hire Top IT &amp; Digital Marketing Talent</h3>
            <p className="portal-desc">
              Accelerate your hiring roadmap with thoroughly evaluated software developers, Python and React specialists, full-stack engineers, and high-impact digital marketing strategists.
            </p>

            <ul className="portal-features">
              <li>
                <CheckCircle2 size={18} className="portal-check text-orange" />
                <span>Pre-vetted Python, React, Web &amp; Full-Stack Developers</span>
              </li>
              <li>
                <CheckCircle2 size={18} className="portal-check text-orange" />
                <span>Data-driven Performance Marketers, SEO &amp; Growth Leads</span>
              </li>
              <li>
                <CheckCircle2 size={18} className="portal-check text-orange" />
                <span>Flexible engagement: Permanent, Contract &amp; Remote Teams</span>
              </li>
              <li>
                <CheckCircle2 size={18} className="portal-check text-orange" />
                <span>Precise technical screening and cultural alignment</span>
              </li>
            </ul>

            <div className="portal-actions">
              <Link 
                to="/contact" 
                className="btn btn-orange portal-cta"
                onClick={() => window.scrollTo(0, 0)}
              >
                Hire Talent <ArrowRight size={18} />
              </Link>
              <Link 
                to="/services" 
                className="portal-secondary-link"
                onClick={() => window.scrollTo(0, 0)}
              >
                Explore Hiring Services
              </Link>
            </div>
          </div>

          {/* Job Seekers Portal */}
          <div className="portal-card candidate-portal" data-aos="fade-up" data-aos-delay="200">
            <div className="portal-badge candidate-badge">
              <UserCircle2 size={16} />
              <span>For Job Seekers &amp; Tech Professionals</span>
            </div>

            <h3 className="portal-title">Advance Your Tech &amp; Marketing Career</h3>
            <p className="portal-desc">
              Unlock premier opportunities with innovative startups, digital agencies, and enterprise leaders across the UAE and global markets. Matched to your skills and ambition.
            </p>

            <ul className="portal-features">
              <li>
                <CheckCircle2 size={18} className="portal-check text-orange" />
                <span>Roles in Software Development, Python, React &amp; Cloud</span>
              </li>
              <li>
                <CheckCircle2 size={18} className="portal-check text-orange" />
                <span>Openings in SEO, Paid Media, Social &amp; Content Marketing</span>
              </li>
              <li>
                <CheckCircle2 size={18} className="portal-check text-orange" />
                <span>Direct exposure to leading UAE and international employers</span>
              </li>
              <li>
                <CheckCircle2 size={18} className="portal-check text-orange" />
                <span>Confidential career consultation and interview coaching</span>
              </li>
            </ul>

            <div className="portal-actions dual-buttons">
              <Link 
                to="/services" 
                className="btn btn-orange portal-cta"
                onClick={() => window.scrollTo(0, 0)}
              >
                Explore Jobs <ArrowRight size={18} />
              </Link>
              <Link 
                to="/contact" 
                className="btn btn-orange-outline portal-cta"
                onClick={() => window.scrollTo(0, 0)}
              >
                <FileUp size={18} /> Submit Your Resume
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AudiencePortals;
