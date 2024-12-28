import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import style from "./RequestCard.module.css";

const ProfileCard = ({ profile, handlecheck, key }) => {
  return (
    <div
      className="col-12 col-sm-11 col-md-6 col-xl-6 mb-2 mt-1 p-0 p-sm-1 m-auto"
      style={{ boxSizing: "border-box" }}
    >
      <div className="card shadow-sm border-0 rounded-0">
        <div
          className="row g-0 m-md-1 p-1 p-md-0"
          style={{ boxSizing: "border-box" }}
        >
          <div
            className="col-12 col-sm-6 col-md-5 d-flex align-items-center m-0"
            style={
              {
                // backgroundColor: "#656262",
              }
            }
          >
            <img
              src={profile.imageUrl}
              className="img-fluid m-auto"
              alt="Profile picture"
              style={{
                width: "14rem",
                height: "14rem",
                objectFit: "cover",
              }}
            />
          </div>

          <div className="col-10 col-sm-6 col-md-7 m-auto">
            <div className="card-body p-1">
              <div className="d-flex align-items-center justify-content-start mb-2">
                <span
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "400",
                    fontFamily: "Lustria, serif",
                  }}
                >
                  Matri ID: {profile.id}
                </span>
              </div>

              <p className={`card-text m-1 d-flex ${style.textSm}`}>
                <span className="text-secondary w-50">Clan</span>
                <span className="fw-bold w-50">{profile.clan}</span>
              </p>

              <p className={`card-text m-1 d-flex ${style.textSm}`}>
                <span className="text-secondary w-50">Age</span>
                <span className="fw-bold w-50">{profile.age} years old</span>
              </p>

              <p className={`card-text m-1 d-flex ${style.textSm}`}>
                <span className="text-secondary w-50">Location</span>
                <span className="fw-bold w-50">{profile.location}</span>
              </p>

              <p className={`card-text m-1 d-flex ${style.textSm}`}>
                <span className="text-secondary w-50">High. Education</span>
                <span className="fw-bold w-50">{profile.education}</span>
              </p>

              <p className={`card-text m-1 d-flex ${style.textSm}`}>
                <span className="text-secondary w-50">Occupation</span>
                <span className="fw-bold w-50">{profile.occupation}</span>
              </p>

              <p className={`card-text m-1 d-flex ${style.textSm}`}>
                <span className="text-secondary w-50">Class</span>
                <span className="fw-bold w-50">{profile.class}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
