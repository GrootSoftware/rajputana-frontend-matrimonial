import React, { useState } from "react";
import "./ShortListedProfile.css";
import RequestCard from "./RequestCard";
import { FaChevronLeft, FaChevronRight, FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import Demoimg from "../../../assets/images/agrawal.png";

function MyInterest() {
  const [activeButton, setActiveButton] = useState("requestSent");
  const [sortCriteria, setSortCriteria] = useState(""); // State for sorting criteria
  const [profiles, setProfiles] = useState([
    {
      id: "7000",
      imageUrl: Demoimg,
      clan: "Rathors",
      age: 31,
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
      age: 28,
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
      age: 29,
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
      age: 34,
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
      age: 30,
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
      age: 32,
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
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  const handleShowData = (button) => {
    setActiveButton(button);
  };

  const sortProfiles = (criteria) => {
    const sortedProfiles = [...profiles].sort((a, b) => {
      if (criteria === "age") return a.age - b.age;
      return 0; // Add more criteria as needed
    });
    setProfiles(sortedProfiles);
    setSortCriteria(criteria);
  };

  return (
    <div className="profileContainer">
      <div className="profileListHeader">
        <div className="pagetitle">My Interests</div>
        <div className="filters">
          <div
            className="filterItem d-flex justify-content-between"
            onClick={() => sortProfiles("age")}
          >
            <span>Age</span>
            <span>
              <FaChevronDown />
            </span>
          </div>
        </div>
      </div>

      <div className="row m-0 mb-1 p-0 d-flex justify-content-between bg-white">
        <div className="col-4 col-sm-5 d-flex p-0">
          <div
            onClick={() => handleShowData("requestSent")}
            style={{
              backgroundColor:
                activeButton === "requestSent" ? "#991c1c" : "transparent",
              color: activeButton === "requestSent" ? "white" : "black",
              cursor: "pointer",
              padding: "0.7rem 1.5rem",

              fontFamily: "Open Sans, sans-serif",
              fontWeight: "600",
              fontSize: "1rem",
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

              fontFamily: "Open Sans, sans-serif",
              fontWeight: "600",
              fontSize: "1rem",
            }}
          >
            Request Received
          </div>
        </div>

        {/* <div className="col-sm-2">
          <div className="dropdown">
            <button
              className="btn btn-primary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              style={{ color: "black" }}
            >
              <FaChevronDown />
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <Link className="dropdown-item" to="#">
                Action 1
              </Link>
              <Link className="dropdown-item" to="#">
                Action 2
              </Link>
              <Link className="dropdown-item" to="#">
                Action 3
              </Link>
            </div>
          </div>
        </div> */}
      </div>

      <div className="row m-0 p-0">
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

      <div className="d-flex align-items-center justify-content-center">
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
                currentPage === index + 1 ? "btn-danger text-white" : "bg-white"
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
  );
}

export default MyInterest;
