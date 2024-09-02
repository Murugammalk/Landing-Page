// src/components/Testimonials.js
import React, { useState, useEffect } from 'react';
import './Testimonials.css';

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    title: "CEO of Company",
    image: "https://via.placeholder.com/100",
    quote: "This product has completely transformed our business. The results are amazing!",
  },
  {
    id: 2,
    name: "Jane Smith",
    title: "Marketing Head",
    image: "https://via.placeholder.com/100",
    quote: "An incredible experience! The support and features are top-notch.",
  },
  {
    id: 3,
    name: "Robert Johnson",
    title: "Product Manager",
    image: "https://via.placeholder.com/100",
    quote: "Absolutely fantastic! Highly recommend to anyone looking for quality.",
  },
];

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const selectTestimonial = (index) => {
    setCurrentTestimonial(index);
  };

  return (
    <div className="testimonial-carousel">
      <h2>What Our Clients Say</h2>
      <div className="testimonial-wrapper">
        <div className="testimonial-card">
          <div className="testimonial-content">
            <img src={testimonials[currentTestimonial].image} alt={testimonials[currentTestimonial].name} className="testimonial-image" />
            <p className="testimonial-quote">"{testimonials[currentTestimonial].quote}"</p>
            <div className="testimonial-author">
              <h3>{testimonials[currentTestimonial].name}</h3>
              <h4>{testimonials[currentTestimonial].title}</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="testimonial-dots">
        {testimonials.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentTestimonial ? 'active' : ''}`}
            onClick={() => selectTestimonial(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
