import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="portfolio-section">
      <div className="container">
        <h2>My Projects</h2>

        {/* Home Up Project - Linked to live demo */}
        <a href="https://home-up-frontend.vercel.app/" target="_blank" rel="noopener noreferrer" className="project-link">
          <div className="project-card">
            <h3>Home Up - Festival Travel Helper</h3>
            <p><strong>Description:</strong> A comprehensive travel assistance platform designed to help festival travelers navigate transportation options between cities in India. The application provides route planning, real-time updates, and multi-modal travel suggestions for trains, buses, flights, and other transportation methods.</p>

            <p><strong>Key Features:</strong></p>
            <ul>
              <li>Intelligent route planning with multiple transportation options</li>
              <li>Real-time travel updates and notifications</li>
              <li>Multi-modal journey planning (train, bus, flight, auto, bike)</li>
              <li>User-friendly interface with autocomplete city selection</li>
              <li>Responsive design for mobile and desktop users</li>
              <li>Integration with backend API for travel data</li>
              <li>Progressive Web App (PWA) capabilities with service worker</li>
            </ul>

            <p><strong>Technologies Used:</strong></p>
            <div>
              <span className="skill-tag">HTML5</span>
              <span className="skill-tag">CSS3</span>
              <span className="skill-tag">JavaScript (ES6)</span>
              <span className="skill-tag">React.js</span>
              <span className="skill-tag">Node.js</span>
              <span className="skill-tag">Express.js</span>
              <span className="skill-tag">Vercel (Deployment)</span>
              <span className="skill-tag">Git/GitHub</span>
            </div>

            <p><strong>My Contributions:</strong></p>
            <ul>
              <li>Designed and implemented the frontend user interface</li>
              <li>Created autocomplete functionality for city selection</li>
              <li>Developed route planning algorithms</li>
              <li>Implemented responsive design for all device sizes</li>
              <li>Added getBackendUrl() function for environment-aware API communication</li>
              <li>Deployed both frontend and backend to Vercel</li>
              <li>Created comprehensive documentation for deployment process</li>
            </ul>

            <p><strong>Project Highlights:</strong></p>
            <ul>
              <li>Full-stack travel application with seamless frontend-backend integration</li>
              <li>Mock API endpoints simulating real travel data services</li>
              <li>Security implementation with helmet.js, CORS, and rate limiting</li>
              <li>Progressive enhancement with service worker for offline capabilities</li>
              <li>User-centered design focusing on traveler needs and pain points</li>
            </ul>
          </div>
        </a>

        {/* Additional projects can be added here */}
        <div className="project-card">
          <h3>Additional Projects</h3>
          <p>More projects showcasing my skills in various domains will be added here as they are completed.</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;