import React, { useState, useEffect } from "react";
import styles from "./Mydetails.module.css"; // Renamed style for better readability
import axios from "axios";
import FormCard from "../Forms/FormCard";
import { FaRegEdit, FaUsersSlash } from "react-icons/fa";
import { useAuth } from "../../Layout/AuthContext";

function BasicInfo() {
  const { fetchUserData, updateData } = useAuth();
  const [details, setDetails] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    dateOfBirth: "",
    mobile: "",
    email: "",
    height: "",
    weight: "",
    maritalStatus: "",
    additionalInfo: "",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState();

  const fetchData = async () => {
    try {
      const route = "user";
      const userData = await fetchUserData(route);
      console.log(userData);

      const formattedHeight = userData.height
        ? `${userData.height.feet}'${userData.height.inches}"`
        : "N/A";

      const formattedDateOfBirth = userData.dateOfBirth
        ? userData.dateOfBirth.split("T")[0]
        : "N/A";

      setDetails({
        firstName: userData.firstName || "N/A",
        middleName: userData.middleName || "N/A",
        lastName: userData.lastName || "N/A",
        dateOfBirth: formattedDateOfBirth,
        mobile: userData.mobile || "N/A",
        email: userData.email || "N/A",
        height: formattedHeight,
        weight: userData.weight || "N/A",
        maritalStatus: userData.maritalStatus || "N/A",
        additionalInfo: userData.additionalInfo || "N/A",
      });

      setFormData({
        firstName: userData.firstName || "",
        middleName: userData.middleName || "",
        lastName: userData.lastName || "",
        dateOfBirth: formattedDateOfBirth,
        mobile: userData.mobile || "",
        email: userData.email || "",
        heightFeet: userData.height?.feet,
        heightInch: userData.height?.inches,
        height: {
          feet: userData.height?.feet || "",
          inches: userData.height?.inches || "",
        },
        weight: userData.weight || "",
        maritalStatus: userData.maritalStatus || "",
        additionalInfo: userData.additionalInfo || "",
      });
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  const handleSaveClick = async () => {
    try {
      const route = "update-profile";
      console.log("Saving Data:", formData);
      await updateData(route, formData);
      setIsEditing(false);
      await fetchData();
    } catch (error) {
      console.error("Error updating data:", error.message);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "weight") {
      let numericValue = value.replace(/[^0-9]/g, "");
      let regex = /^[0-9]{1,3}$/;
      if (regex.test(numericValue) || value=="") {
        setFormData({ ...formData, [name]: numericValue });
      }
    } else {
      const validValue = value.replace(/[^a-zA-Z.,'"() ]/g, "").slice(0, 25);

      if (name === "heightFeet" || name === "heightInch") {
        setFormData({
          ...formData,
          height: {
            ...formData.height,
            [name === "heightFeet" ? "feet" : "inches"]:
              parseInt(value, 10) || 0,
          },
        });
      } else {
        setFormData({ ...formData, [name]: validValue });
      }
    }
  }

  const handleEditClick = () => {
    setIsEditing(true);
    setFormData(details);
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
        <h4 className={styles.headerTitle}>Basic Details</h4>
        {!isEditing ? (
          <div onClick={handleEditClick} className={styles.editBtn}>
            <FaRegEdit /> Edit
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
                  {key.toLowerCase() === "weight" ? " (kg)" : ""}
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
