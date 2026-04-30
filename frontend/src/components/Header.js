import React, { useState } from 'react';
import '../styles/Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <span className="logo-text">MY PORTFOLIO</span>
        </div>
        
        <button className="menu-toggle" onClick={toggleMenu}>
          <span className={isMenuOpen ? 'active' : ''}></span>
          <span className={isMenuOpen ? 'active' : ''}></span>
          <span className={isMenuOpen ? 'active' : ''}></span>
        </button>

        <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <a onClick={() => scrollToSection('about')} className="nav-link">About</a>
          <a onClick={() => scrollToSection('skills')} className="nav-link">Skills</a>
          <a onClick={() => scrollToSection('projects')} className="nav-link">Projects</a>
          <a onClick={() => scrollToSection('internships')} className="nav-link">Internships</a>
          <a onClick={() => scrollToSection('certifications')} className="nav-link">Certifications</a>
          <a onClick={() => scrollToSection('contact')} className="nav-link">Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
