import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../component/Layout/AuthContext";
import "../App.css";
import "./Login.css";

import { FaRegEye } from "react-icons/fa";
import logo from "../assets/images/logowhite.png";
import Profilenavbar from "../component/Profile/ProfileComp/Profilenavbar";
// import Navbar from "../component/Layout/Navbar";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const { login, message } = useAuth();
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
<<<<<<< HEAD
=======

>>>>>>> 97ede3914175742e3e2e83c8205bfe6b386e310b
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const verify = () => {
    const newErrors = {};

<<<<<<< HEAD
    if (!formData.username.trim()) {
      newErrors.username = "Email or mobile Number is required.";
    } else if (
      !/\S+@\S+\.\S+/.test(formData.username) &&
      !/^\d{10}$/.test(formData.username)
    ) {
      newErrors.username = "Enter a valid email or a 10-digit mobile number.";
=======
    const emailRegex =
      /^[a-zA-Z0-9._%+-]+@(gmail|yahoo|outlook|hotmail|aol|icloud)\.(com|co|in)$/;
    const mobileRegex = /^\d{6,14}$/;

    if (!formData.username.trim()) {
      newErrors.username = "Email or mobile number is required.";
    } else if (
      !emailRegex.test(formData.username) &&
      !mobileRegex.test(formData.username)
    ) {
      newErrors.username = "Enter a valid email or mobile number.";
    } else if (
      emailRegex.test(formData.username) &&
      mobileRegex.test(formData.username)
    ) {
      newErrors.username =
        "Enter either an email or a mobile number, not both.";
>>>>>>> 97ede3914175742e3e2e83c8205bfe6b386e310b
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required.";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password length is not sufficient.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (verify()) {
      const route = "login";
      console.log("logging in ");
      console.log({ formData });
      try {
        await login(route, formData);
        navigate("/home");
      } catch (error) {
        console.error("Error during login:", error);
      }
    } else {
      console.log("Form has errors:", errors);
    }
  };

  return (
    <>
      <Profilenavbar />
      <div className="login-container">
        <div className="login-box">
          <div className="title">
            <img
              src={logo}
              alt="Logo"
              className="rounded-full border-4 border-white"
            />
          </div>
          <p className="subtitle">Find Your Elite Match with Ease</p>
          <form onSubmit={handleSubmit}>
            <div className="form-groups">
              <label htmlFor="email" className="label">
                Email / mobile Number
              </label>
              <input
                type="text"
                id="email"
                value={formData.username}
                name="username"
                onChange={handleChange}
                placeholder="Enter email / mobile"
                className="input-field"
              />
              {errors.username && (
                <p className="error-text">{errors.username}</p>
              )}
            </div>

            <div className="form-groups">
              <label htmlFor="password" className="label">
                Password
              </label>
              <div className="password-field">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter password"
                  className="input-field"
                  autoComplete="current-password"
                />
                <FaRegEye
                  className="icon"
                  onClick={togglePasswordVisibility}
                  style={{ cursor: "pointer" }}
                />
              </div>
              {errors.password && (
                <p className="error-text">{errors.password}</p>
              )}
            </div>

            <div className="form-actions">
              <button type="submit" className="login-button">
                LOGIN NOW
              </button>
              <Link to="/forgot-password" className="forgot-password">
                Forgot Password?
              </Link>
            </div>
<<<<<<< HEAD
            {message && <p className="error-text">{message}</p>}
=======
            {/* {message && <p className="error-text">{message}</p>} */}
>>>>>>> 97ede3914175742e3e2e83c8205bfe6b386e310b
            <p className="signup-prompt">
              Are you a new user?{" "}
              <Link to="/auth/emailverification" className="signup-link">
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
