import React, { useState } from 'react';
import './Footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubscribe = () => {
    if (email) {
      setMessage('Thank you for subscribing!');
      setEmail('');
    } else {
      setMessage('Please enter a valid email address.');
    }
  };

  return (
    <footer>
      <div className="footer-container">
        <div className="footer-content">
          <p>&copy; 2024 Tile World. All rights reserved.</p>
          <div className="social-media">
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
            <a href="/contact">Contact</a>
          </div>
        </div>
        <div className="subscribe-section">
          <p>Get updates on the latest products and offers.</p>
          <div className="subscribe-form">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button onClick={handleSubscribe}>Subscribe</button>
          </div>
          {message && <p className="subscribe-message">{message}</p>}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
