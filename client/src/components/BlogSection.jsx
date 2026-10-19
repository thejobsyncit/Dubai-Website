import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Calendar } from 'lucide-react';
import './BlogSection.css';

const BlogSection = () => {
  // =========================================================================
  // BLOG ARTICLES DATA
  // CHANGE IMAGES HERE: Update the 'image' property for each article below
  // =========================================================================
  const articles = [
    {
      id: 1,
      category: "IT Recruitment",
      readTime: "5 min read",
      date: "October 14, 2026",
      title: "Hiring Python & React Developers: What Modern Tech Teams Prioritize",
      excerpt: "Essential technical evaluation criteria, coding assessments, and hiring trends for recruiting skilled software engineers in today's competitive landscape.",
      // LINE TO CHANGE IMAGE: Replace the image path on the next line
      image: "/dubai_corporate_hero.png", // <--- [LINE 20] CHANGE IMAGE FOR: Article 1
      link: "/blog"
    },
    {
      id: 2,
      category: "Digital Marketing",
      readTime: "4 min read",
      date: "October 02, 2026",
      title: "Performance Marketing vs. SEO: Structuring a High-ROI Growth Team",
      excerpt: "How scaling organizations balance paid customer acquisition specialists and technical SEO leaders to drive sustainable long-term revenue.",
      // LINE TO CHANGE IMAGE: Replace the image path on the next line
      image: "/dubai_business_hero.png", // <--- [LINE 30] CHANGE IMAGE FOR: Article 2
      link: "/blog"
    },
    {
      id: 3,
      category: "Talent Acquisition",
      readTime: "6 min read",
      date: "September 24, 2026",
      title: "Cross-Border Tech Sourcing: Securing Top Full-Stack Talent in the UAE",
      excerpt: "How Dubai and GCC technology firms overcome regional tech talent shortages through distributed remote teams and strategic talent relocation.",
      // LINE TO CHANGE IMAGE: Replace the image path on the next line
      image: "/luxury_dubai_hero.png", // <--- [LINE 40] CHANGE IMAGE FOR: Article 3
      link: "/blog"
    }
  ];

  return (
    <section className="blog-section section-padding">
      <div className="container">
        
        {/* Section Header */}
        <div className="blog-header text-center" data-aos="fade-up">
          <span className="section-label">Latest Insights</span>
          <h2>Recruitment Perspectives &amp; Market Trends</h2>
          <p className="blog-subhead">
            Practical hiring guides, engineering salary benchmarks, and growth strategies from our tech and marketing talent advisors.
          </p>
        </div>

        {/* 3 Articles Grid */}
        <div className="blog-grid">
          {articles.map((item, idx) => (
            <article className="blog-card" key={idx} data-aos="fade-up" data-aos-delay={idx * 150}>
              
              {/* IMAGE CONTAINER */}
              <div className="blog-card-img-wrap">
                <img src={item.image} alt={item.title} className="blog-card-img" />
                <span className="blog-card-category">{item.category}</span>
              </div>

              {/* CONTENT */}
              <div className="blog-card-body">
                <div className="blog-card-meta">
                  <span className="meta-item">
                    <Calendar size={14} /> {item.date}
                  </span>
                  <span className="meta-item">
                    <Clock size={14} /> {item.readTime}
                  </span>
                </div>

                <h3 className="blog-card-title">
                  <Link to={item.link} onClick={() => window.scrollTo(0, 0)}>
                    {item.title}
                  </Link>
                </h3>

                <p className="blog-card-excerpt">
                  {item.excerpt}
                </p>

                <div className="blog-card-footer">
                  <Link 
                    to={item.link} 
                    className="blog-read-link"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    Read Article <ArrowRight size={16} />
                  </Link>
                </div>
              </div>

            </article>
          ))}
        </div>

        {/* Action Center Button */}
        <div className="blog-action-center text-center" data-aos="fade-up">
          <Link 
            to="/blog" 
            className="btn btn-primary"
            onClick={() => window.scrollTo(0, 0)}
          >
            Explore All Insights <ArrowRight size={18} />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default BlogSection;
