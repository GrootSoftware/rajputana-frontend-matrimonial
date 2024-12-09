import React from "react";
import styles from "./JourneyPage.module.css";

import { IoLockClosedOutline } from "react-icons/io5";
import { FaConnectdevelop } from "react-icons/fa";
import { SlBadge } from "react-icons/sl";
import { BsPersonLock } from "react-icons/bs";

const JourneyPage = () => {
  return (
    <div className={styles.container}>
      <div className={`${styles.section}`}>
        <div className={styles.leftSection}>
          <h1 className={styles.heading}>The Journey to Your Perfect Match</h1>
          <p className={styles.description}>
            Join a trusted network where each profile is verified, each
            connection meaningful, and each match has the potential to be
            lasting.
          </p>
          <button className={styles.ctaButton}>FIND YOUR ROYAL MATCH</button>
        </div>

        <div className={styles.rightSection}>
          <div className={styles.feature}>
            <div className={styles.iconContainer}>
              <FaConnectdevelop />
            </div>
            <div className={styles.textContainer}>
              <h2 className={styles.featureTitle}>Join the Rajput Circle</h2>
              <p className={styles.featureDescription}>
                Register and complete your profile, ensuring all information is
                accurate. Each profile undergoes an approval process to ensure
                authenticity and quality. Only profiles that pass verification
                are granted full access.
              </p>
            </div>
          </div>
          <div className={styles.feature}>
            <div className={styles.iconContainer}>
              <IoLockClosedOutline />
            </div>
            <div className={styles.textContainer}>
              <h2 className={styles.featureTitle}>Secure, Private Browsing</h2>
              <p className={styles.featureDescription}>
                Explore our elite profile listings without compromising your
                privacy. Send requests to view detailed profiles of those who
                pique your interest, knowing your own information is secure.
              </p>
            </div>
          </div>

          <div className={styles.feature}>
            <div className={styles.iconContainer}>
              <SlBadge />
            </div>
            <div className={styles.textContainer}>
              <h2 className={styles.featureTitle}>Connect with Trust</h2>
              <p className={styles.featureDescription}>
                Upon mutual interest, we provide full profiles with secure,
                direct communication channels. You decide who sees your
                information, keeping your privacy firmly in your control.
              </p>
            </div>
          </div>
          {/* Feature 4 */}
          <div className={styles.feature}>
            <div className={styles.iconContainer}>
              <BsPersonLock />
            </div>
            <div className={styles.textContainer}>
              <h2 className={styles.featureTitle}>Personalized Matchmaking</h2>
              <p className={styles.featureDescription}>
                For VVIP members, we offer a dedicated matchmaking manager who
                curates profiles just for you, making introductions discreetly
                and professionally.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.vipSection}>
        <h2>VVIP Services for Ultimate Discretion</h2>
        <div>
          <p>
            For those seeking an even more exclusive experience, our VVIP
            membership provides a personal matchmaking manager, access to
            non-listed profiles, and personalized introductions.
          </p>
          <button className={styles.ctaButton}>JOIN THE RAJPUT LEGACY</button>
        </div>
      </div>
    </div>
  );
};

export default JourneyPage;
