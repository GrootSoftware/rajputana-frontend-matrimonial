import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Profilenavbar from "../component/Profile/ProfileComp/Profilenavbar";
import logo from "../assets/images/logowhite.png";
import { useAuth } from "../component/Layout/AuthContext";

function Verification() {
  const { setEmail, email } = useAuth();
  // const [email, setEmail] = useState("");
  const [timer, setTimer] = useState(0);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    let interval;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timer]);

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    if (timer > 0 || loading) return; // Prevent resending while timer is running or loading

    setLoading(true);

    const emailRegex =
      /^[a-zA-Z0-9._%+-]+@(gmail|yahoo|outlook|hotmail|aol|icloud)\.(com|co|in)$/;
    if (!emailRegex.test(email.trim())) {
      toast.error("Please enter a valid email address.", {
        position: "top-center",
        autoClose: 2000,
      });
      setLoading(false);
      return;
    }
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/send-verification`,
        { email }
      );

      if (response?.data?.success) {
        toast.success("Email sent successfully!", {
          position: "top-center",
          autoClose: 2000,
        });
        setTimer(120); // Start 2-minute countdown
        navigate("/signup");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to send Email.", {
        position: "top-center",
        autoClose: 2000,
      });
      navigate("/auth/emailverification");
    }
    setLoading(false);
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
              <button type="submit" disabled={timer > 0 || loading}>
                {loading
                  ? "Sending..."
                  : timer > 0
                  ? `Resend in ${timer}s`
                  : "Verify Email"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Verification;
