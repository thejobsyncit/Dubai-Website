import React from 'react';
import { Link } from 'react-router-dom';
import './Page.css';

const FAQ = () => {
  const faqs = [
    {
      q: "What industries do you serve?",
      a: "We serve a wide variety of industries including Finance, Healthcare, Retail, Logistics, and Manufacturing, providing tailored IT solutions to meet specific sector compliance and efficiency needs."
    },
    {
      q: "Do you offer 24/7 support?",
      a: "Yes, our managed IT services and cloud support teams offer 24/7 monitoring and response to ensure your business operations never face unnecessary downtime."
    },
    {
      q: "How long does a typical software development project take?",
      a: "Project timelines vary greatly depending on scope and complexity. A simple web application might take 4-8 weeks, while a complex enterprise system could take 6 months or more. We provide detailed timelines during our initial consultation."
    },
    {
      q: "How do you ensure data security?",
      a: "Security is built into everything we do. We employ zero-trust architectures, end-to-end encryption, regular vulnerability audits, and strict compliance with international data protection standards."
    }
  ];

  return (
    <div className="page-wrapper">
      <div className="page-header">
        <div className="container">
          <h1 data-aos="fade-up">Frequently Asked Questions</h1>
          <div className="breadcrumb" data-aos="fade-up" data-aos-delay="100">
            <Link to="/">Home</Link> <span style={{ margin: '0 10px', color: 'var(--color-text-light)' }}>/</span> <span style={{ color: 'var(--color-white)' }}>FAQ</span>
          </div>
          <p data-aos="fade-up" data-aos-delay="200">Find quick answers to common questions about our services.</p>
        </div>
      </div>
      
      <div className="container page-content">
        <div className="content-box" style={{ maxWidth: '800px', margin: '-5rem auto 0' }} data-aos="fade-up" data-aos-delay="300">
          {faqs.map((faq, i) => (
            <div key={i} style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)', padding: '1.5rem 0' }}>
              <h3 style={{ fontSize: '1.2rem', color: 'var(--color-white)', marginBottom: '0.8rem', fontFamily: 'var(--font-family-serif)' }}>{faq.q}</h3>
              <p style={{ color: 'var(--color-text-light)', lineHeight: '1.6' }}>{faq.a}</p>
            </div>
          ))}
          <div style={{ marginTop: '3rem', textAlign: 'center' }}>
            <p style={{ marginBottom: '1rem', color: 'var(--color-text-main)' }}>Still have questions?</p>
            <Link to="/contact" className="btn btn-primary">Contact Us directly</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
