import React, { useState } from "react";
import "../BasicDetails/Mydetails.css";
import FormCard from "./FormCard";
import { FaRegEdit } from "react-icons/fa";

function AboutmeInfo() {
  const [details, setDetails] = useState({
    profileCreatedBy: "Self",
    maritalStatus: "Chundawat",
    aboutMe:
      "Long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    totalChildren: "N/A",
    statusChildren: "N/A",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(details);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleEditClick = () => {
    setIsEditing(true);
    setFormData(details);
  };

  // const handleCloseModal = () => {};

  const handleSaveClick = () => {
    setDetails(formData);
    setIsEditing(false);
  };

  const handleCancelClick = () => {
    setFormData(details);
    setIsEditing(false);
  };

  return (
    <div className="app-container">
      <div className="details-header">
        <h4 className="header-title">About Me</h4>
        {!isEditing ? (
          <div onClick={handleEditClick} className="edit-btn">
            <FaRegEdit />
          </div>
        ) : (
          <div>
            <FormCard
              handleCancelClick={handleCancelClick}
              details={details}
              handleInputChange={handleInputChange}
              formData={formData}
              handleSaveClick={handleSaveClick}
            />
          </div>
        )}
      </div>
      <div className="details">
        {Object.entries(details).length > 0 ? (
          <>
            {Object.keys(details).map((key) => (
              <div className="detail-item" key={key}>
                <div className="label">
                  {key
                    .replace(/([A-Z])/g, " $1") // Add space before uppercase letters
                    .replace(/^./, (str) => str.toUpperCase())}
                  :
                </div>
                <div className="value">{details[key]}</div>
              </div>
            ))}
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default AboutmeInfo;
