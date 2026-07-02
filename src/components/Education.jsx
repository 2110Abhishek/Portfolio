import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import './Education.css';

const EducationItem = ({ edu, index }) => {
  return (
    <motion.div 
      className="education-item"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.1, margin: "-50px" }}
      transition={{ delay: index * 0.2, duration: 0.8, type: "spring", bounce: 0.3 }}
    >
      <div className="education-number-container">
        <div className="education-number glass">{index + 1}</div>
        <div className="education-connector"></div>
      </div>
      
      <div className="education-content glass">
        <h3 className="education-degree">{edu.degree}</h3>
        <p className="education-institution">{edu.institution}</p>
        <p className="education-period">{edu.period}</p>
        <p className="education-description">{edu.description}</p>
      </div>
    </motion.div>
  );
};

const Education = () => {
  return (
    <section id="education" className="section-padding education-section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
        >
          <h2 className="section-title">Educational <span className="gradient-text">Background</span></h2>
          <p className="section-subtitle">My academic journey and specialized training programs.</p>
        </motion.div>
        
        <div className="education-timeline">
          <div className="education-main-line"></div>
          {portfolioData.education.map((edu, index) => (
            <EducationItem key={index} edu={edu} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
