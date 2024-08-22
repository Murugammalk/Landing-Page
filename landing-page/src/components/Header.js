// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../assets/eq-logo.png';

const Header = () => {
  return (
    <>
      <nav className="nav">
        <div className="logo">
          <img src={logo} alt="EQ of AI Logo" />
        </div>
        <div className="menu-container">
          <div className="menu-items">
            <Link to="/we-focus-on" className="menu-item">We Focus On</Link>
            <Link to="/how-we-do-it" className="menu-item">How We Do It</Link>
            <Link to="/pricing" className="menu-item">Pricing</Link>
            <Link to="/about" className="menu-item">About</Link>
            <Link to="/login" className="menu-item">Login</Link>
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