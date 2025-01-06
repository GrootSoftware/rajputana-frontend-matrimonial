import React, { useState } from "react";
import "./ShortListedProfile.css";
import RequestCard from "./RequestCard";
import { FaChevronLeft, FaChevronRight, FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import Demoimg from "../../../assets/images/agrawal.png";

function PhotoRequest() {
  const [activeButton, setActiveButton] = useState("requestSent");
  const [sortCriteria, setSortCriteria] = useState("");
  const [profiles, setProfiles] = useState([
    {
      id: "7000",
      imageUrl: Demoimg,
      clan: "Rathors",
      age: "31",
      location: "Mumbai",
      education: "Bachelors",
      occupation: "Engineer",
      class: "Business",
      status: "pending",
    },
    {
      id: "7001",
      imageUrl: Demoimg,
      clan: "Rajputs",
      age: "28",
      location: "Delhi",
      education: "Masters",
      occupation: "Doctor",
      class: "Professional",
      status: "pending",
    },
    {
      id: "7002",
      imageUrl: Demoimg,
      clan: "Guptas",
      age: "29",
      location: "Pune",
      education: "Bachelors",
      occupation: "Teacher",
      class: "Middle Class",
      status: "rejected",
    },
    {
      id: "7003",
      imageUrl: Demoimg,

      clan: "Sharmas",
      age: "34",
      location: "Bangalore",
      education: "PhD",
      occupation: "Scientist",
      class: "Upper Class",
      status: "accepted",
    },
    {
      id: "7004",
      imageUrl: Demoimg,
      clan: "Mehtas",
      age: "30",
      location: "Chennai",
      education: "Bachelors",
      occupation: "Architect",
      class: "Business",
      status: "accepted",
    },
    {
      id: "7005",
      imageUrl: Demoimg,
      clan: "Agarwals",
      age: "32",
      location: "Hyderabad",
      education: "MBA",
      occupation: "Entrepreneur",
      class: "Upper Middle Class",
      status: "accepted",
    },
    // Add more profiles if needed
    {
      id: "7000",
      imageUrl: Demoimg,
      clan: "Rathors",
      age: "31",
      location: "Mumbai",
      education: "Bachelors",
      occupation: "Engineer",
      class: "Business",
      status: "pending",
    },
    {
      id: "7001",
      imageUrl: Demoimg,
      clan: "Rajputs",
      age: "28",
      location: "Delhi",
      education: "Masters",
      occupation: "Doctor",
      class: "Professional",
      status: "pending",
    },
    {
      id: "7002",
      imageUrl: Demoimg,
      clan: "Guptas",
      age: "29",
      location: "Pune",
      education: "Bachelors",
      occupation: "Teacher",
      class: "Middle Class",
      status: "rejected",
    },
    {
      id: "7003",
      imageUrl: Demoimg,
      clan: "Sharmas",
      age: "34",
      location: "Bangalore",
      education: "PhD",
      occupation: "Scientist",
      class: "Upper Class",
      status: "accepted",
    },
    {
      id: "7004",
      imageUrl: Demoimg,
      clan: "Mehtas",
      age: "30",
      location: "Chennai",
      education: "Bachelors",
      occupation: "Architect",
      class: "Business",
      status: "accepted",
    },
    {
      id: "7005",
      imageUrl: Demoimg,
      clan: "Agarwals",
      age: "32",
      location: "Hyderabad",
      education: "MBA",
      occupation: "Entrepreneur",
      class: "Upper Middle Class",
      status: "accepted",
    },
  ]);

  const profilesPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(profiles.length / profilesPerPage);

  const getProfilesForCurrentPage = () => {
    const startIdx = (currentPage - 1) * profilesPerPage;
    return profiles.slice(startIdx, startIdx + profilesPerPage);
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

  // Function to handle button click
  const handleShowData = (button) => {
    setActiveButton(button);
  };

  // Sorting function based on criteria (Age or Height)
  const sortProfiles = (criteria) => {
    let sortedProfiles = [...profiles];
    if (criteria === "age") {
      sortedProfiles = sortedProfiles.sort((a, b) => a.age - b.age);
    } else if (criteria === "height") {
      sortedProfiles = sortedProfiles.sort((a, b) => a.height - b.height);
    }
    setProfiles(sortedProfiles);
    setSortCriteria(criteria); // Update sort criteria
  };

  return (
    <div className="profileContainer">
      <div className="profileListHeader">
        <div className="pagetitle">Request</div>
        <div className="filters">
          <div
            className="filterItem d-flex justify-content-between"
            onClick={() => sortProfiles("age")} // Sort by age on click
          >
            <span>Age</span>
            <span>
              <FaChevronDown />
            </span>
          </div>
          <div
            className="filterItem d-flex justify-content-between"
            onClick={() => sortProfiles("height")} // Sort by height on click
          >
            <span>Height</span>
            <span>
              <FaChevronDown />
            </span>
          </div>
        </div>
      </div>

      <div className="row m-0 mb-1 p-0 d-flex justify-content-between bg-white">
        <div className="col-9 d-flex p-0">
          <div
            onClick={() => handleShowData("requestSent")}
            style={{
              backgroundColor:
                activeButton === "requestSent" ? "#991c1c" : "transparent",
              color: activeButton === "requestSent" ? "white" : "black",
              cursor: "pointer",
              padding: "0.6rem 1.5rem",
              alignContent: "center",
              fontFamily: "Open Sans, sans-serif",
              fontWeight: "600",
              fontSize: "clamp(12px, 2vw, 14px)",
            }}
          >
            Request Sent
          </div>
          <div
            onClick={() => handleShowData("requestReceived")}
            style={{
              backgroundColor:
                activeButton === "requestReceived" ? "#991c1c" : "transparent",
              color: activeButton === "requestReceived" ? "white" : "black",
              cursor: "pointer",
              padding: "0.7rem 1.5rem",
              alignContent: "center",
              fontFamily: "Open Sans, sans-serif",
              fontWeight: "600",
              fontSize: "clamp(12px, 2vw, 14px)",
            }}
          >
            Request Received
          </div>
        </div>
        <div className="col-3 p-0 p-sm-2" style={{ alignContent: "center" }}>
          <select
            class="form-select form-select-lg m-0"
            style={{
              color: "rgba(97, 97, 97, 1)",
              borderRadius: "0%",
              border: "1px solid rgba(97, 97, 97, 1)",
              padding: "0.7rem 1.5rem",
              fontFamily: "Open Sans, sans-serif",
              fontWeight: "600",
              fontSize: "clamp(12px, 2vw, 14px)",
              outline: "none",
            }}
            aria-label=".form-select-lg example"
          >
            <option selected>
              <div className="d-flex justify-content-between">
                <span className="">All request</span>
                <span>
                  <FaChevronDown />
                </span>
              </div>{" "}
            </option>
            <option value="1">Pending</option>
            <option value="2">Accepted</option>
            <option value="3">Rejected</option>
          </select>
        </div>
      </div>

      <div
        className="row m-0 p-0"
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {getProfilesForCurrentPage().length === 0 ? (
          <div>No Profiles</div>
        ) : (
          getProfilesForCurrentPage().map((profile) => (
            <RequestCard
              key={profile.id}
              profile={profile}
              handlecheck={() =>
                setProfiles(profiles.filter((p) => p.id !== profile.id))
              }
            />
          ))
        )}
      </div>

      {/* Pagination Buttons */}
      <div className="d-flex align-items-center justify-content-center">
        <div className="d-flex align-items-center gap-2">
          {/* Left arrow button */}
          <button
            className="btn"
            onClick={handlePrevPage}
            disabled={currentPage === 1}
          >
            <FaChevronLeft />
          </button>

          {/* Numbered buttons */}
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              className={`btn rounded-circle px-3 fw-bold ${
                currentPage === index + 1 ? "btn-danger text-white" : "bg-white"
              }`}
              onClick={() => handlePageClick(index + 1)}
            >
              {index + 1}
            </button>
          ))}

          {/* Right arrow button */}
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
  );
}

export default PhotoRequest;
