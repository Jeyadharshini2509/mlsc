import React from 'react';
import './Footer.css';  // Importing CSS for styling

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="badge">
        <img src="path-to-your-badge-image" alt="Microsoft Learn Student Chapter" className="badge-image" />
      </div>
      <div className="footer-content">
        <h3>MLSC KARE</h3>
        <p>Kalasalingam Academy Of Research And Education,<br />
          Anand Nagar, Krishnan Kovil-626 126, Virudhunagar, Tamil Nadu, India
        </p>
        <nav>
          <ul className="footer-nav">
            <li><a href="/home">Home</a></li>
            <li><a href="/events">Events</a></li>
            <li><a href="/rewards">Rewards</a></li>
            <li><a href="/achievements">Achievements</a></li>
            <li><a href="/gallery">Gallery</a></li>
            <li><a href="/team">Team</a></li>
          </ul>
        </nav>
        <p>Contact: Email Id: Mlsc@Klu.Ac.In</p>
        <div className="social-media">
          <p>Follow Us On</p>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i> Twitter
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i> Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
