import React, { useState } from "react";
import axios from "axios";
import "./Home.css";
import Navbar from "./Navbar";
<<<<<<< HEAD
import { FaSearch } from "react-icons/fa";
=======

import { LiaSearchSolid } from "react-icons/lia";

>>>>>>> 97ede3914175742e3e2e83c8205bfe6b386e310b
import Features from "./Features";
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

const ageOptions = Array.from({ length: 33 }, (_, i) => 18 + i);

function Banner() {
  const { isAuthenticated, setFormData, formData } = useAuth();
  const [redirectPath, setRedirectPath] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    let updatedValue = value.trimStart();

    const nameRegex = /^[a-zA-Z\s]{1,20}$/;
    const occupationRegex = /^[a-zA-Z\s]{1,20}$/;

    const numberRegex = /^\d*$/;

    switch (name) {
      case "name":
        if (numberRegex.test(value) || nameRegex.test(value)) {
          updatedValue = value;
        } else {
          return;
        }
        break;

      case "gender":
        if (!occupationRegex.test(value)) return;
        break;

      case "minAge":
      case "maxAge":
        if (!numberRegex.test(value)) return;
        break;

      default:
        break;
    }

    setFormData({ ...formData, [name]: updatedValue });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isAuthenticated) {
      setRedirectPath("/login");
    } else {
      try {
        setRedirectPath("/search");
      } catch (error) {
        console.error("Error during submission:", error);
      }
    }
  };

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
<<<<<<< HEAD
              <div className="d-flex flex-column m-lg-3 ms-lg-3 w-100 w-md-25">
                <div className="radio-group mb-2">
=======
              <div className="d-flex flex-column w-100 w-md-25 mt-lg-3 mb-lg-3">
                <div className="radio-group mb-3">
>>>>>>> 97ede3914175742e3e2e83c8205bfe6b386e310b
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
<<<<<<< HEAD
              <div className="d-flex flex-column m-lg-3 ms-lg-3 w-100 w-md-75 age-group">
                <label className="p-1 text-align-left">Select Age group</label>
                <div className="d-flex">
                  <div className="d-flex flex-row">
                    <select
                      name="minAge"
                      value={formData.minAge}
                      onChange={handleChange}
                      className="input-field"
                    >
                      <option value="">Age</option>
                      {Array.from({ length: 33 }, (_, i) => 18 + i).map(
                        (age) => (
                          <option key={age} value={age}>
                            {age}
                          </option>
                        )
                      )}
                    </select>

                    <h5 className="m-2">to</h5>

                    <select
                      name="maxAge"
                      value={formData.maxAge}
                      onChange={handleChange}
                      className="input-field"
                    >
                      <option value="">Age</option>
                      {Array.from({ length: 33 }, (_, i) => 18 + i).map(
                        (age) => (
                          <option key={age} value={age}>
                            {age}
                          </option>
                        )
                      )}
                    </select>
                  </div>

                  <button type="submit" className="search-button">
                    <FaSearch />
=======
              <div className="d-flex flex-column m-lg-3 ms-lg-3 w-100 age-group">
                <label className="text-align-left">Select Age group</label>
                <div className="d-flex">
                  <div className="d-flex flex-row flex-grow-1">
                    <>
                      <select
                        name="minAge"
                        value={formData.minAge}
                        onChange={handleChange}
                        className="input-field"
                        style={{ paddingRight: "30px" }} // Add padding for icon space
                      >
                        <option value="">Age</option>
                        {Array.from({ length: 33 }, (_, i) => 18 + i).map(
                          (age) => (
                            <option key={age} value={age}>
                              {age}
                            </option>
                          )
                        )}
                      </select>
                    </>

                    <h5
                      className="m-2"
                      style={{
                        fontSize: "17px",
                        fontWeight: "700",
                      }}
                    >
                      to
                    </h5>

                    <>
                      <select
                        name="maxAge"
                        value={formData.maxAge}
                        onChange={handleChange}
                        className="input-field"
                        style={{ paddingRight: "30px" }} // Same padding for icon space
                      >
                        <option value="">Age</option>
                        {Array.from({ length: 33 }, (_, i) => 18 + i).map(
                          (age) => (
                            <option key={age} value={age}>
                              {age}
                            </option>
                          )
                        )}
                      </select>
                    </>
                  </div>

                  <button type="submit" className="search-button">
                    <LiaSearchSolid
                      style={{ fontWeight: "900", fontSize: "1.5rem" }}
                    />
>>>>>>> 97ede3914175742e3e2e83c8205bfe6b386e310b
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
