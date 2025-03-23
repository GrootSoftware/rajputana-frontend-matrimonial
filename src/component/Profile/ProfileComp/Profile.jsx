import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import style from "./Profile.module.css";
import { AiOutlineRight } from "react-icons/ai";

import ProfileHeader from "./ProfileHeader";
import ProfileInfoHeader from "./ProfileInfoHeader";
import Sidebar from "./Sidebar";
import Profilenavbar from "./Profilenavbar";

import Mydetails from "../BasicDetails/Mydetails";
import BasicDetails from "../BasicDetails/BasicDetails";

import MyInterest from "../ProfileList/MyInterest";
import PeopleVisited from "../ProfileList/PeopleVisited";
import PhotoRequest from "../ProfileList/PhotoRequest";
import ViewedProfile from "../ProfileList/ViewedProfile";
import ShortlistedProfile from "../ProfileList/ShortlistedProfile";
import FeatureSection from "../../Layout/FeatureSection";
import Footer from "../../Layout/Footer";

const Profile = () => {
  const [activeContent, setActiveContent] = useState("myDetails");

  const renderContent = () => {
    switch (activeContent) {
      case "myDetails":
        return <Mydetails />;
      case "shortlisted":
        return <ShortlistedProfile />;
      case "viewed":
        return <ViewedProfile />;
      case "visited":
        return <PeopleVisited />;
      case "interest":
        return <MyInterest />;
      case "request":
        return <PhotoRequest />;
      // default:
      //   return <BasicDetails />;
      default:
        return <Mydetails />;
    }
  };
  return (
    <div className={style.minhScreen}>
      <Profilenavbar />
      <div className={style.Container}>
        <div className={style.routerpathtext}>
          <Link to="/home" style={{ textDecoration: "none", color: "inherit" }}>
            Home
          </Link>
          <AiOutlineRight />
          <span>My Profile</span>
        </div>
        <div className={`${style.minhScreen} bg-gray-100}`}>
          <ProfileInfoHeader />
          <Sidebar setActiveContent={setActiveContent} />
          <div className={style.content}>
            <div className={style.mainContent}>{renderContent()}</div>
          </div>
        </div>
      </div>
      <FeatureSection />
      <Footer />
    </div>
  );
};

export default Profile;

// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import "./Profile.css";
// import ProfileHeader from "./ProfileHeader";
// import ProfileInfoHeader from "./ProfileInfoHeader";
// import Sidebar from "./Sidebar";

// import MyDetails from "../BasicDetails/Mydetails";
// import BasicDetails from "../BasicDetails/BasicDetails";
// import BlockedProfile from "../ProfileList/BlockedProfile";
// import MyInterest from "../ProfileList/MyInterest";
// import PeopleVisited from "../ProfileList/PeopleVisited";
// import PhotoRequest from "../ProfileList/PhotoRequest";
// import ViewedProfile from "../ProfileList/ViewedProfile";
// import ShortlistedProfile from "../ProfileList/ShortlistedProfile";
// import FeatureSection from "../../Layout/FeatureSection";
// import Footer from "../../Layout/Footer";

// const Profile = () => {
//   return (
//     <div className="min-h-screen">
//       <div className="container">
//         <div className="min-h-screen bg-gray-100">
//           <ProfileHeader />
//           <ProfileInfoHeader />
//           <div className="layout">
//             <Sidebar />
//             <div className="content">
//               <Routes>

//                 <Route path="/profile/my-details" element={<MyDetails />} />
//                 <Route
//                   path="/profile/shortlisted"
//                   element={<ShortlistedProfile />}
//                 />
//                 <Route path="/profile/blocked" element={<BlockedProfile />} />
//                 <Route path="/profile/viewed" element={<ViewedProfile />} />
//                 <Route path="/profile/visited" element={<PeopleVisited />} />
//                 <Route path="/profile/interest" element={<MyInterest />} />
//                 <Route path="/profile/photo" element={<PhotoRequest />} />
//                 <Route path="/profile/*" element={<BasicDetails />} />
//               </Routes>
//             </div>
//           </div>
//         </div>
//       </div>
//       <FeatureSection />
//       <Footer />
//     </div>
//   );
// };

// export default Profile;
