import React, { useState } from "react";
import styles from "./ImagesAndDocuments.module.css";
import { FaRegEdit } from "react-icons/fa";
import DocumentForm from "../Forms/DocumentForm";
import style from "./Mydetails.module.css";
import { useEffect } from "react";

import profile from "../../../assets/images/profile.png";
import { useAuth } from "../../Layout/AuthContext";
const ImagesAndDocuments = () => {
  const { fetchUserData, updateData } = useAuth();
  const fontSize = "3vw";

  const [documents, setdocuments] = useState([
    {
      url: profile,
      alt: "Aadhar card",
    },
  ]);
  const [images, setImages] = useState([
    {
      url: profile,
      alt: "avtar",
    },
  ]);
  const [profileImage, setProfileImage] = useState(null);
  const [selectedOption, setSelectedOption] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };
  const fetchData = async () => {
    try {
      var route = "files";
      var userData = await fetchUserData(route);
      console.log("userdata", userData?.photos);
      setImages(userData.photos);
      setSelectedOption(userData.isPrivate);
      setdocuments(userData.documents);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  const handleSaveClick = async () => {
    try {
      setIsEditing(false);
      await fetchData();
    } catch (error) {
      console.error("Error updating data:", error.message);
    }
  };

  const handleCancelClick = () => {
    setIsEditing(false);
  };

  const otherDocuments = [
    {
      src: profile,
      alt: "Document",
    },
  ];

  useEffect(() => {
    fetchData();
  }, [isEditing]);

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
              images={images}
              setImages={setImages}
              setProfileImage={setProfileImage}
              setdocuments={setdocuments}
              documents={documents}
              fetchData={fetchData}
              selectedOption={selectedOption}
              setSelectedOption={setSelectedOption}
            />
          </div>
        )}
      </div>
      <h2 className="h6 text-secondary mb-3">Images</h2>
      <div className="d-flex flex-wrap gap-2 mb-4">
        {images.map((image) => (
          <div key={image._id} className="position-relative">
            <img
              src={
                image?.url ||
                "https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="
              }
              alt={image.alt}
              className="img-fluid"
              style={{
                width: "95px",
                height: "95px",
                objectFit: "cover",
                cursor: "pointer",
              }}
            />
            {image.isAvatar && (
              <span
                className="text-white position-absolute bottom-0 start-0 text-center"
                style={{
                  backgroundColor: "#802d2d",
                  fontSize: "12px",
                  width: "95px",
                }}
              >
                Profile Image
              </span>
            )}
          </div>
        ))}
      </div>

      {/* Documents Section */}
      <h2 className="h6  text-secondary mb-3">Documents</h2>
      <div className="d-flex flex-wrap gap-2 mb-4">
        {documents?.map((document) => (
          <div key={document?._id} className="position-relative">
            <img
              src={
                document?.url ||
                "https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="
              }
              alt="document"
              className="img-fluid"
              style={{
                width: "95px",
                height: "95px",
                objectFit: "cover",
                cursor: "pointer",
              }}
            />
          </div>
        ))}
      </div>

      {/* <h2 className="h5">Other Documents</h2>
      <div className="row">
        {otherDocuments.map((otherDoc, index) => (
          <div className="col-4 col-sm-3 mb-3" key={index}>
            <img src={otherDoc.src} alt={otherDoc.alt} className="img-fluid" />
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default ImagesAndDocuments;
