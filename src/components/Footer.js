import React from "react";
import './Footer.css';

const Footer = ()=>{
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-links">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <p>©2024  Z-Kart.  All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}


export default Footer;
