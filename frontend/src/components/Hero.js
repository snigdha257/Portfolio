import React from 'react';
import '../styles/Hero.css';

function Hero() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            <span className="highlight">A.S.R.S.S SNIGDHA</span>
          </h1>
          <p className="hero-subtitle">Tech Enthusiast</p>
          <p className="hero-description">
            Tech CSE student interested in AI, MERN, and Data Structures. 
            Seeking internship for hands-on experience.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={() => scrollToSection('projects')}>
              View My Work
            </button>
            <button className="btn btn-secondary" onClick={() => scrollToSection('contact')}>
              Get in Touch
            </button>
          </div>
        </div>
        
        <div className="hero-image">
          <div className="gradient-circle"></div>
          <div className="tech-icons">
            <div className="icon-box react-icon">
              <i className="fab fa-react"></i>
            </div>
            <div className="icon-box node-icon">
              <i className="fab fa-node-js"></i>
            </div>
            <div className="icon-box python-icon">
              <i className="fab fa-python"></i>
            </div>
            <div className="icon-box java-icon">
              <i className="fab fa-java"></i>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <span>Scroll to explore</span>
        <div className="mouse">
          <div className="wheel"></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
