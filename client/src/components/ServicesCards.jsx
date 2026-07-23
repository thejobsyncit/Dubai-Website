import React from 'react';
import { Link } from 'react-router-dom';
import './ServicesCards.css';

const ServicesCards = () => {
  const services = [
    {
      title: "Custom Software Development",
      description: "We build customized web and mobile applications that align with your business goals, ensuring high performance and scalability.",
      img: "/business_meeting_1784705676985.png"
    },
    {
      title: "Cloud Solutions",
      description: "Effortlessly migrate, manage, and optimize your systems with our secure and scalable cloud infrastructure services.",
      img: "/hero_tech_bg_1784706515273.png" // using available tech img
    },
    {
      title: "UI/UX Design",
      description: "Deliver intuitive and engaging digital experiences with clean, user-friendly interface design tailored to your audience.",
      img: "/about_team_1784706532944.png"
    },
    {
      title: "Digital Transformation",
      description: "Modernize your legacy systems and adopt cutting-edge technologies to stay competitive in a rapidly evolving digital world.",
      img: "/business_shaking_hands_1784705704439.png"
    },
    {
      title: "Cybersecurity",
      description: "Protect your digital assets with advanced security protocols, vulnerability assessments, and robust threat mitigation strategies.",
      img: "/service_cybersecurity_1784711034578.png"
    },
    {
      title: "IT Consulting",
      description: "Strategic technology planning and advisory services to help you make informed decisions and align IT with business objectives.",
      img: "/service_it_consulting_1784711008371.png"
    },
    {
      title: "Data Analytics",
      description: "Unlock actionable insights from your business data to drive growth, optimize operations, and improve decision-making.",
      img: "/tech_hero_1784711258499.png"
    },
    {
      title: "Enterprise Resource Planning",
      description: "Streamline your business operations with customized ERP solutions that connect finance, HR, and supply chain.",
      img: "/business_consultant_1784705724844.png"
    }
  ];

  return (
    <section className="services-section section-padding bg-white">
      <div className="container services-container">
        
        <div className="services-header text-center" data-aos="fade-up">
          <Link to="/services" className="section-label bg-primary text-white" style={{ display: 'inline-block', textDecoration: 'none' }} onClick={() => window.scrollTo(0, 0)}>Our Services</Link>
          <h2 className="text-primary">Complete IT solutions to grow your business.</h2>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index} data-aos="fade-up" data-aos-delay={index * 150}>
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
