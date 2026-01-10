import { Link } from "react-router-dom";
import React from "react";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About */}
        <div className="footer-col">
          <h2 className="logo">T-HOME</h2>
          <p>
            T-HOME is dedicated to providing innovative and reliable solutions for your home.
            We blend quality, technology, and design to enhance your living experience.
            Stay connected with us for updates, offers, and expert insights.
          </p>
          <div className="footer-social-icons">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h3>Quick links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About us</Link></li>
            <li><Link to="/service">Services</Link></li>
            <li><Link to="/contact">Contact us</Link></li>
          </ul>
        </div>

        {/* Official Info */}
        <div className="footer-col">
          <h3>Official Info</h3>
          <div className="info-item">
            <span className="icon">📞</span>
            <div>
              <strong>Phone</strong>
              <p>+91 7032183836</p>
            </div>
          </div>
          <div className="info-item">
            <span className="icon">✉️</span>
            <div>
              <strong>Mail Us</strong>
              <p>info@thome.co.in</p>
            </div>
          </div>
          <div className="info-item">
            <span className="icon">📍</span>
            <div>
              <strong>Address</strong>
              <p>
                H.No: 2-88/4, Quthbullapur Village,<br/>
                Opposite to Government Veterinary Hospital,<br/>
                Hyderabad – 500055
              </p>
            </div>
          </div>
        </div>

        {/* Subscribe */}
        <div className="footer-col">
          <h3>Subscribe Us Today</h3>
          <p>
            Subscribe Us & Receive Our Offers and Updates to Your Inbox Directly.
          </p>
          <p className="note">* We do not share your email id</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>Copyright © 2025 T-Home. All rights reserved.</p>
        <div className="bottom-links">
          <a href="#">Terms and Conditions</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
