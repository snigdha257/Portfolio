import React from 'react';
import '../styles/About.css';

function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="section-header">
          <h2>About Me</h2>
          <div className="underline"></div>
        </div>

        <div className="about-content">
          <div className="about-text">
            <p>
              I am a B.Tech CSE student at <strong>Geethanjali College of Engineering and Technology</strong> with an 8.6 CGPA 
              I am passionate about problem-solving and exploring technologies like <strong>Blockchain</strong>, <strong>AI</strong>, 
              and the <strong>MERN stack</strong>
            </p>
            
            <p>
              My experience includes internships at <strong>IIT Ropar</strong> and <strong>Intuitive Data Solutions</strong>, 
              where I built blockchain-powered finance platforms and real-time interaction tools. 
              I am driven to leverage technology for meaningful impact, evidenced by my work on AI platforms like <strong>GyanGuru</strong> 
              and <strong>PolicyMate</strong>.
            </p>

            <div className="about-stats">
              <div className="stat">
                <h3>8.6</h3>
                <p>CGPA</p>
              </div>
              <div className="stat">
                <h3>8+</h3>
                <p>Certifications</p>
              </div>
            </div>
          </div>

          <div className="about-details">
            <div className="detail-item">
              <h3>📚 Education</h3>
              <ul>
                <li><strong>B.Tech CSE</strong> - Geethanjali College (8.6 CGPA) [cite: 17, 18]</li>
                <li><strong>12th CBSE</strong> - Indus Universal School (84%) [cite: 19, 20]</li>
                <li><strong>10th CBSE</strong> - Indus Universal School (92%) [cite: 21, 22]</li>
              </ul>
            </div>

            <div className="detail-item">
              <h3>🏆 Key Achievements</h3>
              <ul>
                <li><strong>SIH 2024:</strong> Developed mental health software solutions [cite: 24, 26]</li>
                <li><strong>AI Hackathon:</strong> Top 5 Finalist for GyanGuru AI platform [cite: 30, 31]</li>
                <li><strong>Leadership:</strong> Secretary of IEEE WIE Affinity Group [cite: 28]</li>
                <li><strong>Academic:</strong> Multiple NPTEL Gold Elite Certifications [cite: 64, 65]</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;