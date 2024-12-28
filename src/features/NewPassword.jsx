import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../component/Layout/AuthContext";
import "../App.css";
import "./Login.css";

import { FaRegEye } from "react-icons/fa";
import logo from "../assets/images/logowhite.png";

function NewPassword() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    password: "",
    newpassword: "",
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

    if (!formData.password.trim()) {
      newErrors.password = "Password is required.";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password length is not sufficient.";
    }

    if (!formData.newpassword.trim()) {
      newErrors.newpassword = "new Password is required.";
    } else if (formData.newpassword.length < 6) {
      newErrors.password = "new Password length is not sufficient.";
    }

    if (formData.newpassword.trim() === formData.password.trim()) {
      newErrors.newpassword = "password not matched!";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (verify()) {
      navigate("/home");
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
              New Password
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
              Confirm Password
            </label>
            <div className="password-field">
              <input
                type={showPassword ? "text" : "password"}
                id="newpassword"
                name="newpassword"
                value={formData.newpassword}
                onChange={handleChange}
                placeholder="confirm password"
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
              RESET PASSWORD
            </button>
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

export default NewPassword;
