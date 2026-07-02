import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import './Experience.css';

const ExperienceCard = ({ exp, index }) => {
  const isEven = index % 2 === 0;
  
  return (
    <motion.div 
      className={`timeline-item ${isEven ? 'left' : 'right'}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.1, margin: "-100px" }}
      transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
    >
      <div className="timeline-content glass">
        <div className="timeline-header">
          <h3 className="job-title">{exp.title}</h3>
          <span className="company-name">{exp.company}</span>
        </div>
        
        <div className="timeline-meta">
          <div className="meta-item">
            <Calendar size={16} />
            <span>{exp.period}</span>
          </div>
          <div className="meta-item project-name">
            <Briefcase size={16} />
            <span>Project: {exp.project}</span>
          </div>
        </div>
        
        <ul className="job-description">
          {exp.description.map((desc, i) => (
            <li key={i}>{desc}</li>
          ))}
        </ul>
      </div>
      <div className="timeline-dot"></div>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="section-padding experience-section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
        >
          <h2 className="section-title">Professional <span className="gradient-text">Journey</span></h2>
          <p className="section-subtitle">My professional experience building scalable applications.</p>
        </motion.div>
        
        <div className="timeline">
          <div className="timeline-line"></div>
          {portfolioData.experience.map((exp, index) => (
            <ExperienceCard key={index} exp={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
