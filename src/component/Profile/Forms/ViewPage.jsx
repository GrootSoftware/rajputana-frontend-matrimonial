import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import styles from "../Forms/Form.module.css";

import { MdOutlineCancelPresentation } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";

import { useAuth } from "../../Layout/AuthContext";
import { toast } from "react-toastify";

const ViewPage = () => {
  const { updateData, fetchUserData, fetchprofile } = useAuth();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { profileId } = useParams();
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [formData, setFormData] = useState({});
  const [details, setDetails] = useState({});
  const [activedetails, setActivedetails] = useState("Basic");
  const [paternaldetails, setPaternaldetails] = useState({});
  const [Data, setData] = useState({});
  const [images, setImages] = useState([]);
  const [documents, setdocuments] = useState([]);
  const [isaccepted, setisaccepted] = useState(false);

  const handleView = async () => {
    try {
      const route = `profile/view/${profileId}`;
      const response = await fetchUserData(route);

      console.log("view", response);

      if (!response) {
        setLoading(false);
        return;
      }

      const formattedHeight = response.height
        ? `${response.height.feet}'${response.height.inches}"`
        : "N/A";

      const formattedDateOfBirth = response.dateOfBirth
        ? response.dateOfBirth.split("T")[0]
        : "N/A";

      setData(response);
      setImages(response?.filesId?.photos || []);
      setdocuments(response?.filesId?.documents || []);

      if (response?.paternaldetails) {
        setisaccepted(true);
        setPaternaldetails(response?.paternaldetails);
      }

      setFormData({
        matrimonialid: response.martId || "N/A",
        firstName: response.firstName || "N/A",
        middleName: response.middleName || "N/A",
        lastName: response.lastName || "N/A",
        dateOfBirth: formattedDateOfBirth,
        mobile: response.mobile || "N/A",
        email: response.email || "N/A",
        height: formattedHeight,
        weight: response.weight || "N/A",
        maritalStatus: response.maritalStatus || "N/A",
      });

      setDetails({
        matrimonialid: response.martId || "N/A",
        firstName: response.firstName || "N/A",
        middleName: response.middleName || "N/A",
        lastName: response.lastName || "N/A",
        dateOfBirth: formattedDateOfBirth,
        mobile: response.mobile || "N/A",
        email: response.email || "N/A",
        height: formattedHeight,
        weight: response.weight || "N/A",
        maritalStatus: response.maritalStatus || "N/A",
      });
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  const keyNameMapping = {
    grandFatherName: "Grandfather Name",
    grandFathersonOf: "Son of",
    grandFatheroccupation: "Occupation",
    grandFatherthikana: "Address",
    grandMotherName: "GrandMother Name",
    grandMotherdaughterOf: "Daughter of",
    grandmotherthikana: "Address",
    maternalGrandFatherName: "Maternal Grandfather",
    maternalGrandFathersonOf: "Son of",
    maternalGrandFatheroccupation: "Occupation",
    maternalGrandFatherthikana: "Address",
    maternalGrandMotherName: "Maternal Grandmother",
    maternalGrandMotherdaughterOf: "Daughter of",
    maternalGrandMotherthikana: "Address",
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleDetails = (type, data) => {
    setDetails(data || {});
    setActivedetails(type);
  };

  useEffect(() => {
    handleView();
  }, []);

  return (
    <div className={styles.modalContainer}>
      <div className={`${styles.modalContent} ${styles.viewPage}`}>
        <div className={styles.modalHeader}>
          <h4 className={styles.headerTitle}>view {details.firstName}</h4>
          <MdOutlineCancelPresentation
            onClick={() => navigate("/profile")}
            className={styles.closeIcon}
            size="24"
          />
        </div>

        <div className="row p-0">
          <div className="col-md-4">
            <div
              id="imageCarousel"
              className="carousel slide mx-auto w-100 shadow-lg rounded"
              style={{ maxWidth: "600px" }}
            >
              <div className="carousel-inner">
                {images.length > 0 ? (
                  images.map((image, index) => (
                    <div
                      key={index}
                      className={`carousel-item rounded shadow-sm bg-dark ${
                        index === currentIndex ? "active" : ""
                      }`}
                    >
                      <img
                        src={image.url}
                        alt="Profile Pic"
                        className="d-block w-100"
                        style={{
                          objectFit: "contain",
                          height: "400px",
                          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                        }}
                      />
                    </div>
                  ))
                ) : (
                  <div className="carousel-item active rounded shadow-sm bg-dark">
                    <img
                      src={require("../../../assets/images/blurimage.png")}
                      alt="Blurred Placeholder"
                      className="d-block w-100"
                      style={{
                        objectFit: "contain",
                        height: "400px",
                      }}
                    />
                  </div>
                )}
              </div>

              {/* Previous Button */}
              <button
                onClick={prevSlide}
                className="carousel-control-prev"
                type="button"
                style={{ color: "black", filter: "invert(100%)" }} // Makes icon black
              >
                <ChevronLeft size={40} />
              </button>

              {/* Next Button */}
              <button
                onClick={nextSlide}
                className="carousel-control-next"
                type="button"
                style={{ color: "black", filter: "invert(100%)" }} // Makes icon black
              >
                <ChevronRight size={40} />
              </button>
            </div>

            <div className="d-flex justify-content-center align-items-center mt-3">
              {images?.length > 0 &&
                images?.map((image, index) => {
                  return (
                    <div key={index} className="m-2 rounded">
                      <img
                        src={image.url}
                        alt="Family Pic"
                        className="rounded-circle"
                        style={{
                          width: "45px",
                          height: "45px",
                          cursor: "pointer",
                          objectFit: "cover",
                        }}
                        onClick={() => setCurrentIndex(index)}
                      />
                    </div>
                  );
                })}
            </div>

            {document.length !== 0 && (
              <>
                <div
                  id="carouselExampleIndicators"
                  className="carousel slide"
                  data-ride="carousel"
                >
                  {/* <ol className="carousel-indicators">
                {documents?.map((document, index) => (
                  <li
                    key={index}
                    data-target="#carouselExampleIndicators"
                    data-slide-to={index}
                    className={index === 0 ? "active" : ""}
                  ></li>
                ))}
              </ol> */}

                  <div className="carousel-inner">
                    {documents?.map((document, index) => (
                      <div
                        key={index}
                        className={`carousel-item ${
                          index === 0 ? "active" : ""
                        }`}
                      >
                        <img
                          className="d-block w-100"
                          src={document.url}
                          alt={`Slide ${index + 1}`}
                          style={{ height: "350px", objectFit: "contain" }}
                        />
                      </div>
                    ))}
                  </div>

                  {/* Previous Button */}
                  <a
                    className="carousel-control-prev"
                    href="#carouselExampleIndicators"
                    role="button"
                    data-slide="prev"
                    style={{ filter: "invert(100%)" }} // Makes icon black
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="sr-only">Previous</span>
                  </a>

                  {/* Next Button */}
                  <a
                    className="carousel-control-next"
                    href="#carouselExampleIndicators"
                    role="button"
                    data-slide="next"
                    style={{ filter: "invert(100%)" }} // Makes icon black
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              </>
            )}
          </div>
          <div className="col-md-8 mt-2">
            <div class="border-1" id="accordionExample">
              <div class="d-flex shadow-md p-2 bg-light mb-2 justify-content-between align-items-center">
                <label>About</label>
                <i
                  class="fas fa-chevron-down"
                  onClick={() => {
                    handleDetails("Basic", formData);
                  }}
                ></i>
              </div>
              {activedetails == "Basic" && (
                <div className="container mt-3">
                  {Object.entries(details).length > 0 ? (
                    <div className="row">
                      {Object.keys(details).map((key) => {
                        let displayValue = details[key] || "N/A";

                        // Mask mobile number (show only first 3 digits)
                        if (
                          key.toLowerCase() === "mobile" &&
                          typeof displayValue === "string"
                        ) {
                          displayValue = displayValue.slice(0, 3) + "*******";
                        }

                        // Mask email (show only first 3 letters and domain)
                        if (
                          key.toLowerCase() === "email" &&
                          typeof displayValue === "string"
                        ) {
                          const [name, domain] = displayValue.split("@");
                          displayValue =
                            name.slice(0, 3) + "****@" + (domain || "");
                        }

                        return (
                          <div className="col-6 mb-1" key={key}>
                            <div>
                              <h6
                                className="text-primary mb-1"
                                style={{
                                  fontFamily: "Lustria, serif",
                                }}
                              >
                                {key
                                  .replace(/([A-Z])/g, " $1")
                                  .replace(/^./, (str) => str.toUpperCase())}
                                {key.toLowerCase() === "weight" ? " (kg)" : ""}
                              </h6>
                              <p
                                className="mb-0 fw-bold text-dark"
                                style={{
                                  wordWrap: "break-word",
                                  overflowWrap: "break-word",
                                  whiteSpace: "normal",
                                  overflow: "hidden",
                                  fontFamily: "Open Sans, sans-serif",
                                }}
                              >
                                {displayValue}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <p className="text-center text-muted">Loading...</p>
                  )}
                </div>
              )}

              <div className="d-flex shadow-md p-2 bg-light mb-2 justify-content-between align-items-center">
                <label>Horoscopic details</label>
                <i
                  className="fas fa-chevron-down"
                  onClick={() => {
                    handleDetails("Horoscopic", Data.HoroscopicId);
                  }}
                ></i>
              </div>
              {activedetails === "Horoscopic" && Data.HoroscopicId && (
                <div className="container mt-3">
                  {Object.keys(Data.HoroscopicId).length > 0 ? (
                    <div className="row">
                      {Object.entries(Data.HoroscopicId)
                        .filter(
                          ([key]) => !["_id", "__v", "userId"].includes(key)
                        ) // Exclude unnecessary keys
                        .map(([key, value]) => (
                          <div className="col-6 mb-1" key={key}>
                            <div>
                              <h6
                                className="text-primary mb-1"
                                style={{ fontFamily: "Lustria, serif" }}
                              >
                                {key
                                  .replace(/([A-Z])/g, " $1")
                                  .replace(/^./, (str) => str.toUpperCase())}
                              </h6>
                              <p
                                className="mb-0 fw-bold text-dark"
                                style={{
                                  wordWrap: "break-word",
                                  overflowWrap: "break-word",
                                  whiteSpace: "normal",
                                  overflow: "hidden",
                                  fontFamily: "Open Sans, sans-serif",
                                }}
                              >
                                {value || "N/A"}
                              </p>
                            </div>
                          </div>
                        ))}
                    </div>
                  ) : (
                    <p className="text-center text-muted">
                      No details available
                    </p>
                  )}
                </div>
              )}

              <div className="d-flex shadow-md p-2 bg-light mb-2 justify-content-between align-items-center">
                <label>Education & Career</label>
                <i
                  className="fas fa-chevron-down"
                  onClick={() => {
                    handleDetails("Education", Data.profdetailsId);
                  }}
                ></i>
              </div>

              {activedetails === "Education" && Data.profdetailsId && (
                <div className="container mt-3">
                  {Object.keys(Data.profdetailsId).length > 0 ? (
                    <div className="row">
                      {Object.entries(Data.profdetailsId)
                        .filter(
                          ([key]) => !["_id", "__v", "userId"].includes(key)
                        ) // Exclude unnecessary keys
                        .map(([key, value]) => (
                          <div className="col-6 mb-1" key={key}>
                            <div>
                              <h6
                                className="text-primary mb-1"
                                style={{ fontFamily: "Lustria, serif" }}
                              >
                                {key
                                  .replace(/([A-Z])/g, " $1")
                                  .replace(/^./, (str) => str.toUpperCase())}
                              </h6>
                              <p
                                className="mb-0 fw-bold text-dark"
                                style={{
                                  wordWrap: "break-word",
                                  overflowWrap: "break-word",
                                  whiteSpace: "normal",
                                  overflow: "hidden",
                                  fontFamily: "Open Sans, sans-serif",
                                }}
                              >
                                {Array.isArray(value)
                                  ? value.length > 0
                                    ? value.join(", ")
                                    : "N/A"
                                  : value?.trim()
                                  ? value
                                  : "N/A"}
                              </p>
                            </div>
                          </div>
                        ))}
                    </div>
                  ) : (
                    <p className="text-center text-muted">
                      No details available
                    </p>
                  )}
                </div>
              )}

              {isaccepted && (
                <>
                  {" "}
                  <div className="d-flex shadow-md p-2 bg-light mb-2 justify-content-between align-items-center">
                    <label>Family Details</label>
                    <i
                      className="fas fa-chevron-down"
                      onClick={() => {
                        handleDetails("family", Data.familyDetails);
                      }}
                    ></i>
                  </div>
                  {activedetails === "family" && Data.familyDetails && (
                    <div className="container mt-3">
                      {Object.keys(Data.familyDetails).length > 0 ? (
                        <div className="row">
                          {Object.entries(Data.familyDetails)
                            .filter(
                              ([key]) => !["_id", "__v", "userId"].includes(key)
                            )
                            .map(([key, value]) => (
                              <div className="col-6 mb-1" key={key}>
                                <div>
                                  <h6
                                    className="text-primary mb-1"
                                    style={{ fontFamily: "Lustria, serif" }}
                                  >
                                    {key
                                      .replace(/([A-Z])/g, " $1")
                                      .replace(/^./, (str) =>
                                        str.toUpperCase()
                                      )}
                                  </h6>
                                  <p
                                    className="mb-0 fw-bold text-dark"
                                    style={{
                                      wordWrap: "break-word",
                                      overflowWrap: "break-word",
                                      whiteSpace: "normal",
                                      overflow: "hidden",
                                      fontFamily: "Open Sans, sans-serif",
                                    }}
                                  >
                                    {value?.trim() ? value : "N/A"}
                                  </p>
                                </div>
                              </div>
                            ))}
                        </div>
                      ) : (
                        <p className="text-center text-muted">
                          No details available
                        </p>
                      )}
                    </div>
                  )}
                  <div className="d-flex shadow-md p-2 bg-light mb-2 justify-content-between align-items-center">
                    <label>Paternal Details</label>
                    <i
                      className="fas fa-chevron-down"
                      onClick={() => {
                        handleDetails("paternal", Data.paternaldetails);
                      }}
                    ></i>
                  </div>
                  {activedetails === "paternal" && (
                    <div className="container mt-3">
                      {Object.keys(details).length > 0 ? (
                        <>
                          <div className="row">
                            {Object.entries(details)
                              .filter(
                                ([key, value]) =>
                                  !Array.isArray(value) &&
                                  ![
                                    "_id",
                                    "__v",
                                    "userId",
                                    "updatedAt",
                                    "createdAt",
                                  ].includes(key)
                              )
                              .map(([key, value]) => (
                                <div className="col-6 mb-1" key={key}>
                                  <div>
                                    <h6
                                      className="text-primary mb-1"
                                      style={{ fontFamily: "Lustria, serif" }}
                                    >
                                      {keyNameMapping[key] ||
                                        key
                                          .replace(/([A-Z])/g, " $1")
                                          .replace(/^./, (str) =>
                                            str.toUpperCase()
                                          )}
                                    </h6>
                                    <p
                                      className="mb-0 fw-bold text-dark"
                                      style={{
                                        wordWrap: "break-word",
                                        overflowWrap: "break-word",
                                        whiteSpace: "normal",
                                        overflow: "hidden",
                                        fontFamily: "Open Sans, sans-serif",
                                      }}
                                    >
                                      {value?.trim() ? value : "N/A"}
                                    </p>
                                  </div>
                                </div>
                              ))}
                          </div>

                          {[
                            "badePapa",
                            "bhuasa",
                            "kakosa",
                            "mamosa",
                            "masisa",
                          ].some(
                            (key) =>
                              Array.isArray(details[key]) &&
                              details[key].length > 0
                          ) && (
                            <div className="mt-4">
                              <h6
                                className="text-primary mb-2"
                                style={{ fontFamily: "Lustria, serif" }}
                              >
                                Relatives Information
                              </h6>
                              <div style={{ overflowX: "auto" }}>
                                <table
                                  className="table table-bordered"
                                  style={{
                                    maxWidth: "100%",
                                    tableLayout: "fixed",
                                    wordWrap: "break-word",
                                    fontSize: "clamp(8px,11px,13px)",
                                  }}
                                >
                                  <thead className="thead-dark">
                                    <tr>
                                      {[
                                        "Relation",
                                        "Name",
                                        "Married to",
                                        "SonOf/DaughterOf",
                                        "Thikana",
                                      ].map((header) => (
                                        <th
                                          key={header}
                                          style={{
                                            wordBreak: "break-word",
                                            overflowWrap: "break-word",
                                            whiteSpace: "normal",
                                          }}
                                        >
                                          {header}
                                        </th>
                                      ))}
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {[
                                      "badePapa",
                                      "bhuasa",
                                      "kakosa",
                                      "mamosa",
                                      "masisa",
                                    ].map((relationKey) =>
                                      details[relationKey]?.length > 0
                                        ? details[relationKey].map(
                                            (person, index) => (
                                              <tr
                                                key={`${relationKey}-${index}`}
                                              >
                                                <td
                                                  style={{
                                                    wordBreak: "break-word",
                                                    overflowWrap: "break-word",
                                                    whiteSpace: "normal",
                                                    overflow: "hidden",
                                                  }}
                                                >
                                                  {relationKey
                                                    .replace(/([A-Z])/g, " $1")
                                                    .replace(/^./, (str) =>
                                                      str.toUpperCase()
                                                    )}
                                                </td>
                                                <td
                                                  style={{
                                                    wordBreak: "break-word",
                                                    overflowWrap: "break-word",
                                                    whiteSpace: "normal",
                                                    overflow: "hidden",
                                                  }}
                                                >
                                                  {person.name || "N/A"}
                                                </td>
                                                <td
                                                  style={{
                                                    wordBreak: "break-word",
                                                    overflowWrap: "break-word",
                                                    whiteSpace: "normal",
                                                    overflow: "hidden",
                                                  }}
                                                >
                                                  {person.marriedto || "N/A"}
                                                </td>
                                                <td
                                                  style={{
                                                    wordBreak: "break-word",
                                                    overflowWrap: "break-word",
                                                    whiteSpace: "normal",
                                                    overflow: "hidden",
                                                  }}
                                                >
                                                  {person?.sonof ||
                                                    person?.daughterof ||
                                                    "N/A"}
                                                </td>
                                                <td
                                                  style={{
                                                    wordBreak: "break-word",
                                                    overflowWrap: "break-word",
                                                    whiteSpace: "normal",
                                                    overflow: "hidden",
                                                  }}
                                                >
                                                  {person.thikana || "N/A"}
                                                </td>
                                              </tr>
                                            )
                                          )
                                        : null
                                    )}
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          )}
                        </>
                      ) : (
                        <p className="text-center text-muted">
                          No details available
                        </p>
                      )}
                    </div>
                  )}{" "}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewPage;
