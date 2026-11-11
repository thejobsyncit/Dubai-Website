import React from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';
import './ServicesCards.css';

const ServicesCards = () => {
  const serviceCategories = [
    {
      title: "Full-Stack & Web Development",
      accentColor: "var(--gold)",
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
      accentColor: "var(--navy)",
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
      accentColor: "var(--corporate-blue)",
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
      accentColor: "var(--gold)",
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
      accentColor: "var(--navy)",
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
      accentColor: "var(--corporate-blue)",
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
      accentColor: "var(--gold)",
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
      accentColor: "var(--navy)",
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
      accentColor: "var(--corporate-blue)",
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
      accentColor: "var(--gold)",
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
      accentColor: "var(--navy)",
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
      accentColor: "var(--corporate-blue)",
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

        <div className="services-header text-center">
          <Link to="/services" className="section-label" style={{ display: 'inline-block', textDecoration: 'none' }} onClick={() => window.scrollTo(0, 0)}>Our Recruitment Practices</Link>
          <h2>Specialized IT &amp; Digital Marketing Hiring Services</h2>
          <p style={{ color: 'var(--color-text-muted)', maxWidth: '920px', margin: '0.8rem auto 0', fontSize: '1.05rem', lineHeight: '1.6' }}>
            We provide targeted recruitment solutions tailored to the modern technology and digital marketing ecosystem across the UAE and globally.
          </p>
        </div>

        <div className="services-practice-grid">
          {serviceCategories.map((cat, idx) => (
            <div className="practice-card" key={idx}>
              <div className="practice-card-accent" style={{ backgroundColor: cat.accentColor }} />

              <div className="practice-card-body">
                <h3 className="practice-card-title">{cat.title}</h3>

                <ul className="practice-checklist">
                  {cat.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="practice-check-item">
                      <span className="practice-check-icon">
                        <Check size={12} strokeWidth={3} aria-hidden="true" />
                      </span>
                      <span className="practice-item-text">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="practice-card-footer">
                  <Link to="/contact" className="practice-contact-link" onClick={() => window.scrollTo(0, 0)}>
                    Contact Us <ArrowRight size={15} aria-hidden="true" />
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
