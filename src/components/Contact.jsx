import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="section-padding contact-section">
      <div className="container">
        <motion.div 
          className="contact-container glass"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
        >
          <div className="contact-info">
            <h2 className="section-title">Let's <span className="gradient-text">Connect</span></h2>
            <p className="contact-subtitle">
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            
            <div className="contact-details">
              <div className="contact-item">
                <MapPin className="contact-icon" size={24} />
                <span>{portfolioData.location}</span>
              </div>
              <div className="contact-item">
                <Phone className="contact-icon" size={24} />
                <span>{portfolioData.phone}</span>
              </div>
              <div className="contact-item">
                <Mail className="contact-icon" size={24} />
                <a href={`mailto:${portfolioData.email}`}>{portfolioData.email}</a>
              </div>
            </div>
            
            <div className="contact-socials">
              <a href={portfolioData.github} target="_blank" rel="noopener noreferrer" className="social-btn">
                <GithubIcon size={20} /> GitHub
              </a>
              <a href={portfolioData.linkedin} target="_blank" rel="noopener noreferrer" className="social-btn">
                <LinkedinIcon size={20} /> LinkedIn
              </a>
            </div>
          </div>
          
          <div className="contact-form-placeholder">
            <div className="blob-contact blob-3"></div>
            <div className="cta-box glass">
              <h3>Ready to build something amazing?</h3>
              <a href={`mailto:${portfolioData.email}`} className="btn btn-primary btn-large">
                Say Hello <Mail size={18} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
      
      <footer className="footer">

        <p className="copyright">© {new Date().getFullYear()} {portfolioData.name}. All rights reserved.</p>
      </footer>
    </section>
  );
};

export default Contact;
