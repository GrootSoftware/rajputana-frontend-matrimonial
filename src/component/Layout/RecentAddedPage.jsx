import React from "react";
import RecentAddedPageCss from "./RecentAddedPage.module.css";
import profile from "../../assets/images/profile.png";
import profile2 from "../../assets/images/profile2.png";
import ProfileBoxCard from "../Profile/ProfileList/ProfileBoxCard";
import { useState } from "react";

function RecentAddedPage() {
  const [profiles, setProfiles] = useState([
    {
      id: "7002",
      imageUrl: profile,
      clan: "Solanki",
      age: "29",
      location: "Pune",
      education: "Bachelors",
      occupation: "Teacher",
      class: "Middle Class",
      status: "rejected",
    },

    {
      id: "7004",
      imageUrl: profile2,
      clan: "Ratore",
      age: "30",
      location: "Chennai",
      education: "Bachelors",
      occupation: "Architect",
      class: "Business",
      status: "accepted",
    },
  ]);

  return (
    <div className={RecentAddedPageCss.container}>
      <div className={RecentAddedPageCss.header}>
        <p className={RecentAddedPageCss.mainTitle}>Recent Added Profile</p>
        <div className={RecentAddedPageCss.divider}></div>
      </div>

      <div className="row m-0 p-0">
        {profiles.length === 0 ? (
          <div>No Blocked Profiles</div>
        ) : (
          profiles.map((profile) => (
            <ProfileBoxCard key={profile.id} profile={profile} />
          ))
        )}
      </div>
    </div>
  );
}

export default RecentAddedPage;
