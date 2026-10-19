import React from 'react';
import { Link } from 'react-router-dom';
import './Page.css';

const Blog = () => {
  const posts = [
    {
      title: "Hiring Python & React Developers: What Modern Tech Teams Prioritize",
      date: "October 14, 2026",
      excerpt: "Essential technical evaluation criteria, coding assessments, and hiring trends for recruiting skilled Python and React engineers.",
      category: "IT Recruitment",
      img: "/real_blog_1.jpg"
    },
    {
      title: "Performance Marketing vs. SEO: Structuring a High-ROI Growth Team",
      date: "October 02, 2026",
      excerpt: "How growing companies balance paid media specialists and organic SEO leaders to build cohesive, revenue-generating marketing teams.",
      category: "Digital Marketing",
      img: "/real_blog_2.jpg"
    },
    {
      title: "Cross-Border Tech Sourcing: Securing Top Full-Stack Engineers in the UAE",
      date: "September 24, 2026",
      excerpt: "Insights on how technology companies in Dubai and the GCC are overcoming local talent shortages through distributed engineering recruitment.",
      category: "Talent Acquisition",
      img: "/real_blog_3.jpg"
    }
  ];

  return (
    <div className="page-wrapper">
      <div className="page-header">
        <div className="container" style={{ textAlign: 'center' }}>
          <h1>Recruitment Insights &amp; Industry Trends</h1>
          <div className="breadcrumb" style={{ fontSize: '1rem', marginTop: '15px', marginBottom: '15px' }}>
            <Link to="/" style={{ color: '#FFFFFF', textDecoration: 'none' }}>Home</Link> <span style={{ margin: '0 10px' }}>/</span> <span style={{ opacity: 0.85 }}>Blog</span>
          </div>
          <p>Expert articles and market perspectives on IT engineering hiring and digital marketing growth.</p>
        </div>
      </div>
      
      <div className="container page-content">
        <div className="content-box">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
            {posts.map((post, i) => (
              <div key={i} className="blog-card" data-aos="fade-up" data-aos-delay={i * 150}>
                <img src={post.img} alt={post.title} className="blog-card-img" />
                <div className="blog-card-content">
                  <span className="blog-category" style={{ background: 'var(--peach)', color: 'var(--orange-hover)' }}>{post.category}</span>
                  <h3>{post.title}</h3>
                  <p className="blog-excerpt">{post.excerpt}</p>
                  <div className="blog-date">{post.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
