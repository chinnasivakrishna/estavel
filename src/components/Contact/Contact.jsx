import React from 'react';
import './ContactUs.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const ContactUs = () => (
  <div className="contact-us">
    <h2>Contact Us</h2>
    <p className="intro-text">We’re here to help! Reach out with any questions, feedback, or requests. Your satisfaction is our priority.</p>
    <div className="contact-info">
      <div className="contact-item">
        <h3>Email</h3>
        <p>support@tileworld.com</p>
        <p>Feel free to drop us an email anytime. We typically respond within 24 hours.</p>
      </div>
      <div className="contact-item">
        <h3>Phone</h3>
        <p>+1-800-555-6789</p>
        <p>Our support team is available Monday to Friday, 9:00 AM to 6:00 PM.</p>
      </div>
      <div className="contact-item">
        <h3>Visit Us</h3>
        <p>456 Tile Lane, Design City, USA</p>
        <p>Come see our showroom! Open Monday to Saturday, 10:00 AM to 8:00 PM.</p>
      </div>
      <div className="contact-item">
  <h3>Follow Us</h3>
  <p>Stay connected through our social media channels:</p>
  <ul className="social-links">
    <li><a href="#facebook" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a></li>
    <li><a href="#twitter" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a></li>
    <li><a href="#instagram" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a></li>
  </ul>
</div>

    </div>
  </div>
);

export default ContactUs;
