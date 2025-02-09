import React from "react";
import style from "./Form.module.css";
import { MdOutlineCancelPresentation } from "react-icons/md";

function FormCard({
  handleCancelClick,
  details,
  handleInputChange,
  formData,
  handleSaveClick,
}) {
  const feetOptions = Array.from({ length: 8 }, (_, i) => i + 1);
  const inchOptions = Array.from({ length: 12 }, (_, i) => i);

  return (
    <div className={style.modalContainer}>
      <div className={style.modalContent}>
        <div className={style.modalHeader}>
          <h4 className={style.headerTitle}>Basic Details</h4>
          <div>
            <MdOutlineCancelPresentation
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
                  className="form-control formControl rounded-0"
                  id="firstName"
                  name="firstName"
                  placeholder="Enter Name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                />
              </div>

              <div className="col-md-4 form-group d-flex flex-column formGroup">
                <label htmlFor="middleName" className="m-0">
                  Middle Name
                </label>
                <input
                  type="text"
                  className="form-control formControl rounded-0"
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
                  className="form-control formControl rounded-0"
                  id="lastName"
                  name="lastName"
                  placeholder="Enter Name"
                  value={formData.lastName || ""}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <label htmlFor="dateOfBirth" className="m-1">
                  DOB
                </label>
                <input
                  type="date"
                  className="form-control rounded-0"
                  id="dateOfBirth"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6  d-flex flex-column">
                <label htmlFor="mobile" className="form-label m-1">
                  Mobile
                </label>
                <div className="input-group">
                  <select
                    className="form-select rounded-0"
                    id="countryCode"
                    name="countryCode"
                    aria-label="Country code"
                    value={formData.countryCode || ""}
                    onChange={handleInputChange}
                  >
                    <option value="+1">+1 (USA)</option>
                    <option value="+44">+44 (UK)</option>
                    <option value="+91">+91 (India)</option>
                    <option value="+61">+61 (Australia)</option>
                    <option value="+81">+81 (Japan)</option>
                    <option value="+49">+49 (Germany)</option>
                    <option value="+33">+33 (France)</option>
                    <option value="+39">+39 (Italy)</option>
                    <option value="+55">+55 (Brazil)</option>
                    <option value="+7">+7 (Russia)</option>
                    <option value="+86">+86 (China)</option>
                    <option value="+971">+971 (UAE)</option>
                  </select>
                  <input
                    type="text"
                    className="form-control rounded-0"
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
                  className="form-control rounded-0"
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
                    className="form-control me-2 rounded-0"
                    id="height-feet"
                    name="heightFeet"
                    aria-label="Height in feet"
                    style={{ width: "50%" }}
                    value={formData.height?.feet || ""}
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
                    className="form-control rounded-0"
                    id="height-inch"
                    name="heightInch"
                    aria-label="Height in inches"
                    style={{ width: "50%" }}
                    value={formData.height?.inches || ""}
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
                  className="form-control rounded-0"
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
                className="form-select formSelectp rounded-0"
                id="maritalStatus"
                name="maritalStatus"
                value={formData.maritalStatus || ""}
                onChange={handleInputChange}
              >
                <option value="">Select</option>
                <option value="Single">Single</option>
                <option value="Married">Married</option>
                <option value="Divorced">Divorced</option>
                <option value="Widowed">Widowed</option>
              </select>
            </div>

            <div className="form-group d-flex flex-column">
              <label htmlFor="additionalInfo" className="m-1">
                Additional Info
              </label>
              <textarea
                className="form-control formControl rounded-0"
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
