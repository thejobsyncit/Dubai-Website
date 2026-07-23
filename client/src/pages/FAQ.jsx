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
      <div className="page-header bg-primary text-white">
        <div className="container" style={{ textAlign: 'center' }}>
          <h1>Frequently Asked Questions</h1>
          <div className="breadcrumb" style={{ fontSize: '1rem', marginTop: '15px', marginBottom: '15px' }}>
            <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link> <span style={{ margin: '0 10px' }}>/</span> <span style={{ opacity: 0.8 }}>FAQ</span>
          </div>
          <p>Find quick answers to common questions about our services.</p>
        </div>
      </div>
      
      <div className="container page-content">
        <div className="content-box" style={{ maxWidth: '800px', margin: '-3rem auto 0' }}>
          {faqs.map((faq, i) => (
            <div key={i} style={{ borderBottom: '1px solid #eee', padding: '1.5rem 0' }}>
              <h3 style={{ fontSize: '1.2rem', color: 'var(--color-primary)', marginBottom: '0.8rem' }}>{faq.q}</h3>
              <p style={{ color: 'var(--color-text-main)', lineHeight: '1.6' }}>{faq.a}</p>
            </div>
          ))}
          <div style={{ marginTop: '3rem', textAlign: 'center' }}>
            <p style={{ marginBottom: '1rem' }}>Still have questions?</p>
            <a href="/contact" className="btn btn-primary">Contact Us directly</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
