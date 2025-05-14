import React from 'react'
import '../Footer/Footer.css'
import { FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';

import logo from '../img/logo-white-01.png'; // Replace with your logo path

const Footer = () => {
  return (
    <>
    
    <footer className="footer">
      <div className="footer-logo">
        <img src={logo} alt="Quick Car Reports Logo" className="footer-logo-img" />
      </div>
      
      <div className="footer-container">
        <div className="footer-section">
          <h3 className='text-white'>Contact Details</h3>
          <div className="contact-item">
            <FaMapMarkerAlt className="contact-icon" />
            <p>8 The Green, Ste A, Dover, DE 19901</p>
          </div>
          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <p>support@quickcarreports.com</p>
          </div>
        </div>

        <div className="footer-section">
          <h3 className='text-white' >Policies</h3>
          <ul>
            <li ><a className='text-white' href="/terms">Terms & Conditions</a></li>
            <li ><a  className='text-white'href="/privacy">Privacy Policy</a></li>
            <li ><a className='text-white' href="/refund">Refund Policy</a></li>
            <li ><a className='text-white' href="/shipping">Shipping Policy</a></li>
          </ul>
        </div>

        <div className="footer-section newsletter">
          <h3 className='text-white'>Newsletter</h3>
          <p>Enter your email address and get our offers and plans in to your mail.</p>
          <div className="newsletter-form">
            <input type="email" placeholder="Email Address..." />
            <button>SUBSCRIBE</button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© This website is create by owais khalid ....</p>
      </div>
    </footer>
    
    </>
  )
}

export default Footer
