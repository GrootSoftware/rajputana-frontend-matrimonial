import React, { useState } from "react";
import axios from "axios";
import { FaUpload, FaLock } from "react-icons/fa";
import { MdOutlineCancelPresentation } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";

import style from "./Form.module.css";
import { useAuth } from "../../Layout/AuthContext";
import { toast } from "react-toastify";

const DocumentForm = ({
  handleCancelClick,
  handleSaveClick,
  images,
  setImages,
  setdocuments,
  documents,
  fetchData,
  selectedOption,
  setSelectedOption,
}) => {
  const { updateData } = useAuth();
  const [profileImage, setProfileImage] = useState(null);

  const options = [
    { id: "publicOption", value: false, label: "Public" },
    { id: "onRequestOption", value: true, label: "On Request" },
  ];

  const handleOptionChange = async (event) => {
    const newValue = event.target.value;
    try {
      setSelectedOption(newValue);

      console.log("Selected Option (new):", newValue);
      const route = "update-privacy";
      console.log("Saving Data:", newValue);

      await updateData(route, newValue);
      await fetchData();
    } catch (error) {
      console.error("Error updating data:", error.message);
    }
  };

  const handleImageUpload = async (event) => {
    const files = Array.from(event.target.files) || [];
    console.log("Selected Files:", files); // Debugging line
    const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
    const validFiles = files.filter((file) => allowedTypes.includes(file.type));

    if (validFiles.length === 0) {
      alert("Invalid file type. Only JPEG, PNG, and JPG are allowed.");
      return;
    }

    const formData = new FormData();
    validFiles.forEach((file) => formData.append("avatars", file));

    console.log(validFiles);

    try {
      const token = localStorage.getItem("authToken");
      console.log("Form Data:", formData);
      const response = await axios.post(
        "http://localhost:5000/upload-files",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const uploadedPhotos = response.data?.photos || [];
      setImages((prev) => [...uploadedPhotos]);
    } catch (error) {
      // Improved error handling with more descriptive logs
      console.error(
        "Error uploading files:",
        error.response?.data?.message || error.message
      );
    }
  };

  const handleDocumentUpload = async (event) => {
    const files = Array.from(event.target.files) || [];
    console.log("Selected Files:", files); // Debugging line
    const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
    const validFiles = files.filter((file) => allowedTypes.includes(file.type));

    if (validFiles.length === 0) {
      alert("Invalid file type. Only JPEG, PNG, and JPG are allowed.");
      return;
    }

    const formData = new FormData();
    validFiles.forEach((file) => formData.append("avatars", file));

    console.log(validFiles);

    try {
      const token = localStorage.getItem("authToken");
      console.log("Form Data:", formData);
      const response = await axios.post(
        "http://localhost:5000/upload-documents",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const uploadedPhotos = response.data?.documents || [];
      setdocuments((prev) => [...uploadedPhotos]);
    } catch (error) {
      console.error(
        "Error uploading files:",
        error.response?.data?.message || error.message
      );
    }
  };

  const setAsProfileImage = async (profileId) => {
    try {
      let data = profileId;
      const token = localStorage.getItem("authToken");
      const updatedImages = images.map((img) =>
        img._id == profileId
          ? { ...img, isAvatar: true }
          : { ...img, isAvatar: false }
      );
      setImages(updatedImages);
      let route = "set-profile-image";
      let response = await axios.put(
        `http://localhost:5000/${route}`,
        { data },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data?.message) {
        toast.success(response.data.message);
      }
    } catch (error) {
      console.log(
        "Error setting profile image on server:",
        error.response?.data || error.message
      );
    }
  };

  const handleDelete = async (profileId) => {
    try {
      let data = profileId;
      const token = localStorage.getItem("authToken");
      const updatedImages = images.filter((img) => img._id !== profileId);
      setImages(updatedImages);
      // console.log(data);

      let route = "delete-image";
      let response = await axios.put(
        `http://localhost:5000/${route}`,
        { data },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data?.message) {
        toast.success(response.data.message);
      }
    } catch (error) {
      console.log(
        "Error setting profile image on server:",
        error.response?.data || error.message
      );
    }
  };

  return (
    <div className={style.modalContainer}>
      <div className={style.modalContent}>
        <div className={style.modalHeader}>
          <h4 className={style.headerTitle}>Images and Documents</h4>
          <MdOutlineCancelPresentation
            onClick={handleCancelClick}
            className={style.closeIcon}
          />
        </div>

        <form>
          {/* Images Section */}
          <div className="mb-4">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h2 className="h6">Images</h2>
              <label className="btn btn-sm text-danger">
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

            <div className="d-flex flex-wrap gap-2">
              {images.map((image, index) => (
                <div key={image._id} className="position-relative">
                  <img
                    src={
                      `${image?.url}` ||
                      "https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="
                    }
                    alt="avatars"
                    className={`${
                      profileImage === image.url ? "border border-success" : ""
                    }`}
                    style={{
                      width: "100px",
                      height: "100px",
                      objectFit: "cover",
                      cursor: "pointer",
                    }}
                    onClick={() => setAsProfileImage(image._id)}
                  />
                  {image.isAvatar ? (
                    <span
                      className="text-white position-absolute bottom-0 start-0 w-100 d-flex align-items-center justify-content-center"
                      style={{
                        backgroundColor: "#802d2d",
                        fontSize: "12px",
                        minHeight: "20px", // Ensures same height as checkbox div
                        lineHeight: "1.5",
                      }}
                    >
                      Profile Image
                    </span>
                  ) : (
                    <div
                      className="text-white position-absolute bottom-0 start-0 w-100 d-flex align-items-center justify-content-center gap-1"
                      style={{
                        backgroundColor: "rgba(0, 0, 0, 0.6)",
                        minHeight: "20px", // Matches the "Profile Image" span
                        lineHeight: "1.5",
                      }}
                    >
                      <input
                        type="checkbox"
                        onChange={() => setAsProfileImage(image._id)}
                        style={{ margin: 0, padding: 0 }}
                      />
                      <label
                        className="text-white m-0"
                        style={{ fontSize: "12px" }}
                      >
                        Make Profile
                      </label>
                    </div>
                  )}
                  {/* <FaLock className="position-absolute top-0 end-0 m-1 text-secondary" /> */}

                  <RiDeleteBin6Line
                    onClick={() => handleDelete(image._id)}
                    className="position-absolute top-0 end-0 m-2 text-secondary bg-light"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="row align-items-center">
            <div className="col d-flex gap-3 align-items-center flex-wrap">
              <span className={style.headerTitle}>Images Privacy</span>
              {options.map((option) => (
                <div key={option.id} className="d-flex align-items-center">
                  <input
                    className="form-check-input m-1"
                    type="radio"
                    name="privacyOptions"
                    id={option.id}
                    value={option.value}
                    checked={selectedOption === option.value}
                    onChange={handleOptionChange}
                  />
                  <label
                    className="sectionTitle m-0 text-secondary"
                    htmlFor={option.id}
                  >
                    {option.label}
                  </label>
                </div>
              ))}
            </div>
          </div>
          <hr />
          {/* Documents Section */}
          <div className="mb-4">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h2 className="h6">Documents</h2>
              <label className="btn btn-sm text-danger">
                <FaUpload className="me-1" />
                Upload
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleDocumentUpload}
                  style={{ display: "none" }}
                />
              </label>
            </div>
            <div className="d-flex flex-wrap gap-2">
              {documents?.map((document, index) => (
                <div key={document._id} className="position-relative">
                  <img
                    src={
                      `${document?.url}` ||
                      "https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="
                    }
                    alt="avatars"
                    className={``}
                    style={{
                      width: "100px",
                      height: "100px",
                      objectFit: "cover",
                      cursor: "pointer",
                    }}
                  />
                  {/* <FaLock className="position-absolute top-0 end-0 m-1 text-secondary" /> */}
                  <RiDeleteBin6Line
                    onClick={() => handleDelete(document._id)}
                    className="position-absolute top-0 end-0 m-2 text-secondary bg-light"
                  />
                </div>
              ))}
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
