import React from 'react';
import '../styles/Skills.css';

function Skills() {
  const skillCategories = [
    {
      category: 'Programming Languages',
      // Added specific languages from your resume [cite: 11, 15, 69]
      skills: ['Java', 'Python', 'JavaScript', 'HTML', 'C']
    },
    {
      category: 'Technologies',
      // Added MERN and AI/ML stack highlights [cite: 14, 59]
      skills: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Flask', 'PyTorch']
    },
    {
      category: 'Core & Certifications',
      // Added your high-level certifications to stand out [cite: 12, 13, 64, 68]
      skills: [
        'Data Structures & Algorithms', 
        'DBMS', 
        'NPTEL Gold Elite (Java/R)', 
        'MongoDB Associate Developer'
      ]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <div className="section-header">
          <h2>Technical Skills</h2>
          <div className="underline"></div>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-card">
              <h3 className="skill-category">{category.category}</h3>
              <div className="skill-list">
                {category.skills.map((skill, idx) => (
                  <span key={idx} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;