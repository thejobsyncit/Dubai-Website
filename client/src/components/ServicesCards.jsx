import React from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';
import './ServicesCards.css';

const ServicesCards = () => {
  const serviceCategories = [
    {
      title: "Full-Stack & Web Development",
      gradient: "linear-gradient(90deg, #FBBF24 0%, #F59E0B 100%)",
      items: [
        "Custom Web Applications & Portals",
        "React.js, Next.js & Modern UI Frontend",
        "Node.js, Express & Python Backend APIs",
        "RESTful & GraphQL Microservices Architecture",
        "Relational & NoSQL Database Optimization"
      ]
    },
    {
      title: "Python & Backend Engineering",
      gradient: "linear-gradient(90deg, #282B4A 0%, #4D5380 100%)",
      items: [
        "Senior Python Developers (Django, FastAPI, Flask)",
        "High-Performance Distributed Backend Systems",
        "Scalable Microservices & RESTful API Architecture",
        "Data Pipelines, ETL Workflows & Automation",
        "Secure Database Optimization & Caching"
      ]
    },
    {
      title: "React & Frontend Specialists",
      gradient: "linear-gradient(90deg, #F59E0B 0%, #D97706 100%)",
      items: [
        "Modern React.js & Next.js Single-Page Apps",
        "Component-Driven UI Design Systems",
        "State Management (Redux, Zustand, Context)",
        "Core Web Vitals & Frontend Speed Optimization",
        "Cross-Browser & Mobile-First Web Architecture"
      ]
    },
    {
      title: "Marketing Analyst",
      gradient: "linear-gradient(90deg, #3C4066 0%, #282B4A 100%)",
      items: [
        "Google Analytics 4 (GA4) & Google Tag Manager",
        "Multi-Touch Attribution & Funnel Tracking",
        "SQL, BigQuery & Looker Studio Dashboards",
        "Customer Lifetime Value (LTV) & Cohort Analysis",
        "Data-Driven Marketing Budget & ROI Forecasting"
      ]
    },
    {
      title: "Social Media Executive",
      gradient: "linear-gradient(90deg, #FBBF24 0%, #F59E0B 100%)",
      items: [
        "Multi-Platform Organic Social Strategy",
        "High-Engagement Content Planning & Publishing",
        "Online Community Management & Follower Growth",
        "Influencer Outreach & Brand Collaborations",
        "Social Listening & Trend Analytics"
      ]
    },
    {
      title: "Performance Marketing & Paid Media",
      gradient: "linear-gradient(90deg, #282B4A 0%, #F59E0B 100%)",
      items: [
        "Google Ads (Search, Performance Max, Display)",
        "Meta Ads (Facebook & Instagram High-ROI Scaling)",
        "TikTok, LinkedIn & Programmatic Media Buying",
        "Multi-Variant A/B Creative & Copy Testing",
        "High-Converting Lead Generation Funnels"
      ]
    },
    {
      title: "SEO & Search Strategy",
      gradient: "linear-gradient(90deg, #F59E0B 0%, #FBBF24 100%)",
      items: [
        "Comprehensive Technical SEO & Web Audits",
        "High-Intent Keyword Strategy & Competitor Analysis",
        "On-Page Optimization & Schema Markup",
        "High-Authority Link Building & Digital PR",
        "Local Dubai & Regional UAE Search Dominance"
      ]
    },
    {
      title: "Content Writer & Copywriting",
      gradient: "linear-gradient(90deg, #282B4A 0%, #3C4066 100%)",
      items: [
        "High-Converting Landing Pages & Website Copy",
        "Technical Content Writing & Enterprise Case Studies",
        "SEO Blog Strategy & Thought-Leadership Articles",
        "Email Marketing Sequences & Nurture Funnels",
        "Brand Messaging Guidelines & Tone of Voice"
      ]
    },
    {
      title: "Video Editor & Motion Designer",
      gradient: "linear-gradient(90deg, #D97706 0%, #F59E0B 100%)",
      items: [
        "Commercial & Corporate Video Production",
        "Short-Form Social Videos (Reels, TikToks, Shorts)",
        "Motion Graphics & 2D/3D Animation",
        "Post-Production, Color Grading & Sound Design",
        "High-Converting Paid Video Ad Creatives"
      ]
    },
    {
      title: "Cloud & DevOps Talent",
      gradient: "linear-gradient(90deg, #4D5380 0%, #282B4A 100%)",
      items: [
        "AWS, Azure & Google Cloud Architecture",
        "CI/CD Pipeline Automation (GitHub, GitLab, Jenkins)",
        "Docker Containerization & Kubernetes Clusters",
        "Infrastructure as Code (Terraform, Ansible)",
        "24/7 Site Reliability (SRE) & System Monitoring"
      ]
    },
    {
      title: "Cybersecurity & IT Infrastructure",
      gradient: "linear-gradient(90deg, #FBBF24 0%, #F59E0B 100%)",
      items: [
        "Enterprise Security Audits & Vulnerability Testing",
        "Network Hardening, Firewalls & VPN Management",
        "Compliance & Data Privacy (GDPR, ISO 27001)",
        "Threat Detection, Incident Response & Mitigation",
        "Disaster Recovery & Redundant Cloud Backups"
      ]
    },
    {
      title: "Executive Tech & Marketing Search",
      gradient: "linear-gradient(90deg, #282B4A 0%, #F59E0B 100%)",
      items: [
        "Confidential CTO, VP of Engineering & CPO Searches",
        "Chief Marketing Officer (CMO) & Growth Headhunting",
        "Dedicated Distributed Engineering Pods",
        "UAE & Global Relocation Leadership Support",
        "Rigorous Technical & Cultural Executive Vetting"
      ]
    }
  ];

  return (
    <section className="services-section section-padding">
      <div className="container services-container">
        
        <div className="services-header text-center" data-aos="fade-up">
          <Link to="/services" className="section-label" style={{ display: 'inline-block', textDecoration: 'none' }} onClick={() => window.scrollTo(0, 0)}>Our Recruitment Practices</Link>
          <h2>Specialized IT &amp; Digital Marketing Hiring Services</h2>
          <p style={{ color: 'var(--color-text-muted)', maxWidth: '920px', margin: '0.8rem auto 0', fontSize: '1.05rem', lineHeight: '1.6' }}>
            We provide targeted recruitment solutions tailored to the modern technology and digital marketing ecosystem across the UAE and globally.
          </p>
        </div>

        {/* 3-In-A-Row Practice Cards Grid (All Services in Reference Card Style with Website Brand Colors) */}
        <div className="services-practice-grid">
          {serviceCategories.map((cat, idx) => (
            <div className="practice-card" key={idx} data-aos="fade-up" data-aos-delay={(idx % 3) * 100}>
              {/* Top Accent Gradient Bar */}
              <div className="practice-card-accent" style={{ background: cat.gradient }} />
              
              <div className="practice-card-body">
                <h3 className="practice-card-title">{cat.title}</h3>
                
                <ul className="practice-checklist">
                  {cat.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="practice-check-item">
                      <span className="practice-check-icon">
                        <Check size={12} strokeWidth={3} />
                      </span>
                      <span className="practice-item-text">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="practice-card-footer">
                  <Link to="/contact" className="practice-contact-link" onClick={() => window.scrollTo(0, 0)}>
                    Contact Us <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesCards;
