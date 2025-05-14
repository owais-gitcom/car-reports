import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import logo from '../img/Logo-01-01.png';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="navbar-container">
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="Company Logo" />
        </div>

        <div className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
          <NavLink to="/" onClick={toggleMenu} className={({ isActive }) => (isActive ? 'active' : '')}>
            Home
          </NavLink>
          <NavLink to="/about" onClick={toggleMenu} className={({ isActive }) => (isActive ? 'active' : '')}>
            About US
          </NavLink>
          <NavLink to="/support" onClick={toggleMenu} className={({ isActive }) => (isActive ? 'active' : '')}>
            Support
          </NavLink>
          <NavLink to="/pricing" onClick={toggleMenu} className={({ isActive }) => (isActive ? 'active' : '')}>
            Pricing
          </NavLink>
          <NavLink to="/contact" onClick={toggleMenu} className={({ isActive }) => (isActive ? 'active' : '')}>
            Contact US
          </NavLink>
        </div>

        <div className="menu-icon" onClick={toggleMenu}>
          ☰
        </div>
      </nav>
    </div>
  );
};

export default Navbar;