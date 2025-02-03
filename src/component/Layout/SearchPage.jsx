import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { AiOutlineRight } from "react-icons/ai";
import RequestCard from "../Profile/ProfileList/RequestCard";
import style from "../Profile/Forms/Form.module.css";
import styles from "../Profile/ProfileComp/Profile.module.css";
import Profilenavbar from "../Profile/ProfileComp/Profilenavbar";
import Footer from "./Footer";
import { useAuth } from "./AuthContext";
import pro from "../../assets/images/blurimage.png";

export function Interestimagecontainer({ profile, status }) {
  const { updateData } = useAuth();

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
            Request now
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
        ))}
      </div>
    </>
  );
}

const SearchPage = () => {
  const { isAuthenticated, setFormData, formData, updateData } = useAuth();
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(false);

  const profilesPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);

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
    setFormData({ ...formData, [name]: value });
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
          <AiOutlineRight />
          {"Search"}
        </div>
        <div className="bg-white p-4 shadow">
          <div className="row g-1 m-0 p-0">
            {/* Search by name or ID */}
            <div className="col-md-4">
              <input
                type="text"
                className="form-control"
                placeholder="Search name or ID"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-8 d-flex gap-2">
              <select
                className="form-select"
                placeholder="Looking for?"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
              >
                <option value="">Looking For</option>
                <option value="Male">Groom</option>
                <option value="Female">Bride</option>
              </select>

              {/* Min Age dropdown */}
              <select
                className="form-select"
                name="minAge"
                value={formData.minAge}
                onChange={handleChange}
              >
                <option value="">Min Age</option>
                {Array.from({ length: 50 - 18 + 1 }, (_, i) => i + 18).map(
                  (age) => (
                    <option key={age} value={age}>
                      {age}
                    </option>
                  )
                )}
              </select>

              <select
                className="form-select"
                name="maxAge"
                value={formData.maxAge}
                onChange={handleChange}
              >
                <option value="">Max Age</option>
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

          {/* Advanced search link */}
          <div className="text-end mt-2">
            <Link to="/advanced-search" className="text-danger">
              Advance search?
            </Link>
          </div>

          {/* Search button */}
          <div className={style.modalFooter}>
            <button
              type="button"
              className={`btn btn-primary ${style.saveButton}`}
              onClick={handleSearch}
            >
              Search
            </button>
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

        <div className="d-flex align-items-center justify-content-center mt-3">
          <div className="d-flex align-items-center gap-2">
            <button
              className="btn"
              onClick={handlePrevPage}
              disabled={currentPage === 1}
            >
              <FaChevronLeft />
            </button>

            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                className={`btn rounded-circle px-3 fw-bold ${
                  currentPage === index + 1
                    ? "btn-danger text-white"
                    : "bg-white"
                }`}
                onClick={() => handlePageClick(index + 1)}
              >
                {index + 1}
              </button>
            ))}

            <button
              className="btn"
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
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
