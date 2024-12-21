import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

function Navbar() {
  return (
    <header className="hero-header">
      <div className="hero-logo"></div>

      <nav className="nav">
        <Link to="/about" className="hover:underline">
          About Us
        </Link>
        <Link to="/stories" className="hover:underline">
          Stories
        </Link>
        <Link to="/contact" className="hover:underline">
          Contact Us
        </Link>
        <Link to="/profile" className="hover:underline">
          <i className="fas fa-user"></i>
        </Link>
      </nav>
    </header>
  );
}

export default Navbar;
