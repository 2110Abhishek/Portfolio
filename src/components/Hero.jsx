import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';
import profileImg from '../assets/profile.jpg';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container hero-container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h3 
            className="hero-greeting"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8, type: "spring", bounce: 0.3 }}
          >
            Hi, I'm
          </motion.h3>
          <motion.h1 
            className="hero-name gradient-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            {portfolioData.name}
          </motion.h1>
          <motion.h2 
            className="hero-role"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            {portfolioData.role}
          </motion.h2>
          <motion.p 
            className="hero-about"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8, type: "spring", bounce: 0.3 }}
          >
            {portfolioData.about}
          </motion.p>
          
          <motion.div 
            className="hero-cta"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8, type: "spring", bounce: 0.3 }}
          >
            <a href="#projects" className="btn btn-primary">
              View My Work <ArrowRight size={18} />
            </a>
            <div className="hero-socials">
              <a href={portfolioData.github} target="_blank" rel="noopener noreferrer" className="social-icon">
                <GithubIcon size={24} />
              </a>
              <a href={portfolioData.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon">
                <LinkedinIcon size={24} />
              </a>
              <a href={`mailto:${portfolioData.email}`} className="social-icon">
                <Mail size={24} />
              </a>
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1, type: "spring", stiffness: 100 }}
        >
          <div className="blob blob-1"></div>
          <div className="blob blob-2"></div>
          <div className="hero-image-container glass">
            <img src={profileImg} alt={portfolioData.name} className="hero-image" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
