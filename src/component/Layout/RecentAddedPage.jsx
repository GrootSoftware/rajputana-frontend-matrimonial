import React, { useState } from "react";
import RecentAddedPageCss from "./RecentAddedPage.module.css";
import profile from "../../assets/images/profile.png";
import profile2 from "../../assets/images/profile2.png";
import ProfileBoxCard from "../Profile/ProfileList/ProfileBoxCard";

function RecentAddedPage() {
  const [profiles, setProfiles] = useState([
    {
      _id: "7002",
      martrId: "7002",
      HoroscopicId: { clan: "Solanki" },
      dateOfBirth: "1994-01-01",
      address: { city: "Bikaner", state: "Rajasthan" },
      profdetailsId: { qualifications: "Bachelors", class: "Middle Class" },
      familydetailsId: { occupation: "Teacher" },
      imageUrl: profile,
      status: "rejected",
    },

    {
      _id: "7004",
      martrId: "7004",
      HoroscopicId: { clan: "Ratore" },
      dateOfBirth: "1993-01-01",
      address: { city: "Jodhpur", state: "Rajasthan" },
      profdetailsId: { qualifications: "Bachelors", class: "Business" },
      familydetailsId: { occupation: "Architect" },
      imageUrl: profile2,
      status: "accepted",
    },
  ]);

  // Dummy image render function
  const ProfileImagerender = ({ profile }) => {
    return (
      <img
        src={profile.imageUrl} // Using the profile's imageUrl property
        className="img-fluid m-auto"
        alt="Profile picture"
        style={{
          width: "14rem",
          height: "14rem",
          objectFit: "cover",
        }}
      />
    );
  };

  return (
    <div
      className={RecentAddedPageCss.container}
      style={{ overflowY: "scroll" }}
    >
      <div className={RecentAddedPageCss.header}>
        <p className={RecentAddedPageCss.mainTitle}>Recent Added Profile</p>
        <div className={RecentAddedPageCss.divider}></div>
      </div>

      <div className="row m-0 p-0">
        {profiles.length === 0 ? (
          <div>No Profiles Available</div>
        ) : (
          profiles.map((profile) => (
            <ProfileBoxCard
              key={profile._id}
              profile={profile}
              ProfileImagerender={ProfileImagerender} // Passing the image render function
            />
          ))
        )}
      </div>
    </div>
  );
}

export default RecentAddedPage;
