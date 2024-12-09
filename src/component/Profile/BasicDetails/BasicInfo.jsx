import React, { useState, useEffect } from "react";
import "./Mydetails.css";
import axios from "axios";
import FormCard from "./FormCard";
import { FaRegEdit } from "react-icons/fa";

function BasicInfo() {
  const [details, setDetails] = useState({
    name: "",
    dateOfBirth: "",
    mobile: "+91 12 45 78 78 23",
    email: "rajendrasingh@gmail.com",
    height: "5ft 2in",
    weight: "75 Kg",
    complexion: "Fair",
    bodyType: "Average",
    maritalStatus: "Single",
    additionalInfo: "Long established fact that a reader will be distracted.",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        // const response = await axios.get("https://api.example.com/details");
        // setDetails(response.data);
        // setFormData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
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
      // await axios.post("https://api.example.com/details", formData);
      setDetails(formData);
      setIsEditing(false);
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

  const handleCancelClick = () => {
    setFormData(details);
    setIsEditing(false);
  };

  return (
    <div className="app-container">
      <div className="details-header">
        <h4 className="header-title">Basic Details</h4>
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
                    .replace(/([A-Z])/g, " $1") 
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

export default BasicInfo;
