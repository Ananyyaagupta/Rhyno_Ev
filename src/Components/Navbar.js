import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const productsRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleProductsDropdown = () => {
    setIsProductsDropdownOpen(prevState => !prevState);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsProductsDropdownOpen(true);
      } else {
        setIsProductsDropdownOpen(false);
      }
    };

    handleResize(); // Call once initially
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <div className="navbar">
        <div className="navbar-left">
          <Link to="/" className="navbar-logo">
            <img src="\Images\Rhyno Logo .png" alt="Rhyno EV Logo" />
          </Link>
        </div>
        <div className={`navbar-right ${isMenuOpen ? 'active' : ''}`}>
          <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
            <li><Link to="/about" onClick={closeMenu}>About Us</Link></li>
            <li
              className="navbar-dropdown"
              ref={productsRef}
            >
               
                <span
                  className={`navbar-link ${isMenuOpen ? 'active' : ''}`}
                  onClick={toggleProductsDropdown}
                >
                  <Link to="/products"> Products </Link><FontAwesomeIcon icon={faAngleDown} />
                </span>
              
              <ul className={`dropdown-menu ${isProductsDropdownOpen ? 'active' : ''}`}>
                <li><Link to="/products/product1" className="footer-link" onClick={closeMenu}>SE03 Lite</Link></li>
                <li><Link to="/products/product2" className="footer-link" onClick={closeMenu}>SE03</Link></li>
                <li><Link to="/products/product3" className="footer-link" onClick={closeMenu}>SE03 Max</Link></li>
                <li><Link to="/products/compare" className="footer-link" onClick={closeMenu}>Compare All</Link></li>
              </ul>
            </li>
            <li><Link to="/contact" onClick={closeMenu}>Contact Us</Link></li>
            <li><Link to="/prebook" onClick={closeMenu}>Pre-book now</Link></li>
          </ul>
        </div>
        <div className={`menu-icon ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} />
        </div>
      </div>
      <div className="social-icons">
        <a href="https://www.instagram.com/rhyno.in?igsh=MXFwb2VkcnN1bWlhNw=="><FontAwesomeIcon icon={faInstagram} /></a>
        <a href="https://www.linkedin.com/company/rhyno-wheels/?originalSubdomain=in"><FontAwesomeIcon icon={faLinkedin} /></a>
      </div>
    </div>
  );
};

export default Navbar;