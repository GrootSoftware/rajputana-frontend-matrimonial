import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo.png"; // Replace with your logo path
import "./Profile.css";
import { CgProfile } from "react-icons/cg";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { useAuth } from "../../Layout/AuthContext";

const Profilenavbar = () => {
  const { isAuthenticated, logout } = useAuth();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  useEffect(() => {}, [isAuthenticated]);

  return (
    <header className="nav-header">
      <div className="title">
        <img
          src={logo}
          alt="Logo"
          className="rounded-full border-4 border-white"
        />
      </div>
      <nav className="navigation">
        <div className="menu-icon" onClick={toggleDropdown}>
          ☰
        </div>
        <ul className={`nav-links ${isDropdownOpen ? "open" : ""}`}>
          {isAuthenticated ? (
            <>
              <li>
                <Link to="/home">Home</Link>
              </li>
            </>
          ) : (
            <></>
          )}
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/stories">Stories</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>

          {isAuthenticated ? (
            <>
              {" "}
              <li>
                <Link to="/profile">
                  <CgProfile style={{ scale: "1.3" }} />
                </Link>
              </li>
              <li>
                <Link onClick={logout}>
                  <RiLogoutBoxRLine style={{ scale: "1.3" }} />
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Profilenavbar;
