// src/components/Header.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import './Header.css';
import logo from '../assets/eq-logo.png';

const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <>
      <nav className="nav">
        <div className="logo">
          <img src={logo} alt="EQ of AI Logo" />
        </div>
        <div className="menu-container">
          <div className="menu-items">
            {isHomePage ? (
              <>
                <ScrollLink to="WeFocusOn" smooth={true} duration={500} className="menu-item">We Focus On</ScrollLink>
                <ScrollLink to="HowWeDoIt" smooth={true} duration={500} className="menu-item">How We Do It</ScrollLink>
                <ScrollLink to="pricing" smooth={true} duration={500} className="menu-item">Pricing</ScrollLink>
                <ScrollLink to="testimonials" smooth={true} duration={500} className="menu-item">Testimonials</ScrollLink>
              </>
            ) : (
              <>
                <Link to="/WeFocusOn" className="menu-item">We Focus On</Link>
                <Link to="/HowWeDoIt" className="menu-item">How We Do It</Link>
                <Link to="/Pricing" className="menu-item">Pricing</Link>
                <Link to="/Testimonials" className="menu-item">Testimonials</Link>
                <Link to="/About" className="menu-item">About</Link>
              </>
            )}
            
            <Link to="/Login" className="menu-item">Login</Link>
          </div>
          <div className="right-side">
            <div className="search-container">
              <input type="text" className="search-bar" placeholder="Search..." />
              <i className="fas fa-search search-icon"></i>
            </div>
            <Link to="/get-started" className="get-started">Get Started</Link>
          </div>
        </div>
      </nav>
      <hr className="separator" />
    </>
  );
};

export default Header;
