import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>Made with ❤️ by Abhinav Varshney</p>
        <div className="footer-links">
          <a href="mailto:varshneyabhinav66@gmail.com">📧</a>
          <a href="https://github.com/imabhnv" target="_blank" rel="noopener noreferrer">💻</a>
          <a href="https://www.linkedin.com/in/abhinav-varshney-bb9bb7204/" target="_blank" rel="noopener noreferrer">🔗</a>
        </div>
        <p>© {new Date().getFullYear()} Abhinav Varshney. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
