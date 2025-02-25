import React from "react";
import style from "./Form.module.css";
import { MdOutlineCancelPresentation } from "react-icons/md";

function FamilyinfoForm({
  handleCancelClick,
  handleInputChange,
  formData,
  handleSaveClick,
}) {
  return (
    <div className={style.modalContainer}>
      <div className={style.modalContent}>
        <div className={style.modalHeader}>
          <h4 className={style.headerTitle}>Family Details</h4>
          <div>
          <MdOutlineCancelPresentation
              onClick={handleCancelClick}
              className={style.closeIcon}
              size="22"
            />
          </div>
        </div>

        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="row">
              <div className="col-sm-6">
                <label htmlFor="fatherName" className="form-label">
                  Father's Name
                </label>
                <input
                  type="text"
                  className="form-control rounded-0"
                  id="fatherName"
                  name="fatherName"
                  value={formData.fatherName}
                  onChange={handleInputChange}
                  placeholder="Name"
                />
              </div>
              <div className="col-sm-6">
                <label htmlFor="occupation" className="form-label">
                  Occupation
                </label>
                <input
                  type="text"
                  className="form-control rounded-0"
                  id="occupation"
                  name="occupation"
                  value={formData.occupation}
                  onChange={handleInputChange}
                  placeholder="Occupation"
                />
              </div>
            </div>

            <div className="row">
              <div className="col-sm-6">
                <label htmlFor="fatherNativePlace" className="form-label">
                  Father's Native Place
                </label>
                <input
                  type="text"
                  className="form-control rounded-0"
                  id="fatherNativePlace"
                  name="fatherNativePlace"
                  value={formData.fatherNativePlace}
                  onChange={handleInputChange}
                  placeholder=""
                />
              </div>
              <div className="col-sm-6">
                <label htmlFor="motherName" className="form-label">
                  Mother's Name
                </label>
                <input
                  type="text"
                  className="form-control rounded-0"
                  id="motherName"
                  name="motherName"
                  value={formData.motherName}
                  onChange={handleInputChange}
                  placeholder=""
                />
              </div>
            </div>

            <div className="row">
              <div className="col-sm-6">
                <label htmlFor="motherNativePlace" className="form-label">
                  Mother's Native Place
                </label>
                <input
                  type="text"
                  className="form-control rounded-0"
                  id="motherNativePlace"
                  name="motherNativePlace"
                  value={formData.motherNativePlace}
                  onChange={handleInputChange}
                  placeholder=""
                />
              </div>
              <div className="col-sm-6">
                <label htmlFor="maternalGotra" className="form-label">
                  Maternal Gotra
                </label>
                <input
                  type="text"
                  className="form-control rounded-0"
                  id="maternalGotra"
                  name="maternalGotra"
                  value={formData.maternalGotra}
                  onChange={handleInputChange}
                  placeholder="Gotra"
                />
              </div>
            </div>

            <div className="row">
              <div className="col-md-4">
                <label htmlFor="siblings" className="form-label">
                  No. of Siblings
                </label>
                <input
                  type="text"
                  className="form-control rounded-0"
                  id="siblings"
                  name="siblings"
                  value={formData.siblings}
                  onChange={handleInputChange}
                  placeholder="Ex:03"
                />
              </div>
              <div className="col-md-4">
                <label htmlFor="familyLocation" className="form-label">
                  Family Location
                </label>
                <input
                  type="text"
                  className="form-control rounded-0"
                  id="familyLocation"
                  name="familyLocation"
                  value={formData.familyLocation}
                  onChange={handleInputChange}
                  placeholder="City"
                />
              </div>
              <div className="col-md-4">
                <label htmlFor="additionalMaternal" className="form-label">
                  Additional Maternal
                </label>
                <input
                  type="text"
                  className="form-control rounded-0"
                  id="additionalMaternal"
                  name="additionalMaternal"
                  value={formData.additionalMaternal}
                  onChange={handleInputChange}
                  placeholder=""
                />
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <label htmlFor="familyInfo" className="form-label">
                  Family Info
                </label>
                <textarea
                  className="form-control rounded-0"
                  id="familyInfo"
                  name="familyInfo"
                  rows="3"
                  value={formData.familyInfo}
                  onChange={handleInputChange}
                  placeholder="Enter Text"
                ></textarea>
              </div>
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

export default FamilyinfoForm;
