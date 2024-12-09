import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../component/Layout/AuthContext";
import "../App.css";
import "./Login.css";

import { FaRegEye } from "react-icons/fa";
import logo from "../assets/images/logowhite.png";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({}); // To store validation errors

  const { login } = useAuth();
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Validation function
  const verify = () => {
    const newErrors = {};

    if (!formData.username.trim()) {
      newErrors.username = "Email or mobile Number is required.";
    } else if (
      !/\S+@\S+\.\S+/.test(formData.username) &&
      !/^\d{10}$/.test(formData.username)
    ) {
      newErrors.username = "Enter a valid email or a 10-digit mobile number.";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required.";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password length is not sufficient.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (verify()) {
      const fakeToken = "your-auth-token";
      login(fakeToken);
      navigate("/");
    } else {
      console.log("Form has errors:", errors);
    }
  };

  return (
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
            {errors.username && <p className="error-text">{errors.username}</p>}
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
              />
              <FaRegEye
                className="icon"
                onClick={togglePasswordVisibility}
                style={{ cursor: "pointer" }}
              />
            </div>
            {errors.password && <p className="error-text">{errors.password}</p>}
          </div>

          <div className="form-actions">
            <button type="submit" className="login-button">
              LOGIN NOW
            </button>
            <Link to="/forgot-password" className="forgot-password">
              Forgot Password?
            </Link>
          </div>

          <p className="signup-prompt">
            Are you a new user?{" "}
            <Link to="/signup" className="signup-link">
              Signup Now
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
