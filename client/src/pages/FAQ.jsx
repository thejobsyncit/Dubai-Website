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
      <div className="page-header faq-page-header">
        <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 3 }}>
          <div className="header-pill-badge">
            HELP &amp; SUPPORT
          </div>
          <h1>
            Frequently Asked <span className="header-highlight">Questions</span>
          </h1>
          <p>
            Find answers to common questions about our IT and digital marketing recruitment solutions.
          </p>
        </div>
      </div>

      <div className="container page-content" style={{ paddingTop: '3rem' }}>
        <div className="content-box faq-container-box">
          <div style={{ textAlign: 'center', marginBottom: '2.75rem' }}>
            <div className="faq-badge">
              <HelpCircle size={15} aria-hidden="true" /> Recruitment Knowledge Base
            </div>
            <h2>Got Questions? We Have Answers.</h2>
            <p style={{ color: 'var(--color-text-muted)', maxWidth: '580px', margin: '0 auto' }}>
              Learn more about how THE JASYNC connects employers with vetted tech talent and helps professionals advance their careers.
            </p>
          </div>

          <div className="faq-list">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <div key={i} className={`faq-item ${isOpen ? 'is-open' : ''}`}>
                  <button
                    type="button"
                    className="faq-trigger"
                    onClick={() => toggleFaq(i)}
                    aria-expanded={isOpen}
                  >
                    <h3 className="faq-question">{faq.q}</h3>
                    <span className="faq-chevron" aria-hidden="true">
                      <ChevronDown size={18} />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="faq-answer">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="faq-cta-box">
            <MessageCircle size={32} style={{ color: 'var(--gold-text)', margin: '0 auto 12px' }} aria-hidden="true" />
            <h3 style={{ fontSize: '1.45rem', color: 'var(--navy)', marginBottom: '8px' }}>Have a Specific Recruitment Question?</h3>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.75rem', maxWidth: '520px', margin: '0 auto 1.75rem' }}>
              Whether you are looking to hire software engineers, scale a marketing department, or explore new career opportunities, we are here to assist you.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn btn-gold">
                Hire Talent <ArrowRight size={18} aria-hidden="true" />
              </Link>
              <Link to="/contact" className="btn btn-outline">
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
