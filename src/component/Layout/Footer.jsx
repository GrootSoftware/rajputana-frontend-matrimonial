// Footer.jsx
import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import "./Footer.css";
import Logo from "../../assets/images/Logo.png";
import { useAuth } from "../../component/Layout/AuthContext";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaPinterest,
} from "react-icons/fa";

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
              src={Logo}
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
            <div className="footer-socials">
              <a href="#" className="footer-icon" aria-label="Facebook">
                <FaFacebook size={24} color="" />
              </a>
              <a href="#" className="footer-icon" aria-label="Instagram">
                <FaInstagram size={24} color="" />
              </a>
              <a href="#" className="footer-icon" aria-label="YouTube">
                <FaYoutube size={24} color="" />
              </a>
              <a href="#" className="footer-icon" aria-label="Pinterest">
                <FaPinterest size={24} color="" />
              </a>
            </div>
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
