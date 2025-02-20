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
            <AiOutlineRight /> {" Contact Us"}
          </div>

          <section className="contact-info text-center p-2">
            <p>
              We're here to help! Reach out today and take the first step
              towards finding your perfect match.
            </p>
            <h2 className="m-0">Get in Touch with Us</h2>
          </section>

          {/* Stories Section */}
          <div className="d-flex flex-wrap justify-content-between mt-4 g-md-0 g-2 text-center">
            <div
              className="w-50 contact-info"
              style={{
                backgroundColor: "white",
                padding: "2rem",
                minWidth: "319px",
                marginInline: "auto",
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
              className="w-50 m-auto"
              style={{
                minWidth: "319px",
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
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    let updatedValue = value.trimStart();

    const nameRegex = /^[a-zA-Z\s]{1,20}$/;
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

    // Validate First Name
    if (!formData.firstName.trim())
      newErrors.firstName = "First Name is required.";

    // Validate Last Name
    if (!formData.lastName.trim())
      newErrors.lastName = "Last Name is required.";

    // Validate Mobile
    if (!formData.mobile.trim()) {
      newErrors.mobile = "Mobile is required.";
    } else if (!/^\d{10}$/.test(formData.mobile)) {
      newErrors.mobile = "Mobile must be a 10-digit number.";
    }

    // Validate Email
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)
    ) {
      newErrors.email = "Invalid email format.";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    try {
      const route = "contactus";
      console.log("Saving Data:", formData);
      await updateData(route, formData);
      setFormData({
        firstName: "",
        lastName: "",
        mobile: "",
        email: "",
        additionalInfo: "",
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
          />
          {errors.lastName && <p className="error-text">{errors.lastName}</p>}
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

      <div>
        <label className="text-white">Additional Info</label>
        <textarea
          name="additionalInfo"
          value={formData.additionalInfo}
          onChange={handleChange}
          className="input-field"
          rows="4"
          placeholder="Enter text"
        ></textarea>
      </div>

      <div className="d-flex flex-row-reverse">
        <button type="submit" className="submit-btn bg-black text-white">
          SAVE
        </button>
      </div>
    </form>
  );
}
