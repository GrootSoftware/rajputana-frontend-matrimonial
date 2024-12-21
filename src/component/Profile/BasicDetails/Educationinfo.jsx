import React, { useState } from "react";
import styles from "./Mydetails.module.css"; // Scoped styles for this component
import EducationinfoForm from "../Forms/EducationinfoForm";
import { FaRegEdit } from "react-icons/fa";

function Educationinfo() {
  const [details, setDetails] = useState({
    qualifications: "Master's Degree",
    institution: "Computer Science",
    professional: "Employed",
    annualIncome: "Software Engineer",
    hobbies: ["Coding", "Reading"],
    additionalInfo: "Tech Corp",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(details);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "hobbies") {
      const selectedHobbies = Array.from(
        e.target.selectedOptions,
        (option) => option.value
      );
      setFormData({ ...formData, [name]: selectedHobbies });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleEditClick = () => {
    setIsEditing(true);
    setFormData(details);
  };

  const handleSaveClick = () => {
    setDetails(formData);
    setIsEditing(false);
  };

  const handleCancelClick = () => {
    setFormData(details);
    setIsEditing(false);
  };

  return (
    <div className={styles.appContainer}>
      <div className={styles.detailsHeader}>
        <h4 className={styles.headerTitle}>Academics Details</h4>
        {!isEditing ? (
          <div onClick={handleEditClick} className={styles.editBtn}>
            <FaRegEdit />
          </div>
        ) : (
          <EducationinfoForm
            handleCancelClick={handleCancelClick}
            handleInputChange={handleInputChange}
            formData={formData}
            handleSaveClick={handleSaveClick}
          />
        )}
      </div>

      <div className={styles.details}>
        {Object.keys(details).map((key) => (
          <div className={styles.detailItem} key={key}>
            <div className={styles.label}>
              {key
                .replace(/([A-Z])/g, " $1") // Add space before uppercase letters
                .replace(/^./, (str) => str.toUpperCase())}
              :
            </div>
            <div className={styles.value}>
                  {details[key] && typeof details[key] === "object"
                    ? JSON.stringify(details[key], null, 2) // Format objects as strings
                    : details[key] || "N/A"}
                </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Educationinfo;
