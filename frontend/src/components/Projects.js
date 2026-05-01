import React, { useState } from 'react';
import '../styles/Projects.css';

function Projects() {
  const [filter, setFilter] = useState('All');

  const projects = [
    {
      title: 'Vi-SlideS',
      category: 'AI',
      description: 'Real-time classroom interaction platform with AI-assisted responses for enhanced learning',
      technologies: ['React.js', 'Node.js', 'Express.js', 'APIs', 'AI'],
      image: '🎓',
      link: 'https://github.com/snigdha257/Vi-SlideS-basic'
    },
    {
      title: 'PolicyMate',
      category: 'AI',
      description: 'AI-based system that intelligently matches students with eligible government schemes',
      technologies: ['React.js', 'Node.js', 'Express.js', 'APIs', 'AI'],
      image: '📋',
      link: 'https://github.com/snigdha257/PolicyMate'
    },
    {
      title: 'Landing Page & Portfolio Website',
      category: 'Frontend',
      description: 'Responsive and modern landing pages with stunning UI/UX designs',
      technologies: ['React.js', 'CSS', 'JavaScript', 'Responsive Design'],
      image: '🌐',
      link: 'https://github.com/snigdha257/Portfolio'
    },
    {
      title: 'Notes Manager',
      category: 'MERN',
      description: 'Full-stack notes application with real-time synchronization and cloud storage',
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
      image: '📝',
      link: 'https://github.com/snigdha257/wtapp'
    },
    {
      title: 'GyanGuru',
      category: 'AI',
      description: 'AI-powered platform for personalized ML learning with tracking and interactive features',
      technologies: ['React.js', 'Node.js', 'Express.js', 'AI', 'Machine Learning'],
      image: '🤖',
      link: 'https://github.com/Anoogna/LearnSpere__IIC'
    },
   
  ];

  const categories = ['All', 'MERN', 'Frontend'];
  
  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <div className="section-header">
          <h2>Featured Projects</h2>
          <div className="underline"></div>
        </div>

        <div className="filter-buttons">
          {categories.map(cat => (
            <button
              key={cat}
              className={`filter-btn ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image-wrapper">
                <div className="project-image">{project.image}</div>
                <div className="project-overlay">
                  <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">View Project →</a>
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tech">
                  {project.technologies.map((tech, idx) => (
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

export default Projects;
