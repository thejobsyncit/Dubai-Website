import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import './Page.css';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "What corporate industries and sectors in the UAE do you serve?",
      a: "We serve a prestigious portfolio of industries across Dubai, Abu Dhabi, and the wider GCC region, including International Finance, DIFC Legal Entities, Healthcare, Luxury Retail, Aviation & Logistics, and Enterprise IT Manufacturing. Our solutions are custom-architected for UAE labor compliance and rapid scaling."
    },
    {
      q: "Do you offer 24/7 executive managed IT support and monitoring?",
      a: "Yes, our dedicated Dubai Creek Tower command center provides uninterrupted 24/7/365 infrastructure monitoring, cybersecurity threat mitigation, and instant Tier-3 executive resolution to guarantee zero operational downtime."
    },
    {
      q: "How long does a custom software development or staffing rollout take?",
      a: "Bespoke executive staffing deployment typically takes 3-7 business days. For enterprise software engineering and AI integrations, initial MVP sprints range from 4 to 6 weeks, with full-scale production rollout customized to your strategic roadmap."
    },
    {
      q: "How do you guarantee UAE data sovereignty and zero-trust security?",
      a: "Security is foundational to our architecture. We strictly adhere to UAE data privacy laws and international ISO/IEC 27001 standards, deploying end-to-end encryption, multi-factor zero-trust frameworks, and continuous automated vulnerability auditing."
    }
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="page-wrapper">
      <div className="page-header bg-primary text-white">
        <div className="container" style={{ textAlign: 'center' }}>
          <h1>Frequently Asked Questions</h1>
          <div className="breadcrumb" style={{ fontSize: '1rem', marginTop: '15px', marginBottom: '15px' }}>
            <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link> <span style={{ margin: '0 10px' }}>/</span> <span style={{ opacity: 0.8 }}>FAQ</span>
          </div>
          <p>Explore comprehensive answers regarding our executive IT consulting and bespoke recruitment models.</p>
        </div>
      </div>
      
      <div className="container page-content">
        <div className="content-box" style={{ maxWidth: '850px', margin: '-3rem auto 0', padding: '3.5rem 3rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', background: 'rgba(212, 175, 55, 0.12)', border: '1px solid rgba(212, 175, 55, 0.35)', borderRadius: '50px', color: 'var(--color-gold)', fontWeight: '700', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '15px' }}>
              <HelpCircle size={16} /> Knowledge Base
            </div>
            <h2>Got Questions? We Have Answers.</h2>
            <p style={{ color: 'var(--color-text-muted)', maxWidth: '580px', margin: '0 auto' }}>Everything you need to know about partnering with Jobsync UAE for executive team growth and tech infrastructure.</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <div 
                  key={i} 
                  onClick={() => toggleFaq(i)}
                  style={{ 
                    border: isOpen ? '2px solid var(--color-gold)' : '1px solid #E2E8F0', 
                    borderRadius: '16px', 
                    padding: '1.5rem 1.8rem', 
                    background: isOpen ? '#FFFFFF' : '#F0F4F8', 
                    cursor: 'pointer',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                    boxShadow: isOpen ? '0 12px 25px -8px rgba(212, 175, 55, 0.25)' : 'none'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '15px' }}>
                    <h3 style={{ fontSize: '1.18rem', color: isOpen ? 'var(--color-gold)' : 'var(--color-primary)', margin: 0, fontWeight: '700' }}>
                      {faq.q}
                    </h3>
                    <div style={{ 
                      width: '36px', height: '36px', borderRadius: '50%', 
                      background: isOpen ? 'var(--color-primary)' : 'rgba(212, 175, 55, 0.15)', 
                      color: isOpen ? '#FFFFFF' : 'var(--color-gold)', 
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      flexShrink: 0,
                      transition: 'transform 0.4s ease',
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)'
                    }}>
                      <ChevronDown size={20} />
                    </div>
                  </div>
                  
                  {isOpen && (
                    <div style={{ marginTop: '1.2rem', paddingTop: '1.2rem', borderTop: '1px dashed #CBD5E1', color: 'var(--color-text-muted)', lineHeight: '1.8', fontSize: '1.02rem', animation: 'fadeIn 0.4s ease' }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div style={{ marginTop: '4rem', padding: '2.5rem', background: 'linear-gradient(135deg, var(--color-surface-alt) 0%, #FFFFFF 100%)', borderRadius: '20px', border: '1px solid rgba(212, 175, 55, 0.3)', textAlign: 'center' }}>
            <MessageCircle size={36} className="text-gold" style={{ margin: '0 auto 12px' }} />
            <h3 style={{ fontSize: '1.5rem', color: 'var(--color-primary)', marginBottom: '8px' }}>Still Have Bespoke Inquiries?</h3>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.8rem', maxWidth: '500px', margin: '0 auto 1.8rem' }}>Our executive consultants are on standby to discuss your organization's specific requirements in confidence.</p>
            <Link to="/contact" className="btn btn-gold" style={{ padding: '0.9rem 2.5rem' }}>
              Speak with a Senior Consultant
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;

