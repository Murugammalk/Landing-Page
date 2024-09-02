import React, { useState } from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [demoEmail, setDemoEmail] = useState('');
  const [newsletterMessage, setNewsletterMessage] = useState('');
  const [demoMessage, setDemoMessage] = useState('');

  const handleNewsletterSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: newsletterEmail }),
      });
      const result = await response.text();
      setNewsletterMessage(result);
    } catch (error) {
      setNewsletterMessage('Subscription failed.');
    }
  };

  const handleDemoSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/request-demo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: demoEmail }),
      });
      const result = await response.text();
      setDemoMessage(result);
    } catch (error) {
      setDemoMessage('Request failed.');
    }
  };

  return (
    <footer className="footer">
      {/* <div className="footer-demo">
        <h2>Get a Free Demo</h2>
        <form id="demo-form" onSubmit={handleDemoSubmit}>
          <input
            type="email"
            id="demo-email"
            name="email"
            placeholder="Enter your email"
            value={demoEmail}
            onChange={(e) => setDemoEmail(e.target.value)}
            required
          />
          <button type="submit">Request Demo</button>
          <p id="demo-message">{demoMessage}</p>
        </form>
      </div> */}

      <div className="footer-newsletter">
        <h3>Subscribe to Our Newsletter</h3>
        <form id="newsletter-form" onSubmit={handleNewsletterSubmit}>
          <input
            type="email"
            id="newsletter-email"
            name="email"
            placeholder="Enter your email"
            value={newsletterEmail}
            onChange={(e) => setNewsletterEmail(e.target.value)}
            required
          />
          <button type="submit">Subscribe</button>
          <p id="newsletter-message">{newsletterMessage}</p>
        </form>
      </div>

      <div className="footer-content">
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p><FontAwesomeIcon icon={faEnvelope} /> <a href="mailto:contact@example.com">contact@example.com</a></p>
          <p><FontAwesomeIcon icon={faPhone} /> +1 (234) 567-8900</p>
          <p>1234 Main Street, City, Country</p>
        </div>

        <div className="footer-nav">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-social">
          <h3>Follow Us</h3>
          <a href="https://facebook.com/example" className="social-icon" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="https://twitter.com/example" className="social-icon" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://linkedin.com/company/example" className="social-icon" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024 Example Company. All rights reserved.</p>
        <a href="/privacy">Privacy Policy</a> | <a href="/terms">Terms of Service</a>
      </div>
    </footer>
  );
};

export default Footer;
