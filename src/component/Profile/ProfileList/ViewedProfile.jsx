import React, { useState } from "react";
import "./ShortListedProfile.css";
import ProfileBoxCard from "./ProfileBoxCard";
import { FaChevronDown } from "react-icons/fa";
import Demoimg from "../../../assets/images/agrawal.png";

function ViewedProfile() {
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

  // const handleDelete = (id) => setProfiles(profiles.filter((p) => p.id !== id));

  const handlecheck = (id) => {
    setProfiles(profiles.filter((profile) => profile.id !== id));
  };

  return (
    <div className="profileContainer">
      <div className="profileListHeader">
        <div className="pagetitle">Viewed profile</div>
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

      <div className="row mb-2 m-0 p-0">
        {profiles.length === 0 ? (
          <div>No Blocked Profiles</div>
        ) : (
          profiles.map((profile) => (
            <ProfileBoxCard
              key={profile.id}
              profile={profile}
              // handleDelete={() => handleDelete(profile.id)}
              handlecheck={handlecheck}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default ViewedProfile;
