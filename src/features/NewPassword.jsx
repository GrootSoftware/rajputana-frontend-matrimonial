import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../component/Layout/AuthContext";
import { toast } from "react-toastify";
import axios from "axios";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import logo from "../assets/images/logowhite.png";
import "../App.css";
import "./Login.css";
import Profilenavbar from "../component/Profile/ProfileComp/Profilenavbar";

const BASE_URL = process.env.REACT_APP_BASE_URL;

function NewPassword() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    password: "",
    newpassword: "",
  });
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prev) => !prev);
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
      newErrors.password = "Password must be at least 6 characters long.";
    }

    if (!formData.newpassword.trim()) {
      newErrors.newpassword = "Confirm Password is required.";
    } else if (formData.newpassword.length < 6) {
      newErrors.newpassword =
        "Confirm Password must be at least 6 characters long.";
    } else if (formData.newpassword !== formData.password) {
      newErrors.newpassword = "Passwords do not match!";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!verify()) {
      console.log("Form has errors:", errors);
      return;
    }

    try {
      const token = localStorage.getItem("authToken");

      if (!token) {
        toast.error("Authentication token missing. Please log in again.", {
          position: "top-center",
          autoClose: 3000,
        });
        return;
      }

      const response = await axios.post(
        `${BASE_URL}/reset-password`,
        {
          password: formData.password,
          newPassword: formData.newpassword,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data && response.data.success) {
        toast.success("Password reset successful!", {
          position: "top-center",
          autoClose: 2000,
        });

        localStorage.removeItem("authToken");
        navigate("/login");
      } else {
        throw new Error(response.data.message || "Unknown error occurred.");
      }
    } catch (error) {
      console.error("Error during password reset:", error);
      const errorMessage =
        error.response?.data?.message || "An error occurred. Please try again.";

      toast.error(errorMessage, {
        position: "top-center",
        autoClose: 3000,
      });
    }
  };

  return (
    <>
      <Profilenavbar />
      <div className="login-container">
        <div className="login-box">
          <div className="title mt-0">
            <img
              src={logo}
              alt="Logo"
              className="rounded-full border-4 border-white"
            />
          </div>
          <p className="subtitle">Find Your Elite Match with Ease</p>
          <form onSubmit={handleSubmit}>
            <div className="form-groups">
              <label htmlFor="password" className="label">
                New Password
              </label>
              <div className="password-field">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter new password"
                  className="input-field"
                />
                {showPassword ? (
                  <FaRegEyeSlash
                    className="icon"
                    onClick={togglePasswordVisibility}
                  />
                ) : (
                  <FaRegEye
                    className="icon"
                    onClick={togglePasswordVisibility}
                  />
                )}
              </div>
              {errors.password && (
                <p className="error-text">{errors.password}</p>
              )}
            </div>

            <div className="form-groups">
              <label htmlFor="newpassword" className="label">
                Confirm Password
              </label>
              <div className="password-field">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="newpassword"
                  name="newpassword"
                  value={formData.newpassword}
                  onChange={handleChange}
                  placeholder="Confirm new password"
                  className="input-field"
                />
                {showConfirmPassword ? (
                  <FaRegEyeSlash
                    className="icon"
                    onClick={toggleConfirmPasswordVisibility}
                  />
                ) : (
                  <FaRegEye
                    className="icon"
                    onClick={toggleConfirmPasswordVisibility}
                  />
                )}
              </div>
              {errors.newpassword && (
                <p className="error-text">{errors.newpassword}</p>
              )}
            </div>

            <div className="form-actions">
              <button type="submit" className="login-button">
                RESET PASSWORD
              </button>
            </div>

            <p className="signup-prompt">
              Verification failed?{" "}
              <Link to="/forgot-password" className="signup-link">
                Forget Password
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default NewPassword;
