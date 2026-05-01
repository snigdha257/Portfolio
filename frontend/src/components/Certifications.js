import React, { useState } from 'react';
import '../styles/Certifications.css';

function Certifications() {
  const [expandedCert, setExpandedCert] = useState(null);

  const certifications = [
    {
      title: 'Programming in Java',
      issuer: 'NPTEL',
      level: 'Gold Elite Certification',
      date: '2024',
      description: 'Comprehensive Java programming certification covering OOP, design patterns, and advanced concepts.',
      icon: '☕',
      link: 'https://drive.google.com/file/d/1cYexe199WUddYzDkY9N9S6VZXxO6urm-/view?newwindow=1&embedded=true'
    },
    {
      title: 'Foundations of R Software',
      issuer: 'NPTEL',  
      level: 'Gold Elite Certification',
      date: '2024',
      description: 'In-depth R programming course covering statistical analysis and data manipulation.',
      icon: '📊',
      link: 'https://drive.google.com/file/d/1HOJNgLV2qlktnyJE4v3UC8FVJOHb49-o/view?newwindow=1&embedded=true'
    },
    {
      title: 'Joy of Computing Using Python',
      issuer: 'NPTEL',
      level: 'Silver Elite Certification',
      date: '2024',
      description: 'Python fundamentals and computational thinking for problem-solving.',
      icon: '🐍',
      link: 'https://drive.google.com/file/d/1Ua_xlLndtX1XlQ08k_OZgGg6gXeuR7tB/view?newwindow=1&embedded=true'
    },
    {
      title: 'Database Management Systems',
      issuer: 'NPTEL',
      level: 'Elite Certification',
      date: '2024',
      description: 'Advanced DBMS concepts including normalization, transactions, and query optimization.',
      icon: '🗄️',
      link: 'https://drive.google.com/file/d/1OnPG73bEj7WjY8YMJAWGUGOw0-TPORkK/view?newwindow=1&embedded=true'
    },
    {
      title: 'MongoDB Node.js Associate Developer',
      issuer: 'MongoDB',
      level: 'Associate Certification',
      date: '2024',
      description: 'MongoDB and Node.js integration for building scalable NoSQL applications.',
      icon: '🍃',
      link: 'https://drive.google.com/file/d/18KRVRRS7LSnKD1HR49klImp_PvaE7E3Y/view'
    },
    {
      title: 'Database Management with SQL',
      issuer: 'Oracle Academy',
      level: 'Database Specialist',
      date: '2024',
      description: 'SQL expertise including complex queries, indexing, and database administration.',
      icon: '🔐',
      link: 'https://drive.google.com/file/d/1EvPwcLHz1tpugKEUHnyUWCLF27ZnFQs7/view?newwindow=1&embedded=true'
    }
  ];

  return (
    <section id="certifications" className="certifications">
      <div className="certifications-container">
        <div className="section-header">
          <h2>Certifications & Achievements</h2>
          <div className="underline"></div>
        </div>

        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className={`certification-card ${expandedCert === index ? 'expanded' : ''}`}
              onClick={() => setExpandedCert(expandedCert === index ? null : index)}
            >
              <div className="cert-icon">{cert.icon}</div>
              
              <div className="cert-content">
                <h3 className="cert-title">{cert.title}</h3>
                <p className="cert-issuer">{cert.issuer}</p>
                <p className="cert-level">{cert.level}</p>
                
                {expandedCert === index && (
                  <div className="cert-expanded">
                    <p className="cert-description">{cert.description}</p>
                    <a href={cert.link} className="verify-btn" target="_blank" rel="noopener noreferrer">
                      Verify Credential →
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="achievements-section">
          <h3>Key Achievements</h3>
          <div className="achievements-list">
            <div className="achievement-item">
              <span className="achievement-icon">🏆</span>
              <div>
                <h4>Smart India Hackathon 2024</h4>
                <p>Developing a software solution for mental health-related issues</p>
              </div>
            </div>
            <div className="achievement-item">
              <span className="achievement-icon">🥇</span>
              <div>
                <h4>Top 5 Finalist - Inter-Collegiate AI Hackathon</h4>
                <p>IIC, GCET | SmartBridge | Nasscom FutureSkills Prime</p>
              </div>
            </div>
            <div className="achievement-item">
              <span className="achievement-icon">👥</span>
              <div>
                <h4>Secretary of IEEE WIE Affinity Group</h4>
                <p>Leading women in engineering initiatives</p>
              </div>
            </div>
            <div className="achievement-item">
              <span className="achievement-icon">📚</span>
              <div>
                <h4>Data Science Club Member</h4>
                <p>Active participant in data science projects and workshops</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Certifications;
