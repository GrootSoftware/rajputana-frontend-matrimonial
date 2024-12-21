import React from "react";
import styles from "./Profile.module.css";
import logo from "../../../assets/images/logo.png";
const ProfileHeader = () => {
  return (
    <div className={styles.profileHeader}>
      <div className={styles.relative}>
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
