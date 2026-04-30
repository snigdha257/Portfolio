import React from 'react';
import '../styles/Internships.css';

function Internships() {
  const internships = [
    {
      title: 'Project Intern',
      company: 'Intuitive Data Solutions Pvt. Ltd.',
      duration: 'Recent',
      description: 'Worked on a blockchain-based finance platform using MERN stack; handled API integration, smart contracts, testing, and documentation.',
      technologies: ['React.js', 'Node.js', 'Express.js', 'APIs', 'Blockchain'],
      icon: '⛓️'
    },
    {
      title: 'Web Development Intern',
      company: 'Annam.ai',
      duration: 'Recent',
      stipend: true,
      description: 'Built a real-time classroom interaction platform with AI-assisted responses for enhanced student engagement.',
      technologies: ['React.js', 'Node.js', 'Express.js', 'APIs', 'AI'],
      icon: '🎯'
    },
    {
      title: 'Winter Intern',
      company: 'IIT Ropar (Prof. Sudarshan Iyengar)',
      duration: 'Winter',
      stipend: true,
      description: 'Trained in MERN stack development and API integration through hands-on projects with industry experts.',
      technologies: ['React.js', 'Node.js', 'Express.js'],
      icon: '📚'
    }
  ];

  return (
    <section id="internships" className="internships">
      <div className="internships-container">
        <div className="section-header">
          <h2>Internship Experience</h2>
          <div className="underline"></div>
        </div>

        <div className="internships-grid">
          {internships.map((internship, index) => (
            <div key={index} className="internship-item">
              <div className="internship-card">
                <div className="internship-header">
                  <div className="internship-title-section">
                    <h3 className="internship-title">{internship.title}</h3>
                    <p className="company-name">{internship.company}</p>
                  </div>
                  <div className="internship-badge">
                    <span className="duration">{internship.duration}</span>
                    {internship.stipend && <span className="stipend">💰 Stipend</span>}
                  </div>
                </div>
                
                <p className="internship-description">{internship.description}</p>
                
                <div className="internship-tech">
                  {internship.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-badge">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Internships;
