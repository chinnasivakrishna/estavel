import React from 'react';
import './HeroSection.css';

const HeroSection = () => (
  <section className="hero">
    <div className="background-animation"></div>
    <div className="hero-content">
      <h1>Discover the Perfect Tiles for Your Home</h1>
      <p>Explore a wide range of premium tiles to elevate your spaces. From modern designs to classic styles, find the perfect match.</p>
      <div className="hero-buttons">
        <button className="main-action">Shop Now</button>
        <button className="secondary-action">Learn More</button>
      </div>
    </div>
  </section>
);

export default HeroSection;