import React from "react";
import styles from "./MatchmakingSection.module.css";
import herobg from "../../assets/images/matchmakingbg.jpg";
import border from "../../assets/images/border.png";

import { Link } from "react-router-dom";

const MatchmakingSection = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.flexContainer}>
          <div className={styles.imageContainer}>
            <img src={herobg} alt="img" className={styles.image} />
          </div>

          <div className={styles.textContainer}>
            <h1 className={styles.heading}>
              Your Trusted Partner in Rajput Matchmaking
            </h1>
            <p className={styles.description}>
              Join a trusted network where each profile is verified, each
              connection meaningful, and each match has the potential to be
              lasting.
            </p>

            <Link to="/login">
              {" "}
              <button className={styles.ctaButton}>
                FIND YOUR ROYAL MATCH
              </button>
            </Link>
          </div>
        </div>
        {/* Decorative Border */}
        <div className="text-center" style={{ marginTop: "5rem" }}>
<<<<<<< HEAD
          <img className="w-75" src={border} alt="img" />
=======
          <img
            style={{
              width: "100%",
              maxWidth: "1400px",
            }}
            src={border}
            alt="img"
          />
>>>>>>> 97ede3914175742e3e2e83c8205bfe6b386e310b
        </div>
      </div>
    </>
  );
};

export default MatchmakingSection;
