import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../../assets/images/Logo.png";
import style from "./Profile.module.css";
import { FaSearch, FaUserCircle, FaSignOutAlt } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { FiSearch } from "react-icons/fi";

import { useAuth } from "../../Layout/AuthContext";

const Profilenavbar = () => {
  const { isAuthenticated, logout } = useAuth();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  useEffect(() => {}, [isAuthenticated]);

  return (
    <header className={style.header}>
      <div className={style.navHeader}>
        <div className={style.title}>
          <Link to="/home">
            <img
              src={Logo}
              alt="Logo"
              className="rounded-full border-4 border-white img-fluid"
            />
          </Link>
        </div>
        <nav className={style.navigation}>
          <div className={style.menuIcon} onClick={toggleDropdown}>
            ☰
          </div>
          <ul
            className={`${style.navLinks} ${isDropdownOpen ? style.open : ""}`}
          >
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
              <Link to="/contact-us">Contact</Link>
            </li>

            {isAuthenticated ? (
              <>
                <li>
                  <Link to="/search">
                    <icon>
                      <FaSearch style={{ scale: "1.1" }} />
                    </icon>
                    <span>Search</span>
                  </Link>
                </li>
                <li>
                  <Link to="/profile">
                    <icon>
                      <FaUserCircle style={{ scale: "1.1" }} />
                    </icon>
                    <span>Profile</span>
                  </Link>
                </li>
                <li>
                  <Link onClick={logout}>
                    <icon>
                      <FaSignOutAlt style={{ scale: "1.1" }} />
                    </icon>
                    <span>Logout</span>
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
      </div>
    </header>
  );
};

export default Profilenavbar;
