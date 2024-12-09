// Footer.jsx
import React from "react";
import "./Hero.css";
import { Link } from "react-router-dom";
import "./Footer.css";
import redlogo from "../../assets/images/redlogo.png";
import { useAuth } from "../../component/Layout/AuthContext";

function Footer() {
  const { logout } = useAuth();
  return (
    <div>
      {/* Footer Top Section */}
      <div className="footer-top">
        <div className="footer-design"></div>
        <div className="footer-container">
          {/* About Section */}
          <div className="footer-about">
            <img
              src={redlogo}
              alt="Logo"
              className="rounded-full border-4 border-white"
            />
            <p className="footer-description">
              Rajput Matches is your gateway to a premier, privacy-focused
              matrimonial network for Rajputs seeking serious and secure
              connections. With an exclusive selection of elite profiles, we
              offer a tailored experience for those who value heritage,
              tradition, and privacy.
            </p>
            {/* <div className="footer-socials">
              <a href="#" className="footer-icon">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="footer-icon">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="footer-icon">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="#" className="footer-icon">
                <i className="fab fa-pinterest"></i>
              </a>
            </div> */}
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <p className="footer-heading">Quick Links</p>
            <ul>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/stories">Stories</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/signup" onClick={logout}>
                  Signup
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Section */}
          <div className="footer-legal">
            <p className="footer-heading">Legal</p>
            <ul>
              <li>
                <Link to="/terms-of-use">Terms of Use</Link>
              </li>
              <li>
                <Link to="/privacy-policy">Privacy Policy</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}

      <div></div>
      <p className="footer-bottom">
        Copyright 2025-26 By Rajputmatches Matrimony. All Rights Reserved.
      </p>
      <div />
    </div>
  );
}

export default Footer;
