import React from 'react';
import './HeroSection.css'; // Import the CSS file

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="corner-icon top-left"></div>
        <div className="corner-icon top-right"></div>
        <div className="corner-icon bottom-left"></div>
        <div className="corner-icon bottom-right"></div>

        <h1 className="hero-title">MLSC KARE</h1>
        <h2 className="hero-subtitle">MICROSOFT LEARN STUDENT CHAPTER KARE</h2>
        <h3 className="hero-tagline">BE A FORCE FOR GOOD</h3>

        <p className="hero-description">
          Microsoft Learn Student Chapter Is Paramount In Creating One Of The Most Influential Events.
          Our Peer-To-Peer Learning Method Has Markedly Increased Our Response Rate And Resulted
          In Significant Improvements In Participants' Vocational Skills, Problem-Solving Capabilities,
          And Technical Expertise. This Progress Is Attained Through The Provision Of Thoughtfully
          Curated Content By Industry Experts.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
