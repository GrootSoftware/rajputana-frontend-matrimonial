import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Country, State, City } from "country-state-city";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useAuth } from "../component/Layout/AuthContext";
import Profilenavbar from "../component/Profile/ProfileComp/Profilenavbar";
import logo from "../assets/images/logowhite.png";

import "./Register.css";

function Register() {
  const { register, message } = useAuth();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

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
    countryCode: "",
    profilefor: "",
  });

  const [errors, setErrors] = useState({});

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
      ...(name === "country" ? { state: "", city: "" } : {}),
      ...(name === "state" ? { city: "" } : {}),
    }));
  };

  const verify = () => {
    const newErrors = {};
    const nameRegex = /^[A-Za-z\s]+$/;
    const stringRegex = /^[A-Za-z\s]+$/;
    const mobileRegex = /^\d{10}$/;
    const emailRegex = /\S+@\S+\.\S+/;

    if (!formData.firstName.trim() || !nameRegex.test(formData.firstName))
      newErrors.firstName = "Valid First Name is required.";
    if (!formData.lastName.trim() || !nameRegex.test(formData.lastName))
      newErrors.lastName = "Valid Last Name is required.";
    if (!formData.profilefor.trim() || !stringRegex.test(formData.profilefor))
      newErrors.profilefor = "Valid profile for is required.";

    if (!formData.mobile.trim() || !mobileRegex.test(formData.mobile))
      newErrors.mobile = "Mobile must be a valid 10-digit number.";
    if (!formData.email.trim() || !emailRegex.test(formData.email))
      newErrors.email = "Email must be valid.";
    if (!formData.dateOfBirth.trim())
      newErrors.dateOfBirth = "Date of Birth is required.";
    if (!formData.countryCode.trim())
      newErrors.countryCode = "Country Code is required.";
    if (!formData.gender.trim()) newErrors.gender = "Gender is required.";
    if (!formData.country.trim()) newErrors.country = "Country is required.";
    if (!formData.state.trim()) newErrors.state = "State is required.";
    if (!formData.city.trim()) newErrors.city = "City is required.";
    if (!formData.password.trim() || formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters.";

    setErrors(newErrors);
    console.log("newweerrrioor", newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (verify()) {
      try {
        console.log(formData);
        await register("signup", formData);
        navigate("/home");
      } catch (error) {
        console.error("Error during registration:", error);
      }
    }
  };

  useEffect(() => {
    setCountries(Country.getAllCountries());
  }, []);

  useEffect(() => {
    if (formData.country) {
      const selectedCountry = countries.find(
        (c) => c.name === formData.country
      );
      if (selectedCountry) {
        setStates(State.getStatesOfCountry(selectedCountry.isoCode));
      }
    } else {
      setStates([]);
      setCities([]);
    }
  }, [formData.country, countries]);

  useEffect(() => {
    if (formData.state) {
      const selectedState = states.find((s) => s.name === formData.state);
      if (selectedState) {
        setCities(
          City.getCitiesOfState(
            selectedState.countryCode,
            selectedState.isoCode
          )
        );
      }
    } else {
      setCities([]);
    }
  }, [formData.state, states]);

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
                <div className="d-flex">
                  <select
                    className="input-field w-25 p-0"
                    id="countryCode"
                    name="countryCode"
                    aria-label="Country code"
                    value={formData.countryCode}
                    onChange={handleChange}
                  >
                    <option value="+1">+1(USA)</option>
                    <option value="+44">+44(UK)</option>
                    <option value="+91">+91(India)</option>
                    <option value="+61">+61(Australia)</option>
                    <option value="+81">+81(Japan)</option>
                    <option value="+49">+49(Germany)</option>
                    <option value="+33">+33(France)</option>
                    <option value="+39">+39(Italy)</option>
                    <option value="+55">+55(Brazil)</option>
                    <option value="+7">+7(Russia)</option>
                    <option value="+86">+86(China)</option>
                    <option value="+971">+971(UAE)</option>
                  </select>
                  <input
                    type="text"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="Enter Mobile"
                    className="input-field w-75"
                  />

                  {errors.mobile && (
                    <p className="error-text">{errors.mobile}</p>
                  )}
                  {errors.countryCode && (
                    <p className="error-text">{errors.countryCode}</p>
                  )}
                </div>
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
                <label>Date of Birth</label>
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
                </select>
                {errors.gender && <p className="error-text">{errors.gender}</p>}
              </div>
            </div>

            {/* <div
              className="d-flex flex-sm-row flex-column"
              style={{ gap: "1rem" }}
            >
              <div>
                <label>Country</label>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="input-field"
                >
                  <option value="">Select Country</option>
                  {countries.map((country) => (
                    <option key={country.name} value={country.name}>
                      {country.name}
                    </option>
                  ))}
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
                  {states.map((state) => (
                    <option key={state.name} value={state.name}>
                      {state.name}
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
                  {cities.map((city) => (
                    <option key={city.name} value={city.name}>
                      {city.name}
                    </option>
                  ))}
                </select>
                {errors.city && <p className="error-text">{errors.city}</p>}
              </div>
            </div> */}

            <div
              className="d-flex flex-sm-row flex-column"
              style={{ gap: "1rem" }}
            >
              <div style={{ flexGrow: 1 }}>
                <label>Country</label>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="input-field"
                >
                  <option value="">Select Country</option>
                  {countries.map((country) => (
                    <option key={country.name} value={country.name}>
                      {country.name}
                    </option>
                  ))}
                </select>
                {errors.country && (
                  <p className="error-text">{errors.country}</p>
                )}
              </div>
              <div style={{ flexGrow: 1 }}>
                <label>State</label>
                <select
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  className="input-field"
                >
                  <option value="">Select State</option>
                  {states.map((state) => (
                    <option key={state.name} value={state.name}>
                      {state.name}
                    </option>
                  ))}
                </select>
                {errors.state && <p className="error-text">{errors.state}</p>}
              </div>
              <div style={{ flexGrow: 1 }}>
                <label>City</label>
                <select
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="input-field"
                >
                  <option value="">Select City</option>
                  {cities.map((city) => (
                    <option key={city.name} value={city.name}>
                      {city.name}
                    </option>
                  ))}
                </select>
                {errors.city && <p className="error-text">{errors.city}</p>}
              </div>
            </div>

            <div className="form-group">
              <div>
                <label className="mt-4">Profile is for whom?</label>
                <select
                  name="profilefor"
                  value={formData.profilefor}
                  onChange={handleChange}
                  className="input-field"
                >
                  <option value="">Select Option</option>
                  <option value="Myself">Myself</option>
                  <option value="My Brother">My Son</option>{" "}
                  <option value="My Brother">My Daughter</option>{" "}
                  <option value="My Brother">My Brother</option>{" "}
                  <option value="My Brother">My Sister</option>
                  <option value="My Brother">My Friend</option>
                  <option value="My Daughter">My Relative</option>
                </select>
                {errors.firstName && (
                  <p className="error-text">{errors.firstName}</p>
                )}
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

            <button type="submit" className="submit-btn" onClick={handleSubmit}>
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
