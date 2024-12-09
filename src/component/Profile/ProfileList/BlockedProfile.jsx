import React from "react";
import { useState } from "react";

import "./ShortListedProfile.css";
import ProfileCard from "./ProfileCard";

function BlockedProfile() {
  const [profiles, setProfiles] = useState([
    {
      id: 1,
      name: "Dron Rathore",
      age: "32 Years",
      height: "5ft 8in",
      imgSrc: "https://placehold.co/50x50",
      imgAlt: "Profile picture of Dron Rathore",
      matrimonyId: "8647",
    },
    {
      id: 2,
      name: "Aryan Singh",
      age: "29 Years",
      height: "5ft 10in",
      imgSrc: "https://placehold.co/50x50",
      imgAlt: "Profile picture of Aryan Singh",
      matrimonyId: "8648",
    },
  ]);

  const handleDelete = (id) => {
    // Filter out the profile with the given id
    const updatedProfiles = profiles.filter((profile) => profile.id !== id);
    setProfiles(updatedProfiles);
  };

  if (profiles.length === 0) {
    return (
      <div className="profileList-header">
        <div>Blocked Profile ({profiles.length})</div>
        <div className="filters">
          <div className="filter-item">
            <span>Age</span>
          </div>
          <div className="filter-item">
            <span>Height</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="profile-container">
      <div className="profileList-header">
        <div>Blocked Profile ({profiles.length})</div>
        <div className="filters">
          <div className="filter-item">
            <span>Age</span>
          </div>
          <div className="filter-item">
            <span>Height</span>
          </div>
        </div>
      </div>

      {profiles.map((profile) => (
        <ProfileCard profile={profile} handleDelete={handleDelete} />
      ))}
    </div>
  );
}

export default BlockedProfile;
