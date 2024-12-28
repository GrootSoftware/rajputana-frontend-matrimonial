import React, { useState, useEffect } from "react";
import styles from "./Mydetails.module.css"; // Renamed style for better readability
import axios from "axios";
import FormCard from "../Forms/FormCard";
import { FaRegEdit } from "react-icons/fa";

function BasicInfo() {
  const [details, setDetails] = useState({
    firstName: "Gaurav",
    middleName: "",
    lastName: "Singh",
    dateOfBirth: "2000-07-28",
    mobile: "+91 1234567890",
    email: "rajendrasingh@gmail.com",
    heightFeet: "5",
    heightInch: "2",
    weight: "75",
    maritalStatus: "Single",
    additionalInfo: "Long established fact that a reader will be distracted.",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({});

  // Fetch data on mount
  useEffect(() => {
    const fetchDetails = async () => {
      try {
        // Uncomment and replace URL with your API endpoint
        // const response = await axios.get("https://api.example.com/details");
        // setDetails(response.data);
        // setFormData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };
    fetchDetails();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleEditClick = () => {
    setIsEditing(true);
    setFormData(details);
  };

  const handleSaveClick = async () => {
    try {
      // Uncomment and replace URL with your API endpoint
      // await axios.post("https://api.example.com/details", formData);
      setDetails(formData);
      setIsEditing(false);
    } catch (error) {
      console.error("Error saving data:", error.message);
    }
  };

  const handleCancelClick = () => {
    setFormData(details);
    setIsEditing(false);
  };

  return (
    <div className={styles.appContainer}>
      <div className={styles.detailsHeader}>
        <h4 className={styles.headerTitle}>Basic Details</h4>
        {!isEditing ? (
          <div onClick={handleEditClick} className={styles.editBtn}>
            <FaRegEdit />
          </div>
        ) : (
          <FormCard
            handleCancelClick={handleCancelClick}
            details={details}
            handleInputChange={handleInputChange}
            formData={formData}
            handleSaveClick={handleSaveClick}
          />
        )}
      </div>
      <div className={styles.details}>
        {Object.entries(details).length > 0 ? (
          <>
            {Object.keys(details).map((key) => (
              <div className={styles.detailItem} key={key}>
                <div className={styles.label}>
                  {key
                    .replace(/([A-Z])/g, " $1")
                    .replace(/^./, (str) => str.toUpperCase())}
                  :
                </div>
                <div className={styles.value}>
                  {details[key] && typeof details[key] === "object"
                    ? JSON.stringify(details[key], null, 2)
                    : details[key] || "N/A"}
                </div>
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

export default BasicInfo;
