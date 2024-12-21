import React, { useState } from "react";
import "./ShortListedProfile.css";
import ProfileCard from "./ProfileCard";
import { FaChevronDown } from "react-icons/fa";
import Demoimg from "../../../assets/images/agrawal.png";

const ShortlistedProfile = () => {
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
        <div>Short Listed Profiles ({profiles.length})</div>
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

      {profiles.map((profile) => (
        <ProfileCard profile={profile} handleDelete={handleDelete} />
      ))}
    </div>
  );
};

export default ShortlistedProfile;
