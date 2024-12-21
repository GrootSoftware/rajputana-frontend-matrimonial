// HeroBanner.jsx
import React, { useState } from "react";
import axios from "axios";
import "./Hero.css";
import Navbar from "./Navbar";
import Profilenavbar from "../Profile/ProfileComp/Profilenavbar";
import { FaSearch } from "react-icons/fa";
import Features from "./Features";

function Banner() {
  const [formData, setFormData] = useState({
    search: "",
    minAge: "",
    maxAge: "",
    gender: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    // try {
    //   const response = await axios.post(
    //     "https://example.com/api/search",
    //     formData
    //   );
    //   console.log("API Response:", response.data);
    // } catch (error) {
    //   console.error("API Request Error:", error);
    // }
  };

  return (
    <>
      <div className="background-image">
        <div className="overlay"></div>
        <div className="hero-content">
          {/* <Navbar /> */}
          <div className="hero-text">
            <p>Are you looking for a king or queen?</p>
            <h1>No. 1 Elite Matchmaking Service</h1>
          </div>

          <form onSubmit={handleSubmit} className="search-form">
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="groom"
                  checked={formData.gender === "groom"}
                  onChange={handleChange}
                  className="me-2"
                />
                Groom
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="bride"
                  checked={formData.gender === "bride"}
                  onChange={handleChange}
                  className="me-2"
                />
                Bride
              </label>
              <label className="ms-5">Select Age group</label>
            </div>

            <div className="age-group">
              <input
                type="text"
                name="search"
                placeholder="Search"
                value={formData.search}
                onChange={handleChange}
              />

              <input
                type="text"
                name="minAge"
                placeholder="Minimum Age"
                value={formData.minAge}
                onChange={handleChange}
              />
              <input
                type="text"
                name="maxAge"
                placeholder="Maximum Age"
                value={formData.maxAge}
                onChange={handleChange}
              />
              <button type="submit" className="search-button">
                <FaSearch />
              </button>
            </div>
          </form>
          <Features />
        </div>
      </div>
    </>
  );
}

export default Banner;
