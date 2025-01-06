// HeroBanner.jsx
import React, { useState } from "react";
import axios from "axios";
import "./Home.css";
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
              <div className="d-flex flex-column m-lg-3 ms-lg-3 w-100 w-md-25">
                <div class="radio-group mb-2">
                  <input type="radio" id="groom" name="gender" checked />
                  <label for="groom">Groom</label>
                  <input type="radio" id="bride" name="gender" />
                  <label for="bride">Bride</label>
                </div>

                <div className="search-groups">
                  <input
                    type="text"
                    id="email"
                    name="search"
                    placeholder="Search"
                    value={formData.search}
                    onChange={handleChange}
                    className="input-field"
                  />
                </div>
              </div>

              <div className="d-flex flex-column m-lg-3 ms-lg-3 w-100 w-md-75 age-group">
                <label className="p-1 text-align-left">Select Age group</label>
                <div className="d-flex">
                  <div className="d-flex flex-row">
                    {/* <h5 className="m-2">From</h5> */}
                    <input
                      type="number"
                      name="minAge"
                      placeholder="Age"
                      value={formData.minAge}
                      onChange={handleChange}
                      className="input-field"
                    />
                    <h5 className="m-2">to</h5>
                    <input
                      type="number"
                      name="maxAge"
                      placeholder="Age"
                      value={formData.maxAge}
                      onChange={handleChange}
                      className="input-field"
                    />
                  </div>
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
