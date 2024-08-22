import React from 'react';
import './WeFocusOn.css';

import featureImage1 from '../assets/1.png'; // Replace with your image path
import featureImage2 from '../assets/2.png'; // Replace with your image path
import featureImage3 from '../assets/3.png'; // Replace with your image path


const WeFocusOn = () => {
  return (
    <section className="feature-section">
         <div className="feature-description">
                 <p className="title"> We Focus On</p>
                <p className="subtitle">Ensure your sensitive information stays secure with real-time alerts and  customizable settings. <p>Our extension offers a user-friendly dashboard to monitor risks and manage your online privacy with ease.</p></p>
           </div> 
           <div className="feature-boxes">
                  <div className="feature-box">
              <img src={featureImage1} alt="Feature 1" className="feature-image" />
              <div className="feature-content">
                <p className="title">Accurate Detection of Sensitive Data</p>
                <p className="subtitle">Protect your data with real-time alerts for sensitive information. Our extension identifies personal details like credit card numbers and passwords, ensuring you’re notified before any upload.</p>
              </div>
            </div>
            <div className="feature-box">
              <img src={featureImage2} alt="Feature 2" className="feature-image" />
              <div className="feature-content">
                <p className="title">Customizable Alerts for Personalized Security</p>
                <p className="subtitle">Tailor your security alerts to fit your needs. Customize settings to receive notifications based on the type and sensitivity of information, giving you full control over your online privacy.</p>
              </div>
            </div>
            <div className="feature-box">
              <img src={featureImage3} alt="Feature 3" className="feature-image" />
              <div className="feature-content">
                <p className="title">Detailed Dashboard with Risk Analysis</p>
                <p className="subtitle">Explore your data privacy with our detailed dashboard. Review past alerts, analyze risk levels, and view trends to understand and enhance your online security.</p>
              </div>
            </div>

      </div>
      <div className="cta-button-container">
        <button className="cta-button">
          <i className="fas fa-download"></i>Download Now
        </button>
      </div>
    </section>
  );
};

export default WeFocusOn;
