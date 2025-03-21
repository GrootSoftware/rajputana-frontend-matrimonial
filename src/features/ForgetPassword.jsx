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
<<<<<<< HEAD
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [otp, setOtp] = useState("");
=======
>>>>>>> 97ede3914175742e3e2e83c8205bfe6b386e310b
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const verify = () => {
    const newErrors = {};
<<<<<<< HEAD
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
=======

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

>>>>>>> 97ede3914175742e3e2e83c8205bfe6b386e310b
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
<<<<<<< HEAD
        setShowOtpInput(true);
=======
>>>>>>> 97ede3914175742e3e2e83c8205bfe6b386e310b
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

<<<<<<< HEAD
  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    if (!/^\d{4}$/.test(otp)) {
      toast.error("Please enter a valid 4-digit OTP.", {
        position: "top-center",
        autoClose: 2000,
      });
      return;
    }

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/verify-otp`,
        { username: formData.username, otp }
      );

      if (response?.data?.message && response?.status == 200) {
        toast.success(response.data.message, {
          position: "top-center",
          autoClose: 2000,
        });
        if (response?.data.token) {
          let token = response.data?.token;
          localStorage.setItem("authToken", token);
        }
        navigate("/set-new-password");
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Invalid OTP. Please try again.",
        {
          position: "top-center",
          autoClose: 3000,
        }
      );
    }
  };

=======
>>>>>>> 97ede3914175742e3e2e83c8205bfe6b386e310b
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
<<<<<<< HEAD
              <label htmlFor="username">Email / Mobile Number</label>
=======
              <label htmlFor="username">Email / Phone Number</label>
>>>>>>> 97ede3914175742e3e2e83c8205bfe6b386e310b
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
<<<<<<< HEAD
            {!showOtpInput && (
              <div className="button-group">
                <button type="submit">RESET PASSWORD</button>
              </div>
            )}
          </form>
          {showOtpInput && (
            <>
              <form onSubmit={handleOtpSubmit}>
                <div className="input-group">
                  <label htmlFor="otp">Enter OTP</label>
                  <input
                    id="otp"
                    name="otp"
                    type="text"
                    placeholder="Enter 4-digit OTP"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    maxLength={4}
                  />
                </div>
                <div className="button-group">
                  <button type="submit">VERIFY OTP</button>
                </div>
              </form>
              <div className="signup-link">
                <p>
                  Are you a new user?{" "}
                  <Link
                    to="/forgot-password"
                    className="signup-now"
                    onClick={(e) => setShowOtpInput(false)}
                  >
                    {" "}
                    Resend Otp
                  </Link>
                </p>
              </div>
            </>
          )}

          {!showOtpInput && (
            <div className="signup-link">
              <p>
                Are you a new user?{" "}
                <Link to="/signup" className="signup-now">
                  Signup Now
                </Link>
              </p>
            </div>
          )}
=======

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
>>>>>>> 97ede3914175742e3e2e83c8205bfe6b386e310b
        </div>
      </div>
    </>
  );
}

export default ForgotPassword;
