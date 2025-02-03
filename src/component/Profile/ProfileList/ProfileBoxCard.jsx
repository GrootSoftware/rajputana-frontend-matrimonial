import React, { useEffect } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import style from "./RequestCard.module.css";
import { formatDate, calculateAge } from "../ProfileComp/ProfileInfoHeader";

const ProfileBoxCard = ({ profile, handlecheck, key, ProfileImagerender }) => {
  useEffect(() => {
    console.log(profile);
  }, []);

  return (
    <div
      className="col-11 col-sm-11 col-md-6 col-xl-6 mb-2 mt-1 p-0 p-sm-1 m-auto"
      style={{ boxSizing: "border-box" }}
      key={key}
    >
      <div className="card shadow-sm border-0 rounded-0">
        <div
          className="row g-0 m-md-1 p-1 p-md-0"
          style={{ boxSizing: "border-box" }}
        >
          <div className="col-12 col-sm-6 col-md-5 d-flex align-items-center m-0">
            {profile && <ProfileImagerender profile={profile} />}
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
                  Matri ID: {profile?.martrId}
                </span>
              </div>

              <p className={`card-text m-1 d-flex ${style.textSm}`}>
                <span className="text-secondary w-50">Clan</span>
                <span className="fw-bold w-50">
                  {profile?.HoroscopicId?.clan}
                </span>
              </p>

              <p className={`card-text m-1 d-flex ${style.textSm}`}>
                <span className="text-secondary w-50">Age</span>
                <span className="fw-bold w-50">
                  {calculateAge(profile.dateOfBirth)} Years
                </span>
              </p>

              <p className={`card-text m-1 d-flex ${style.textSm}`}>
                <span className="text-secondary w-50">Location</span>
                <span
                  className="fw-bold w-50"
                  style={{
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >{`${profile.address?.city}${" "}${
                  profile.address?.state
                }`}</span>
              </p>

              <p className={`card-text m-1 d-flex ${style.textSm}`}>
                <span className="text-secondary w-50">High. Education</span>
                <span className="fw-bold w-50">
                  {profile.profdetailsId?.qualifications}
                </span>
              </p>

              <p className={`card-text m-1 d-flex ${style.textSm}`}>
                <span className="text-secondary w-50">Occupation</span>
                <span className="fw-bold w-50">
                  {profile.familydetailsId?.occupation}
                </span>
              </p>

              <p className={`card-text m-1 d-flex ${style.textSm}`}>
                <span className="text-secondary w-50">Class</span>
                <span className="fw-bold w-50">
                  {profile.profdetailsId?.class}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileBoxCard;
