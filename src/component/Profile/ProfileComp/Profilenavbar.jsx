import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo.png"; // Replace with your logo path
import style from "./Profile.module.css";
import { FaSearch, FaUserCircle, FaSignOutAlt } from "react-icons/fa";
import { useAuth } from "../../Layout/AuthContext";

const Profilenavbar = () => {
  const { isAuthenticated, logout } = useAuth();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  useEffect(() => {}, [isAuthenticated]);

  return (
    <header className={style.navHeader}>
      <div className={style.title}>
        <Link to="/home">
          <img
            src={logo}
            alt="Logo"
            className="rounded-full border-4 border-white"
          />
        </Link>
      </div>
      <nav className={style.navigation}>
        <div className={style.menuIcon} onClick={toggleDropdown}>
          ☰
        </div>
        <ul className={`${style.navLinks} ${isDropdownOpen ? style.open : ""}`}>
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
              <li>
                <Link to="/search">
                  <FaSearch style={{ scale: "1.1" }} />
                </Link>
              </li>
              <li>
                <Link to="/profile">
                  <FaUserCircle style={{ scale: "1.1" }} />
                </Link>
              </li>
              <li>
                <Link onClick={logout}>
                  <FaSignOutAlt style={{ scale: "1.1" }} />
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
