import React from 'react';
import './Header.css'; // Import the CSS file

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src="your-logo-url" alt="Microsoft Learn" className="logo" />
      </div>
      <nav className="nav-links">
        <a href="#home" className="nav-link active">Home</a>
        <a href="#team" className="nav-link">Team</a>
        <a href="#achievements" className="nav-link">Achievements</a>
        <a href="#rewards" className="nav-link">Rewards</a>
        <a href="#events" className="nav-link">Events</a>
      </nav>
    </header>
  );
};

export default Header;
