import React from "react";
import style from "./Form.module.css";

import { AiOutlineClose } from "react-icons/ai";

function FormCard({
  handleCancelClick,
  details,
  handleInputChange,
  formData,
  handleSaveClick,
}) {
  const feetOptions = Array.from({ length: 8 }, (_, i) => i + 1);
  const inchOptions = Array.from({ length: 12 }, (_, i) => i + 1);

  return (
    <div className={style.modalContainer}>
      <div className={style.modalContent}>
        <div className={style.modalHeader}>
          <h1>Basic Details</h1>
          <div>
            <AiOutlineClose
              onClick={handleCancelClick}
              className={style.closeIcon}
            />
          </div>
        </div>

        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="row">
              <div className="col-md-4 form-group d-flex flex-column formGroup">
                <label htmlFor="firstName" className="m-0">
                  First Name
                </label>
                <input
                  type="text"
                  className="form-control formControl"
                  id="firstName"
                  name="firstName"
                  placeholder="Enter Name"
                  value={formData.firstName || ""}
                  onChange={handleInputChange}
                />
              </div>

              <div className="col-md-4 form-group d-flex flex-column formGroup">
                <label htmlFor="middleName" className="m-0">
                  Middle Name
                </label>
                <input
                  type="text"
                  className="form-control formControl"
                  id="middleName"
                  name="middleName"
                  placeholder="Enter Name"
                  value={formData.middleName || ""}
                  onChange={handleInputChange}
                />
              </div>

              <div className="col-md-4 form-group d-flex flex-column formGroup">
                <label htmlFor="lastName" className="m-0">
                  Last Name
                </label>
                <input
                  type="text"
                  className="form-control formControl"
                  id="lastName"
                  name="lastName"
                  placeholder="Enter Name"
                  value={formData.lastName || ""}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="row">
              <div className="col-sm-6 d-flex flex-column">
                <label htmlFor="dob" className="m-1">
                  DOB
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="dob"
                  name="dob"
                  value={formData.dob || ""}
                  onChange={handleInputChange}
                />
              </div>

              <div className="col-sm-6">
                <label htmlFor="mobile" className="form-label m-1">
                  Mobile
                </label>
                <div className="input-group">
                  <select
                    className="form-select"
                    id="countryCode"
                    name="countryCode"
                    aria-label="Country code"
                    value={formData.countryCode || "+91"}
                    onChange={handleInputChange}
                  >
                    <option value="+91">+91</option>
                  </select>
                  <input
                    type="text"
                    className="form-control"
                    id="mobile"
                    name="mobile"
                    aria-label="Mobile number"
                    style={{ width: "65%" }}
                    value={formData.mobile || ""}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="col-sm-6">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="Enter email"
                  value={formData.email || ""}
                  onChange={handleInputChange}
                />
              </div>

              <div className="col-sm-6">
                <label htmlFor="height-feet" className="form-label">
                  Height
                </label>
                <div className="d-flex align-items-center">
                  <select
                    className="form-control me-2"
                    id="height-feet"
                    name="heightFeet"
                    aria-label="Height in feet"
                    style={{ width: "50%" }}
                    value={formData.heightFeet || ""}
                    onChange={handleInputChange}
                  >
                    <option disabled>Select feet</option>
                    {feetOptions.map((feet) => (
                      <option key={feet} value={feet}>
                        {feet} ft
                      </option>
                    ))}
                  </select>
                  <select
                    className="form-control"
                    id="height-inch"
                    name="heightInch"
                    aria-label="Height in inches"
                    style={{ width: "50%" }}
                    value={formData.heightInch || ""}
                    onChange={handleInputChange}
                  >
                    <option disabled>Select inch</option>
                    {inchOptions.map((inch) => (
                      <option key={inch} value={inch}>
                        {inch} in
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="col-sm-6">
                <label htmlFor="weight" className="form-label m-1">
                  Weight (in kg)
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="weight"
                  name="weight"
                  placeholder="Enter weight"
                  min="0"
                  step="0.1"
                  value={formData.weight || ""}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="form-group d-flex flex-column">
              <label htmlFor="maritalStatus" className="m-1">
                Marital Status
              </label>
              <select
                className="form-select formSelectp"
                id="maritalStatus"
                name="maritalStatus"
                value={formData.maritalStatus || ""}
                onChange={handleInputChange}
              >
                <option value="">Select</option>
                <option value="single">Single</option>
                <option value="married">Married</option>
                <option value="divorced">Divorced</option>
                <option value="widowed">Widowed</option>
              </select>
            </div>

            <div className="form-group d-flex flex-column">
              <label htmlFor="additionalInfo" className="m-1">
                Additional Info
              </label>
              <textarea
                className="form-control formControl"
                id="additionalInfo"
                name="additionalInfo"
                rows="3"
                placeholder="Enter additional info"
                value={formData.additionalInfo || ""}
                onChange={handleInputChange}
              ></textarea>
            </div>
          </div>

          <div className={style.modalFooter}>
            <button
              type="button"
              className={`btn btn-primary ${style.saveButton}`}
              onClick={handleSaveClick}
            >
              SAVE
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormCard;
