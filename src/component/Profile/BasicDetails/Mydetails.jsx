import React from "react";

import BasicInfo from "./BasicInfo";
import ReligiousDetails from "./ReligiousDetails";
import Educationinfo from "./Educationinfo";
import PhysicalDetails from "./PhysicalDetails";
import AboutmeInfo from "./AboutmeInfo";
import MaternalInfo from "./MaternalInfo";
import FamilyInfo from "./FamilyInfo";
import PrefrenceDetails from "./PrefrenceDetails";
// import ImagesAndDocuments from "./ImagesAndDocuments";

function Mydetails() {
  return (
    <>
      <BasicInfo />
      <ReligiousDetails />
      <Educationinfo />
      <PhysicalDetails />
      <FamilyInfo />
      <MaternalInfo />
      <PrefrenceDetails />
      <AboutmeInfo />
      {/* <ImagesAndDocuments /> */}
    </>
  );
}

export default Mydetails;
