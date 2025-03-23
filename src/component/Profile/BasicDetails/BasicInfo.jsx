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
    countryCode: "",
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
        countryCode: userData.countryCode || "",
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
    let validValue = value;

    const nameRegex = /^[a-zA-Z\s]{0,20}$/;
    const mobileRegex = /^[0-9]{0,10}$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    const weightRegex = /^[0-9]{0,3}$/;
    const heightRegex = /^[0-9]{0,2}$/;
    const additionalInfoRegex = /^[a-zA-Z0-9.,'"() ]{0,100}$/;
    const countryCodeRegex = /^\+\d{1,4}$/; // Allows + followed by 1 to 4 digits

    if (
      ["firstName", "middleName", "lastName", "maritalStatus"].includes(name)
    ) {
      if (!nameRegex.test(value)) return;
    } else if (name === "mobile") {
      if (!mobileRegex.test(value)) return;
    } else if (name === "email") {
      if (value && !emailRegex.test(value)) return;
    } else if (name === "dateOfBirth") {
      if (value && !dateRegex.test(value)) return;
    } else if (name === "weight") {
      if (!weightRegex.test(value)) return;
    } else if (name === "additionalInfo") {
      if (!additionalInfoRegex.test(value)) return;
    } else if (name === "heightFeet" || name === "heightInch") {
      if (!heightRegex.test(value)) return;
      setFormData({
        ...formData,
        height: {
          ...formData.height,
          [name === "heightFeet" ? "feet" : "inches"]:
            parseInt(value, 10) || "",
        },
      });
      return;
    } else if (name === "countryCode") {
      if (!countryCodeRegex.test(value)) return;
    }

    setFormData({ ...formData, [name]: validValue });
  };

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
            <FaRegEdit size="18" />
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
