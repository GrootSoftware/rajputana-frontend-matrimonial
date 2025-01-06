import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css";
import { useAuth } from "../component/Layout/AuthContext";
// India State and District Data
import indiaStates from "./state";
import Profilenavbar from "../component/Profile/ProfileComp/Profilenavbar";

import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import logo from "../assets/images/logowhite.png";

function Register() {
  const { register, message } = useAuth();
  // State to manage password visibility
  const [showPassword, setShowPassword] = useState(false);

  // State to manage form data
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    dateOfBirth: "",
    gender: "",
    country: "",
    state: "",
    city: "",
    password: "",
  });

  // State to manage cities for the state selection
  const [cities, setCities] = useState([]);
  // State to manage errors
  const [errors, setErrors] = useState({});

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Update cities based on selected state
    if (name === "state" && indiaStates[value]) {
      setCities(indiaStates[value]);
    }
  };

  // Validation function
  const verify = () => {
    const newErrors = {};

    if (!formData.firstName.trim())
      newErrors.firstName = "First Name is required.";
    if (!formData.lastName.trim())
      newErrors.lastName = "Last Name is required.";
    if (!formData.mobile.trim() || !/^\d{10}$/.test(formData.mobile))
      newErrors.mobile = "Mobile must be a valid 10-digit number.";
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email must be valid.";
    if (!formData.dateOfBirth.trim())
      newErrors.dateOfBirth = "Date of Birth is required.";
    if (!formData.gender.trim()) newErrors.gender = "Gender is required.";
    if (!formData.country.trim()) newErrors.country = "Country is required.";
    if (!formData.state.trim()) newErrors.state = "State is required.";
    if (!formData.city.trim()) newErrors.city = "City is required.";
    if (!formData.password.trim() || formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form inputs (assumes `verify` is a function for validation)
    if (verify()) {
      const route = "signup";
      console.log("Form Data Submitted:", formData);
      // try {
      //   await register(route, formData); // Calls the `register` from `AuthProvider`
      // } catch (error) {
      //   console.error("Error during registration:", error);
      // }
    } else {
      console.log("Form has errors:", errors);
    }
  };

  return (
    <>
      <Profilenavbar />
      <div className="register-container">
        <div className="register-box">
          <div className="title">
            <img
              src={logo}
              alt="Logo"
              className="rounded-full border-4 border-white"
            />
          </div>
          <p className="subtitle">Join the Exclusive Rajput Network</p>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <div>
                <label>First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Enter First Name"
                  className="input-field"
                />
                {errors.firstName && (
                  <p className="error-text">{errors.firstName}</p>
                )}
              </div>
              <div>
                <label>Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Enter Last Name"
                  className="input-field"
                />
                {errors.lastName && (
                  <p className="error-text">{errors.lastName}</p>
                )}
              </div>
            </div>

            <div className="form-group">
              <div>
                <label>Mobile</label>
                <input
                  type="text"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="Enter Mobile"
                  className="input-field"
                />
                {errors.mobile && <p className="error-text">{errors.mobile}</p>}
              </div>
              <div>
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter Email"
                  className="input-field"
                />
                {errors.email && <p className="error-text">{errors.email}</p>}
              </div>
            </div>

            <div className="form-group">
              <div>
                <label>Birth Date</label>
                <input
                  type="date"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  className="input-field"
                />
                {errors.dateOfBirth && (
                  <p className="error-text">{errors.dateOfBirth}</p>
                )}
              </div>
              <div>
                <label>Gender</label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="input-field"
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
                {errors.gender && <p className="error-text">{errors.gender}</p>}
              </div>
            </div>

            <div className="form-group">
              <div>
                <label>Country</label>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="input-field"
                >
                  <option value="">Select Country</option>
                  <option value="India">India</option>
                </select>
                {errors.country && (
                  <p className="error-text">{errors.country}</p>
                )}
              </div>
              <div>
                <label>State</label>
                <select
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  className="input-field"
                >
                  <option value="">Select State</option>
                  {formData.country === "India" &&
                    Object.keys(indiaStates).map((state) => (
                      <option key={state} value={state}>
                        {state}
                      </option>
                    ))}
                </select>
                {errors.state && <p className="error-text">{errors.state}</p>}
              </div>
              <div>
                <label>City</label>
                <select
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="input-field"
                >
                  <option value="">Select City</option>
                  {cities.length > 0 &&
                    cities.map((city) => (
                      <option key={city} value={city}>
                        {city}
                      </option>
                    ))}
                </select>
                {errors.city && <p className="error-text">{errors.city}</p>}
              </div>
            </div>

            <div>
              <label>Password</label>
              <div className="password-field">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className="input-field"
                  autoComplete="new-password" 
                />
                {showPassword ? (
                  <FaRegEyeSlash
                    className="icon"
                    onClick={togglePasswordVisibility}
                    style={{ cursor: "pointer" }}
                  />
                ) : (
                  <FaRegEye
                    className="icon"
                    onClick={togglePasswordVisibility}
                    style={{ cursor: "pointer" }}
                  />
                )}
                {errors.password && (
                  <p className="error-text">{errors.password}</p>
                )}
              </div>
            </div>

            <button type="submit" className="submit-btn">
              SIGNUP NOW
            </button>
            {message && <p className="error-text">{message}</p>}
          </form>

          <p className="signup-prompt">
            Are you already a member?{" "}
            <Link to="/login" className="link">
              Login Now
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Register;
