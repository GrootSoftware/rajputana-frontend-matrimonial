import React from "react";
import { Link } from "react-router-dom";

import "./FeatureSection.css";

import { LiaCrownSolid } from "react-icons/lia";
import { IoShieldOutline, IoAccessibilityOutline } from "react-icons/io5";
import { LiaChessKingSolid } from "react-icons/lia";

var featuresData = [
  {
    icon: <LiaCrownSolid />,
    title: "Elite Rajput Profiles",
    description:
      "We feature only verified, high-quality profiles of Rajput singles dedicated to serious, long-term relationships.",
  },
  {
    icon: <IoShieldOutline />,
    title: "Privacy-First Approach",
    description:
      "Protecting your personal information is our top priority. No names, identities, or personal details are disclosed until you’re ready.",
  },
  {
    icon: <IoAccessibilityOutline />,
    title: "Exclusive Access",
    description:
      "Experience premium matchmaking services, from VIP introductions to personalized guidance, all tailored to Rajputs who seek the finest.",
  },
  {
    icon: <LiaChessKingSolid />,
    title: "Traditional Values",
    description:
      "Honoring Rajput values in a contemporary, user-friendly platform that seamlessly blends tradition with technology.",
  },
];

function FeatureSection() {
  const vvipData = {
    title: "VVIP Services for Ultimate Discretion",
    description:
      "For those seeking an even more exclusive experience, our VVIP membership provides a personal matchmaking manager, access to non-listed profiles, and personalized introductions.",
    buttonText: "JOIN THE RAJPUT LEGACY",
  };

  return (
    <section style={{ backgroundColor: "white", paddingBottom: "3rem" }}>
      <Features />
      <VVIPSection
        background="rgba(248, 235, 210, 1)"
        title={vvipData.title}
        description={vvipData.description}
        buttonText={vvipData.buttonText}
      />
    </section>
  );
}

export const Features = () => {
  return (
    <div className="bg-white">
      <div className="feature-container">
        {/* Features Section */}
        <div className="features-grid">
          {featuresData.map((feature, index) => (
            <FeatureCard
              key={index}
              iconClass={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export const FeatureCard = ({ iconClass, title, description }) => {
  return (
    <div>
      <i
        className=""
        style={{
          color: "rgba(153, 37, 37, 1)",
          fontSize: "clamp(2rem, 5vw, 3.75rem)",
        }}
      >
        {iconClass}
      </i>
      <div
        style={{
          fontSize: "clamp(1.2rem, 5vw, 1.25rem)",
        }}
      >
        {title}
      </div>
      <p
        style={{
          fontSize: "clamp(0.8rem, 3vw, 1rem)",
        }}
      >
        {description}
      </p>
    </div>
  );
};

export const VVIPSection = ({ title, description, buttonText, background }) => {
  return (
    <div
      className="box"
      style={{
        maxWidth: "1400px",
        marginInline: "auto",
        marginTop: "2rem",
        background: "transparent",
      }}
    >
      <div className="vip-section" style={{ backgroundColor: `${background}` }}>
        <h2>{title}</h2>
        <div>
          <p>{description}</p>

          <Link to="/login">
            {" "}
            <button>{buttonText} </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
