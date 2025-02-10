import React, { useState, useEffect } from "react";
import "./ShortListedProfile.css";
import RequestCard from "./RequestCard";
import {
  FaChevronLeft,
  FaChevronRight,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import { useAuth } from "../../Layout/AuthContext";
import styles from "./RequestCard.module.css";
import pro from "../../../assets/images/blurimage.png";

function MyInterest() {
  const [activeTab, setActiveTab] = useState("requestSent");
  const { fetchUserData } = useAuth();
  const [loading, setLoading] = useState(true);
  const [profiles, setProfiles] = useState([]);
  const [data, setData] = useState({ reqSent: [], reqReceived: [] });
  const [error, setError] = useState(null);
  const [sortCriteria, setSortCriteria] = useState("");
  const [sortDirection, setSortDirection] = useState("asc");
  const [statusFilter, setStatusFilter] = useState("all");
  const profilesPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);
  const [refreshKey, setRefreshKey] = useState(0);
  const totalPages = Math.ceil(profiles?.length / profilesPerPage);

  const getProfilesForCurrentPage = () => {
    const startIdx = (currentPage - 1) * profilesPerPage;
    return profiles?.slice(startIdx, startIdx + profilesPerPage);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  const refreshData = () => {
    setRefreshKey((prevKey) => prevKey + 1);
  };

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      const route = "profile/myrequests";
      const fetchedData = await fetchUserData(route);
      if (!fetchedData || !fetchedData.reqSent || !fetchedData.reqReceived) {
        throw new Error("Invalid data format");
      }
      setData(fetchedData);
      setProfiles(fetchedData.reqSent);
    } catch (err) {
      console.error("Error fetching data:", err);
      setError("An error occurred while fetching data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

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

    if (status !== "all") {
      filteredProfiles = filteredProfiles.filter(
        (profile) => profile.status === status
      );
    }

    if (criteria) {
      filteredProfiles.sort((a, b) => {
        if (criteria === "age") {
          return sortDirection === "asc"
            ? calculateAge(a.userId.dateOfBirth) -
                calculateAge(b.userId.dateOfBirth)
            : calculateAge(b.userId.dateOfBirth) -
                calculateAge(a.userId.dateOfBirth);
        } else if (criteria === "height") {
          return sortDirection === "asc"
            ? calculateHeightInInches(a.userId) -
                calculateHeightInInches(b.userId)
            : calculateHeightInInches(b.userId) -
                calculateHeightInInches(a.userId);
        }
        return 0;
      });
    }
    setProfiles(filteredProfiles);
  };

  const switchTab = (tab) => {
    setActiveTab(tab);
    setProfiles(tab === "requestSent" ? data.reqSent : data.reqReceived);
    setCurrentPage(1);
  };

  function InterestImageContainer({ profile }) {
    const { updateData } = useAuth();

    const handlePhotoReq = async (profileId) => {
      try {
        let route = "profile/photoRequest";
        await updateData(route, profileId);
      } catch (error) {
        console.error("Error sending photo request:", error);
      }
    };

    if (!profile?.filesId?.photos || profile?.filesId?.photos.length === 0) {
      return (
        <div
          className="image-container"
          style={{ position: "relative", width: "100%", height: "14rem" }}
        >
          <img
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
              onClick={() => handlePhotoReq(profile?._id)}
            >
              Request now
            </button>
          </div>
        </div>
      );
    }

    return (
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
              zIndex: index === 0 ? 1 : 0,
              opacity: index === 0 ? 1 : 0,
              transition: "opacity 0.5s ease",
            }}
          />
        ))}
      </div>
    );
  }

  useEffect(() => {
    fetchData();
  }, [refreshKey]);

  if (loading) {
    return <div className="profileContainer">Loading...</div>;
  }

  return (
    <div className="profileContainer">
      <div className="profileListHeader">
        <div className="pagetitle">My Interests</div>
        <div className="filters">
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
        </div>
      </div>

      <div className="row m-0 mb-1 p-0 bg-white">
        <div className="col-9 d-flex p-0">
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
        <div className="col-3 p-0 p-sm-2" style={{ alignContent: "center" }}>
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
        {getProfilesForCurrentPage().length === 0 ? (
          <div className="pagetitle text-center">No Profiles Found</div>
        ) : (
          getProfilesForCurrentPage().map((profile) => (
            <RequestCard
              key={profile._id}
              profile={profile?.userId}
              status={profile?.status}
              activeTab={activeTab}
              ProfileImagerender={InterestImageContainer}
            />
          ))
        )}
      </div>
      <div className="d-flex align-items-center justify-content-center mt-3">
        <button
          className="btn"
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          <FaChevronLeft />
        </button>
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            className={`btn rounded-circle px-3 fw-bold ${
              currentPage === index + 1 ? "btn-danger text-white" : "bg-white"
            }`}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        <button
          className="btn"
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
}

export default MyInterest;
