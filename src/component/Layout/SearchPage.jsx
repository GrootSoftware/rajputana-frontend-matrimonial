import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { AiOutlineRight } from "react-icons/ai";
import { IoImageSharp } from "react-icons/io5";
import RequestCard from "../Profile/ProfileList/RequestCard";
import style from "../Profile/Forms/Form.module.css";
import styles from "../Profile/ProfileComp/Profile.module.css";
import Profilenavbar from "../Profile/ProfileComp/Profilenavbar";
import Footer from "./Footer";
import { useAuth } from "./AuthContext";
import pro from "../../assets/images/blurimage.png";
import { useParams, useNavigate } from "react-router-dom";
export function Interestimagecontainer({ profile, status }) {
  const { updateData } = useAuth();

  const totalPhotos = profile?.filesId?.totalPhotos;
  const navigate = useNavigate();
  const handleViewimage = (profileId) => {
    console.log(profileId);
    navigate(`view/images/${profileId}`);
  };

  const HandlePhotoReq = async (profileId) => {
    try {
      let route = "profile/photoRequest";
      await updateData(route, profileId);
    } catch (error) {
      console.error("Error sending photo request:", error);
    }
  };

  if (!profile?.filesId?.photos || profile?.filesId?.photos?.length === 0) {
    return (
      <div
        className="image-container"
        style={{ position: "relative", width: "100%", height: "14rem" }}
      >
        <img
          key="1"
          src={pro}
          className="img-fluid m-auto"
          alt="Profile"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "top",
          }}
        />
        <span
          style={{
            position: "absolute",
            bottom: "0%",
            right: "0%",
            color: "white",
            backgroundColor: "black",
            padding: "3px 5px",

            fontFamily: "Open Sans, sans-serif",
          }}
          onClick={() => {
            handleViewimage(profile._id);
          }}
        >
          <IoImageSharp size={15} color="white" />
          <span style={{ color: "white", fontSize: "14px" }} className="p-1">
            0{totalPhotos}
          </span>
        </span>
        <div
          className={styles.vipSection}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
          }}
        >
          <p className="m-0 mb-1">Send request for photos</p>
          <button
            className={styles.ctaButton}
            onClick={() => HandlePhotoReq(profile?._id)}
          >
            Request image
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "14rem",
          overflow: "hidden",
        }}
      >
        {profile?.filesId?.photos?.map((photo, index) => (
          <>
            <img
              key={photo._id}
              src={photo.url}
              className={`img-fluid m-auto ${
                index === 0 ? "visible-image" : "hidden-image"
              }`}
              alt="Profile"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "top",
                zIndex: index === 0 ? 1 : 0, // Ensure the first image is on top
                opacity: index === 0 ? 1 : 0, // Hide other images visually
                transition: "opacity 0.5s ease", // Add smooth fade transition if needed
              }}
            />
            <span
              style={{
                position: "absolute",
                bottom: "0%",
                right: "0%",
                color: "white",
                backgroundColor: "black",
                padding: "3px 5px",
                zIndex: "20",
                fontFamily: "Open Sans, sans-serif",
              }}
              onClick={() => {
                handleViewimage(profile._id);
              }}
            >
              <IoImageSharp size={15} color="white" />
              <span
                style={{ color: "white", fontSize: "14px" }}
                className="p-1"
              >
                0{totalPhotos}
              </span>
            </span>
          </>
        ))}
      </div>
    </>
  );
}

const SearchPage = () => {
  const { isAuthenticated, setFormData, formData, updateData } = useAuth();
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [advanceSearch, setAdvanceSearch] = useState(false);
  const [activeTab, setActiveTab] = useState("requestSent");

  const profilesPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);

  const handleAdvance = () => {
    setAdvanceSearch(!advanceSearch);
  };

  const totalPages = Math.max(
    1,
    Math.ceil((profiles?.length || 0) / profilesPerPage)
  );

  const getProfilesForCurrentPage = () => {
    const startIdx = (currentPage - 1) * profilesPerPage;
    return profiles?.slice(startIdx, startIdx + profilesPerPage) || [];
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let updatedValue = value.trimStart();

    const nameRegex = /^[a-zA-Z\s]{1,20}$/;
    const occupationRegex = /^[a-zA-Z\s]{1,20}$/;
    const numberRegex = /^\d*$/;

    switch (name) {
      case "occupation":
      case "name":
        if (numberRegex.test(value) || nameRegex.test(value)) {
          updatedValue = value;
        } else {
          return;
        }
        break;

      case "gender":
      case "maritalStatus":
        if (!occupationRegex.test(value)) return;
        break;

      case "minAge":
      case "maxAge":
      case "HeightFeetfrom":
      case "HeightFeetto":
        if (!numberRegex.test(value)) return;
        break;

      default:
        break;
    }

    setFormData({ ...formData, [name]: updatedValue });
  };

  const handleSearch = async () => {
    try {
      const route = "getprofiles";
      console.log("Saving Data:", formData);
      setLoading(true);
      const profiles = await updateData(route, formData);
      console.log("Profiles:", profiles?.data);

      setProfiles(profiles?.data || []);
    } catch (error) {
      console.error("Error updating data:", error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleSearch();
  }, []);

  return (
    <div style={{ backgroundColor: "rgba(248, 235, 210, 1)" }}>
      <Profilenavbar />

      <div className={`${styles.Container} mt-2`}>
        <div
          className={`ps-1 ps-md-0 ${styles.routerpathtext} d-flex align-items-center`}
          style={{ gap: "10px" }} // Add gap for spacing
        >
          <Link to="/home" style={{ textDecoration: "none", color: "inherit" }}>
            Home
          </Link>
            <AiOutlineRight size={15} style={{ marginInline: "5px" }} />
          {"Search"}
        </div>
        <div className="bg-white p-4 shadow">
          <div className="row g-1 m-0 p-0">
            {/* Search by name or ID */}
            <div className="col-md-4 p-2">
              <label
                className="text-secondary"
                style={{
                  fontSize: "16px",
                  marginBottom: "5px",
                  fontWeight: "100",
                }}
              >
                Search name or ID
              </label>
              <input
                type="text"
                className="form-control p-2"
                placeholder="Search"
                name="name"
                style={{
                  borderRadius: "0px",
                }}
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-4 p-2">
              <label
                className="text-secondary"
                style={{
                  fontSize: "16px",
                  marginBottom: "5px",
                  fontWeight: "100",
                }}
              >
                Looking For?
              </label>
              <select
                className="form-select p-2"
                placeholder="Looking for?"
                name="gender"
                style={{
                  borderRadius: "0px",
                }}
                value={formData.gender}
                onChange={handleChange}
              >
                <option value="">Select Gender</option>
                <option value="Male">Groom</option>
                <option value="Female">Bride</option>
              </select>
            </div>
            <div className="col-md-4 p-2">
              {/* Min Age dropdown */}
              <label
                className="text-secondary"
                style={{
                  fontSize: "16px",
                  marginBottom: "5px",
                  fontWeight: "100",
                }}
              >
                Select Age group
              </label>
              <div className="d-flex gap-2">
                <select
                  className="form-select p-2"
                  name="minAge"
                  value={formData.minAge}
                  onChange={handleChange}
                  style={{
                    borderRadius: "0px",
                  }}
                >
                  <option value="">Age</option>
                  {Array.from({ length: 50 - 18 + 1 }, (_, i) => i + 18).map(
                    (age) => (
                      <option key={age} value={age}>
                        {age}
                      </option>
                    )
                  )}
                </select>

                <select
                  className="form-select p-2"
                  name="maxAge"
                  value={formData.maxAge}
                  onChange={handleChange}
                  style={{
                    borderRadius: "0px",
                  }}
                >
                  <option value="">Age</option>
                  {Array.from({ length: 50 - 18 + 1 }, (_, i) => i + 18).map(
                    (age) => (
                      <option key={age} value={age}>
                        {age}
                      </option>
                    )
                  )}
                </select>
              </div>
            </div>
          </div>

          {/* Advanced search link */}
          {advanceSearch && (
            <div className="row g-1 m-0 p-0">
              <div className="col-md-3 p-2">
                {/* Min Age dropdown */}
                <label
                  className="text-secondary"
                  style={{
                    fontSize: "16px",
                    marginBottom: "5px",
                    fontWeight: "100",
                  }}
                >
                  Height
                </label>
                <div className="d-flex gap-2">
                  <select
                    className="form-select p-2"
                    name="HeightFeetfrom"
                    value={formData.HeightFeetfrom}
                    onChange={handleChange}
                    style={{
                      borderRadius: "0px",
                    }}
                  >
                    <option value="">From</option>
                    {Array.from({ length: 8 }, (_, i) => i + 1).map(
                      (height) => (
                        <option key={height} value={height}>
                          {height} feet
                        </option>
                      )
                    )}
                  </select>

                  <select
                    className="form-select p-2"
                    name="HeightFeetto"
                    value={formData.HeightFeetto}
                    onChange={handleChange}
                    style={{
                      borderRadius: "0px",
                    }}
                  >
                    <option value="">To</option>
                    {Array.from({ length: 8 }, (_, i) => i + 1).map(
                      (height) => (
                        <option key={height} value={height}>
                          {height} feet
                        </option>
                      )
                    )}
                  </select>
                </div>
              </div>
              <div className="col-md-3 p-2">
                <label
                  className="text-secondary"
                  style={{
                    fontSize: "16px",
                    marginBottom: "5px",
                    fontWeight: "100",
                  }}
                >
                  Marital Status
                </label>
                <select
                  className="form-select p-2"
                  id="maritalStatus"
                  name="maritalStatus"
                  value={formData.maritalStatus || ""}
                  style={{
                    borderRadius: "0px",
                  }}
                  onChange={handleChange}
                >
                  <option value="">Select</option>
                  <option value="Single">Single</option>
                  <option value="Married">Married</option>
                  <option value="Divorced">Divorced</option>
                  <option value="Widowed">Widowed</option>
                </select>
              </div>
              <div className="col-md-3 p-2">
                <label
                  className="text-secondary"
                  style={{
                    fontSize: "16px",
                    marginBottom: "5px",
                    fontWeight: "100",
                  }}
                >
                  Occupation
                </label>

                <input
                  type="text"
                  className="form-control p-2"
                  placeholder="Occupation"
                  id="occupation"
                  name="occupation"
                  value={formData.occupation}
                  style={{
                    borderRadius: "0px",
                  }}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-3 p-2">
                <label
                  className="text-secondary"
                  style={{
                    fontSize: "16px",
                    marginBottom: "5px",
                    fontWeight: "100",
                  }}
                >
                  Class
                </label>
                <select
                  className="form-select rounded-0"
                  id="class"
                  name="class"
                  style={{
                    borderRadius: "0px",
                  }}
                  value={formData.class || ""}
                  onChange={handleChange}
                >
                  <option value="">Family type</option>
                  <option value="Business">Business</option>
                  <option value="Agriculture">Agriculture</option>
                  <option value="Working">Working</option>
                  <option value="Service">Service</option>
                  <option value="Private">Private</option>
                  <option value="Royalty">Royalty</option>
                  <option value="Political">Political</option>
                  <option value="Others">Others</option>
                </select>
              </div>
            </div>
          )}

          <div className="row g-1 m-0 p-0">
            {!advanceSearch && (
              <div
                className=" mt-4 col-sm-6 p-2 "
                style={{
                  fontWeight: "600",
                  color: "rgba(153, 37, 37, 1)",
                }}
                onClick={handleAdvance}
              >
                Advance search?
              </div>
            )}

            {advanceSearch && (
              <div
                className=" mt-4 col-sm-6 p-2 "
                style={{
                  fontWeight: "600",
                  color: "rgba(153, 37, 37, 1)",
                }}
                onClick={handleAdvance}
              >
                View lass?
              </div>
            )}

            <div className={`col-sm-6 ${style.modalFooter}`}>
              <button
                type="button"
                className={` ${style.saveButton}`}
                onClick={handleSearch}
              >
                SEARCH
              </button>
            </div>
          </div>
        </div>

        <div style={{ padding: "0.5rem" }}>
          <div className="row mt-2">
            {loading ? (
              <div className="text-center">Loading...</div>
            ) : getProfilesForCurrentPage().length === 0 ? (
              <div>No Profile found</div>
            ) : (
              getProfilesForCurrentPage().map((profile) => (
                <RequestCard
                  key={profile._id}
                  profile={profile}
                  activeTab={activeTab}
                  status="new"
                  ProfileImagerender={Interestimagecontainer}
                  handlecheck={() =>
                    setProfiles(profiles.filter((p) => p._id !== profile._id))
                  }
                />
              ))
            )}
          </div>
        </div>

        <div className="d-flex align-items-center justify-content-center mt-3 mb-3">
          <div className="d-flex align-items-center gap-2">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              style={{
                all: "unset",
                cursor: currentPage === 1 ? "default" : "pointer",
              }}
            >
              <FaChevronLeft />
            </button>

            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                className={`btn fw-bold d-flex align-items-center justify-content-center ${
                  currentPage === index + 1
                    ? "text-white"
                    : "bg-white text-black"
                }`}
                style={{
                  backgroundColor: "rgba(153, 37, 37, 1)",
                  width: "40px", // Adjust size as needed
                  height: "40px",
                  borderRadius: "50%", // Ensures circular shape
                  padding: 0, // Prevents extra spacing
                }}
                onClick={() => setCurrentPage(index + 1)}
              >
                {index + 1}
              </button>
            ))}

            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              style={{
                all: "unset",
                cursor: currentPage === totalPages ? "default" : "pointer",
              }}
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SearchPage;
