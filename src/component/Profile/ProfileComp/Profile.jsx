import React from "react";
import { useState } from "react";

import "./Profile.css";

import ProfileHeader from "./ProfileHeader";
import ProfileInfoHeader from "./ProfileInfoHeader";
import Sidebar from "./Sidebar";

import Mydetails from "../BasicDetails/Mydetails";
import BasicDetails from "./BasicDetails";
import BlockedProfile from "../ProfileList/BlockedProfile";
import MyInterest from "../ProfileList/MyInterest";
import PeopleVisited from "../ProfileList/PeopleVisited";
import PhotoRequest from "../ProfileList/PhotoRequest";
import ViewedProfile from "../ProfileList/ViewedProfile";
import ShortlistedProfile from "../ProfileList/ShortlistedProfile";
import FeatureSection from "../../Layout/FeatureSection";
import Footer from "../../Layout/Footer";

const Profile = () => {
  const [activeContent, setActiveContent] = useState("basicdetails");

  const renderContent = () => {
    switch (activeContent) {
      case "myDetails":
        return <Mydetails />;
      case "shortlisted":
        return <ShortlistedProfile />;
      case "blocked":
        return <BlockedProfile />;
      case "viewed":
        return <ViewedProfile />;
      case "visited":
        return <PeopleVisited />;
      case "interest":
        return <MyInterest />;
      case "photo":
        return <PhotoRequest />;
      default:
        return <BasicDetails />;
    }
  };
  return (
    <div className="min-h-screen">
      {/* <Profilenavbar /> */}
      <div className="container">
        <div className="min-h-screen bg-gray-100">
          <ProfileHeader />
          <ProfileInfoHeader />
          <Sidebar setActiveContent={setActiveContent} />
          <div className="content">        
            <div className="main-content">{renderContent()}</div>
          </div>
        </div>
      </div>

      <FeatureSection />
      <Footer />
    </div>
  );
};

export default Profile;
