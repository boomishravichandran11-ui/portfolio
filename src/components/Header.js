import React from 'react';

const Header = () => {
  return (
    <header>
      <div className="container">
        <div id="branding">
          <h1><span className="highlight">My</span> Portfolio</h1>
        </div>
        <nav>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;