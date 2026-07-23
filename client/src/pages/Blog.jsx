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
      img: "/service_cloud_1784711019519.png"
    },
    {
      title: "Cybersecurity Threats You Must Ignore At Your Peril",
      date: "July 02, 2026",
      excerpt: "A deep dive into zero-trust networks and the rising importance of AI in threat detection.",
      category: "Security",
      img: "/service_cybersecurity_1784711034578.png"
    },
    {
      title: "Scaling Engineering Teams: A Practical Guide",
      date: "June 20, 2026",
      excerpt: "How to effectively manage and scale distributed teams while maintaining high code quality.",
      category: "Management",
      img: "/service_it_consulting_1784711008371.png"
    }
  ];

  return (
    <div className="page-wrapper">
      <div className="page-header bg-primary text-white">
        <div className="container" style={{ textAlign: 'center' }}>
          <h1>Our Blog</h1>
          <div className="breadcrumb" style={{ fontSize: '1rem', marginTop: '15px', marginBottom: '15px' }}>
            <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link> <span style={{ margin: '0 10px' }}>/</span> <span style={{ opacity: 0.8 }}>Blog</span>
          </div>
          <p>Insights, news, and trends from the world of enterprise IT.</p>
        </div>
      </div>
      
      <div className="container page-content">
        <div className="content-box">
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
