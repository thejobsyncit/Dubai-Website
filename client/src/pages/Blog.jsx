import React from 'react';
import { Link } from 'react-router-dom';
import './Page.css';

const Blog = () => {
  const posts = [
    {
      title: "The Future of Cloud Computing in 2026",
      date: "July 15, 2026",
      excerpt: "Explore how serverless architectures and multi-cloud strategies are reshaping enterprise IT.",
      category: "Cloud",
      img: "/real_blog_1.jpg"
    },
    {
      title: "Cybersecurity Threats You Must Ignore At Your Peril",
      date: "July 02, 2026",
      excerpt: "A deep dive into zero-trust networks and the rising importance of AI in threat detection.",
      category: "Security",
      img: "/real_blog_2.jpg"
    },
    {
      title: "Scaling Engineering Teams: A Practical Guide",
      date: "June 20, 2026",
      excerpt: "How to effectively manage and scale distributed teams while maintaining high code quality.",
      category: "Management",
      img: "/real_blog_3.jpg"
    }
  ];

  return (
    <div className="page-wrapper">
      <div className="page-header">
        <div className="container">
          <h1 data-aos="fade-up">Our Blog</h1>
          <div className="breadcrumb" data-aos="fade-up" data-aos-delay="100">
            <Link to="/">Home</Link> <span style={{ margin: '0 10px', color: 'var(--color-text-light)' }}>/</span> <span style={{ color: 'var(--color-white)' }}>Blog</span>
          </div>
          <p data-aos="fade-up" data-aos-delay="200">Insights, news, and trends from the world of enterprise IT.</p>
        </div>
      </div>
      
      <div className="container page-content">
        <div className="content-box" style={{ margin: '-5rem auto 0' }} data-aos="fade-up" data-aos-delay="300">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
            {posts.map((post, i) => (
              <div key={i} className="blog-card" data-aos="fade-up" data-aos-delay={i * 150}>
                <img src={post.img} alt={post.title} className="blog-card-img" />
                <div className="blog-card-content">
                  <span className="blog-category">{post.category}</span>
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
