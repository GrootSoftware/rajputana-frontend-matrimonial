import React from "react";
import styles from "./Profile.module.css";
import profile from "../../../assets/images/profile.png";
const ProfileHeader = () => {
  return (
    <div className={`${styles.profileHeader}`}>
      <div className={styles.relative}>
        <img
          src={profile}
          alt="Profile"
          className="rounded-full border-4 border-white"
        />
      </div>
    </div>
  );
};

export default ProfileHeader;
