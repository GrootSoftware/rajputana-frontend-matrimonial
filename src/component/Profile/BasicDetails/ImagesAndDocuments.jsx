import React, { useState } from "react";
import styles from "./ImagesAndDocuments.module.css";
import { FaRegEdit } from "react-icons/fa";
import DocumentForm from "../Forms/DocumentForm";
import style from "./Mydetails.module.css";

const ImagesAndDocuments = () => {
  const fontSize = "2vh";
  const [isEditing, setIsEditing] = useState(false);

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
      src: "https://placehold.co/200*200",
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
        <h4 className={style.headerTitle}>Documents</h4>
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
      <div className={`${styles.sectionTitle} h5`}>Images</div>
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
        <div className="col">
          <span style={{ fontSize, fontWeight: "400" }}>Images privacy</span>
          <div className="form-check form-check-inline ms-3">
            <input
              className="form-check-input"
              type="radio"
              name="privacyOptions"
              id="publicOption"
              value="public"
            />
            <label
              className="form-check-label"
              htmlFor="publicOption"
              style={{ fontSize, fontWeight: "400" }}
            >
              Public
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="privacyOptions"
              id="onRequestOption"
              value="onRequest"
              defaultChecked
            />
            <label
              className="form-check-label"
              htmlFor="onRequestOption"
              style={{ fontSize, fontWeight: "400" }}
            >
              On Request
            </label>
          </div>
        </div>
      </div>
      {/* Documents Section */}
      <div className={`${styles.sectionTitle} h5 mt-4`}>Documents</div>
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
