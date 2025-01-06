import React from "react";
import { useState } from "react";

// Styles and Components
import style from "../Profile/ProfileComp/Profile.module.css";
import Profilenavbar from "../Profile/ProfileComp/Profilenavbar";
import Footer from "./Footer";
import { AiOutlineRight } from "react-icons/ai";
import { VVIPSection } from "./FeatureSection";

//style card
import styles from "../Profile/Forms/Form.module.css";
import { AiOutlineClose } from "react-icons/ai";

function Stories() {
  const [activeStory, setActiveStory] = useState(null);

  const openModal = (story) => {
    setActiveStory(story);
  };

  const closeModal = () => {
    setActiveStory(null);
  };
  // Story Data
  const storyData = [
    {
      id: 1,
      title: "Ganesh & Swapnakanti",
      image: {
        alt: "A couple standing together during their wedding ceremony",
        src: require("../../assets/images/stories/SS1.jpg"),
      },
      description:
        "Ganesh and Swapnakanti's love story is a beautiful journey of love, trust, and commitment. Their wedding was a grand celebration of their union.  Ganesh and Swapnakanti's love story is a beautiful journey of love, trust, and commitment. Their wedding was a grand celebration of their union.",
    },
    {
      id: 2,
      title: "Raj & Riya",
      image: {
        alt: "A couple standing on a grand staircase",
        src: require("../../assets/images/stories/SS2.jpg"),
      },
      description:
        "Raj and Riya's wedding was a magnificent affair, attended by close family and friends. Their love story is an inspiration to many. Raj and Riya's wedding was a magnificent affair, attended by close family and friends. Their love story is an inspiration to many.",
    },
    {
      id: 3,
      title: "Karan & Arohi",
      image: {
        alt: "A couple during their wedding ceremony with lights in the background",
        src: require("../../assets/images/stories/SS3.jpg"),
      },
      description:
        "Karan and Arohi's wedding was a magical event, filled with love, laughter, and joy. Their journey together is a testament to true love.",
    },
    {
      id: 4,
      title: "Dev & Meera",
      image: {
        alt: "A couple during their wedding ceremony with family and friends",
        src: require("../../assets/images/stories/SS4.jpg"),
      },
      description:
        "Dev and Meera's wedding was a beautiful celebration of their love and commitment. Their story is a perfect example of a modern-day romance.",
    },
    {
      id: 5,
      title: "Vikas & Arshi",
      image: {
        alt: "A couple standing together under a decorated canopy",
        src: require("../../assets/images/stories/SS5.jpg"),
      },
      description:
        "Vikas and Arshi's wedding was a grand affair, filled with love, joy, and happiness. Their love story is a beautiful journey of togetherness.",
    },
    {
      id: 6,
      title: "Karan & Charvi",
      image: {
        alt: "A couple standing together on a mountain top",
        src: require("../../assets/images/stories/SS6.jpg"),
      },
      description:
        "Karan and Charvi's wedding was a beautiful celebration of their love and commitment. Their story is a perfect example of a modern-day romance.",
    },
  ];

  // VVIP Section Data
  const vvipData = {
    title: "Start Your Journey to a Royal Match Today.",
    description:
      "Join Rajput Matches and embark on a journey to find your perfect partner within a community that respects your legacy and honors your privacy. Let us guide you in finding a partner who complements your values, lifestyle, and heritage.",
    buttonText: "Join the Rajput Legacy",
  };

  return (
    <>
      {/* Main Wrapper */}
      <div className={style.minhScreen}>
        <Profilenavbar />
        <div className={style.Container}>
          {/* Breadcrumb Navigation */}
          <div className={style.routerpathtext}>
            {"Home "} <AiOutlineRight /> {" Success Stories"}
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

          {/* Stories Section */}
          <div className="d-flex flex-wrap justify-content-between p-2">
            <div className="d-flex flex-wrap justify-content-between p-2">
              {storyData.map((story) => (
                <div className={`mt-3 p-0 ${style.storycard}`} key={story.id}>
                  <img
                    src={story.image.src}
                    alt={story.image.alt}
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
                      className="text-danger btn btn-link p-0 text-decoration-none"
                      onClick={() => openModal(story)}
                    >
                      View more
                    </button>
                  </div>
                </div>
              ))}
            </div>
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
      <div className={styles.modalContent} onClick={closeModal}>
        <div className={`${styles.modalHeader} m-0`}>
          <div>
            <AiOutlineClose onClick={closeModal} className={style.closeIcon} />
          </div>
        </div>

        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="row p-1">
              <div className={`mt-3 p-0 `} key={story.id}>
                <img
                  src={story.image.src}
                  alt={story.image.alt}
                  className="img-fluid"
                  style={{
                    minWidth: "100%",
                    maxHeight: "450px",
                    objectFit: "cover",
                  }}
                />

                <div className="mt-3">
                  <h5
                    style={{
                      fontSize: "clamp(1.2rem, 3vw, 24px)",
                      fontWeight: "normal",
                      fontFamily: "Lustria, serif",
                      lineHeight: "clamp(1.2, 1.5, 1.7)",
                      color: "#333",
                    }}
                  >
                    {story.title}
                  </h5>
                  <p
                    className="mt-1 mb-1"
                    style={{
                      fontSize: "clamp(1rem, 2vw, 1.2rem)",
                      fontWeight: "normal",
                      fontFamily: "Open Sans, sans-serif",
                      lineHeight: "clamp(1.2, 1.4, 1.8)",
                      color: "#555",
                    }}
                  >
                    {story.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
