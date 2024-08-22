import React from 'react';
import './Pricing.css';

const Pricing = () => {
  return (
    <section className="pricing-section" id="pricing">
      <h2 className="pricing-title">Pricing</h2>
      <div className="pricing-plans">
        <div className="pricing-plan">
          <h3  className="title">  Free</h3>
          <p> <i class="fa-solid fa-circle-check"></i> View basic analytics and insights.</p>
          <p> <i class="fa-solid fa-circle-check"></i> Access to support via email with standard response times.</p>
          <button className="pricing-button">Get Started</button>
        </div>
        <div className="pricing-plan">
          <h3  className="title">Premium</h3>
          <p>  <i class="fa-solid fa-circle-check"></i>  Everything in Free</p>
          <p> <i class="fa-solid fa-circle-check"></i> Advanced and customizable notifications for sensitive data exposure.</p>
          <p> <i class="fa-solid fa-circle-check"></i> Comprehensive analytics, insights, and reporting.</p>
          <p> <i class="fa-solid fa-circle-check"></i> Ability to integrate with other tools or platforms.</p>
          <button className="pricing-button">Purchase</button>
        </div>
        <div className="pricing-plan">
          <h3  className="title">Business</h3>
          <p> <i class="fa-solid fa-circle-check"></i> Everything in Premium</p>
          <p> <i class="fa-solid fa-circle-check"></i> Managing multiple users or team accounts.</p>
          <p> <i class="fa-solid fa-circle-check"></i> Scalable solutions to accommodate growing business needs.</p>
          <p> <i class="fa-solid fa-circle-check"></i> Detailed reports for regulatory compliance and auditing.</p>
          <button className="pricing-button">Purchase</button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
