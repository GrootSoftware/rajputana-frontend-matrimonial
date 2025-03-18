import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./ForgetPassword.css"; // Import the CSS file
import logo from "../assets/images/logowhite.png";
import { toast } from "react-toastify";
import Profilenavbar from "../component/Profile/ProfileComp/Profilenavbar";
import { useNavigate } from "react-router-dom";

function ForgotPassword() {
  const [formData, setFormData] = useState({ username: "" });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const verify = () => {
    const newErrors = {};

    // Email validation regex (flexible for most email formats)
    const emailRegex =
      /^[a-zA-Z0-9._%+-]+@(gmail|yahoo|outlook|hotmail|aol|icloud)\.(com|co|in)$/;
    // Mobile validation regex (accepts country code with optional +, and 6-14 digits)
    const mobileRegex = /^(\+?\d{1,4})?\d{6,14}$/;

    if (!formData.username.trim()) {
      newErrors.username = "Email or mobile number is required.";
    } else if (formData.username.length > 40) {
      newErrors.username = "Username must not exceed 40 characters.";
    } else if (
      !emailRegex.test(formData.username) &&
      !mobileRegex.test(formData.username)
    ) {
      newErrors.username =
        "Enter a valid email or a valid mobile number with optional country code.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!verify()) return;
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/forgot-password`,
        formData
      );

      console.log(response);
      if (response?.data?.message && response?.status == 200) {
        toast.success(response.data.message, {
          position: "top-center",
          autoClose: 2000,
        });
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "An error occurred while updating the data.",
        {
          position: "top-center",
          autoClose: 1500,
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
          <div className="title mt-0">
            <img
              src={logo}
              alt="Logo"
              className="rounded-full border-4 border-white"
            />
          </div>
          <p className="subtitle">Oops! Did you forget your password?</p>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="username">Email / Phone Number</label>
              <input
                id="username"
                name="username"
                type="text"
                placeholder="Enter email / mobile"
                value={formData.username}
                onChange={handleChange}
              />
            </div>
            {errors.username && <p className="error-text">{errors.username}</p>}

            <div className="button-group">
              <button type="submit">RESET PASSWORD</button>
            </div>
          </form>

          <div className="signup-link">
            <p>
              Are you a new user?{" "}
              <Link to="/signup" className="signup-now">
                Signup Now
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ForgotPassword;
