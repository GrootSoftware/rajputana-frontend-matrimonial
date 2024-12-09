import React from "react";
import styles from "./LandingPage.module.css";
import privacylogo from "../../assets/images/privacybg.png";

const LandingPage = () => {
  return (
    <div className={styles.background}>
      <div className={styles.overlay}>
        <div className={styles.contentContainer}>
          <div className={styles.badge}>
            <img
              src={privacylogo}
              alt="privacylogo"
              className={styles.privacylogo}
            />
            <div className={styles.heading}>
              Your Privacy,
              <br />
              Our Priority
            </div>
          </div>

          <p className={styles.paragraph}>
            Our platform is designed with privacy and tradition in mind. At
            Rajput Matches, we go beyond typical matchmakin providing a secure
            and curated space for you to find a partner who respects and values
            your heritage. Join a trusted network where each profile is
            verified, each connection meaningful, and each match has the
            potential to be lasting.
          </p>
          <button className={styles.ctaButton}>
            SECURE YOUR RAJPUT PARTNER
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
