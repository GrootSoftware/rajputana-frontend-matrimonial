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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let validValue = value;

    const textRegex = /^[a-zA-Z\s]*$/;
    const incomeRegex = /^(Below \d+ LPA|\d+-\d+ LPA|Above \d+ LPA)?$/;
    const hobbiesRegex = /^[a-zA-Z\s,]*$/;
    const additionalInfoRegex = /^[a-zA-Z0-9.,'"() ]{0,100}$/;

    if (
      ["qualifications", "institution", "professional", "class"].includes(name)
    ) {
      if (!textRegex.test(value)) return;
    } else if (name === "annualIncome") {
      if (!incomeRegex.test(value)) return;
    } else if (name === "hobbies") {
      if (!hobbiesRegex.test(value)) return;
      validValue = value.split(",").map((hobby) => hobby.trim());
    } else if (name === "additionalInfo") {
      if (!additionalInfoRegex.test(value)) return;
    }

    setFormData({ ...formData, [name]: validValue });
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
           <FaRegEdit  size="18" />
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
