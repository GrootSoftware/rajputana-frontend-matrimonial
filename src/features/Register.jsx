import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Country, State, City } from "country-state-city";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useAuth } from "../component/Layout/AuthContext";
import Profilenavbar from "../component/Profile/ProfileComp/Profilenavbar";
import logo from "../assets/images/logowhite.png";

import "./Register.css";

function Register() {
<<<<<<< HEAD
  const { register, message } = useAuth();
=======
  const { register, message, email } = useAuth();
>>>>>>> 97ede3914175742e3e2e83c8205bfe6b386e310b
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
<<<<<<< HEAD
    email: "",
=======
    email: email,
>>>>>>> 97ede3914175742e3e2e83c8205bfe6b386e310b
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
<<<<<<< HEAD
    setFormData((prev) => ({
      ...prev,
      [name]: value,
=======

    setFormData((prev) => ({
      ...prev,
      [name]:
        name === "mobile"
          ? value.replace(/\s/g, "").slice(0, 14) // No spaces, max 14 digits
          : ["email", "password"].includes(name)
          ? value.replace(/\s/g, "") // No spaces for email & password
          : ["firstName", "lastName"].includes(name)
          ? value.replace(/\s/g, "") // No spaces for first & last name
          : value,
>>>>>>> 97ede3914175742e3e2e83c8205bfe6b386e310b
      ...(name === "country" ? { state: "", city: "" } : {}),
      ...(name === "state" ? { city: "" } : {}),
    }));
  };

  const verify = () => {
    const newErrors = {};
<<<<<<< HEAD
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
=======

    const nameRegex = /^[A-Za-z\s]+$/;
    const stringRegex = /^[A-Za-z\s]+$/;
    const mobileRegex = /^\d{6,14}$/;
    const emailRegex =
      /^[a-zA-Z0-9._%+-]+@(gmail|yahoo|outlook|hotmail|aol|icloud)\.(com|co|in)$/;

    // Name Validation (allows spaces)
    if (!formData.firstName.trim() || !nameRegex.test(formData.firstName)) {
      newErrors.firstName = "Valid First Name is required.";
    }

    if (!formData.lastName.trim() || !nameRegex.test(formData.lastName)) {
      newErrors.lastName = "Valid Last Name is required.";
    }

    if (!formData.profilefor.trim() || !stringRegex.test(formData.profilefor)) {
      newErrors.profilefor = "Valid profile for is required.";
    }

    // Mobile Validation (no spaces allowed)
    if (!formData.mobile.trim() || !mobileRegex.test(formData.mobile)) {
      newErrors.mobile = "Mobile must be a valid number.";
    }

    // Email Validation (no spaces allowed)
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      newErrors.email = "Email must be valid.";
    } else if (/\s/.test(formData.email)) {
      newErrors.email = "Email should not contain spaces.";
    }

    // Date of Birth Validation
    if (!formData.dateOfBirth.trim()) {
      newErrors.dateOfBirth = "Date of Birth is required.";
    } else {
      const selectedDate = new Date(formData.dateOfBirth);
      const today = new Date();
      const minDate = new Date(
        today.getFullYear() - 18,
        today.getMonth(),
        today.getDate()
      );

      if (selectedDate > today) {
        newErrors.dateOfBirth = "You must be at least 18 years old.";
      } else if (selectedDate > minDate) {
        newErrors.dateOfBirth = "You must be at least 18 years old.";
      }
    }

    // Other Required Fields
    if (!formData.countryCode.trim()) {
      newErrors.countryCode = "Country Code is required.";
    }

    if (!formData.gender.trim()) {
      newErrors.gender = "Gender is required.";
    }

    if (!formData.country.trim()) {
      newErrors.country = "Country is required.";
    }

    if (!formData.state.trim()) {
      newErrors.state = "State is required.";
    }

    if (!formData.city.trim()) {
      newErrors.city = "City is required.";
    }

    // Password Validation (no spaces allowed)
    if (!formData.password.trim() || formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    } else if (/\s/.test(formData.password)) {
      newErrors.password = "Password should not contain spaces.";
    }

    setErrors(newErrors);
    console.log("Validation Errors:", newErrors);
>>>>>>> 97ede3914175742e3e2e83c8205bfe6b386e310b
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (verify()) {
      try {
        console.log("Submitting form:", formData);
        let response = await register("signup", formData, navigate);

        if (response && response.success) {
          navigate("/login");
        }
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
<<<<<<< HEAD
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
=======
                    className="input-field w-25 p-1"
                    id="countryCode"
                    name="countryCode"
                    aria-label="Country code"
                    placeholder="Select"
                    value={formData.countryCode}
                    onChange={handleChange}
                  >
                    <option value="+91">+91</option>
                    <option value="+1">+1 (USA, Canada)</option>
                    <option value="+7">+7 (Russia, Kazakhstan)</option>
                    <option value="+20">+20 (Egypt)</option>
                    <option value="+27">+27 (South Africa)</option>
                    <option value="+30">+30 (Greece)</option>
                    <option value="+31">+31 (Netherlands)</option>
                    <option value="+32">+32 (Belgium)</option>
                    <option value="+33">+33 (France)</option>
                    <option value="+34">+34 (Spain)</option>
                    <option value="+39">+39 (Italy)</option>
                    <option value="+40">+40 (Romania)</option>
                    <option value="+41">+41 (Switzerland)</option>
                    <option value="+44">+44 (United Kingdom)</option>
                    <option value="+49">+49 (Germany)</option>
                    <option value="+51">+51 (Peru)</option>
                    <option value="+52">+52 (Mexico)</option>
                    <option value="+55">+55 (Brazil)</option>
                    <option value="+56">+56 (Chile)</option>
                    <option value="+60">+60 (Malaysia)</option>
                    <option value="+61">+61 (Australia)</option>
                    <option value="+62">+62 (Indonesia)</option>
                    <option value="+63">+63 (Philippines)</option>
                    <option value="+64">+64 (New Zealand)</option>
                    <option value="+65">+65 (Singapore)</option>
                    <option value="+66">+66 (Thailand)</option>
                    <option value="+81">+81 (Japan)</option>
                    <option value="+82">+82 (South Korea)</option>
                    <option value="+84">+84 (Vietnam)</option>
                    <option value="+86">+86 (China)</option>
                    <option value="+90">+90 (Turkey)</option>
                    <option value="+91">+91 (India)</option>
                    <option value="+92">+92 (Pakistan)</option>
                    <option value="+93">+93 (Afghanistan)</option>
                    <option value="+94">+94 (Sri Lanka)</option>
                    <option value="+95">+95 (Myanmar)</option>
                    <option value="+98">+98 (Iran)</option>
                    <option value="+212">+212 (Morocco)</option>
                    <option value="+216">+216 (Tunisia)</option>
                    <option value="+218">+218 (Libya)</option>
                    <option value="+220">+220 (Gambia)</option>
                    <option value="+221">+221 (Senegal)</option>
                    <option value="+222">+222 (Mauritania)</option>
                    <option value="+223">+223 (Mali)</option>
                    <option value="+224">+224 (Guinea)</option>
                    <option value="+225">+225 (Ivory Coast)</option>
                    <option value="+226">+226 (Burkina Faso)</option>
                    <option value="+227">+227 (Niger)</option>
                    <option value="+228">+228 (Togo)</option>
                    <option value="+229">+229 (Benin)</option>
                    <option value="+230">+230 (Mauritius)</option>
                    <option value="+231">+231 (Liberia)</option>
                    <option value="+232">+232 (Sierra Leone)</option>
                    <option value="+233">+233 (Ghana)</option>
                    <option value="+234">+234 (Nigeria)</option>
                    <option value="+971">+971 (UAE)</option>
                    <option value="+972">+972 (Israel)</option>
                    <option value="+973">+973 (Bahrain)</option>
                    <option value="+974">+974 (Qatar)</option>
                    <option value="+975">+975 (Bhutan)</option>
                    <option value="+976">+976 (Mongolia)</option>
                    <option value="+977">+977 (Nepal)</option>
                    <option value="+992">+992 (Tajikistan)</option>
                    <option value="+993">+993 (Turkmenistan)</option>
                    <option value="+994">+994 (Azerbaijan)</option>
                    <option value="+995">+995 (Georgia)</option>
                    <option value="+996">+996 (Kyrgyzstan)</option>
                    <option value="+998">+998 (Uzbekistan)</option>
                  </select>

>>>>>>> 97ede3914175742e3e2e83c8205bfe6b386e310b
                  <input
                    type="text"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="Enter Mobile"
                    className="input-field w-75"
                  />
                </div>
<<<<<<< HEAD
=======

>>>>>>> 97ede3914175742e3e2e83c8205bfe6b386e310b
                {errors.mobile && <p className="error-text">{errors.mobile}</p>}
                {errors.countryCode && (
                  <p className="error-text">{errors.countryCode}</p>
                )}
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

<<<<<<< HEAD
            {/* <div
              className="d-flex flex-sm-row flex-column"
              style={{ gap: "1rem" }}
            >
=======
            <div className="form-group">
>>>>>>> 97ede3914175742e3e2e83c8205bfe6b386e310b
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
<<<<<<< HEAD
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
=======

              <div>
>>>>>>> 97ede3914175742e3e2e83c8205bfe6b386e310b
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
<<<<<<< HEAD
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
=======
>>>>>>> 97ede3914175742e3e2e83c8205bfe6b386e310b
            </div>

            <div className="form-group">
              <div>
<<<<<<< HEAD
                <label className="mt-4">Profile is for whom?</label>
=======
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
              <div>
                <label className="">Profile is for whom?</label>
>>>>>>> 97ede3914175742e3e2e83c8205bfe6b386e310b
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
<<<<<<< HEAD
            {message && <p className="error-text">{message}</p>}
=======
            {/* {message && <p className="error-text">{message}</p>} */}
>>>>>>> 97ede3914175742e3e2e83c8205bfe6b386e310b
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
