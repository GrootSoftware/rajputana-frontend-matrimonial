import React from "react";
import style from "./Form.module.css";
import { MdOutlineCancelPresentation } from "react-icons/md";

function FormCard({
  handleCancelClick,
  details,
  handleInputChange,
  formData,
  handleSaveClick,
<<<<<<< HEAD
=======
  error,
>>>>>>> 97ede3914175742e3e2e83c8205bfe6b386e310b
}) {
  const feetOptions = Array.from({ length: 8 }, (_, i) => i + 1);
  const inchOptions = Array.from({ length: 12 }, (_, i) => i);

  return (
    <div className={style.modalContainer}>
      <div className={style.modalContent}>
        <div className={style.modalHeader}>
          <h4 className={style.headerTitle}>Basic Details</h4>
          <div>
<<<<<<< HEAD
          <MdOutlineCancelPresentation
=======
            <MdOutlineCancelPresentation
>>>>>>> 97ede3914175742e3e2e83c8205bfe6b386e310b
              onClick={handleCancelClick}
              className={style.closeIcon}
              size="22"
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
<<<<<<< HEAD
                <label htmlFor="lastName" className="m-0">
=======
                <label htmlFor="lastName" className="m-0 ">
>>>>>>> 97ede3914175742e3e2e83c8205bfe6b386e310b
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
<<<<<<< HEAD
                <label htmlFor="mobile" className="form-label m-1">
=======
                <label htmlFor="mobile " className="mb-1 form-label">
>>>>>>> 97ede3914175742e3e2e83c8205bfe6b386e310b
                  Mobile
                </label>
                <div className="input-group">
                  <select
<<<<<<< HEAD
                    className="form-select rounded-0"
=======
                    className="form-control rounded-0"
>>>>>>> 97ede3914175742e3e2e83c8205bfe6b386e310b
                    id="countryCode"
                    name="countryCode"
                    aria-label="Country code"
                    value={formData.countryCode || ""}
                    onChange={handleInputChange}
                  >
<<<<<<< HEAD
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
=======
                    <option value="">Select</option>
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
                    className="form-control rounded-0 p-0"
>>>>>>> 97ede3914175742e3e2e83c8205bfe6b386e310b
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
<<<<<<< HEAD
=======
            {error && <p className="error-text">{error}</p>}
>>>>>>> 97ede3914175742e3e2e83c8205bfe6b386e310b
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
