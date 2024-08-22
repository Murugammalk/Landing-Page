import React from 'react';
import './MainSection.css'; // Ensure this is the correct path to your CSS
import animatedImage from '../assets/lp-image.png'; // Replace with your image path

const MainSection = () => {
  return (
    <section className="landing-page">
      <div className="main-section">
        <div className="content">
          <p className="title">EQ of AI</p>
          <p className="title">Prompt Smartly !! </p>   
          <p className="title">Secure Privacy !!</p>  
          
        </div>
        <div className="image">
          <img src={animatedImage} alt="Animated representation of AI security" className="animated-image" />
        </div>
      </div>
      <div className="cta-button-container">
      <div className="additional-text">
      <p className="title">Secure Your AI Interactions!</p>
      <p className="subtitle">Protect Your Data While Using AI Tools</p>
      </div>
        <button className="cta-button">
          <i className="fas fa-download"></i>Start Now
        </button>
      </div>
      
    </section>
  );
};

export default MainSection;
