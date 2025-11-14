import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-logo">SCZ.GLOBAL</h3>
            <p className="footer-description">
              Expert small business consulting for e-commerce and digital marketing. 
              Helping businesses grow smarter and thrive.
            </p>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-title">Services</h4>
            <ul className="footer-links">
              <li><a href="#services">E-commerce Setup</a></li>
              <li><a href="#services">Digital Marketing</a></li>
              <li><a href="#services">Business Consulting</a></li>
              <li><a href="#services">Operations Development</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-title">Contact Us</h4>
            <ul className="footer-contact">
              <li>Email: info@scz.global</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>
                <button className="cta-button footer-cta">Get Started</button>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} SCZ.GLOBAL. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

