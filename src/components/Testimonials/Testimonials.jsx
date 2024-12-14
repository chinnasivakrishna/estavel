import React from 'react';
import './styles.css';

const testimonials = [
  {
    name: 'Jessica Lee',
    role: 'Interior Designer',
    text: 'Tile World transformed my projects with their exquisite and durable tiles. Their service and attention to detail are top-notch!',
    image: 'path/to/jessica-lee.jpg',
  },
  {
    name: 'Mark Reynolds',
    role: 'Architect',
    text: 'The variety and quality of tiles are unmatched. My clients love the results, and it’s always a pleasure collaborating with Tile World.',
    image: 'path/to/mark-reynolds.jpg',
  },
  {
    name: 'Emma Wilson',
    role: 'Homeowner',
    text: 'Finding the perfect tiles for my home was a breeze with Tile World. Exceptional designs and durability at affordable prices!',
    image: 'path/to/emma-wilson.jpg',
  },
];

const Testimonials = () => (
  <div className="testimonials">
    <h2>What Our Customers Say</h2>
    <div className="testimonial-container">
      {testimonials.map((testimonial, index) => (
        <div className="testimonial" key={index}>
          <img src={testimonial.image} alt={testimonial.name} />
          <div className="testimonial-content">
            <h3>{testimonial.name}</h3>
            <span>{testimonial.role}</span>
            <p>{testimonial.text}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Testimonials;
