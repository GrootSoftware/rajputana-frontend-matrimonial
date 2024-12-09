import React from "react";
import "./Profile.css";
import logo from "../../../assets/images/logo.png";
const ProfileHeader = () => {
  return (
    <div className="profile-header">
      <div className="relative">
        <img
          src={logo}
          alt="Profile"
          className="rounded-full border-4 border-white"
        />
      </div>
    </div>
  );
};

export default ProfileHeader;
