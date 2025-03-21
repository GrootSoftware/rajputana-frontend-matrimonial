import React, { useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate, useSearchParams } from "react-router-dom";

import Profilenavbar from "../component/Profile/ProfileComp/Profilenavbar";
import logo from "../assets/images/logowhite.png";

function VerifyEmail() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const verifyEmail = async () => {
    if (!token) {
      toast.error("Invalid verification link!", { position: "top-center" });
      return;
    }

    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/email/verify-email?token=${token}`
      );

      if (response?.data?.success) {
        toast.success("Email verified successfully!", {
          position: "top-center",
          autoClose: 2000,
        });
        navigate("/signup");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Invalid OTP. Try again.", {
        position: "top-center",
        autoClose: 2000,
      });
      navigate("/auth/emailverification"); // Redirect after error
    }
  };

  useEffect(() => {
    verifyEmail();
  }, [token, navigate]);

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
          <p className="subtitle">Welcome! Email is Verified</p>
        </div>
      </div>
    </>
  );
}

export default VerifyEmail;
