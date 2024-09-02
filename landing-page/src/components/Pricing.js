// src/components/Pricing.js
import React from 'react';
import './Pricing.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const Pricing = () => {
  const navigate = useNavigate(); // Initialize navigate

  const handlePurchase = (plan) => {
    // Replace with actual navigation or logic
    if (plan === 'free') {
      navigate('/free-plan'); // Navigate to the Free Plan page or external link
    } else if (plan === 'premium') {
      navigate('/premium-plan'); // Navigate to the Premium Plan page or external link
    } else if (plan === 'business') {
      navigate('/business-plan'); // Navigate to the Business Plan page or external link
    }
  };

  return (
    <section className="pricing-section" id="pricing">
      <h2 className="pricing-title">Pricing</h2>
      <div className="pricing-plans">
        <div className="pricing-plan">
          <div className="pricing-free">
          <h3 className="title">Free</h3>
          <p><i className="fa-solid fa-circle-check"></i> View basic analytics and insights.</p>
          <p><i className="fa-solid fa-circle-check"></i> Access to support via email with standard response times.</p>
          <button className="pricing-button" onClick={() => handlePurchase('free')}>Get Started</button>
        </div></div>
        <div className="pricing-plan">
          <h3 className="title">Premium</h3>
          <p><i className="fa-solid fa-circle-check"></i> Everything in Free</p>
          <p><i className="fa-solid fa-circle-check"></i> Advanced and customizable notifications for sensitive data exposure.</p>
          <p><i className="fa-solid fa-circle-check"></i> Comprehensive analytics, insights, and reporting.</p>
          <p><i className="fa-solid fa-circle-check"></i> Ability to integrate with other tools or platforms.</p>
          <button className="pricing-button" onClick={() => handlePurchase('premium')}>Purchase</button>
        </div>
        <div className="pricing-plan">
          <h3 className="title">Business</h3>
          <p><i className="fa-solid fa-circle-check"></i> Everything in Premium</p>
          <p><i className="fa-solid fa-circle-check"></i> Managing multiple users or team accounts.</p>
          <p><i className="fa-solid fa-circle-check"></i> Scalable solutions to accommodate growing business needs.</p>
          <p><i className="fa-solid fa-circle-check"></i> Detailed reports for regulatory compliance and auditing.</p>
          <button className="pricing-button" onClick={() => handlePurchase('business')}>Purchase</button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
