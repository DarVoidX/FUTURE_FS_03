import React from 'react';
import './Hero.css'; // Will share styles with Hero

const HeroBackground = () => {
  return (
    <div className="hero-background-wrapper">
      <img 
        src="/images/custom_subtle_red_lighting_hero.png" 
        alt="Hero Background" 
        className="hero-background-img"
      />
      <div className="hero-overlay"></div>
    </div>
  );
};

export default HeroBackground;
