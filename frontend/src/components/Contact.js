import React from 'react';
import '../styles/Contact.css';

function Contact() {

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="section-header">
          <h2>Get In Touch</h2>
          <div className="underline"></div>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Connect!</h3>
            <p>Feel free to reach out for collaborations or just a friendly hello!</p>

            <div className="info-items">
              <div className="info-item">
                <i className="fas fa-phone"></i>
                <div>
                  <h4>Phone</h4>
                  <p>9010078444</p>
                </div>
              </div>

              <div className="info-item">
                <i className="fas fa-envelope"></i>
                <div>
                  <h4>Email</h4>
                  <p>23r11a6201@gcet.edu.in</p>
                </div>
              </div>

              <div className="info-item">
                <i className="fas fa-map-marker-alt"></i>
                <div>
                  <h4>Location</h4>
                  <p>Hyderabad, India</p>
                </div>
              </div>
            </div>

            <div className="social-links">
              <h4>Follow Me</h4>
              <div className="social-icons">
                <a href="https://www.linkedin.com/in/snigdha-appanabhotla-3a45a928b/" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://github.com/snigdha257" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github"></i>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="resume-section">
            <div className="resume-header">
              <i className="fas fa-file-pdf resume-icon"></i>
              <h3>Download Resume</h3>
            </div>
            <p className="resume-description">
              Get a comprehensive overview of my experience, skills, and achievements
            </p>
            <div className="resume-actions">
              <a href="./SNIGDHA_RESUME_CONCISE (1).pdf" target="_blank" className="resume-btn primary" rel="noopener noreferrer">
                <i className="fas fa-download"></i>
                Download PDF
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
