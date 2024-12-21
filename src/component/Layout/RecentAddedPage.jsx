import React from "react";
import RecentAddedPageCss from "./RecentAddedPage.module.css";
import logobg from "../../assets/images/herobg.png";
import ProfileBoxCard from "../Profile/ProfileList/ProfileBoxCard";
import { useState } from "react";

function RecentAddedPage() {
  const [profiles, setProfiles] = useState([
    {
      id: "7002",
      imageUrl: logobg,
      clan: "Guptas",
      age: "29",
      location: "Pune",
      education: "Bachelors",
      occupation: "Teacher",
      class: "Middle Class",
      status: "rejected",
    },

    {
      id: "7004",
      imageUrl: logobg,
      clan: "Mehtas",
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

      <div className="row">
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
