import React from "react";
import styles from "./Form.module.css";
import { AiOutlineClose } from "react-icons/ai";

const ReligionForm = ({
  handleCancelClick,
  handleSaveClick,
  formData,
  handleInputChange,
}) => {
  return (
    <div className={styles.modalContainer}>
      <div className={styles.modalContent}>
        <div className={styles.modalHeader}>
          <h1>Birth/ Religious/ Astro Details</h1>
          <div>
            <AiOutlineClose
              onClick={handleCancelClick}
              className={styles.closeIcon}
            />
          </div>
        </div>

        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="row">
              <div className="col-sm-6">
                <label htmlFor="dob" className="form-label">
                  DOB
                </label>
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="fas fa-calendar-alt"></i>
                  </span>
                  <input
                    type="date"
                    className="form-control"
                    id="dob"
                    name="dob"
                    placeholder="09 Sep, 1996"
                    value={formData.dob || ""}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <label htmlFor="birthTime" className="form-label">
                  Birth Time
                </label>
                <div className="input-group">
                  <select
                    className="form-select"
                    name="birthHour"
                    value={formData.birthHour || ""}
                    onChange={handleInputChange}
                    style={{ width: "20%" }}
                  >
                    <option value="">Hour</option>
                    {Array.from({ length: 12 }, (_, i) => (
                      <option key={i + 1} value={i + 1}>
                        {String(i + 1).padStart(2, "0")}
                      </option>
                    ))}
                  </select>

                  <select
                    className="form-select"
                    name="birthMinute"
                    value={formData.birthMinute || ""}
                    onChange={handleInputChange}
                  >
                    <option value="">Minute</option>
                    {Array.from({ length: 60 }, (_, i) => (
                      <option key={i} value={i}>
                        {String(i).padStart(2, "0")}
                      </option>
                    ))}
                  </select>

                  <select
                    className="form-select"
                    name="birthTimePeriod"
                    value={formData.birthTimePeriod || ""}
                    onChange={handleInputChange}
                  >
                    <option value="">AM/PM</option>
                    <option value="AM">AM</option>
                    <option value="PM">PM</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="birthplace" className="form-label">
                Birthplace
              </label>
              <input
                type="text"
                className="form-control"
                id="birthplace"
                name="birthplace"
                placeholder="Ex: Hospital / Home"
                value={formData.birthplace || ""}
                onChange={handleInputChange}
              />
            </div>

            <div className="row">
              <div className="col-md-4">
                <label htmlFor="birthCity" className="form-label">
                  Birth City
                </label>
                <select
                  className="form-select"
                  id="birthCity"
                  name="birthCity"
                  value={formData.birthCity || ""}
                  onChange={handleInputChange}
                >
                  <option>Select City</option>
                </select>
              </div>
              <div className="col-md-4">
                <label htmlFor="birthState" className="form-label">
                  Birth State
                </label>
                <select
                  className="form-select"
                  id="birthState"
                  name="birthState"
                  value={formData.birthState || ""}
                  onChange={handleInputChange}
                >
                  <option>Select State</option>
                </select>
              </div>
              <div className="col-md-4">
                <label htmlFor="birthCountry" className="form-label">
                  Birth Country
                </label>
                <select
                  className="form-select"
                  id="birthCountry"
                  name="birthCountry"
                  value={formData.birthCountry || ""}
                  onChange={handleInputChange}
                >
                  <option>Select Country</option>
                </select>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-6">
                <label htmlFor="maglik" className="form-label">
                  Maglik
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="maglik"
                  name="maglik"
                  placeholder="Enter Maglik"
                  value={formData.maglik || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-sm-6">
                <label htmlFor="religion" className="form-label">
                  Religion
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="religion"
                  name="religion"
                  placeholder="Enter religion"
                  value={formData.religion || ""}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="row">
              <div className="col-md-4">
                <label htmlFor="clan" className="form-label">
                  Clan / Vansh
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="clan"
                  name="clan"
                  placeholder="Enter Clan"
                  value={formData.clan || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-md-4">
                <label htmlFor="subclan" className="form-label">
                  Subclan / Upvansh
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="subclan"
                  name="subclan"
                  placeholder="Enter Subclan / Upvansh"
                  value={formData.subclan || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-md-4">
                <label htmlFor="gotra" className="form-label">
                  Gotra / Tribe
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="gotra"
                  name="gotra"
                  placeholder="Enter Gotra / Tribe"
                  value={formData.gotra || ""}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="additionalInfo" className="form-label">
                Additional info
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

          <div className={styles.modalFooter}>
            <button
              type="button"
              className={`btn btn-primary ${styles.saveButton}`}
              onClick={handleSaveClick}
            >
              SAVE
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReligionForm;
