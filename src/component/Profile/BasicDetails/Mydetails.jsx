import React from "react";

import BasicInfo from "./BasicInfo";
import ReligiousDetails from "./ReligiousDetails";
import Educationinfo from "./Educationinfo";
import PaternalSideDetails from "./PaternalSideDetails";
import FamilyInfo from "./FamilyInfo";
import ImagesAndDocuments from "./ImagesAndDocuments";

import FeatureSection from "../../Layout/FeatureSection";

// import MaternalInfo from "./MaternalInfo";
// import PrefrenceDetails from "./PrefrenceDetails";
// import AboutmeInfo from "./AboutmeInfo";

function Mydetails() {
  return (
    <>
      <BasicInfo />
      <ReligiousDetails />
      <FamilyInfo />
      <Educationinfo />
      <ImagesAndDocuments />
      <PaternalSideDetails />
      {/* <MaternalInfo /> */}
      {/* <PrefrenceDetails /> */}
      {/* <AboutmeInfo /> */}
      {/* <FeatureSection /> */}
    </>
  );
}

export default Mydetails;
