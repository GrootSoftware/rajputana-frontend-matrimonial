import React, { useState, useEffect } from "react";
import { useAuth } from "./AuthContext";
import { Link } from "react-router-dom";

// Styles and Components
import style from "../Profile/ProfileComp/Profile.module.css";
import Profilenavbar from "../Profile/ProfileComp/Profilenavbar";
import Footer from "./Footer";
import { AiOutlineRight, AiOutlineClose } from "react-icons/ai";
import { VVIPSection } from "./FeatureSection";

// Style for Card Modal
import styles from "../Profile/Forms/Form.module.css";

function Stories() {
  const [storyData, setStoryData] = useState([]);
  const [activeStory, setActiveStory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { fetchUserData } = useAuth();

  const openModal = (story) => {
    setActiveStory(story);
  };

  const closeModal = () => {
    setActiveStory(null);
  };

  const fetchData = async () => {
    try {
      setLoading(true);
      const route = "profile/stories";
      const data = await fetchUserData(route);
      if (!data) {
        throw new Error("No stories found.");
      }
      setStoryData(data);
    } catch (err) {
      console.error("Error fetching data:", err);
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // VVIP Section Data
  const vvipData = {
    title: "Start Your Journey to a Royal Match Today.",
    description:
      "Join Rajput Matches and embark on a journey to find your perfect partner within a community that respects your legacy and honors your privacy. Let us guide you in finding a partner who complements your values, lifestyle, and heritage.",
    buttonText: "Join the Rajput Legacy",
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className={style.minhScreen}>
        <Profilenavbar />
        <div className={style.Container}>
          {/* Breadcrumb Navigation */}
          <div className={style.routerpathtext}>
            <Link
              to="/home"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Home
            </Link>
            <AiOutlineRight /> {" Success Stories"}
          </div>

          {/* Hero Section */}
          <section className="mt-4 p-2 mb-4 text-center">
            <p
              style={{
                fontSize: "clamp(1rem, 3vw, 1.5rem)",
                fontWeight: 500,
                fontFamily: "Open Sans, sans-serif",
                lineHeight: 1,
              }}
            >
              Discover heartfelt stories of couples who found their perfect
              match through our platform.
            </p>
            <h1
              style={{
                fontSize: "clamp(2rem, 4vw, 60px)",
                fontWeight: 400,
                fontFamily: "Lustria, serif",
                lineHeight: 1,
              }}
            >
              Happily Ever After Begins Here.
            </h1>
          </section>

          {/* Content */}
          <div className="d-flex flex-wrap justify-content-between p-2">
            {loading ? (
              // Display Bootstrap Spinner While Loading
              <div className="d-flex justify-content-center w-100 mt-5">
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            ) : error ? (
              // Error Message Display
              <div className="alert alert-danger w-100 text-center mt-4">
                {error}
              </div>
            ) : (
              // Story Cards
              storyData.map((story) => (
                <div
                  className={`mt-3 p-0 ${style.storycard}`}
                  key={story.id}
                  onClick={() => openModal(story)}
                >
                  <img
                    src={story.image}
                    alt="Story"
                    className="img-fluid"
                    style={{
                      width: "100%",
                      maxHeight: "375px",
                      objectFit: "cover",
                    }}
                  />
                  <div className="mt-3">
                    <h5>{story.title}</h5>
                    <p
                      style={{
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        WebkitLineClamp: 2,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {story.description}
                    </p>
                    <button
                      className="btn btn-link text-danger p-0 text-decoration-none"
                      onClick={() => openModal(story)}
                    >
                      View more
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* VVIP Section */}
        <VVIPSection
          title={vvipData.title}
          description={vvipData.description}
          buttonText={vvipData.buttonText}
        />
      </div>

      <Footer />
      {activeStory && <Card story={activeStory} closeModal={closeModal} />}
    </>
  );
}

export default Stories;

function Card({ closeModal, story }) {
  return (
    <div className={styles.modalContainer}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={`${styles.modalHeader} m-0`}>
          <AiOutlineClose onClick={closeModal} />
        </div>
        <div className="p-3">
          <img
            src={story.image}
            alt="Story"
            className="img-fluid w-100"
            style={{ maxHeight: "450px", objectFit: "cover" }}
          />
          <h5 className="mt-3">{story.title}</h5>
          <p>{story.description}</p>
        </div>
      </div>
    </div>
  );
}
