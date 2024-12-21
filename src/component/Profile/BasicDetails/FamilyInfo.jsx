import React, { useState, useEffect } from "react";
import style from "../BasicDetails/Mydetails.module.css";
import { FaRegEdit } from "react-icons/fa";
import FamilyinfoForm from "../Forms/FamilyinfoForm";

function FamilyInfo() {
  const [details, setDetails] = useState({
    fatherName: "Bheemraj Singh",
    occupation: "",
    fatherNativePlace: "",
    motherName: "",
    motherNativePlace: "...",
    maternalGotra: "Rawat",
    siblings: "",
    familyLocation: "",
    additionalMaternal: "",
    familyInfo: "",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(details);

  // Load initial data from localStorage
  // useEffect(() => {
  //   // const savedData = localStorage.getItem("userData");
  //   // if (savedData) {
  //   //   setDetails(JSON.parse(savedData));
  //   // }
  // }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleEditClick = () => {
    setIsEditing(true);
    setFormData(details);
  };

  const handleSaveClick = () => {
    setDetails(formData);
    setIsEditing(false);
    localStorage.setItem("userData", JSON.stringify(formData));
  };

  const handleCancelClick = () => {
    setFormData(details);
    setIsEditing(false);
  };

  return (
    <div className={style.appContainer}>
      <div className={style.detailsHeader}>
        <h4 className={style.headerTitle}>Family Details</h4>
        {!isEditing ? (
          <div onClick={handleEditClick} className={style.editBtn}>
            <FaRegEdit />
          </div>
        ) : (
          <FamilyinfoForm
            handleCancelClick={handleCancelClick}
            handleInputChange={handleInputChange}
            formData={formData}
            handleSaveClick={handleSaveClick}
          />
        )}
      </div>

      <div className={style.details}>
        {Object.keys(details).map((key) => (
          <div className={style.detailItem} key={key}>
            <div className={style.label}>
              {key
                .replace(/([A-Z])/g, " $1")
                .replace(/^./, (str) => str.toUpperCase())}
              :
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

export default FamilyInfo;
