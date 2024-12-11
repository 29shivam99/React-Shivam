// Footer.js
import React from "react";
import foodNinja from "../../images/foodNinja.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={foodNinja} alt="Logo" />
          <h2>Food Ninja</h2>
        </div>
        <div className="footer-links">
          <h3>About Us</h3>
          <ul>
            <li>
              <a href="#about">Our Story</a>
            </li>
            <li>
              <a href="#careers">Careers</a>
            </li>
            <li>
              <a href="#contact">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="footer-links">
          <h3>Help & Support</h3>
          <ul>
            <li>
              <a href="#faq">FAQ</a>
            </li>
            <li>
              <a href="#shipping">Shipping Info</a>
            </li>
            <li>
              <a href="#returns">Returns</a>
            </li>
          </ul>
        </div>
        <div className="footer-links">
          <h3>Follow Us</h3>
          <ul className="social-media">
            <li>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Food Ninja. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
