import React, { useState } from "react";
import { FaUpload, FaLock, FaTimes } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import style from "./Form.module.css";

const DocumentForm = ({ handleCancelClick, handleSaveClick }) => {
  const [images, setImages] = useState([
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsIz4qZKTOplGKCIt860B8HP3mTBMZGACNFg&s",
  ]);
  


  const [profileImage, setProfileImage] = useState(null);

  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    const newImages = files.map((file) => URL.createObjectURL(file));
    setImages((prev) => [...prev, ...newImages]);
    localStorage.setItem("Uploads", images);
  };

  const setAsProfileImage = (imageSrc) => {
    setProfileImage(imageSrc);
  };

  return (
    <div className={style.modalContainer}>
      <div className={style.modalContent}>
        <div className={style.modalHeader}>
          <h1>Documents</h1>
          <div>
            <AiOutlineClose
              onClick={handleCancelClick}
              className={style.closeIcon}
            />
          </div>
        </div>

        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="mt-4">
              {/* Images Section */}
              <div className="mb-4">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h2 className="h5">Images</h2>
                  <label className="btn btn-outline-primary btn-sm">
                    <FaUpload className="me-1" />
                    Upload
                    <input
                      type="file"
                      accept="image/*"
                      multiple
                      onChange={handleImageUpload}
                      style={{ display: "none" }}
                    />
                  </label>
                </div>

                <div className="d-flex flex-wrap gap-3">
                  {images.map((imageSrc, index) => (
                    <div
                      className="position-relative"
                      key={index}
                      style={{ width: "150px", height: "150px" }}
                    >
                      <img
                        src={imageSrc}
                        alt={`Uploaded ${index}`}
                        className={`img-thumbnail ${
                          profileImage === imageSrc
                            ? "border border-success"
                            : ""
                        }`}
                        style={{
                          width: "100%",
                          height: "100%",
                          cursor: "pointer",
                        }}
                        onClick={() => setAsProfileImage(imageSrc)}
                      />
                      {profileImage === imageSrc && (
                        <span className="badge bg-success position-absolute top-0 start-0 m-1">
                          Profile Image
                        </span>
                      )}
                      <FaLock className="position-absolute top-0 end-0 m-1 text-secondary" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Documents Section */}
              <div className="mb-4">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h2 className="h5">Documents</h2>
                  <label className="btn btn-outline-primary btn-sm">
                    <FaUpload className="me-1" />
                    Upload
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      multiple
                      style={{ display: "none" }}
                    />
                  </label>
                </div>

                <div className="d-flex flex-wrap gap-3">
                  <div
                    className="border rounded position-relative"
                    style={{ width: "150px", height: "150px" }}
                  >
                    <FaLock className="position-absolute top-1 end-1 m-1 text-secondary" />
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h2 className="h5">other Documents</h2>
                  <label className="btn btn-outline-primary btn-sm">
                    <FaUpload className="me-1" />
                    Upload
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      multiple
                      style={{ display: "none" }}
                    />
                  </label>
                </div>

                <div className="d-flex flex-wrap gap-3">
                  <div
                    className="border rounded position-relative"
                    style={{ width: "150px", height: "150px" }}
                  >
                    <FaLock className="position-absolute top-1 end-1 m-1 text-secondary" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={style.modalFooter}>
            <button
              type="button"
              className={`btn btn-primary ${style.saveButton}`}
              onClick={handleSaveClick}
            >
              SAVE
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DocumentForm;
