import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, HelpCircle, MessageCircle, ArrowRight } from 'lucide-react';
import './Page.css';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "What IT and digital marketing roles do you specialize in recruiting for?",
      a: "We specialize exclusively in technology and digital marketing talent. In IT and software, we recruit Full-Stack developers, Python engineers, React and frontend specialists, web developers, and cloud/DevOps architects. In digital marketing, we recruit performance marketing managers, SEO and content strategists, paid social specialists, and digital growth directors."
    },
    {
      q: "How does The Jasync vet technical and marketing candidates?",
      a: "Our screening process combines technical evaluation with in-depth experience verification. For software engineers, we assess real-world coding ability in languages like Python and JavaScript/TypeScript, architectural problem-solving, and code hygiene. For digital marketers, we evaluate campaign metrics, paid acquisition ROAS track records, SEO audits, and hands-on tool proficiencies."
    },
    {
      q: "What recruitment and engagement models do you offer employers?",
      a: "We provide flexible recruitment arrangements tailored to your hiring timeline and team structure. This includes permanent direct-hire placement, fixed-term contract staffing for specific development cycles, and dedicated remote team sourcing across the UAE, GCC, and global talent markets."
    },
    {
      q: "How can candidates and job seekers apply or submit their resumes?",
      a: "Job seekers can submit their resumes and portfolios directly via the 'Submit Your Resume' link on our website or through our Contact page. Our technical recruiters review every submission against active client mandates and keep qualifying profiles in our priority network for upcoming roles."
    },
    {
      q: "Where is The Jasync located and which geographic markets do you cover?",
      a: "We are headquartered at Dubai Creek Tower, Deira, Dubai. We actively support clients and candidates throughout the UAE and GCC, while also sourcing qualified international software engineers and digital marketing professionals for global companies."
    }
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="page-wrapper">
      <div className="page-header">
        <div className="container" style={{ textAlign: 'center' }}>
          <h1>Frequently Asked Questions</h1>
          <div className="breadcrumb" style={{ fontSize: '1rem', marginTop: '15px', marginBottom: '15px' }}>
            <Link to="/" style={{ color: '#FFFFFF', textDecoration: 'none' }}>Home</Link> <span style={{ margin: '0 10px' }}>/</span> <span style={{ opacity: 0.85 }}>FAQ</span>
          </div>
          <p>Find answers to common questions about our IT and digital marketing recruitment solutions.</p>
        </div>
      </div>
      
      <div className="container page-content">
        <div className="content-box" style={{ maxWidth: '850px', margin: '-3rem auto 0', padding: '3.5rem 3rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', background: 'var(--peach)', border: '1px solid rgba(240, 120, 36, 0.25)', borderRadius: '50px', color: 'var(--orange-hover)', fontWeight: '700', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '15px' }}>
              <HelpCircle size={16} /> Recruitment Knowledge Base
            </div>
            <h2>Got Questions? We Have Answers.</h2>
            <p style={{ color: 'var(--color-text-muted)', maxWidth: '580px', margin: '0 auto' }}>
              Learn more about how THE JASYNC connects employers with vetted tech talent and helps professionals advance their careers.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <div 
                  key={i} 
                  onClick={() => toggleFaq(i)}
                  style={{ 
                    border: isOpen ? '2px solid var(--orange)' : '1px solid var(--cream-dark)', 
                    borderRadius: '16px', 
                    padding: '1.5rem 1.8rem', 
                    background: 'var(--white)', 
                    cursor: 'pointer',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                    boxShadow: isOpen ? '0 12px 25px -8px rgba(56, 25, 50, 0.12)' : 'none'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '15px' }}>
                    <h3 style={{ fontSize: '1.18rem', color: 'var(--plum)', margin: 0, fontWeight: '700' }}>
                      {faq.q}
                    </h3>
                    <div style={{ 
                      width: '36px', height: '36px', borderRadius: '50%', 
                      background: isOpen ? 'var(--orange)' : 'var(--cream-dark)', 
                      color: isOpen ? 'var(--white)' : 'var(--plum)', 
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      flexShrink: 0,
                      transition: 'transform 0.4s ease, background 0.3s ease',
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)'
                    }}>
                      <ChevronDown size={20} />
                    </div>
                  </div>
                  
                  {isOpen && (
                    <div style={{ marginTop: '1.2rem', paddingTop: '1.2rem', borderTop: '1px dashed var(--cream-dark)', color: 'var(--color-text-muted)', lineHeight: '1.8', fontSize: '1.02rem' }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div style={{ marginTop: '4rem', padding: '2.5rem', background: 'var(--white)', borderRadius: '20px', border: '1px solid var(--cream-dark)', textAlign: 'center' }}>
            <MessageCircle size={36} className="text-orange" style={{ margin: '0 auto 12px' }} />
            <h3 style={{ fontSize: '1.5rem', color: 'var(--plum)', marginBottom: '8px' }}>Have a Specific Recruitment Question?</h3>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.8rem', maxWidth: '520px', margin: '0 auto 1.8rem' }}>
              Whether you are looking to hire software engineers, scale a marketing department, or explore new career opportunities, we are here to assist you.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn btn-orange" style={{ padding: '0.85rem 2rem' }}>
                Hire Talent <ArrowRight size={18} />
              </Link>
              <Link to="/contact" className="btn btn-orange-outline" style={{ padding: '0.85rem 2rem' }}>
                Submit Your Resume
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
