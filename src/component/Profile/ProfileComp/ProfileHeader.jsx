import React, { useState, useEffect } from "react";
import styles from "./Profile.module.css";
import { useAuth } from "../../Layout/AuthContext";

import { SlPrinter } from "react-icons/sl";

const ProfileHeader = () => {
  const { fetchUserData } = useAuth();
  const [profile, setProfile] = useState(
    "https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="
  ); // Initialize as null to check loading state

  const fetchData = async () => {
    try {
      const route = "profile";
      const Data = await fetchUserData(route);

      console.log("Fetched profile Data:", JSON.stringify(Data));

      const profileUrl = Data?.userProfile?.url
        ? Data.userProfile.url
        : "https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=";

      console.log("Constructed Profile URL:", profileUrl);
      setProfile(profileUrl);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Render nothing until profile is set
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
