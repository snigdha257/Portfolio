import React from 'react';
import '../styles/Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Snigdha Appanabhotla</h3>
          <p>Tech Enthusiast | MERN Developer | AI Enthusiast</p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact</h4>
          <div className="footer-contact">
            <p><i className="fas fa-phone"></i> 9010078444</p>
            <p><i className="fas fa-envelope"></i> 23r11a6201@gcet.edu.in</p>
            <p><i className="fas fa-map-marker-alt"></i> Hyderabad, India</p>
          </div>
        </div>

        <div className="footer-section">
          <h4>Social</h4>
          <div className="footer-social">
            <a href="https://www.linkedin.com/in/snigdha-appanabhotla-3a45a928b/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/snigdha257" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="mailto:23r11a6201@gcet.edu.in">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Snigdha Appanabhotla. All rights reserved.</p>
        <p>Built with React, Node.js & ❤️</p>
      </div>
    </footer>
  );
}

export default Footer;
