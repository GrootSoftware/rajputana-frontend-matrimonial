import React, { useState } from "react";
import style from "./Mydetails.module.css";
import ReligionForm from "../Forms/ReligionForm";
import { FaRegEdit } from "react-icons/fa";
import { useAuth } from "../../Layout/AuthContext";
import { useEffect } from "react";

function ReligiousDetails() {
  const { fetchUserData, updateData } = useAuth();

  const [isEditing, setIsEditing] = useState(false);

  const [details, setDetails] = useState({
    birthHour: "",
    birthMinute: "",
    birthTimePeriod: "",
    // dateOfBirth: "",
    birthplace: "",
    birthCity: "",
    birthState: "",
    birthCountry: "",
    maglik: "",

    clan: "",
    subclan: "",
    gotra: "",
    additionalInfo: "",
  });
  const [formData, setFormData] = useState(details);

  const fetchData = async () => {
    try {
      var route = "get-religiondetails";
      var userData = await fetchUserData(route);
      setDetails({
        birthHour: userData.birthHour || "",
        birthMinute: userData.birthMinute || "",
        birthTimePeriod: userData.birthTimePeriod || "",
        birthplace: userData.birthplace || "",
        birthCity: userData.birthCity || "",
        birthState: userData.birthState || "",
        birthCountry: userData.birthCountry || "",
        maglik: userData.maglik || "",

        clan: userData.clan || "",
        subclan: userData.subclan || "",
        gotra: userData.gotra || "",
        additionalInfo: userData.additionalInfo || "",
      });
      setFormData(details);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
  
    // Function to apply max length
    const applyMaxLength = (val) => val.slice(0, 25);
  
    if (name === "birthHour" || name === "birthMinute") {
      const numericValue = value.replace(/[^0-9]/g, "").slice(0, 2);
      setFormData({ ...formData, [name]: numericValue });
    } else if (name === "dateOfBirth") {
      const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
      if (dateRegex.test(value) || value === "") {
        setFormData({ ...formData, [name]: value });
      }
    } else if (name === "additionalInfo") {
      // Allows letters, spaces, and specific punctuation (.,'"())
      const validValue = value.replace(/[^a-zA-Z.,'"() ]/g, "");
      setFormData({ ...formData, [name]: applyMaxLength(validValue) });
    } else {
      // General case: Only letters and spaces allowed
      const validValue = value.replace(/[^a-zA-Z ]/g, "");
      setFormData({ ...formData, [name]: applyMaxLength(validValue) });
    }
  };
  
  const handleEditClick = () => {
    setIsEditing(true);
    setFormData(details);
  };

  const handleSaveClick = async () => {
    try {
      const route = "update-religiondetails";
      console.log("Saving Data:", formData);
      await updateData(route, formData);
      setIsEditing(false);
      await fetchData();
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
    <div className={style.appContainer}>
      <div className={style.detailsHeader}>
        <h4 className={style.headerTitle}>Birth/ Religious/ Astro Details</h4>
        {!isEditing ? (
          <div onClick={handleEditClick} className={style.editBtn}>
           <FaRegEdit  size="18" />
          </div>
        ) : (
          <div>
            <ReligionForm
              handleCancelClick={handleCancelClick}
              details={details}
              handleInputChange={handleInputChange}
              formData={formData}
              setFormData={setFormData}
              handleSaveClick={handleSaveClick}
            />
          </div>
        )}
      </div>
      <div className={style.details}>
        {Object.keys(details).map((key) => (
          <div className={style.detailItem} key={key}>
            <div className={style.label}>
              {key
                .replace(/([A-Z])/g, " $1")
                .replace(/^./, (str) => str.toUpperCase())}
            </div>
            <div className={style.value}>
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

export default ReligiousDetails;
