import React from "react";
import style from "./Form.module.css";
import { MdOutlineCancelPresentation } from "react-icons/md";

function EducationinfoForm({
  handleCancelClick,
  handleInputChange,
  formData,
  handleSaveClick,
}) {
  return (
    <div className={style.modalContainer}>
      <div className={style.modalContent}>
        <div className={style.modalHeader}>
          <h4 className={style.headerTitle}>Academics Details</h4>
          <div>
            <MdOutlineCancelPresentation
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
                className="form-select rounded-0"
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
                className="form-control rounded-0"
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
                  className="form-select rounded-0"
                  id="professional"
                  name="professional"
                  value={formData.professional || ""}
                  onChange={handleInputChange}
                >
                  <option value="">Select Profession</option>
                  <option value="Software Engineer">Software Engineer</option>
                  <option value="Data Scientist">Data Scientist</option>
                  <option value="Doctor">Doctor</option>
                  <option value="Teacher">Teacher</option>
                  <option value="Nurse">Nurse</option>
                  <option value="Engineer">Engineer</option>
                  <option value="Architect">Architect</option>
                  <option value="Graphic Designer">Graphic Designer</option>
                  <option value="Accountant">Accountant</option>
                  <option value="Business Analyst">Business Analyst</option>
                  <option value="Project Manager">Project Manager</option>
                  <option value="Scientist">Scientist</option>
                  <option value="Pharmacist">Pharmacist</option>
                  <option value="Lawyer">Lawyer</option>
                  <option value="Chef">Chef</option>
                  <option value="Artist">Artist</option>
                  <option value="Musician">Musician</option>
                  <option value="Journalist">Journalist</option>
                  <option value="Photographer">Photographer</option>
                  <option value="Pilot">Pilot</option>
                </select>
              </div>

              <div className="col">
                <label htmlFor="annualIncome" className="form-label">
                  Annual Income
                </label>
                <select
                  className="form-select rounded-0"
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
              <input
                type="text"
                className="form-control rounded-0"
                id="hobbies"
                name="hobbies"
                placeholder="Enter hobbies (Dot separated)"
                value={formData.hobbies.join(",")}
                onChange={handleInputChange}
              />

              <div className="mt-2">
                <strong>Selected Hobbies:</strong>{" "}
                {formData.hobbies.length > 0 ? (
                  formData.hobbies.map((hobby, index) => (
                    <span key={index}>
                      {hobby}
                      {index < formData.hobbies.length - 1 ? ", " : ""}
                    </span>
                  ))
                ) : (
                  <span>None</span>
                )}
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="class" className="form-label">
                Class
              </label>
              <select
                className="form-select rounded-0"
                id="class"
                name="class"
                value={formData.class || ""}
                onChange={handleInputChange}
              >
                <option value="">Family type</option>
                <option value="Business">Business</option>
                <option value="Agriculture">Agriculture</option>
                <option value="Working">Working</option>
                <option value="Service">Service</option>
                <option value="Private">Private</option>
                <option value="Others">Others</option>
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="additionalInfo" className="form-label">
                Additional Info
              </label>
              <textarea
                className="form-control rounded-0"
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
