import React, { useState, useEffect } from "react";
import styles from "./Profile.module.css";
import { useAuth } from "../../Layout/AuthContext";

import { SlPrinter } from "react-icons/sl";

const ProfileHeader = () => {
  const { profile, fetchprofile } = useAuth();

  useEffect(() => {
    fetchprofile();
  }, []);

  if (!profile) {
    return <></>;
  }

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
