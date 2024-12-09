import React from "react";
import "./FeatureSection.css";

import { LiaCrownSolid } from "react-icons/lia";
import { IoShieldOutline } from "react-icons/io5";
import { IoAccessibilityOutline } from "react-icons/io5";
import { LiaChessKingSolid } from "react-icons/lia";


function FeatureSection() {
  return (
    <div style={{ backgroundColor: "white" }}>
      <div className="feature-container">
        {/* Features Section */}
        <div className="features-grid">
          <FeatureCard
            iconClass={<LiaCrownSolid />}
            title="Elite Rajput Profiles"
            description="We feature only verified, high-quality profiles of Rajput singles dedicated to serious, long-term relationships."
          />
          <FeatureCard
            iconClass={<IoShieldOutline />}
            title="Privacy-First Approach"
            description="Protecting your personal information is our top priority. No names, identities, or personal details are disclosed until you’re ready."
          />
          <FeatureCard
            iconClass={<IoAccessibilityOutline />}
            title="Exclusive Access"
            description="Experience premium matchmaking services, from VIP introductions to personalized guidance, all tailored to Rajputs who seek the finest."
          />
          <FeatureCard
            iconClass={<LiaChessKingSolid />}
            title="Traditional Values"
            description="Honoring Rajput values in a contemporary, user-friendly platform that seamlessly blends tradition with technology."
          />
        </div>

        {/* VVIP Section */}
        <div className="vip-section">
          <h2>VVIP Services for Ultimate Discretion</h2>
          <div>
            <p>
              For those seeking an even more exclusive experience, our VVIP
              membership provides a personal matchmaking manager, access to
              non-listed profiles, and personalized introductions.
            </p>
            <button>JOIN THE RAJPUT LEGACY</button>
          </div>
        </div>
      </div>
    </div>
  );
}

const FeatureCard = ({ iconClass, title, description }) => {
  return (
    <div>
      <i style={{ fontSize: "2.3rem", color: "#991c1c" }}>{iconClass}</i>
      <div>{title}</div>
      <p>{description}</p>
    </div>
  );
};

export default FeatureSection;
