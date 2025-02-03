// WhoWeAre.jsx
import React from "react";
import style from "../Profile/ProfileComp/Profile.module.css";
import { Link } from "react-router-dom";

import Profilenavbar from "../Profile/ProfileComp/Profilenavbar";
import Footer from "./Footer";
import StoryCard from "./StoryCard";

import imgSrc from "../../assets/images/sectionImg.png";
import { AiOutlineRight } from "react-icons/ai";
import { Features, VVIPSection } from "./FeatureSection";

function About() {
  const storyData = [
    {
      text: "At Rajput Parinay, we understand the importance of preserving Rajput pride and customs, which is why we've created a trusted platform tailored specifically to your community's unique needs.",
      imageSrc: require("../../assets/images/imageAbout.jpg"),
    },
    {
      text: "We bring Rajput families together, fostering connections rooted in tradition and respect.",
      imageSrc: require("../../assets/images/imageAbout2.jpg"),
    },
  ];

  var vvipData = {
    title: "Start Your Journey to a Royal Match Today.",
    description:
      "Join Rajput Matches and embark on a journey to find your perfect partner within a community that respects your legacy and honors your privacy. Let us guide you in finding a partner who complements your values, lifestyle, and heritage.",
    buttonText: "Join the Rajput Legacy",
  };

  const leftImage = require("../../assets/images/HHpratapimage.png");
  const rightImage = require("../../assets/images/royalimg.jpg");
  const title = "Our Legacy of Trust and Tradition";
  const paragraphs = [
    "The Rajput community has a long-standing legacy of honor, pride, and cultural richness. At Rajput Parinay, we aim to reflect these values by fostering a trustworthy environment where families can come together to find the perfect match.",
    "We believe that marriage is not just a union of two individuals but a bond between two families. With this philosophy, we ensure that every match we facilitate is built on shared respect and understanding.",
  ];

  const imageSrc = require("../../assets/images/royalimg2.jpg");
  const heading = "Why Choose Rajput Parinay?";

  const features = [
    {
      title: "Exclusively for the Rajput Community",
      description:
        "Our platform is tailored to the needs and preferences of Rajput families, making it easier to find matches within the community.",
    },
    {
      title: "Verified Profiles",
      description:
        "We prioritize your safety by ensuring every profile is thoroughly verified.",
    },
    {
      title: "Advanced Matchmaking",
      description:
        "Our platform uses intelligent algorithms to suggest compatible matches based on your preferences, including education, profession, lifestyle, and values.",
    },
    {
      title: "Respect for Traditions",
      description:
        "We understand the importance of Rajpust customs and ensure they are honored throughout the matchmaking process.",
    },
    {
      title: "Dedicated Support",
      description:
        "Our team is here to assist you at every step, ensuring a seamless experience.",
    },
  ];

  return (
    <>
      <div className={style.minhScreen}>
        <Profilenavbar />
        <div className={style.Container}>
          <div className={style.routerpathtext}>
            <Link
              to="/home"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Home
            </Link>
            <AiOutlineRight />
            {"  About Us"}
          </div>

          {/* Section */}
          <section className="mt-2 p-2 p-sm-2">
            <div
              className="fs-4 fw-bold mt-2 text-center text-sm-start"
              style={{
                fontSize: "clamp(1rem, 2vw, 1.5rem)", // Scales between 1rem and 1.5rem
                fontWeight: 500,
                fontFamily: "Open Sans, sans-serif",
                lineHeight: 2,
              }}
            >
              Who We Are
            </div>

            <div className="d-flex flex-column flex-md-row justify-content-md-center align-items-center mb-2 mt-3">
              <div
                className="text-center text-md-start"
                style={{
                  fontSize: "clamp(2rem, 4vw, 60px)", // Scales between 2rem and 60px
                  fontWeight: 400,
                  fontFamily: "Lustria, serif",
                  lineHeight: 1.5,
                  minWidth: "75%",
                }}
              >
                Celebrating Rajput Legacy,
                <br />
                Connecting Hearts
              </div>

              <div
                className="mt-2 text-center text-md-start"
                style={{
                  fontSize: "clamp(1.2rem, 1.5vw, 24px)",
                  fontWeight: 400,
                  fontFamily: "Lustria, serif",
                  lineHeight: "clamp(1.5, 1.2, 1.5)",
                }}
              >
                Dedicated to uniting Rajput families through meaningful matches,
                we honor tradition while embracing modern connections.
              </div>
            </div>
          </section>

          <div className="d-flex flex-wrap justify-content-between mt-2">
            <div className={`p-xl-0 p-2 ${style.storycard}`}>
              <img
                className="img-fluid"
                src={storyData[0].imageSrc || "default-image-path.jpg"}
                alt={storyData[0].text || "Story image"}
                style={{
                  width: "100%",
                }}
              />
              <p
                className="card-text mt-2 ps-sm-5 p-0"
                style={{
                  fontSize: "clamp(1rem, 2vw, 22px)",
                  fontWeight: 400,
                  fontFamily: "Open Sans, sans-serif",
                  lineHeight: 1.5,
                }}
              >
                {storyData[0].text || "No description available"}
              </p>
            </div>

            <div className={`p-xl-0 p-2 ${style.storycard}`}>
              <img
                className="img-fluid"
                src={storyData[1].imageSrc || "default-image-path.jpg"}
                alt={storyData[1].text || "Story image"}
                style={{
                  width: "100%",
                  objectFit: "cover",
                }}
              />
              <p
                className="card-text mt-2 ps-sm-5 p-0"
                style={{
                  fontSize: "clamp(1rem, 2vw, 22px)",
                  fontWeight: 400,
                  fontFamily: "Open Sans, sans-serif",
                  lineHeight: 1.5,
                }}
              >
                {storyData[1].text || "No description available"}
              </p>
            </div>
          </div>

          <div
            style={{
              backgroundColor: "rgba(248, 235, 210, 1)",
              marginTop: "3rem",
            }}
          >
            <img className="w-100" src={imgSrc} alt="join image" />
            <Features />
          </div>

          <LegacySection
            leftImage={leftImage}
            rightImage={rightImage}
            title={title}
            paragraphs={paragraphs}
          />

          <WhyChooseSection
            imageSrc={imageSrc}
            heading={heading}
            features={features}
          />
        </div>

        <VVIPSection
          title={vvipData.title}
          description={vvipData.description}
          buttonText={vvipData.buttonText}
        />
      </div>
      <Footer />
    </>
  );
}

export const WhyChooseSection = ({ imageSrc, heading, features }) => {
  return (
    <div className="container-fluid mt-4">
      <div className="row d-flex justify-content-between p-2 p-sm-0">
        {/* Image Section */}
        <div className="col-sm-6 p-2 text-center">
          <img
            alt="A traditional Rajput wedding scene with a bride and groom in traditional attire"
            className="img-fluid"
            src={imageSrc}
            style={{
              maxHeight: "auto",
              maxWidth: "100%",
              objectFit: "cover",
            }}
          />
        </div>

        {/* Content Section */}
        <div className="col-sm-6 content p-2 p-sm-3">
          <h1>{heading}</h1>
          {features.map((feature, index) => (
            <div key={index}>
              <div
                style={{
                  fontSize: "clamp(1rem, 3vw, 24px)", // Scales between 1rem and 1.5rem
                  fontWeight: 400,
                  fontFamily: "Lustria, serif",
                  lineHeight: 1.2,
                }}
              >
                {feature.title}
              </div>
              <p
                style={{
                  fontSize: "clamp(0.75rem, 2vw, 16px)", // Scales between 1rem and 1.5rem
                  fontWeight: 500,
                  fontFamily: "Open Sans, sans-serif",
                  lineHeight: 1.5,
                }}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

function ImageComponent({ src, altText }) {
  return (
    <div>
      <img src={src} alt={altText} style={{ width: "100%", height: "auto" }} />
    </div>
  );
}

export const LegacySection = ({ leftImage, rightImage, title, paragraphs }) => {
  return (
    <div className="container-fluid mt-3 ">
      <div className="row p-2 p-sm-0">
        {/* Left Image */}
        <div className="col-sm-2 text-center p-0 mb-2">
          <img
            alt="Illustration of a Rajput warrior in traditional attire"
            className="img"
            src={leftImage}
            style={{ maxHeight: "250px", maxWidth: "100%" }}
          />
        </div>

        {/* Text Content */}
        <div className="col-sm-6">
          <div
            className="title"
            style={{
              fontSize: "clamp(1.2rem, 5vw, 60px)", // Scales between 1rem and 1.5rem
              fontWeight: 400,
              fontFamily: "Lustria, serif",
              lineHeight: 1.2,
            }}
          >
            {title}
          </div>
          <div className="text-content">
            {paragraphs.map((paragraph, index) => (
              <p
                key={index}
                style={{
                  fontSize: "clamp(0.7rem, 3vw, 1.5rem)", // Scales between 1rem and 1.5rem
                  fontWeight: 400,
                  fontFamily: "Open Sans, sans-serif",
                  lineHeight: 1.2,
                }}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div className="col-12 col-sm-4 text-center">
          <img
            alt="Historical photograph of a Rajput wedding ceremony"
            className="image-right"
            src={rightImage}
            style={{
              maxHeight: "auto",
              width: "100%",
              objectFit: "cover",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
