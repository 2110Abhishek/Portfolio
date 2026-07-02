import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import './AboutSkills.css';

const SkillCategory = ({ title, skills, index }) => {
  return (
    <motion.div 
      className="skill-category glass"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.1, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.8, type: "spring", bounce: 0.3 }}
    >
      <h3 className="category-title">{title}</h3>
      <div className="skills-grid">
        {skills.map((skill, i) => (
          <motion.div 
            key={i} 
            className="skill-badge"
            whileHover={{ y: -3, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

const AboutSkills = () => {
  const { skills } = portfolioData;
  
  const categories = [
    { title: "Languages", data: skills.programming },
    { title: "Frontend", data: skills.frontend },
    { title: "Backend", data: skills.backend },
    { title: "Databases", data: skills.databases },
    { title: "Tools & DevOps", data: skills.tools }
  ];

  return (
    <section id="skills" className="section-padding skills-section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
        >
          <h2 className="section-title">Technical <span className="gradient-text">Arsenal</span></h2>
          <p className="section-subtitle">A comprehensive toolkit I use to build scalable solutions.</p>
        </motion.div>
        
        <div className="skills-container">
          {categories.map((category, index) => (
            <SkillCategory 
              key={category.title} 
              title={category.title} 
              skills={category.data} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSkills;
