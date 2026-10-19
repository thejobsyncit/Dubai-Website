import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './RecruitmentCategories.css';

const RecruitmentCategories = () => {
  const categories = [
    {
      id: "it-software",
      image: "/it_software.jpg",
      badge: "TECH & ENGINEERING",
      title: "IT & Software",
      description: "Recruiting elite Full-Stack, Python, React, Cloud, and DevOps software engineers tailored for modern technology stacks.",
      link: "/services"
    },
    {
      id: "digital-marketing",
      image: "/digital_marketing.jpg", 
      badge: "GROWTH & CREATIVE",
      title: "Digital Marketing",
      description: "Sourcing proven performance marketers, paid media specialists, SEO strategists, and digital brand leaders.",
      link: "/services"
    },
    {
      id: "talent-acquisition",
      image: "/TA.jpg", 
      badge: "ENTERPRISE SOURCING",
      title: "Talent Acquisition",
      description: "Bespoke executive headhunting, dedicated tech recruitment teams, and fast-track hiring for high-growth enterprises.",
      link: "/services"
    },
    {
      id: "career-development",
      image: "/CD.jpg", 
      badge: "CANDIDATE PATHWAYS",
      title: "Career Development",
      description: "Guiding software engineers and marketing leaders toward rewarding career opportunities and global relocation.",
      link: "/services"
    }
  ];

  return (
    <section className="categories-section">
      <div className="container">
        <div className="categories-header text-center" data-aos="fade-up">
          <h2>Welcome to TheJaSync</h2>
          <p className="categories-subhead">
            TheJaSync is a specialized IT and digital marketing recruitment agency connecting top engineering and growth talent with leading global organizations.
          </p>
        </div>

        <div className="categories-grid">
          {categories.map((cat, idx) => (
            <div className="category-card" key={idx} data-aos="fade-up" data-aos-delay={idx * 100}>
              {/* IMAGE WRAPPER (Styled like the reference cards) */}
              <div className="category-image-wrapper">
                {/* [LINE 69] IMAGE RENDER PLACEHOLDER */}
                <img 
                  src={cat.image} 
                  alt={cat.title} 
                  className="category-card-img" 
                />
                <span className="category-badge-pill">{cat.badge}</span>
              </div>

              {/* CARD CONTENT */}
              <div className="category-body">
                <h3>{cat.title}</h3>
                <p className="category-desc">{cat.description}</p>
                <Link to={cat.link} className="category-action-link" onClick={() => window.scrollTo(0, 0)}>
                  EXPLORE PRACTICE <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecruitmentCategories;
