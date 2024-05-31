import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section logo-section">
          <div className="logo-container">
            <img src="\Images\Rhyno Logo .png" alt="Rhyno EV Logo" className="logo" />
            <span>RHYNO EV</span>
          </div>
        </div>
        <div className="footer-section">
          <h3>About Us</h3>
          <ul>
            <li><Link to="/"className="footer-link">Privacy Policy</Link></li>
                <li><Link to="/" className="footer-link" >Refund Policy</Link></li>
                <li><Link to="/" className="footer-link">Website Policy</Link></li>
                <li><Link to="https://www.linkedin.com/company/rhyno-wheels/?originalSubdomain=in" className="footer-link">Career</Link></li>
                <li><Link to="/rentals" className="footer-link">Rentals</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Products</h3>
          <ul>
                <li><Link to="/products/product1"className="footer-link">SE03 Lite</Link></li>
                <li><Link to="/products/product2" className="footer-link" >SE03</Link></li>
                <li><Link to="/products/product3" className="footer-link">SE03 Max</Link></li>
                <li><Link to="/products/compare" className="footer-link">Compare ll</Link></li>
          </ul>
        </div>
        <div className="footer-section contact-section">
          <h3>Contact Us</h3>
          <ul>
            <li>Mail: info@rhyno.in</li>
            <li>Mobile no.: +91-9023987528</li>
            <li>Location: Rhyno Wheels Private limited, Near UG hostel gate #2, Behind PDEU, Raisan, Gandhinagar, Gujarat, India.</li>
          </ul>
        </div>
      </div>
      <div className="social-icons-foot">
        <a href="https://www.instagram.com/rhyno.in?igsh=MXFwb2VkcnN1bWlhNw==" className="social-icon"><FontAwesomeIcon icon={faInstagram} /></a>
        <a href="https://www.linkedin.com/company/rhyno-wheels/?originalSubdomain=in" className="social-icon"><FontAwesomeIcon icon={faLinkedin} /></a>
      </div>
      <div className="copyright">
        &copy; 2024 Rhyno Wheels Private limited. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;