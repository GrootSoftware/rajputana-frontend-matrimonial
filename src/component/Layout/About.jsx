// WhoWeAre.jsx
import React from "react";
import "./Hero.css";

function About() {
  return (
    <section className="hero-section">
      <div className="container">
        <h2 className="hero-heading">Who we are?</h2>
        <p className="hero-description">
          Rajput Matrimony is dedicated to helping members of the Rajput
          community find meaningful connections and lifelong companionship. We
          understand the importance of tradition, culture, and values, and our
          platform is tailored to respect and honor these.
        </p>
        <button className="join-button">JOIN NOW</button>
        <div className="hero-images">
          <img
            src="https://placehold.co/200x200"
            alt="Rajput wedding photo 1"
            className="hero-image"
          />
          <img
            src="https://placehold.co/200x200"
            alt="Rajput wedding photo 2"
            className="hero-image"
          />
          <img
            src="https://placehold.co/200x200"
            alt="Rajput wedding photo 3"
            className="hero-image"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
