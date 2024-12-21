import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import style from "./RequestCard.module.css";

const ProfileCard = ({ profile, handlecheck, key }) => {
  return (
    <div className="col-lg-6 mb-3 shadow-sm">
      <div className="card rounded-0 border-0">
        <div className="col-12 col-sm-12 col-md-12 row g-0 m-auto p-2">
          <div className="col-10 col-sm-5 m-auto">
            <img
              src={profile.imageUrl}
              className={style.imgSize}
              alt="Profile picture"
            />

            {/* <div
              className="unblock-checkbox mt-2"
              style={{
                position: "absolute",
                top: "0.3vw",
                left: "1vw",
              }}
            >
              <input
                type="checkbox"
                id={`unblock-${profile.id}`}
                style={{
                  width: "1rem",
                  height: "1rem",
                }}
                onChange={() => handlecheck(profile.id)}
              />
            </div> */}
          </div>

          <div className="col-sm-7 col-10 m-auto">
            <div className="card-body">
              <div class="d-flex align-items-center">
                <span
                  style={{
                    fontSize: "1.3rem",
                    fontFamily: "serif",
                  }}
                >
                  Matri ID: 6589
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
