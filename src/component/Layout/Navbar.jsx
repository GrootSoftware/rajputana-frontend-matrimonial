import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/Logo.png"; // Replace with your logo path
import style from "../Profile/ProfileComp/Profile.module.css";
import { FaSearch, FaUserCircle, FaSignOutAlt } from "react-icons/fa";
import { useAuth } from "../Layout/AuthContext";

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {}, [isAuthenticated]);

  return (
    <header
      className={style.navHeader}
      style={{ backgroundColor: "transparent" }}
    >
      <div className={style.title}>
        <Link to="/home">
          <img
            src={Logo}
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
          ) : null}
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
            <li>
              <Link to="/login">Login</Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
