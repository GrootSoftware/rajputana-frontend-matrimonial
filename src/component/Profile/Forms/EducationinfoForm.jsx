import React from "react";
import style from "./Form.module.css";

import { AiOutlineClose } from "react-icons/ai";

function EducationinfoForm({
  handleCancelClick,
  details,
  handleInputChange,
  formData,
  handleSaveClick,
}) {
  return (
    <div className={style.modalContainer}>
      <div className={style.modalContent}>
        <div className={style.modalHeader}>
          <h1>Academics Details</h1>
          <div>
            <AiOutlineClose
              onClick={handleCancelClick}
              className={style.closeIcon}
            />
          </div>
        </div>

        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="mb-3">
              <label htmlFor="qualifications" className="form-label">
                Highest Qualifications
              </label>
              <select
                className="form-select"
                id="qualifications"
                name="qualifications"
                value={formData.qualifications || ""}
                onChange={handleInputChange}
              >
                <option value="">Select Qualifications</option>
                <option value="High School">High School</option>
                <option value="Bachelor's Degree">Bachelor's Degree</option>
                <option value="Master's Degree">Master's Degree</option>
                <option value="PhD">PhD</option>
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="institution" className="form-label">
                Institution
              </label>
              <input
                type="text"
                className="form-control"
                id="institution"
                name="institution"
                placeholder="Enter Institution"
                value={formData.institution || ""}
                onChange={handleInputChange}
              />
            </div>

            <div className="row mb-3">
              <div className="col">
                <label htmlFor="professional" className="form-label">
                  Professional
                </label>
                <select
                  className="form-select"
                  id="professional"
                  name="professional"
                  value={formData.professional || ""}
                  onChange={handleInputChange}
                >
                  <option value="">Select Professional</option>
                  <option value="Engineer">Engineer</option>
                  <option value="Doctor">Doctor</option>
                  <option value="Teacher">Teacher</option>
                  <option value="Lawyer">Lawyer</option>
                </select>
              </div>

              <div className="col">
                <label htmlFor="annualIncome" className="form-label">
                  Annual Income
                </label>
                <select
                  className="form-select"
                  id="annualIncome"
                  name="annualIncome"
                  value={formData.annualIncome || ""}
                  onChange={handleInputChange}
                >
                  <option value="">Select Annual Income</option>
                  <option value="Below 5 LPA">Below 5 LPA</option>
                  <option value="5-10 LPA">5-10 LPA</option>
                  <option value="10-20 LPA">10-20 LPA</option>
                  <option value="Above 20 LPA">Above 20 LPA</option>
                </select>
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="hobbies" className="form-label">
                Hobbies
              </label>
              <select
                className="form-select"
                id="hobbies"
                name="hobbies"
                value={formData.hobbies || []}
                onChange={handleInputChange}
              >
                <option value="">Select Hobbies</option>
                <option value="Reading">Reading</option>
                <option value="Traveling">Traveling</option>
                <option value="Sports">Sports</option>
                <option value="Music">Music</option>
              </select>

              {/*{details.hobbies.array.forEach((element) => {
                <label>{element} </label>;
              })}
              ; */}
            </div>

            <div className="mb-3">
              <label htmlFor="additionalInfo" className="form-label">
                Additional Info
              </label>
              <textarea
                className="form-control"
                id="additionalInfo"
                name="additionalInfo"
                rows="3"
                placeholder="Enter text"
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

export default EducationinfoForm;
