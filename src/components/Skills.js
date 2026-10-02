import React from 'react';

const Skills = () => {
  return (
    <section id="skills" className="portfolio-section">
      <div className="container">
        <h2>Technical Skills</h2>
        <div className="skills-content">
          <div className="skills-row">
            <h3>Frontend Development</h3>
            <div className="skills-tags">
              <span className="skill-tag">HTML5</span>
              <span className="skill-tag">CSS3</span>
              <span className="skill-tag">JavaScript (ES6+)</span>
              <span className="skill-tag">React.js</span>
              <span className="skill-tag">Redux</span>
              <span className="skill-tag">Bootstrap</span>
              <span className="skill-tag">Material-UI</span>
              <span className="skill-tag">SASS/SCSS</span>
            </div>
          </div>

          <div className="skills-row">
            <h3>Backend Development</h3>
            <div className="skills-tags">
              <span className="skill-tag">Node.js</span>
              <span className="skill-tag">Express.js</span>
              <span className="skill-tag">Python</span>
              <span className="skill-tag">Django</span>
              <span className="skill-tag">Flask</span>
              <span className="skill-tag">RESTful APIs</span>
              <span className="skill-tag">GraphQL</span>
              <span className="skill-tag">MongoDB</span>
              <span className="skill-tag">PostgreSQL</span>
            </div>
          </div>

          <div className="skills-row">
            <h3>Tools & Technologies</h3>
            <div className="skills-tags">
              <span className="skill-tag">Git & GitHub</span>
              <span className="skill-tag">Vercel</span>
              <span className="skill-tag">Netlify</span>
              <span className="skill-tag">Heroku</span>
              <span className="skill-tag">Docker</span>
              <span className="skill-tag">AWS</span>
              <span className="skill-tag">Linux/Unix</span>
              <span className="skill-tag">REST API</span>
              <span className="skill-tag">JWT Authentication</span>
            </div>
          </div>

          <div className="skills-row">
            <h3>Other Languages</h3>
            <div className="skills-tags">
              <span className="skill-tag">C</span>
              <span className="skill-tag">Java</span>
              <span className="skill-tag">Python</span>
              <span className="skill-tag">SQL</span>
              <span className="skill-tag">Bash/Shell</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;