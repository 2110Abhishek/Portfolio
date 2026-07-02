import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { GithubIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';
import './Projects.css';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div 
      className="project-card glass"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.1, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.8, type: "spring", bounce: 0.3 }}
      whileHover={{ y: -10 }}
    >
      <div className="project-content">
        <div className="project-header">
          <h3 className="project-title">{project.title}</h3>
          <p className="project-subtitle">{project.subtitle}</p>
        </div>
        
        <ul className="project-description">
          {project.description.map((desc, i) => (
            <li key={i}>{desc}</li>
          ))}
        </ul>
        
        <div className="project-tech">
          {project.techStack.map((tech, i) => (
            <span key={i} className="tech-tag">{tech}</span>
          ))}
        </div>
        
        <div className="project-links">
          {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
              <ExternalLink size={16} /> Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="section-padding projects-section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
        >
          <h2 className="section-title">Featured <span className="gradient-text">Work</span></h2>
          <p className="section-subtitle">Real-world applications I've built and deployed.</p>
        </motion.div>
        
        <div className="projects-grid">
          {portfolioData.projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
