import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./ForgetPassword.css"; // Import the CSS file
import logo from "../assets/images/logowhite.png";
import { toast } from "react-toastify";

import Profilenavbar from "../component/Profile/ProfileComp/Profilenavbar";
function ForgotPassword() {
  const [formData, setFormData] = useState({ username: "" });
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const verify = () => {
    const newErrors = {};

    if (!formData.username.trim()) {
      newErrors.username = "Email or mobile number is required.";
    } else if (formData.username.length > 25) {
      newErrors.username = "Username must not exceed 25 characters.";
    } else if (
      !/\S+@\S+\.\S+/.test(formData.username) &&
      !/^\d{10}$/.test(formData.username)
    ) {
      newErrors.username = "Enter a valid email or a 10-digit mobile number.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (verify()) {
        console.log(formData);
        const response = await axios.post(
          `${process.env.REACT_APP_BASE_URL}/forgot-password`,
          formData
        );
        console.log(response);
        if (response) {
          alert("Verify Otp");
        }

        if (response.data?.message) {
          toast.success(response.data.message, {
            position: "top-center",
            autoClose: 2000,
          });
        }
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "An error occurred while updating the data.",
        {
          position: "top-center",
          autoClose: 3000,
        }
      );
    }
  };

  return (
    <>
      <Profilenavbar />
      <div className="forgot-password-page">
        <div className="overlay"></div>
        <div className="forgot-password-container">
          <div className="title">
            <img
              src={logo}
              alt="Logo"
              className="rounded-full border-4 border-white"
            />
          </div>
          <p className="subtitle">Oops! Did you forget your password?</p>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="emailOrmobile">Email / Mobile Number</label>
              <input
                id="username"
                name="username"
                type="text"
                placeholder="Enter email / mobile"
                value={formData.username}
                onChange={handleChange}
              />
            </div>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            {successMessage && (
              <p className="success-message">{successMessage}</p>
            )}
            {errors.username && <p className="error-text">{errors.username}</p>}
            <div className="button-group">
              <button type="submit">RESET PASSWORD</button>
            </div>
            <div className="signup-link">
              <p>
                Are you a new user?{" "}
                <Link to="/signup" className="signup-now">
                  Signup Now
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default ForgotPassword;
