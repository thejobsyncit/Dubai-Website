import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Target, 
  Compass, 
  Code2, 
  ShieldCheck, 
  TrendingUp, 
  Globe2, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles 
} from 'lucide-react';
import AboutFeature from '../components/AboutFeature';
import WhyChooseUs from '../components/WhyChooseUs';
import './Page.css';

const About = () => {
  return (
    <div className="about-page page-wrapper">
      {/* Header Banner */}
      <div className="page-header about-page-header">
        <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 3 }}>
          <div className="header-pill-badge" data-aos="fade-down">
            WHO WE ARE
          </div>
          <h1 data-aos="fade-up">
            About <span className="header-highlight">THE JASYNC</span>
          </h1>
          <p data-aos="fade-up" data-aos-delay="100">
            Connecting skilled IT professionals and digital marketing talent with leading companies worldwide.
          </p>
        </div>

        {/* Crisp Single-Layer Fluid Wave Divider */}
        <div className="page-header-curve">
          <svg viewBox="0 0 1440 90" fill="none" preserveAspectRatio="none">
            <path 
              d="M0,45 C380,95 720,18 1080,58 C1260,78 1380,48 1440,38 L1440,90 L0,90 Z" 
              fill="var(--cream)" 
            />
          </svg>
        </div>
      </div>
      
      {/* Main Section: About Our Company Dual Showcase */}
      <AboutFeature />

      {/* 1. MISSION & VISION */}
      <section className="section-padding" style={{ background: 'var(--cream)', paddingTop: '4.5rem', paddingBottom: '5.5rem' }}>
        <div className="container">
          <div className="about-sub-header" data-aos="fade-up">
            <span className="about-card-pill">OUR PURPOSE &amp; DIRECTION</span>
            <h2>Mission &amp; Vision</h2>
            <p>
              Empowering fast-growing technology enterprises and visionary digital brands across Dubai, the GCC, and globally through precision talent matching and strategic partnership.
            </p>
          </div>

          <div className="mission-vision-grid">
            {/* Mission Card */}
            <div className="mv-card" data-aos="fade-up" data-aos-delay="100">
              <div className="mv-icon-badge">
                <Target size={30} />
              </div>
              <h3>Our Mission</h3>
              <p className="mv-lead">
                To bridge the gap between world-class engineering specialists, data scientists, and performance marketers with forward-thinking enterprises—eliminating hiring friction through rigorous technical vetting and transparent communication.
              </p>
              <ul className="mv-points-list">
                <li>
                  <CheckCircle2 size={18} />
                  <span><strong>Comprehensive Code &amp; Architecture Vetting:</strong> Every engineer is assessed on practical problem-solving before submission.</span>
                </li>
                <li>
                  <CheckCircle2 size={18} />
                  <span><strong>Accelerated 48–72h Turnaround:</strong> Delivering high-precision talent shortlists to keep projects on schedule.</span>
                </li>
                <li>
                  <CheckCircle2 size={18} />
                  <span><strong>UAE &amp; GCC Compliance:</strong> End-to-end guidance on labor regulations, remote payroll, and relocation visas.</span>
                </li>
              </ul>
            </div>

            {/* Vision Card */}
            <div className="mv-card" data-aos="fade-up" data-aos-delay="200">
              <div className="mv-icon-badge">
                <Compass size={30} />
              </div>
              <h3>Our Vision</h3>
              <p className="mv-lead">
                To become the Middle East's most trusted recruitment partner and a recognized global nexus for elite technology and digital marketing careers—fostering sustainable, long-term talent retention and technological progress.
              </p>
              <ul className="mv-points-list">
                <li>
                  <CheckCircle2 size={18} />
                  <span><strong>Global Talent Hub:</strong> Cementing Dubai as the premier international destination for software innovators and growth leaders.</span>
                </li>
                <li>
                  <CheckCircle2 size={18} />
                  <span><strong>Exceptional 94%+ Retention Rate:</strong> Prioritizing cultural synergy and career growth for resilient, lasting placements.</span>
                </li>
                <li>
                  <CheckCircle2 size={18} />
                  <span><strong>Future-Ready Workforces:</strong> Helping enterprises scale scalable distributed pods and high-impact agile teams.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHAT WE DO */}
      <section className="section-padding" style={{ background: 'var(--white)', paddingTop: '5rem', paddingBottom: '5.5rem' }}>
        <div className="container">
          <div className="about-sub-header" data-aos="fade-up">
            <span className="about-card-pill">SPECIALIZED RECRUITMENT DOMAINS</span>
            <h2>What We Do</h2>
            <p>
              We focus exclusively on high-impact technology and digital growth verticals. No generic lists, only pre-screened specialists ready to make an immediate impact.
            </p>
          </div>

          <div className="what-we-do-grid">
            {/* Domain 1 */}
            <div className="wwd-card" data-aos="fade-up" data-aos-delay="100">
              <div>
                <div className="wwd-icon-box">
                  <Code2 size={26} />
                </div>
                <h3>IT &amp; Software Engineering</h3>
                <p>
                  Connecting organizations with seasoned frontend, backend, full-stack, and mobile engineers proficient in modern tech stacks and cloud-native architectures.
                </p>
              </div>
              <div className="wwd-tags">
                <span>Python</span>
                <span>React / Next.js</span>
                <span>Node.js</span>
                <span>Golang</span>
                <span>iOS / Android</span>
              </div>
            </div>

            {/* Domain 2 */}
            <div className="wwd-card" data-aos="fade-up" data-aos-delay="200">
              <div>
                <div className="wwd-icon-box">
                  <ShieldCheck size={26} />
                </div>
                <h3>Cloud, DevOps &amp; Security</h3>
                <p>
                  Sourcing battle-tested DevOps engineers, cloud architects, and information security analysts to harden infrastructure and automate deployment pipelines.
                </p>
              </div>
              <div className="wwd-tags">
                <span>AWS / Azure / GCP</span>
                <span>Kubernetes</span>
                <span>CI / CD</span>
                <span>DevSecOps</span>
                <span>SOC 2</span>
              </div>
            </div>

            {/* Domain 3 */}
            <div className="wwd-card" data-aos="fade-up" data-aos-delay="300">
              <div>
                <div className="wwd-icon-box">
                  <TrendingUp size={26} />
                </div>
                <h3>Digital Marketing &amp; Growth</h3>
                <p>
                  Recruiting revenue-driven growth strategists, performance media buyers, technical SEO leads, and conversion optimization specialists.
                </p>
              </div>
              <div className="wwd-tags">
                <span>Performance Ads</span>
                <span>Technical SEO</span>
                <span>CRO</span>
                <span>Paid Social</span>
                <span>Web Analytics</span>
              </div>
            </div>

            {/* Domain 4 */}
            <div className="wwd-card" data-aos="fade-up" data-aos-delay="400">
              <div>
                <div className="wwd-icon-box">
                  <Globe2 size={26} />
                </div>
                <h3>Executive &amp; Distributed Teams</h3>
                <p>
                  Handling confidential CTO / VP of Engineering searches, building dedicated distributed engineering pods, and structuring contract-to-hire arrangements.
                </p>
              </div>
              <div className="wwd-tags">
                <span>CTO / VP Search</span>
                <span>Remote Pods</span>
                <span>Contract-to-Hire</span>
                <span>Dubai Onsite</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHY CHOOSE THE JASYNC */}
      <WhyChooseUs 
        label="WHY CHOOSE US"
        title="Why Choose The Jasync" 
        subtitle="We combine rigorous technical screening, rapid 48-72h turnaround, and an unmatched 90-day placement guarantee to help you build high-performing teams with complete confidence."
      />

      {/* 4. MEET OUR FOUNDER */}
      <section className="section-padding" style={{ background: 'var(--cream)', paddingTop: '5rem', paddingBottom: '6rem' }}>
        <div className="container">
          <div className="about-sub-header" data-aos="fade-up">
            <span className="about-card-pill">LEADERSHIP SPOTLIGHT</span>
            <h2>Meet Our Founder</h2>
            <p>
              Leading with passion and deep industry expertise, our leadership brings over a decade of specialized tech recruitment experience across Dubai and international markets.
            </p>
          </div>

          <div className="founder-card" data-aos="fade-up" data-aos-delay="100">
            {/* Founder Visual Side */}
            <div className="founder-img-wrap">
              <img 
                src="/founder.jpg" 
                alt="Founder & CEO - THE JASYNC" 
                className="founder-img" 
              />
              <div className="founder-exp-badge">
                <Sparkles size={28} style={{ color: 'var(--orange-light)', flexShrink: 0 }} />
                <div>
                  <h4>10+ Years</h4>
                  <p>Tech Talent &amp; Executive Staffing</p>
                </div>
              </div>
            </div>

            {/* Founder Story & Insights */}
            <div className="founder-content">
              <div className="founder-header-role">
                <h3>Jalpesh Patel</h3>
                <span className="founder-title-badge">Founder &amp; Managing Director</span>
              </div>

              <div className="founder-quote">
                “At THE JASYNC, our philosophy is simple: great companies are built by exceptional people. We don't just fill job vacancies; we forge long-term partnerships between ambitious technology innovators and the world-class talent capable of bringing their vision to life.”
              </div>

              <ul className="founder-bullets">
                <li>
                  <CheckCircle2 size={18} />
                  <span>Deep expertise in UAE labor regulations, mainland &amp; free-zone entity hiring, and seamless visa processing.</span>
                </li>
                <li>
                  <CheckCircle2 size={18} />
                  <span>Pioneered practical coding and architecture vetting frameworks ensuring an unprecedented 94% retention rate.</span>
                </li>
                <li>
                  <CheckCircle2 size={18} />
                  <span>Dedicated to building ethical, transparent recruitment bridges connecting global tech hubs with the UAE.</span>
                </li>
              </ul>

              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginTop: '0.5rem' }}>
                <Link to="/contact" className="btn btn-orange" style={{ padding: '0.85rem 1.8rem', fontSize: '0.95rem' }}>
                  Schedule a Consultation <ArrowRight size={16} style={{ marginLeft: '6px' }} />
                </Link>
                <Link to="/services" className="btn btn-orange-outline" style={{ padding: '0.85rem 1.8rem', fontSize: '0.95rem' }}>
                  Explore Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;