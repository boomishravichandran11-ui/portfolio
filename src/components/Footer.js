import React, { useEffect, useState } from 'react';
import { getCurrentYear } from '../utils/dateUtils';

const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(getCurrentYear());
  }, []);

  return (
    <footer>
      <div className="container">
        <p>&copy; <span id="year">{year}</span> My Portfolio. All Rights Reserved.</p>
        <div className="social-links">
          <a href="#" aria-label="GitHub">GitHub</a>
          <a href="#" aria-label="LinkedIn">LinkedIn</a>
          <a href="#" aria-label="Twitter">Twitter</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;