import React, { useState, useEffect } from "react";
import "./ShortListedProfile.css";
import RequestCard from "./RequestCard";

import {
  FaChevronLeft,
  FaChevronRight,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import { IoImageSharp } from "react-icons/io5";
import { useAuth } from "../../Layout/AuthContext";
import styles from "./RequestCard.module.css";
import placeholderImage from "../../../assets/images/blurimage.png";
import { useParams, useNavigate } from "react-router-dom";
function PhotoRequest() {
  const [activeTab, setActiveTab] = useState("requestSent");
  const { fetchUserData } = useAuth();
  const [loading, setLoading] = useState(true);
  const [profiles, setProfiles] = useState([]);
  const [data, setData] = useState({ photoReqSent: [], photoReqReceived: [] });
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortCriteria, setSortCriteria] = useState("");
  const [sortDirection, setSortDirection] = useState("asc");
  const [statusFilter, setStatusFilter] = useState("all");
  const [refreshKey, setRefreshKey] = useState(0);

  const profilesPerPage = 4;

  const fetchData = async () => {
    try {
      setLoading(true);
      const route = "profile/photorequests";
      const fetchedData = await fetchUserData(route);

      if (
        !fetchedData ||
        !fetchedData.photoReqSent ||
        !fetchedData.photoReqReceived
      ) {
        throw new Error("Invalid data format");
      }

      setData(fetchedData);
      setProfiles(fetchedData.photoReqSent);
      console.log("data", data);
    } catch (err) {
      setError("An error occurred while fetching data.");
    } finally {
      setLoading(false);
    }
  };

  function RequestImageContainer({ profile, activeButton }) {
    const { updateData } = useAuth();
    const totalPhotos = profile?.filesId?.totalPhotos;
    const navigate = useNavigate();

    const handleViewimage = (profileId) => {
      console.log(profileId);
      navigate(`view/images/${profileId}`);
    };

    const handleAction = async (action, profileId) => {
      try {
        const route = `profile/${action}`;
        if (
          action === "withdrawal" ||
          action === "accept" ||
          action === "reject"
        ) {
          await updateData(route, profileId);
          fetchData();
          refreshData();
        }
      } catch (error) {
        console.error(`Error handling ${action} request:`, error);
      }
    };

    const renderEmptyState = (actionButtons = null) => (
      <div className="image-container" style={{ position: "relative" }}>
        <img
          src={placeholderImage}
          className="img-fluid m-auto"
          alt="Placeholder"
          style={{
            width: "230px",
            height: "230px",
            objectFit: "cover",
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
            padding: "1rem",
          }}
        >
          {/* <p className="m-0 mb-1"></p> */}
          {actionButtons}
        </div>
      </div>
    );

    if (!profile?.filesId?.photos?.length) {
      if (activeButton === "requestSent") {
        return renderEmptyState(
          <button
            className={styles.ctaButton}
            onClick={() => handleAction("withdrawal", profile._id)}
          >
            Withdraw Request
          </button>
        );
      }
      if (activeButton === "requestReceived") {
        return renderEmptyState(
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button
              className={`${styles.ctaButton} accept-button w-50`}
              style={{ backgroundColor: "green", color: "white" }}
              onClick={() => handleAction("accept", profile._id)}
            >
              Accept
            </button>
            <button
              className={`${styles.ctaButton} reject-button w-50`}
              style={{ backgroundColor: "#991c1c", color: "white" }}
              onClick={() => handleAction("reject", profile._id)}
            >
              Reject
            </button>
          </div>
        );
      }
    }

    return profile?.filesId?.photos?.map((photo) => (
      <>
        <div className="image-container" style={{ position: "relative" }}>
          <img
            key={photo._id}
            src={photo.url}
            className="img-fluid m-auto"
            alt="Profile"
            style={{
              width: "230px",
              height: "230px",
              objectFit: "cover",
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
            <span style={{ color: "white", fontSize: "14px" }} className="p-1">
              0{totalPhotos}
            </span>
          </span>
        </div>
      </>
    ));
  }

  const calculateAge = (dob) => {
    if (!dob) return 0;
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }
    return age;
  };

  const calculateHeightInInches = (profile) => {
    if (!profile?.height) return 0;
    return (profile.height.feet || 0) * 12 + (profile.height.inches || 0);
  };

  const filterAndSortProfiles = (status, criteria) => {
    let filteredProfiles =
      activeTab === "requestReceived"
        ? [...data.photoReqReceived]
        : [...data.photoReqSent];

    // Filtering based on status
    if (status !== "all") {
      filteredProfiles = filteredProfiles.filter(
        (profile) => profile.status === status
      );
    }

    // Sorting based on criteria
    if (criteria) {
      filteredProfiles.sort((a, b) => {
        const direction = sortDirection?.direction === "asc" ? 1 : -1;

        if (criteria === "age") {
          return (
            direction *
            (calculateAge(a.userId.dateOfBirth) -
              calculateAge(b.userId.dateOfBirth))
          );
        } else if (criteria === "height") {
          return (
            direction *
            (calculateHeightInInches(a.userId) -
              calculateHeightInInches(b.userId))
          );
        }
        return 0;
      });
    }

    setProfiles(filteredProfiles);
  };

  useEffect(() => {
    fetchData();
  }, [refreshKey]);

  const getCurrentProfiles = () => {
    const startIdx = (currentPage - 1) * profilesPerPage;
    return profiles.slice(startIdx, startIdx + profilesPerPage);
  };

  const refreshData = () => {
    setRefreshKey((prevKey) => {
      console.log("Refreshing data. New refreshKey:", prevKey + 1);
      return prevKey + 1;
    });
  };

  const totalPages = Math.ceil(profiles.length / profilesPerPage);

  const switchTab = (tab) => {
    console.log("Switching tab to:", tab);

    setActiveTab(tab);

    const newProfiles =
      tab === "requestSent" ? data.photoReqSent : data.photoReqReceived;

    console.log("New profiles set:", newProfiles);

    setProfiles(newProfiles);
    setCurrentPage(1);
  };

  return (
    <div className="profileContainer">
      <div className="profileListHeader">
        <div className="pagetitle">Photo Request</div>
        {/* <div className="filters">
          {["age", "height"].map((criteria) => (
            <div
              key={criteria}
              className="filterItem d-flex justify-content-between"
              onClick={() => setSortDirection(criteria)}
            >
              <span>
                {criteria.charAt(0).toUpperCase() + criteria.slice(1)}
              </span>
              <span>
                {sortCriteria === criteria && sortDirection === "asc" ? (
                  <FaChevronUp />
                ) : (
                  <FaChevronDown />
                )}
              </span>
            </div>
          ))}
        </div> */}
        <div className="filters">
          {["age", "height"].map((criteria) => (
            <select
              key={criteria}
              onChange={(e) =>
                setSortDirection({ criteria, direction: e.target.value })
              }
              className="form-select form-select-lg p-2 filterItem"
            >
              <option value="asc">
                {criteria.charAt(0).toUpperCase() + criteria.slice(1)}
              </option>
              <option value="asc">Increasing</option>
              <option value="desc">Decreasing</option>
            </select>
          ))}
        </div>
      </div>

      <div className="row m-0 mb-1 p-0 bg-white">
        <div className="col-8 col-sm-9 col-md-10 d-flex p-0">
          {["requestSent", "requestReceived"].map((tab) => (
            <div
              key={tab}
              onClick={() => switchTab(tab)}
              style={{
                backgroundColor: activeTab === tab ? "#991c1c" : "transparent",
                color: activeTab === tab ? "white" : "black",
              }}
              className="reqbtn"
            >
              {tab === "requestSent" ? "Request Sent" : "Request Received"}
            </div>
          ))}
        </div>
        <div
          className="col-4 col-sm-3 col-md-2 p-2 "
          style={{ alignContent: "center" }}
        >
          <select
            className="form-select form-select-lg m-0"
            style={{
              color: "rgba(97, 97, 97, 1)",
              borderRadius: "0%",
              border: "1px solid rgba(97, 97, 97, 1)",
              padding: "0.5rem 1rem",
              fontFamily: "Open Sans, sans-serif",
              fontWeight: "600",
              fontSize: "clamp(12px, 2vw, 14px)",
              outline: "none",
              wordWrap: "break-word",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
            aria-label=".form-select-lg example"
            onChange={(e) =>
              filterAndSortProfiles(e.target.value, sortCriteria)
            }
          >
            <option value="all">All request</option>
            <option value="pending">Pending</option>
            <option value="accepted">Accepted</option>
            <option value="rejected">Rejected</option>
          </select>
        </div>
      </div>

      <div className="row m-0 p-0">
        {getCurrentProfiles().length === 0 ? (
          <div className="pagetitle text-center">No Profiles Found</div>
        ) : (
          getCurrentProfiles().map((profile) => (
            <RequestCard
              key={profile._id}
              profile={profile?.userId}
              status={profile?.status}
              ProfileImagerender={RequestImageContainer}
              activeTab={activeTab}
              fetchData={fetchData}
            />
          ))
        )}
      </div>

      {/* <div className="d-flex align-items-center justify-content-center mt-3 mb-3">
        <button
          className=""
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          <FaChevronLeft />
        </button>
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            className={`btn rounded-circle px-3 fw-bold ${
              currentPage === index + 1 ? "text-white" : "bg-white text-black"
            }`}
            style={{ backgroundColor: "rgba(153, 37, 37, 1)" }}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        <button
          className=""
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
        >
          <FaChevronRight />
        </button>
      </div> */}

      <div className="d-flex align-items-center justify-content-center mt-3 mb-3">
        <div className="d-flex align-items-center gap-2">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
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
                currentPage === index + 1 ? "text-white" : "bg-white text-black"
              }`}
              style={{
                backgroundColor: "rgba(153, 37, 37, 1)",
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                padding: 0,
              }}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </button>
          ))}

          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
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
  );
}

export default PhotoRequest;
