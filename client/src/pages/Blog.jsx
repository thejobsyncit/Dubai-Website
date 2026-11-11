import React from 'react';
import './Page.css';

const Blog = () => {
  const posts = [
    {
      title: "Hiring Python & React Developers: What Modern Tech Teams Prioritize",
      date: "October 14, 2026",
      excerpt: "Essential technical evaluation criteria, coding assessments, and hiring trends for recruiting skilled Python and React engineers.",
      category: "IT Recruitment",
      img: "/dubai_corporate_hero.png"
    },
    {
      title: "Performance Marketing vs. SEO: Structuring a High-ROI Growth Team",
      date: "October 02, 2026",
      excerpt: "How growing companies balance paid media specialists and organic SEO leaders to build cohesive, revenue-generating marketing teams.",
      category: "Digital Marketing",
      img: "/dubai_business_hero.png"
    },
    {
      title: "Cross-Border Tech Sourcing: Securing Top Full-Stack Engineers in the UAE",
      date: "September 24, 2026",
      excerpt: "Insights on how technology companies in Dubai and the GCC are overcoming local talent shortages through distributed engineering recruitment.",
      category: "Talent Acquisition",
      img: "/luxury_dubai_hero.png"
    }
  ];

  return (
    <div className="page-wrapper">
      <div className="page-header blog-page-header">
        <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 3 }}>
          <div className="header-pill-badge">
            LATEST INSIGHTS
          </div>
          <h1>
            Recruitment <span className="header-highlight">Insights &amp; Trends</span>
          </h1>
          <p>
            Expert articles and market perspectives on IT engineering hiring and digital marketing growth.
          </p>
        </div>
      </div>

      <div className="container page-content" style={{ paddingTop: '3rem' }}>
        <div className="content-box">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {posts.map((post, i) => (
              <article key={i} className="blog-page-card">
                <img src={post.img} alt={post.title} className="blog-card-img" />
                <div className="blog-card-content">
                  <span className="blog-category">{post.category}</span>
                  <h3>{post.title}</h3>
                  <p className="blog-excerpt">{post.excerpt}</p>
                  <div className="blog-date">{post.date}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
