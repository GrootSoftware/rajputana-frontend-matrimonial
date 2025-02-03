import React, { useState, useEffect } from "react";
import styles from "./Mydetails.module.css";
import EducationinfoForm from "../Forms/EducationinfoForm";
import { FaRegEdit } from "react-icons/fa";
import { useAuth } from "../../Layout/AuthContext";

function Educationinfo() {
  const { fetchUserData, updateData } = useAuth();
  const [details, setDetails] = useState({
    qualifications: "",
    institution: "",
    professional: "",
    annualIncome: "",
    hobbies: [],
    additionalInfo: "",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ ...details });

  const fetchData = async () => {
    try {
      const route = "get-professional-data";
      const userData = await fetchUserData(route);
      const updatedDetails = {
        qualifications: userData.qualifications || "",
        institution: userData.institution || "",
        professional: userData.professional || "",
        annualIncome: userData.annualIncome || "",
        hobbies: userData.hobbies || [],
        additionalInfo: userData.additionalInfo || "",
        class: userData.class || "",
      };
      setDetails(updatedDetails);
      setFormData(updatedDetails);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = async () => {
    try {
      const route = "save-professional-data";
      await updateData(route, formData);
      setIsEditing(false);
      fetchData();
    } catch (error) {
      console.error("Error updating data:", error.message);
    }
  };

  const handleCancelClick = () => {
    setFormData(details);
    setIsEditing(false);
  };

  useEffect(() => {
    fetchData();
  }, [isEditing]);

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
            handleInputChange={(e) => {
              const { name, value } = e.target;

              if (name === "hobbies") {
                console.log(value);
                setFormData({ ...formData, [name]: value });
              } else {
                setFormData({ ...formData, [name]: value });
              }
            }}
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
            </div>
            <div className={styles.value}>
              {Array.isArray(details[key]) && details[key].length > 0
                ? details[key].map((item, index) => (
                    <span key={index}>
                      {item}
                      {index < details[key].length - 1 ? ", " : ""}
                    </span>
                  ))
                : details[key] || "N/A"}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Educationinfo;
