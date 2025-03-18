import React, { useEffect } from "react";
import styles from "./Profile.module.css";
import { useAuth } from "../../Layout/AuthContext";
import { SlPrinter } from "react-icons/sl"; // Import print icon

const ProfileHeader = () => {
  const { profile, fetchprofile } = useAuth();

  useEffect(() => {
    fetchprofile();
  }, []);

  if (!profile) {
    return null;
  }

  return (
    <div className={`${styles.profileHeader} relative`}>
      {/* Print Button with Icon */}
      <button
        onClick={() => window.print()}
        className="absolute top-2 right-2 bg-white p-1 rounded-full shadow-md hover:bg-gray-200 transition"
      >
        <SlPrinter className="text-gray-600 text-xl" /> print
      </button>

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
