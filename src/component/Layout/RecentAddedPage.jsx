import React from "react";
import RecentAddedPageCss from "./RecentAddedPage.module.css";
import logobg from "../../assets/images/herobg.png";

function RecentAddedPage() {
  return (
    <div className={RecentAddedPageCss.container}>
      <div className={RecentAddedPageCss.header}>
        <p className={RecentAddedPageCss.mainTitle}>Recent Added Profile</p>
        <div className={RecentAddedPageCss.divider}></div>
      </div>

      <div className={RecentAddedPageCss.profileGrid}>
        {profiles.map((profile, index) => (
          <div key={index} className={RecentAddedPageCss.profileCard}>
            <img
              src={logobg}
              alt="Profile"
              className={RecentAddedPageCss.customFrame}
            />
            <div className={RecentAddedPageCss.profileInfo}>
              <h3 className={RecentAddedPageCss.profileName}>{profile.name}</h3>
              <p className={RecentAddedPageCss.profileLocation}>
                {profile.location}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentAddedPage;

var profiles = [
  {
    name: "Bijendra Rajawat",
    location: "Chouhan, Rajasthan",
    imageUrl: "../../assets/images/herobg.png",
    altText: "profile",
  },
  {
    name: "Bijendra Rajawat",
    location: "Chouhan, Rajasthan",
    imageUrl: "https://placehold.co/300x400",
    altText: "profile",
  },
  {
    name: "Bijendra Rajawat",
    location: "Chouhan, Rajasthan",
    imageUrl: "https://placehold.co/300x400",
    altText: "A man in traditional attire with a turban",
  },
  {
    name: "Bijendra Rajawat",
    location: "Chouhan, Rajasthan",
    imageUrl: "https://placehold.co/300x400",
    altText: "A man in traditional attire with a turban",
  },
];
