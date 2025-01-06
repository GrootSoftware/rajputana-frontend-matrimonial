import React, { useState } from "react";

import styles from "../BasicDetails/Mydetails.module.css";
import ReligionForm from "../Forms/ReligionForm";
import { FaRegEdit } from "react-icons/fa";

function ReligiousDetails() {
  const [details, setDetails] = useState({
    dateOfBirth: "09 Sep, 1996",
    birthHour: "10",
    birthMinute: "30",
    birthTimePeriod: "AM",
    birthplace: "Hospital",
    birthCity: "Select City",
    birthState: "Select State",
    birthCountry: "Select Country",
    maglik: "Yes",
    religion: "Hindu",
    clan: "Rajput",
    subclan: "Sisodia",
    gotra: "Kashyap",
    additionalInfo: "No additional info",
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
    <div className={styles.appContainer}>
      <div className={styles.detailsHeader}>
        <h4 className={styles.headerTitle}>Birth/ Religious/ Astro Details</h4>
        {!isEditing ? (
          <div onClick={handleEditClick} className={styles.editBtn}>
            <FaRegEdit />
          </div>
        ) : (
          <div>
            <ReligionForm
              handleCancelClick={handleCancelClick}
              details={details}
              handleInputChange={handleInputChange}
              formData={formData}
              handleSaveClick={handleSaveClick}
            />
          </div>
        )}
      </div>
      <div className={styles.details}>
        {Object.entries(details).length > 0 ? (
          <>
            {Object.keys(details).map((key) => (
              <div className={styles.detailItem} key={key}>
                <div className={styles.label}>
                  {key
                    .replace(/([A-Z])/g, " $1") // Add space before uppercase letters
                    .replace(/^./, (str) => str.toUpperCase())}
                  :
                </div>
                <div className={styles.value}>{details[key]}</div>
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

export default ReligiousDetails;
