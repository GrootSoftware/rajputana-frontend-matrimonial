import React, { useState } from "react";
import axios from "axios";
import "./Home.css";
import Navbar from "./Navbar";
import { FaSearch } from "react-icons/fa";
import Features from "./Features";
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

function Banner() {
  const { isAuthenticated, setFormData, formData } = useAuth();
  const [redirectPath, setRedirectPath] = useState(null); // State to handle navigation

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isAuthenticated) {
      setRedirectPath("/login"); // Set path to redirect to login
    } else {
      try {
        // Perform any API call if required before navigation
        // await axios.post("/api/search", formData);
        setRedirectPath("/search"); // Set path to redirect to search
      } catch (error) {
        console.error("Error during submission:", error);
      }
    }
  };

  // If redirectPath is set, navigate to the specified path
  if (redirectPath) {
    return <Navigate to={redirectPath} replace />;
  }

  return (
    <>
      <div className="background-image">
        <div className="overlay"></div>

        <Navbar />
        <div className="hero-content">
          <div className="wrapper">
            <div className="hero-text">
              <p style={{ fontFamily: "" }}>
                Elite Rajput matchmaking focused on privacy and trust
              </p>
              <h1 style={{ fontFamily: "" }}>Where Prestige Meets Privacy</h1>
            </div>

            <form onSubmit={handleSubmit} className="search-form">
              {/* Gender Radio Buttons */}
              <div className="d-flex flex-column m-lg-3 ms-lg-3 w-100 w-md-25">
                <div className="radio-group mb-2">
                  <input
                    type="radio"
                    id="groom"
                    value="Male"
                    name="gender"
                    checked={formData.gender === "Male"}
                    onChange={handleChange}
                  />
                  <label htmlFor="groom">Groom</label>
                  <input
                    type="radio"
                    id="bride"
                    value="Female"
                    name="gender"
                    checked={formData.gender === "Female"}
                    onChange={handleChange}
                  />
                  <label htmlFor="bride">Bride</label>
                </div>

                {/* Search Field */}
                <div className="search-groups">
                  <input
                    type="text"
                    id="email"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="input-field"
                  />
                </div>
              </div>

              {/* Age Group Selection */}
              <div className="d-flex flex-column m-lg-3 ms-lg-3 w-100 w-md-75 age-group">
                <label className="p-1 text-align-left">Select Age group</label>
                <div className="d-flex">
                  <div className="d-flex flex-row">
                    <input
                      type="number"
                      name="minAge"
                      placeholder="minAge"
                      value={formData.minAge}
                      onChange={handleChange}
                      className="input-field"
                    />
                    <h5 className="m-2">to</h5>
                    <input
                      type="number"
                      name="maxAge"
                      placeholder="maxAge"
                      value={formData.maxAge}
                      onChange={handleChange}
                      className="input-field"
                    />
                  </div>

                  {/* Submit Button */}
                  <button type="submit" className="search-button">
                    <FaSearch />
                  </button>
                </div>
              </div>
            </form>
            <Features />
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
