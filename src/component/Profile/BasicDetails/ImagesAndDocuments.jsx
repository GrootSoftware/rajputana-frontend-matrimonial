import React, { useState } from "react";
import styles from "./ImagesAndDocuments.module.css";
import { FaRegEdit } from "react-icons/fa";
import DocumentForm from "../Forms/DocumentForm";
import style from "./Mydetails.module.css";

import profile from "../../../assets/images/profile.png";

const ImagesAndDocuments = () => {
  const fontSize = "2vh";
  const [isEditing, setIsEditing] = useState(false);
  const [selectedOption, setSelectedOption] = useState("onRequest");

  const options = [
    { id: "publicOption", value: "public", label: "Public" },
    { id: "onRequestOption", value: "onRequest", label: "On Request" },
  ];

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
  };

  const images = [
    {
      src: profile,
      alt: "Profile image of a bride in traditional attire",
    },
  ];

  const documents = [
    {
      src: "https://placehold.co/200*200",
      alt: "Aadhar card",
    },
    {
      src: "https://placehold.co/200*200",
      alt: "Passport",
    },
    {
      src: "https://placehold.co/200*200",
      alt: "Hand holding a document",
    },
    {
      src: "https://placehold.co/200*200",
      alt: "Document with a photo and text",
    },
  ];

  const otherDocuments = [
    {
      src: "https://placehold.co/200*200",
      alt: "Document with text and a photo",
    },
    {
      src: "https://placehold.co/200*200",
      alt: "Invitation card",
    },
    {
      src: "https://placehold.co/200*200",
      alt: "Astrological chart",
    },
  ];

  return (
    <div className={`${style.appContainer} p-3`}>
      <div className={style.detailsHeader}>
        <h4 className={style.headerTitle}>Images and Documents</h4>
        {!isEditing ? (
          <div onClick={handleEditClick} className="edit-btn">
            <FaRegEdit />
          </div>
        ) : (
          <div>
            <DocumentForm
              handleCancelClick={handleCancelClick}
              handleSaveClick={handleSaveClick}
            />
          </div>
        )}
      </div>
      <div className={`${styles.sectionTitle}`}>Images</div>
      <div className="row">
        {images.map((image, index) => (
          <div className="col-4 col-sm-3 mb-3" key={index}>
            <div className="position-relative">
              <img src={image.src} alt={image.alt} className="img-fluid" />
              {image.label && (
                <div
                  className="badge bg-danger text-white position-absolute bottom-0 start-0 w-100 text-center"
                  style={{
                    fontSize: "1.8vh",
                    borderRadius: "0",
                    padding: "0.3vh 0",
                  }}
                >
                  {image.label}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="row">
        <div className="col d-flex gap-2 align-content-center">
          <span className={styles.sectionTitle}>Images Privacy</span>
          {options.map((option) => (
            <div key={option.id} className="content-center">
              <input
                className="form-check-input m-3"
                type="radio"
                name="privacyOptions"
                id={option.id}
                value={option.value}
                checked={selectedOption === option.value}
                onChange={handleOptionChange}
              />
              <label className={styles.sectionTitle} htmlFor={option.id}>
                {option.label}
              </label>
            </div>
          ))}
        </div>
      </div>
      {/* Documents Section */}
      <div className={`${styles.sectionTitle}`}>Documents</div>
      <div className="row">
        {documents.map((doc, index) => (
          <div className="col-4 col-sm-3 mb-3" key={index}>
            <img src={doc.src} alt={doc.alt} className="img-fluid" />
          </div>
        ))}
      </div>
      {/* Other Documents Section */}
      <div className={`${styles.sectionTitle} h5 mt-4`}>Other Documents</div>
      <div className="row">
        {otherDocuments.map((otherDoc, index) => (
          <div className="col-4 col-sm-3 mb-3" key={index}>
            <img src={otherDoc.src} alt={otherDoc.alt} className="img-fluid" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImagesAndDocuments;
