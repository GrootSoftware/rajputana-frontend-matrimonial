import React, { useState } from "react";
import { Link } from "react-router-dom";

import { FaChevronLeft, FaChevronRight, FaChevronDown } from "react-icons/fa";
import RequestCard from "../Profile/ProfileList/RequestCard";
import style from "../../component/Profile/Forms/Form.module.css";
import styles from "../Profile/ProfileComp/Profile.module.css";
import Demoimg from "../../assets/images/agrawal.png";

import Profilenavbar from "../Profile/ProfileComp/Profilenavbar";
import Footer from "./Footer";

const SearchPage = () => {
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
      status: "null",
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
      status: "null",
    },
    {
      id: "121454",
      imageUrl: Demoimg,
      clan: "Rajputs",
      age: "28",
      location: "Delhi",
      education: "Masters",
      occupation: "Doctor",
      class: "Professional",
      status: "null",
    },
    {
      id: "12548",
      imageUrl: Demoimg,
      clan: "Rajputs",
      age: "28",
      location: "Delhi",
      education: "Masters",
      occupation: "Doctor",
      class: "Professional",
      status: "null",
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

  const [searchName, setSearchName] = useState("");
  const [lookingFor, setLookingFor] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");

  // Search handler
  const handleSearch = () => {
    console.log("Searching for:", {
      name: searchName,
      lookingFor,
      gender,
      age,
    });
  };

  return (
    <div style={{ backgroundColor: "rgba(248, 235, 210, 1)" }}>
      <Profilenavbar />
      <div className={`${styles.Container} p-4 mt-2"`}>
        <div className="bg-white p-4 shadow">
          <div className="row g-1">
            <div className="col-md-4">
              <input
                type="text"
                className="form-control"
                placeholder="Search name or ID"
                value={searchName}
                onChange={(e) => setSearchName(e.target.value)}
              />
            </div>
            <div className="col-md-4">
              <input
                type="text"
                className="form-control"
                placeholder="Looking for?"
                value={lookingFor}
                onChange={(e) => setLookingFor(e.target.value)}
              />
            </div>
            <div className="col-md-4 d-flex gap-2">
              <select
                className="form-select"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              <select
                className="form-select"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              >
                <option value="">Age</option>
                <option value="18-25">18-25</option>
                <option value="26-35">26-35</option>
                <option value="36-45">36-45</option>
              </select>
            </div>
          </div>
          <div className="text-end mt-2">
            <Link to="/advanced-search" className="text-danger">
              Advance search?
            </Link>
          </div>
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

        <div className="row mt-2">
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
