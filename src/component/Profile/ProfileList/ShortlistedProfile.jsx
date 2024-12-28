import React, { useState } from "react";
import "./ShortListedProfile.css";
import ProfileCard from "./ProfileCard";
import { FaChevronDown } from "react-icons/fa";
import profile from "../../../assets/images/profile.png";

const ShortlistedProfile = () => {
  const [sortCriteria, setSortCriteria] = useState("");
  const [profiles, setProfiles] = useState([
    {
      id: "7000",
      imageUrl: profile,
      clan: "Rathors",
      age: "31",
      location: "Mumbai",
      education: "Bachelors",
      occupation: "Engineer",
      class: "Business",
      status: "pending",
      name: "Pratap singh Ratore",
    },
    {
      id: "7001",
      imageUrl: profile,
      clan: "solanki",
      age: "28",
      location: "Delhi",
      education: "Masters",
      occupation: "Doctor",
      class: "Professional",
      status: "pending",
      name: "Pratap singh Ratore",
    },
    {
      id: "7002",
      imageUrl: profile,
      clan: "ratore",
      age: "29",
      location: "Pune",
      education: "Bachelors",
      occupation: "Teacher",
      class: "Middle Class",
      status: "rejected",
      name: "Pratap singh Ratore",
    },
  ]);

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

  const handleDelete = (id) => {
    // Filter out the profile with the given id
    const updatedProfiles = profiles.filter((profile) => profile.id !== id);
    setProfiles(updatedProfiles);
  };

  if (profiles.length === 0) {
    return (
      <div className="profileListHeader">
        <div>Short Listed Profiles</div>
        <div className="filters">
          <div
            className="filterItem"
            onClick={() => sortProfiles("age")} // Sort by age on click
          >
            <span>Age</span>
            <span>
              <FaChevronDown />
            </span>
          </div>
          <div
            className="filterItem"
            onClick={() => sortProfiles("height")} // Sort by height on click
          >
            <span>Height</span>
            <span>
              <FaChevronDown />
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="profileContainer">
      <div className="profileListHeader">
        <div className="pagetitle">Short Listed Profiles</div>
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

      {profiles.map((profile) => (
        <ProfileCard profile={profile} handleDelete={handleDelete} />
      ))}
    </div>
  );
};

export default ShortlistedProfile;
