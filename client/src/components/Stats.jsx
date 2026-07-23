import React from 'react';
import { Globe, Users, Briefcase } from 'lucide-react';
import './Stats.css';

const Stats = () => {
  return (
    <section className="stats-section">
      <div className="container stats-container">
        
        <div className="stat-item">
          <Globe size={40} className="stat-icon" strokeWidth={1.5} />
          <div className="stat-info">
            <span className="stat-number text-primary">18+</span>
            <span className="stat-label text-light">Global<br/>county</span>
          </div>
        </div>

        <div className="stat-divider"></div>

        <div className="stat-item">
          <Users size={40} className="stat-icon" strokeWidth={1.5} />
          <div className="stat-info">
            <span className="stat-number text-accent">5M</span>
            <span className="stat-label text-light">Happy<br/>client</span>
          </div>
        </div>

        <div className="stat-divider"></div>

        <div className="stat-item">
          <Briefcase size={40} className="stat-icon" strokeWidth={1.5} />
          <div className="stat-info">
            <span className="stat-number text-primary">3K+</span>
            <span className="stat-label text-light">Success<br/>projects</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Stats;
