import React from "react";
import { Link } from "react-router-dom";

import styles from "./JourneyPage.module.css";

import { IoLockClosedOutline } from "react-icons/io5";
import { FaConnectdevelop } from "react-icons/fa";
import { SlBadge } from "react-icons/sl";
import { BsPersonLock } from "react-icons/bs";

import royalbg from "../../assets/images/royalplacebg.jpg";

const JourneyPage = () => {
  return (
    <section>
      <div className={styles.container}>
        <div className={`${styles.section}`}>
          <div className={styles.leftSection}>
            <h1 className={styles.heading}>
              The Journey to Your Perfect Match
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

          <div className={styles.rightSection}>
            <div className={styles.feature}>
              <div className={styles.iconContainer}>
                <FaConnectdevelop />
              </div>
              <div className={styles.textContainer}>
                <h2 className={styles.featureTitle}>Join the Rajput Circle</h2>
                <p className={styles.featureDescription}>
                  Register and complete your profile, ensuring all information
                  is accurate. Each profile undergoes an approval process to
                  ensure authenticity and quality. Only profiles that pass
                  verification are granted full access.
                </p>
              </div>
            </div>
            <div className={styles.feature}>
              <div className={styles.iconContainer}>
                <IoLockClosedOutline />
              </div>
              <div className={styles.textContainer}>
                <h2 className={styles.featureTitle}>
                  Secure, Private Browsing
                </h2>
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
                <h2 className={styles.featureTitle}>
                  Personalized Matchmaking
                </h2>
                <p className={styles.featureDescription}>
                  For VVIP members, we offer a dedicated matchmaking manager who
                  curates profiles just for you, making introductions discreetly
                  and professionally.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="text-center"
        style={{ marginTop: "1rem", position: "relative" }}
      >
      <img
          className=""
          style={{ maxHeight: "700px", width: "100%" }}
          src={royalbg}
          alt="img"
        />
        {/* <video
          className=""
          style={{ height: "700px", width: "100%", objectFit: "cover" }}
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          autoPlay
          loop
          muted
          playsInline
        ></video> */}
        {/* <div style={{ height: "700px", width: "100%", position: "relative" }}>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/V-YPJO9_qbg?autoplay=1&mute=1" 
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div> */}

        <div className={styles.vipSection}>
          <h2>Start Your Journey to a Royal Match Today</h2>
          <div>
            <p>
              Join Rajput Matches and embark on a journey to find your perfect
              partner within a community that respects your legacy and honors
              your privacy. Let us guide you in finding a partner who
              complements your values, lifestyle, and heritage.
            </p>{" "}
            <Link to="/login">
              {" "}
              <button className={styles.ctaButton}>
                JOIN THE RAJPUT LEGACY{" "}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneyPage;
