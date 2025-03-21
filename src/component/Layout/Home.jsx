// Home.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Banner from "./Banner";
import MatchMakingSection from "./MatchMakingSection";
import FeatureSection from "./FeatureSection";
import Footer from "./Footer";
import LandingPage from "./LandingPage";
import Testimonial from "./Testimonial";
import RecentAddedPage from "./RecentAddedPage";
import JourneyPage from "./JourneyPage";

function Home() {
  const handleSubmit = async (e) => {
    // e.preventDefault();
    // try {
    //   const response = await axios.post(
    //     "https://example.com/api/search",
    //     formData
    //   );
    //   console.log("API Response:", response.data);
    // } catch (error) {
    //   console.error("API Request Error:", error);
    // }
  };

  return (
    <>
      <Banner />
      <MatchMakingSection />
      <FeatureSection />
      <RecentAddedPage />
      <LandingPage />
<<<<<<< HEAD
      <Testimonial />
=======
      {/* <Testimonial /> */}
>>>>>>> 97ede3914175742e3e2e83c8205bfe6b386e310b
      <JourneyPage />
      <Footer />
    </>
  );
}

export default Home;
