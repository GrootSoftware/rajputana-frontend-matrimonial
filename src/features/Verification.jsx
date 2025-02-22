import React, { useState, useRef } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import "./ForgetPassword.css";

import { useNavigate } from "react-router-dom";
import Profilenavbar from "../component/Profile/ProfileComp/Profilenavbar";
import logo from "../assets/images/logowhite.png";

function Verification() {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [resendDisabled, setResendDisabled] = useState(false);
  const [timer, setTimer] = useState(30);
  const otpRefs = useRef([]);
  const navigate = useNavigate();

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    if (!/\S+@\S+\.\S+/.test(email)) {
      toast.error("Please enter a valid email address.", {
        position: "top-center",
        autoClose: 2000,
      });
      return;
    }
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/send-verification-otp`,
        { email }
      );

      if (response?.data?.success) {
        toast.success("OTP sent successfully!", {
          position: "top-center",
          autoClose: 2000,
        });
        setShowOtpInput(true);
        startResendTimer();
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to send OTP.", {
        position: "top-center",
        autoClose: 2000,
      });
    }
  };

  const handleOtpChange = (index, value) => {
    if (!/^\d?$/.test(value)) return; // Only allow digits

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto focus to the next input
    if (value !== "" && index < 3) {
      otpRefs.current[index + 1].focus();
    }
  };

  const handleOtpKeyDown = (index, e) => {
    if (e.key === "Backspace") {
      const newOtp = [...otp];
      newOtp[index] = "";
      setOtp(newOtp);

      if (index > 0) {
        otpRefs.current[index - 1].focus();
      }
    }
  };

  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    const enteredOtp = otp.join("");
    if (!/^\d{4}$/.test(enteredOtp)) {
      toast.error("Please enter a valid 4-digit OTP.", {
        position: "top-center",
        autoClose: 2000,
      });
      return;
    }
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/email/verify-otp`,
        { email, otp: enteredOtp }
      );
      if (response?.data?.success) {
        toast.success("Email verified successfully!", {
          position: "top-center",
          autoClose: 2000,
        });
        setShowOtpInput(false);
        navigate("/signup");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Invalid OTP. Try again.", {
        position: "top-center",
        autoClose: 2000,
      });
    }
  };

  const startResendTimer = () => {
    setResendDisabled(true);
    setTimer(30);

    const countdown = setInterval(() => {
      setTimer((prev) => {
        if (prev === 1) {
          clearInterval(countdown);
          setResendDisabled(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
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
          <p className="subtitle">Welcome! Verify Your Email</p>

          {!showOtpInput ? (
            <form onSubmit={handleEmailSubmit}>
              <div className="input-group">
                <label>Email Address</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="button-group">
                <button type="submit">Send OTP</button>
              </div>
            </form>
          ) : (
            <motion.form
              onSubmit={handleOtpSubmit}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <div className="input-group otp-container">
                <label>Enter OTP</label>
                <div className="otp-inputs">
                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      ref={(el) => (otpRefs.current[index] = el)}
                      type="text"
                      value={digit}
                      onChange={(e) => handleOtpChange(index, e.target.value)}
                      onKeyDown={(e) => handleOtpKeyDown(index, e)}
                      maxLength={1}
                      className="otp-box"
                    />
                  ))}
                </div>
              </div>
              <div className="button-group otp-actions">
                <button type="submit">Verify OTP</button>
                <button
                  type="button"
                  onClick={handleEmailSubmit}
                  disabled={resendDisabled}
                  className="resend-otp"
                >
                  Resend OTP {resendDisabled ? `(${timer}s)` : ""}
                </button>
              </div>
            </motion.form>
          )}
        </div>
      </div>
    </>
  );
}

export default Verification;
