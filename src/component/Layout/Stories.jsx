import React, { useState, useEffect } from "react";
import { useAuth } from "./AuthContext";
import { Link } from "react-router-dom";

// Styles and Components
import style from "../Profile/ProfileComp/Profile.module.css";
import Profilenavbar from "../Profile/ProfileComp/Profilenavbar";
import Footer from "./Footer";
import { AiOutlineRight, AiOutlineClose } from "react-icons/ai";
import { MdOutlineCancelPresentation } from "react-icons/md";
import { VVIPSection } from "./FeatureSection";

// Style for Card Modal
import styles from "../Profile/Forms/Form.module.css";

function Stories() {
  const [storyData, setStoryData] = useState([
    {
      id: 1,
      image: require("../../assets/images/stories/SS1.jpg"),
      title: "Samrat & Rajeshwari",
      description:
        "When Veer, a brave and ambitious entrepreneur, and Rani, a compassionate teacher, joined our platform, little did they know they were about to embark on a journey of a lifetime.",
    },
    {
      id: 2,
      image: require("../../assets/images/stories/SS2.jpg"),
      title: "Raj & Siya",
      description:
        "When Veer, a brave and ambitious entrepreneur, and Rani, a compassionate teacher, joined our platform, little did they know they were about to embark on a journey of a lifetime.",
    },
  ]);
  const [activeStory, setActiveStory] = useState(null);
  const [loading, setLoading] = useState(false);
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
    title: "VVIP Services for Ultimate Discretion",
    description:
      "For those seeking an even more exclusive experience, our VVIP membership provides a personal matchmaking manager, access to non-listed profiles, and personalized introductions.",
    buttonText: "Join the Rajput Legacy",
  };

  useEffect(() => {
    // fetchData();
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
              <AiOutlineRight size={15} style={{ marginInline: "5px" }} /> {" Success Stories"}
          </div>

          {/* Hero Section */}
          <section className="mt-4 p-2 mb-4 text-center">
            <p
              style={{
                fontSize: "clamp(20px, 24px, 24px)",
                fontWeight: 500,
                fontFamily: "Open Sans, sans-serif",
                lineHeight: 1,
                color: "black",
              }}
            >
              Discover heartfelt stories of couples who found their perfect
              match through our platform.
            </p>
            <h1
              style={{
                fontSize: "clamp(40px, 60px, 60px)",
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
                        WebkitLineClamp: 3,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {story.description}
                    </p>
                    <button
                      className="btn btn-link text-danger p-0"
                      onClick={() => openModal(story)}
                      style={{
                        fontSize: "16px",
                        fontWeight: 700,
                        fontFamily: "Open Sans, sans-serif",
                        textDecoration: "underline",
                      }}
                    >
                      View more
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
          <div style={{ paddingBottom: "3rem", paddingTop: "3rem" }}>
            <VVIPSection
              background="white"
              title={vvipData.title}
              description={vvipData.description}
              buttonText={vvipData.buttonText}
            />
          </div>
        </div>

        {/* VVIP Section */}
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
        <div
          className={`${styles.modalHeader} m-0`}
          style={{
            paddingInline: "13px",
          }}
        >
          <h4 className={styles.headerTitle}>Success Story</h4>
          <MdOutlineCancelPresentation
            onClick={closeModal}
            className={styles.closeIcon}
            size="24"
          />
        </div>
        <div className="p-3">
          <img
            src={story.image}
            alt="Story"
            className="img-fluid w-100 mb-1 mt-1"
            style={{ maxHeight: "450px", objectFit: "cover" }}
          />
          <h5
            className="mt-3"
            style={{
              fontWeight: 400,
              fontFamily: "Lustria, serif",
              lineHeight: 1.25,
              fontSize: "clamp(20px, 24px, 24px)",
            }}
          >
            {story.title}
          </h5>
          <p
            style={{
              fontWeight: 400,
              fontFamily: "Open Sans, sans-serif",
              lineHeight: 2,
              fontSize: "clamp(14px, 16px, 16px)",
            }}
          >
            {story.description}
          </p>
        </div>
      </div>
    </div>
  );
}
