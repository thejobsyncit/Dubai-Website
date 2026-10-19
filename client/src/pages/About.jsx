import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Code2, Globe2, Target, CheckCircle2 } from 'lucide-react';
import AboutFeature from '../components/AboutFeature';
import './Page.css';

const About = () => {
  return (
    <div className="about-page page-wrapper">
      <div className="page-header">
        <div className="container" style={{ textAlign: 'center' }}>
          <h1>About THE JASYNC</h1>
          <div className="breadcrumb" style={{ fontSize: '1rem', marginTop: '15px', marginBottom: '15px' }}>
            <Link to="/" style={{ color: '#FFFFFF', textDecoration: 'none' }}>Home</Link> <span style={{ margin: '0 10px' }}>/</span> <span style={{ opacity: 0.85 }}>About Us</span>
          </div>
          <p>Connecting skilled IT professionals and digital marketing talent with leading companies worldwide.</p>
        </div>
      </div>
      
      <div className="container page-content">
        <div className="content-box" style={{ maxWidth: '1050px', margin: '-3rem auto 3rem', padding: '3.5rem 4rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span style={{ display: 'inline-block', padding: '6px 16px', background: 'var(--cream-dark)', color: 'var(--plum)', borderRadius: '50px', fontWeight: '700', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '15px' }}>
              Specialized Recruitment Agency
            </span>
            <h2 style={{ fontSize: '2.4rem', color: 'var(--plum)', marginBottom: '1rem', lineHeight: '1.25' }}>
              Connecting Talent with Global Opportunities
            </h2>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', maxWidth: '780px', margin: '0 auto', lineHeight: '1.8' }}>
              Headquartered at Dubai Creek Tower, THE JASYNC is a dedicated IT and digital marketing recruitment agency. 
              We connect skilled software developers, Python and React specialists, web engineers, and performance marketers 
              with forward-thinking organizations—helping candidates build rewarding careers and employers build high-performing teams.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '25px', marginTop: '2.5rem' }}>
            <div style={{ padding: '2.2rem 1.8rem', background: 'var(--white)', borderRadius: '18px', border: '1px solid var(--cream-dark)', textAlign: 'center' }}>
              <Code2 size={36} style={{ color: 'var(--orange)', margin: '0 auto 14px' }} />
              <h3 style={{ fontSize: '1.2rem', color: 'var(--plum)', marginBottom: '10px' }}>Tech &amp; Marketing Focus</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
                We do not do generalist staffing. Our recruiters specialize exclusively in IT, software development, Python, React, SEO, and performance marketing.
              </p>
            </div>
            
            <div style={{ padding: '2.2rem 1.8rem', background: 'var(--white)', borderRadius: '18px', border: '1px solid var(--cream-dark)', textAlign: 'center' }}>
              <ShieldCheck size={36} style={{ color: 'var(--orange)', margin: '0 auto 14px' }} />
              <h3 style={{ fontSize: '1.2rem', color: 'var(--plum)', marginBottom: '10px' }}>Technical Evaluation</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
                Candidates undergo comprehensive skills assessment and portfolio review to ensure high proficiency and genuine cultural fit for employers.
              </p>
            </div>
            
            <div style={{ padding: '2.2rem 1.8rem', background: 'var(--white)', borderRadius: '18px', border: '1px solid var(--cream-dark)', textAlign: 'center' }}>
              <Globe2 size={36} style={{ color: 'var(--orange)', margin: '0 auto 14px' }} />
              <h3 style={{ fontSize: '1.2rem', color: 'var(--plum)', marginBottom: '10px' }}>UAE &amp; Global Network</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
                Connecting top regional employers in the UAE and GCC with global talent pools across full-time, contract, and distributed remote setups.
              </p>
            </div>
          </div>

          <div style={{ marginTop: '3.5rem', padding: '2rem 2.5rem', background: 'var(--white)', borderRadius: '20px', border: '1px solid var(--cream-dark)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px' }}>
            <div>
              <h4 style={{ color: 'var(--plum)', fontSize: '1.3rem', marginBottom: '6px' }}>Looking to Hire or Seeking Your Next Role?</h4>
              <p style={{ color: 'var(--color-text-muted)', margin: 0, fontSize: '0.98rem' }}>Connect with our specialized IT and digital marketing recruitment consultants today.</p>
            </div>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn btn-orange" style={{ padding: '0.75rem 1.5rem', fontSize: '0.95rem' }}>Hire Talent</Link>
              <Link to="/services" className="btn btn-orange-outline" style={{ padding: '0.75rem 1.5rem', fontSize: '0.95rem' }}>Explore Opportunities</Link>
            </div>
          </div>
        </div>
      </div>

      <AboutFeature />
    </div>
  );
};

export default About;