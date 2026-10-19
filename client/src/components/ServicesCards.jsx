import React from 'react';
import { Link } from 'react-router-dom';
import './ServicesCards.css';

const ServicesCards = () => {
  const services = [
    {
      title: "Full-Stack & Web Development",
      description: "Recruiting versatile full-stack developers proficient in JavaScript, TypeScript, modern frontend frameworks, and robust API architectures.",
      img: "/real_arab_1.png"
    },
    {
      title: "Python & Backend Engineering",
      description: "Connecting companies with senior Python, Django, FastAPI, and data pipeline engineers who build secure, high-performance backends.",
      img: "/real_arab_2.png"
    },
    {
      title: "React & Frontend Specialists",
      description: "Sourcing experienced React.js, Next.js, and modern UI developers committed to delivering seamless user experiences and fast web apps.",
      img: "/real_arab_3.png"
    },
    {
      title: "Performance Marketing & Paid Media",
      description: "Placing proven performance marketers skilled in Google Ads, Meta Ads, TikTok campaigns, conversion rate optimization, and paid acquisition.",
      img: "/real_arab_4.png"
    },
    {
      title: "SEO & Content Marketing Strategy",
      description: "Matching brands with technical SEO specialists, organic search strategists, and content marketing leaders who drive sustainable organic traffic.",
      img: "/real_arab_5.png"
    },
    {
      title: "Social Media & Brand Growth",
      description: "Finding creative social media managers, community leads, and digital brand strategists who craft engaging omnichannel narratives.",
      img: "/real_arab_6.png"
    },
    {
      title: "Cloud & DevOps Talent",
      description: "Staffing certified AWS, Azure, GCP, Docker, and CI/CD engineers to automate infrastructure and accelerate product releases.",
      img: "/dubai_team_3.png"
    },
    {
      title: "Executive Tech & Marketing Search",
      description: "Bespoke executive headhunting for CTOs, VPs of Engineering, and Chief Marketing Officers to lead high-growth digital organizations.",
      img: "/dubai_team_4.png"
    }
  ];

  return (
    <section className="services-section section-padding">
      <div className="container services-container">
        
        <div className="services-header text-center" data-aos="fade-up">
          <Link to="/services" className="section-label" style={{ display: 'inline-block', textDecoration: 'none' }} onClick={() => window.scrollTo(0, 0)}>Our Recruitment Practices</Link>
          <h2>Specialized IT &amp; Digital Marketing Hiring Services</h2>
          <p style={{ color: 'var(--color-text-muted)', maxWidth: '680px', margin: '0.8rem auto 0', fontSize: '1.05rem', lineHeight: '1.6' }}>
            We provide targeted recruitment solutions tailored to the modern technology and digital marketing ecosystem across the UAE and globally.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="service-img">
                <img src={service.img} alt={service.title} />
              </div>
              <div className="service-content">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesCards;
