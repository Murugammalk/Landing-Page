import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2>What Other People Are Saying</h2>
      <div className="testimonial-list">
        <div className="testimonial">
          <p>"SecureAI has changed the way I manage my data privacy!"</p>
          <p>- User A</p>
        </div>
        <div className="testimonial">
          <p>"The customizable alerts are a game-changer."</p>
          <p>- User B</p>
        </div>
        <div className="testimonial">
          <p>"I can't imagine browsing without SecureAI."</p>
          <p>- User C</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
