// src/components/Footer.js
import React from 'react';
import './footer.css';  // Import the CSS for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Life Token. All Rights Reserved.</p>
        
        <div className="social-media-icons">
          <a href="https://twitter.com/your-life-token" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i> {/* Use font-awesome icons or your own icons */}
          </a>
          <a href="https://facebook.com/your-life-token" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://instagram.com/your-life-token" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://discord.com/invite/your-life-token" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-discord"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

