import React, { useState } from "react";
import { Link } from "react-router-dom";

// Styles and Components
import style from "../Profile/ProfileComp/Profile.module.css";
import "../../features/Register.css";

import Profilenavbar from "../Profile/ProfileComp/Profilenavbar";
import Footer from "./Footer";
import { AiOutlineRight } from "react-icons/ai";
import { useAuth } from "./AuthContext";

function ContactUs() {
  return (
    <>
      {/* Main Wrapper */}
      <div className={`${style.minhScreen}`}>
        <Profilenavbar />
        <div className={`${style.Container} pb-5`}>
          {/* Breadcrumb Navigation */}
          <div className={`ps-1 ps-md-0 ${style.routerpathtext}`}>
            <Link
              to="/home"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Home
            </Link>
              <AiOutlineRight size={15} style={{ marginInline: "5px" }} /> {" Contact Us"}
          </div>

          <section className="contact-info text-center p-2">
            <p
              style={{
                fontSize: "clamp(12px, 22px, 24px)",
                fontWeight: 500,
                fontFamily: "Lustria, serif",
                lineHeight: 1.5,
                marginBottom: "1rem",
                marginTop: "3rem",
              }}
            >
              We're here to help! Reach out today and take the first step
              towards finding your perfect match.
            </p>
            <h2
              className="m-0"
              style={{
                fontSize: "clamp(16px, 50px, 60px)",
                fontWeight: 400,
                fontFamily: "Open Sans, sans-serif",
                lineHeight: 1,
              }}
            >
              Get in Touch with Us
            </h2>
          </section>

          {/* Stories Section */}
          <div
            className="d-flex flex-lg-row flex-column flex-wrap justify-content-between mt-4 g-md-0 g-2 text-left"
            style={{
              minHeight: "477px",
            }}
          >
            <div
              className="contact-info"
              style={{
                backgroundColor: "white",
                padding: "2rem",
                marginInline: "auto",
                width: "clamp(300px, 50%,50%)",
              }}
            >
              <div className="mb-2">
                <h5>Address</h5>
                <p>
                  Flat No. 203, Green Heights, Near Kunal Tower, Sector 47,
                  Gurugram, Haryana, 122018, India
                </p>
              </div>
              <div className="mb-2">
                <h5>Email</h5>
                <p>
                  support@rajputmatch.com
                  <br />
                  parakram125@gmail.com
                </p>
              </div>
              <div className="mb-2">
                <h5>Contact Number</h5>
                <p>
                  +91 123 456 7892
                  <br />
                  +1 565 2145 962
                </p>
              </div>
            </div>

            {/* Contact Form Component */}
            <div
              className="m-auto contact-from"
              style={{
                width: "clamp(300px, 50%,50%)",
              }}
            >
              <ContactForm />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default ContactUs;

export function ContactForm() {
  const { updateData } = useAuth();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    additionalInfo: "",
    countryCode: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    let updatedValue = value.trimStart();

    const nameRegex = /^[a-zA-Z\s]{0,20}$/;
    const mobileRegex = /^\d*$/;
    const additionalInfoRegex = /^[a-zA-Z\s,.]*$/;

    switch (name) {
      case "firstName":
      case "lastName":
        if (!nameRegex.test(value)) return;
        break;
      case "mobile":
        if (!mobileRegex.test(value)) return;
        break;
      case "additionalInfo":
        if (!additionalInfoRegex.test(value)) return;
        break;
      default:
        break;
    }

    setFormData((prevData) => ({ ...prevData, [name]: updatedValue }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim())
      newErrors.firstName = "First Name is required.";
    if (!formData.lastName.trim())
      newErrors.lastName = "Last Name is required.";

    if (!formData.mobile.trim()) {
      newErrors.mobile = "Mobile is required.";
    } else if (!/^\+?\d{8,15}$/.test(formData.mobile)) {
      newErrors.mobile =
        "Invalid mobile number. Must be 8 to 15 digits, with an optional '+'.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)
    ) {
      newErrors.email = "Invalid email format.";
    }

    if (!formData.countryCode)
      newErrors.countryCode = "Country Code is required.";

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("handleSubmit triggered!");

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      console.log("Validation errors:", validationErrors);
      setErrors(validationErrors);
      return;
    }

    try {
      console.log("Saving Data:", formData);
      const route = "contactus";
      await updateData(route, formData);

      setFormData({
        firstName: "",
        lastName: "",
        mobile: "",
        email: "",
        additionalInfo: "",
        countryCode: "",
      });
    } catch (error) {
      console.error("Error updating data:", error.message);
    }
  };

  return (
    <form
      className="contact-form"
      style={{
        backgroundColor: "rgba(153, 37, 37, 1)",
        padding: "2rem",
        borderTop: "2px solid yellow",
        minHeight: "477px",
      }}
      onSubmit={handleSubmit}
    >
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
            maxLength="25"
          />
          {errors.firstName && <p className="error-text">{errors.firstName}</p>}
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
            maxLength="20"
          />
          {errors.lastName && <p className="error-text">{errors.lastName}</p>}
        </div>
      </div>

      <div className="form-group">
        <div>
          <label>Mobile</label>
          <div className="d-flex">
            <select
              className="form-select text-center w-25 rounded-0 background-md-visibelnone"
              name="countryCode"
              value={formData.countryCode}
              onChange={handleChange}
              style={{
                backgroundPosition: "right 10px center",
                paddingRight: "25px",
                padding: "5px",
                minWidth: "50px",
              }}
              required
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

            <input
              type="text"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="Enter Mobile"
              className="input-field w-75"
              maxLength="16"
            />
          </div>
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
            maxLength="40"
          />
          {errors.email && <p className="error-text">{errors.email}</p>}
        </div>
      </div>

      <div>
        <label className="text-white">Additional Info</label>
        <textarea
          name="additionalInfo"
          value={formData.additionalInfo}
          onChange={handleChange}
          className="input-field"
          rows="4"
          placeholder="Enter text"
          maxLength="150"
        ></textarea>
      </div>

      <div className="d-flex flex-row-reverse">
        <button
          type="submit"
          className="submit-btn bg-black text-white"
          style={{
            minWidth: "114px",
            lineHeight: 2,
          }}
        >
          SAVE
        </button>
      </div>
    </form>
  );
}
