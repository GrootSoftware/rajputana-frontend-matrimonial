// WhoWeAre.jsx
import React from "react";
import style from "../Profile/ProfileComp/Profile.module.css";
import { Link } from "react-router-dom";

import Profilenavbar from "../Profile/ProfileComp/Profilenavbar";
import Footer from "./Footer";
import StoryCard from "./StoryCard";
<<<<<<< HEAD
=======
import border from "../../assets/images/Aboutusborder.js.png";
>>>>>>> 97ede3914175742e3e2e83c8205bfe6b386e310b

import imgSrc from "../../assets/images/sectionImg.png";
import { AiOutlineRight } from "react-icons/ai";
import { Features, VVIPSection } from "./FeatureSection";

function About() {
  const storyData = [
    {
<<<<<<< HEAD
      text: "At Rajput Parinay, we understand the importance of preserving Rajput pride and customs, which is why we've created a trusted platform tailored specifically to your community's unique needs.",
      imageSrc: require("../../assets/images/imageAbout.jpg"),
    },
    {
      text: "We bring Rajput families together, fostering connections rooted in tradition and respect.",
=======
      text: "Welcome to Rajput Parinay, the premier matrimonial platform designed exclusively for the Rajput community. Our mission is to bring together Rajput families from across the globe and help them build meaningful connections rooted in shared values, traditions, and cultural heritage.",
      imageSrc: require("../../assets/images/imageAbout.jpg"),
    },
    {
      text: "At Rajput Parinay, we understand the importance of preserving Rajput pride and customs, which is why we’ve created a trusted platform tailored specifically to your community's unique needs.",
>>>>>>> 97ede3914175742e3e2e83c8205bfe6b386e310b
      imageSrc: require("../../assets/images/imageAbout2.jpg"),
    },
  ];

  var vvipData = {
<<<<<<< HEAD
    title: "Start Your Journey to a Royal Match Today.",
    description:
      "Join Rajput Matches and embark on a journey to find your perfect partner within a community that respects your legacy and honors your privacy. Let us guide you in finding a partner who complements your values, lifestyle, and heritage.",
=======
    title: "Start Your Journey to a Royal Match Today",
    description:
      "Join Rajput Matches and embark on a journey to find your perfect partner within a community that respects your legacy and honors your privacy. Let us guide you in finding a partner who complements your values, lifestyle, and heritage.",

>>>>>>> 97ede3914175742e3e2e83c8205bfe6b386e310b
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
              <AiOutlineRight size={15} style={{ marginInline: "5px" }} />
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

<<<<<<< HEAD
            <div className="d-flex flex-column flex-md-row justify-content-md-center align-items-center mb-2 mt-3">
              <div
                className="text-center text-md-start"
                style={{
                  fontSize: "clamp(2rem, 4vw, 60px)", // Scales between 2rem and 60px
                  fontWeight: 400,
                  fontFamily: "Lustria, serif",
                  lineHeight: 1.5,
                  minWidth: "75%",
=======
            <div className="d-flex flex-column flex-md-row justify-content-md-center align-content-start mb-2 mt-3">
              <div
                className="text-center text-md-start"
                style={{
                  fontSize: "clamp(20px, 60px, 60px)",
                  fontWeight: 400,
                  fontFamily: "Lustria, serif",
                  lineHeight: 1.2,
                  flex: "1 1 65%",
>>>>>>> 97ede3914175742e3e2e83c8205bfe6b386e310b
                }}
              >
                Celebrating Rajput Legacy,
                <br />
                Connecting Hearts
              </div>

              <div
                className="mt-2 text-center text-md-start"
                style={{
<<<<<<< HEAD
                  fontSize: "clamp(1.2rem, 1.5vw, 24px)",
                  fontWeight: 400,
                  fontFamily: "Lustria, serif",
                  lineHeight: "clamp(1.5, 1.2, 1.5)",
=======
                  fontSize: "clamp(16px,22px,24px)",
                  fontWeight: 400,
                  fontFamily: "Lustria, serif",
                  lineHeight: "1.2",
                  flex: "1 1 35%",
>>>>>>> 97ede3914175742e3e2e83c8205bfe6b386e310b
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
<<<<<<< HEAD
=======
                  maxHeight: "578px",
>>>>>>> 97ede3914175742e3e2e83c8205bfe6b386e310b
                }}
              />
              <p
                className="card-text mt-2 ps-sm-5 p-0"
                style={{
                  fontSize: "clamp(1rem, 2vw, 22px)",
                  fontWeight: 400,
                  fontFamily: "Open Sans, sans-serif",
<<<<<<< HEAD
                  lineHeight: 1.5,
=======
                  lineHeight: 1.75,
>>>>>>> 97ede3914175742e3e2e83c8205bfe6b386e310b
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
<<<<<<< HEAD
=======
                  maxHeight: "398px",
>>>>>>> 97ede3914175742e3e2e83c8205bfe6b386e310b
                  objectFit: "cover",
                }}
              />
              <p
                className="card-text mt-2 ps-sm-5 p-0"
                style={{
                  fontSize: "clamp(1rem, 2vw, 22px)",
                  fontWeight: 400,
                  fontFamily: "Open Sans, sans-serif",
<<<<<<< HEAD
                  lineHeight: 1.5,
=======
                  lineHeight: 1.75,
>>>>>>> 97ede3914175742e3e2e83c8205bfe6b386e310b
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
<<<<<<< HEAD
=======
          <div
            className="text-center"
            style={{ marginTop: "0rem", marginBottom: "4rem" }}
          >
            <img
              style={{
                width: "100%",
                maxWidth: "1400px",
              }}
              src={border}
              alt="img"
            />
          </div>
>>>>>>> 97ede3914175742e3e2e83c8205bfe6b386e310b

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
<<<<<<< HEAD
        </div>

        <VVIPSection
          title={vvipData.title}
          description={vvipData.description}
          buttonText={vvipData.buttonText}
        />
=======
          <div style={{ paddingBottom: "3rem", paddingTop: "3rem" }}>
            <VVIPSection
              background="white"
              title={vvipData.title}
              description={vvipData.description}
              buttonText={vvipData.buttonText}
            />
          </div>
        </div>
>>>>>>> 97ede3914175742e3e2e83c8205bfe6b386e310b
      </div>
      <Footer />
    </>
  );
}

export const WhyChooseSection = ({ imageSrc, heading, features }) => {
  return (
    <div className="container-fluid mt-4">
<<<<<<< HEAD
      <div className="row d-flex justify-content-between p-2 p-sm-0">
        {/* Image Section */}
        <div className="col-sm-6 p-2 text-center">
=======
      <div className="row d-flex justify-content-around align-content-center p-2 p-sm-0">
        <div className="col-xl-6 p-2 text-center">
>>>>>>> 97ede3914175742e3e2e83c8205bfe6b386e310b
          <img
            alt="A traditional Rajput wedding scene with a bride and groom in traditional attire"
            className="img-fluid"
            src={imageSrc}
            style={{
<<<<<<< HEAD
              maxHeight: "auto",
              maxWidth: "100%",
              objectFit: "cover",
=======
              maxWidth: "605px",
              width: "100%",
              objectFit: "cover",
              marginInline: "auto",
>>>>>>> 97ede3914175742e3e2e83c8205bfe6b386e310b
            }}
          />
        </div>

<<<<<<< HEAD
        {/* Content Section */}
        <div className="col-sm-6 content p-2 p-sm-3">
          <h1>{heading}</h1>
=======
        <div
          className="col-xl-6 content my-auto"
          style={{
            maxWidth: "671px",
          }}
        >
          <h1
            style={{
              fontSize: "52px",
              fontWeight: 400,
              fontFamily: "Lustria, serif",
              lineHeight: 1,
              marginBottom: "2rem",
            }}
          >
            {heading}
          </h1>
>>>>>>> 97ede3914175742e3e2e83c8205bfe6b386e310b
          {features.map((feature, index) => (
            <div key={index}>
              <div
                style={{
<<<<<<< HEAD
                  fontSize: "clamp(1rem, 3vw, 24px)", // Scales between 1rem and 1.5rem
                  fontWeight: 400,
                  fontFamily: "Lustria, serif",
                  lineHeight: 1.2,
=======
                  fontSize: "clamp(14px, 24px, 24px)", // Scales between 1rem and 1.5rem
                  fontWeight: 400,
                  fontFamily: "Lustria, serif",
                  lineHeight: "clamp(1.5, 2, 2)",
>>>>>>> 97ede3914175742e3e2e83c8205bfe6b386e310b
                }}
              >
                {feature.title}
              </div>
              <p
                style={{
<<<<<<< HEAD
                  fontSize: "clamp(0.75rem, 2vw, 16px)", // Scales between 1rem and 1.5rem
                  fontWeight: 500,
                  fontFamily: "Open Sans, sans-serif",
                  lineHeight: 1.5,
=======
                  fontSize: "clamp(14px, 16px, 16px)", // Scales between 1rem and 1.5rem
                  fontWeight: 500,
                  fontFamily: "Open Sans, sans-serif",
                  lineHeight: "clamp(1.2, 2, 2)",
>>>>>>> 97ede3914175742e3e2e83c8205bfe6b386e310b
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
<<<<<<< HEAD
    <div className="container-fluid mt-3 ">
      <div className="row p-2 p-sm-0">
        {/* Left Image */}
        <div className="col-sm-2 text-center p-0 mb-2">
=======
    <div className="container-fluid mt-3 mb-3">
      <div className="row p-2 p-sm-0">
        {/* Left Image */}
        <div
          className="col-12 col-sm-8 col-md-6 col-lg-2 text-center p-0 mb-sm-2"
          style={{
            maxHeight: "315px",
            maxWidth: "250px",
            marginInline: "auto",
          }}
        >
>>>>>>> 97ede3914175742e3e2e83c8205bfe6b386e310b
          <img
            alt="Illustration of a Rajput warrior in traditional attire"
            className="img"
            src={leftImage}
<<<<<<< HEAD
            style={{ maxHeight: "250px", maxWidth: "100%" }}
=======
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
>>>>>>> 97ede3914175742e3e2e83c8205bfe6b386e310b
          />
        </div>

        {/* Text Content */}
<<<<<<< HEAD
        <div className="col-sm-6">
          <div
            className="title"
            style={{
              fontSize: "clamp(1.2rem, 5vw, 60px)", // Scales between 1rem and 1.5rem
=======
        <div
          className="col-lg-6 col-md-10 mt-4 mt-sm-0"
          style={{
            maxWidth: "576px",
            // minHeight: "598px",
            margin: "0 auto",
          }}
        >
          <div
            className="title"
            style={{
              fontSize: "clamp(32px, 60px, 60px)", // Scales between 1rem and 1.5rem
>>>>>>> 97ede3914175742e3e2e83c8205bfe6b386e310b
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
<<<<<<< HEAD
                  fontSize: "clamp(0.7rem, 3vw, 1.5rem)", // Scales between 1rem and 1.5rem
                  fontWeight: 400,
                  fontFamily: "Open Sans, sans-serif",
                  lineHeight: 1.2,
=======
                  fontSize: "clamp(16px, 24px)", // Scales between 1rem and 1.5rem
                  fontWeight: 400,
                  fontFamily: "Open Sans, sans-serif",
                  lineHeight: 1.75,
>>>>>>> 97ede3914175742e3e2e83c8205bfe6b386e310b
                }}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Right Image */}
<<<<<<< HEAD
        <div className="col-12 col-sm-4 text-center">
=======
        <div className="col-12 col-md-12 col-lg-4 text-center mt-4 mt-md-0">
>>>>>>> 97ede3914175742e3e2e83c8205bfe6b386e310b
          <img
            alt="Historical photograph of a Rajput wedding ceremony"
            className="image-right"
            src={rightImage}
            style={{
<<<<<<< HEAD
              maxHeight: "auto",
              width: "100%",
              objectFit: "cover",
=======
              maxHeight: "589px",
              maxWidth: "402px",
              width: "100%",
              objectFit: "cover",
              marginInline: "auto",
>>>>>>> 97ede3914175742e3e2e83c8205bfe6b386e310b
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
