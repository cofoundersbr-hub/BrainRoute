import React, { useState } from 'react';
import './Navbar.css';
// Import logo from assets - update the filename if your logo has a different name
import logoImage from '../assets/logo.png';
import Hamburger from '../assets/menu.svg';

export default function Navbar({ onSignUpClick, onLogoClick }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="logo" onClick={onLogoClick} style={{ cursor: 'pointer' }}>
          <img 
            src={logoImage}
            alt="BrainRoute Logo" 
            className="logo-image"
          />
          <span className="logo-brain">Brain</span>
          <span className="logo-route">Route</span>
        </div>

        {/* Menu Items */}
        
          <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li><a href="#experts">Experts insights</a></li>
          <li><a href="#career">Career path</a></li>
          <li><a href="#tutors">Find tutors</a></li>
          <li><a href="#collaborations">Collaborations</a></li>
          <li><a href="#aboutUs">About Us</a></li>
        </ul>
        

        {/* Sign Up Button */}
        <button className="signup-btn" onClick={onSignUpClick}>
          Sign up
        </button>

        {/* Hamburger Menu */}
        <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <img src={Hamburger} alt="menu" />
        </div>
      </div>
    </nav>
  );
}
