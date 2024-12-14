import React, { useState, useEffect } from 'react';
import tilesImage1 from '../photos/tiles.jpg';
import tilesImage2 from '../photos/tiles.jpg';
import tilesImage3 from '../photos/tiles.jpg';
import tilesImage4 from '../photos/tiles.jpg';
import tilesImage5 from '../photos/tiles.jpg';
import './Features.css';

const images = [tilesImage1, tilesImage2, tilesImage3, tilesImage4, tilesImage5];

const Features = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="features">
      <div className="carousel">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            className={`carousel-image ${index === currentIndex ? 'active' : ''}`}
            alt={`Slide ${index + 1}`}
          />
        ))}
      </div>
      <div className="feature-list">
        <div className="feature">
          <h2>Elegant Designs</h2>y
          <p>Choose from a variety of stunning designs to suit your style.</p>
        </div>
        <div className="feature">
          <h2>Durable Quality</h2>
          <p>Our tiles are built to last, ensuring beauty and resilience for years to come.</p>
        </div>
        <div className="feature">
          <h2>Affordable Prices</h2>
          <p>Get premium quality tiles at prices that fit your budget.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
