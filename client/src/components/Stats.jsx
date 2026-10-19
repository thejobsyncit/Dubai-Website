import React from 'react';
import { Code2, TrendingUp, Globe } from 'lucide-react';
import './Stats.css';

const Stats = () => {
  return (
    <section className="stats-section">
      <div className="container stats-container">
        
        <div className="stat-item">
          <Code2 size={40} className="stat-icon" strokeWidth={1.5} />
          <div className="stat-info">
            <span className="stat-number">IT &amp; Tech</span>
            <span className="stat-label">Python, React, Full-Stack</span>
          </div>
        </div>

        <div className="stat-item">
          <TrendingUp size={40} className="stat-icon" strokeWidth={1.5} />
          <div className="stat-info">
            <span className="stat-number">Digital Growth</span>
            <span className="stat-label">SEO, Performance &amp; Media</span>
          </div>
        </div>

        <div className="stat-item">
          <Globe size={40} className="stat-icon" strokeWidth={1.5} />
          <div className="stat-info">
            <span className="stat-number">Global Reach</span>
            <span className="stat-label">UAE &amp; Worldwide Talent</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Stats;
