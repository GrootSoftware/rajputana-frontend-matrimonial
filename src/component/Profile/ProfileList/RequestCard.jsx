import React from "react";
import style from "./RequestCard.module.css";


import MessageCard from "../Forms/MessageCard";
import { useState } from "react";

import {
  FaTrashAlt,
  FaEye,
  FaBell,
  FaEnvelope,
  FaCheckCircle,
  FaPlusCircle,
} from "react-icons/fa";

const RequestCard = ({ profile, handlecheck, key }) => {
  const [showMessageCard, setShowMessageCard] = useState(false);

  const openMessageCard = () => {
    setShowMessageCard(true);
  };

  const closeMessageCard = () => {
    setShowMessageCard(false);
  };

  return (
    <div className="col-lg-6 mb-3 ">
      <div className="card rounded-0 shadow-sm border-0">
        <div
          className="col-12 col-sm-12 row g-0 m-auto p-2"
          style={{ borderBottom: "1px solid gray" }}
        >
          <div className="col-10 col-sm-5 m-auto">
            <img
              src={profile.imageUrl}
              className={style.imgSize}
              alt="Profile picture"
            />

            <div
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
            </div>
          </div>

          <div className="col-sm-7 col-10 m-auto">
            <div className="card-body">
              <div class="d-flex align-items-center">
                <span
                  style={{
                    fontSize: "1.3rem",
                    fontFamily: "'Times New Roman', Times, serif",
                  }}
                >
                  Matri ID: 6589
                </span>
                <StatusTag text={profile.status} />
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

        <ActionButtons
          status={profile.status}
          openMessageCard={openMessageCard}
        />
      </div>
      {showMessageCard && (
        <MessageCard closeMessageCard={closeMessageCard} profile={profile} />
      )}
    </div>
  );
};

export default RequestCard;

const ActionButtons = ({ status, openMessageCard }) => {
  const renderButtons = () => {
    switch (status) {
      case "pending":
        return (
          <>
            <div
              style={{
                width: "25%",
                // border: "1px solid gray",
                textAlign: "center",
                boxSizing: "border-box",
              }}
              className="p-3 border-1"
            >
              <FaTrashAlt /> Delete
            </div>

            <div
              style={{
                width: "25%",
                borderLeft: "1px solid gray",
                textAlign: "center",
                boxSizing: "border-box",
              }}
              className="p-3"
            >
              <FaEye /> View
            </div>

            <div
              style={{
                width: "25%",
                borderLeft: "1px solid gray",
                textAlign: "center",
                boxSizing: "border-box",
              }}
              className="p-3"
            >
              <FaBell /> Reminder
            </div>

            <div
              style={{
                width: "25%",
                borderLeft: "1px solid gray",
                textAlign: "center",
                boxSizing: "border-box",
              }}
              className="p-3"
              onClick={openMessageCard}
            >
              <FaEnvelope /> Message
            </div>
          </>
        );

      case "rejected":
        return (
          <>
            <div
              style={{
                width: "50%",
                // border: "1px solid gray",
                textAlign: "center",
                boxSizing: "border-box",
              }}
              className="p-3"
            >
              <FaTrashAlt /> Delete
            </div>

            <div
              style={{
                width: "50%",
                borderLeft: "1px solid gray",
                textAlign: "center",
                boxSizing: "border-box",
              }}
              className="p-3"
            >
              <FaEye /> View
            </div>
          </>
        );

      case "accepted":
        return (
          <>
            <div
              style={{
                width: "33.33%",
                // border: "1px solid gray",
                textAlign: "center",
                boxSizing: "border-box",
              }}
              className="p-3"
            >
              <FaTrashAlt /> Delete
            </div>

            <div
              style={{
                width: "33.33%",
                borderLeft: "1px solid gray",
                textAlign: "center",
                boxSizing: "border-box",
              }}
              className="p-3"
            >
              <FaEye /> View
            </div>

            <div
              style={{
                width: "33.33%",
                borderLeft: "1px solid gray",
                textAlign: "center",
                boxSizing: "border-box",
              }}
              className="p-3"
            >
              <FaEnvelope /> Send Message
            </div>
          </>
        );

      case "null":
        return (
          <>
            <div
              style={{
                width: "33.33%",
                // border: "1px solid gray",
                textAlign: "center",
                boxSizing: "border-box",
              }}
              className="p-3"
            >
              <FaEye /> View
            </div>
            <div
              style={{
                width: "33.33%",
                borderLeft: "1px solid gray",
                textAlign: "center",
                boxSizing: "border-box",
              }}
              className="p-3"
            >
              <FaCheckCircle /> Shortlist
            </div>
            <div
              style={{
                width: "33.33%",
                borderLeft: "1px solid gray",
                textAlign: "center",
                boxSizing: "border-box",
              }}
              className="p-3"
              onClick={openMessageCard}
            >
              <FaPlusCircle /> Send Request
            </div>
          </>
        );

      default:
        return null;
    }
  };

  return <div className="d-flex">{renderButtons()}</div>;
};

// StatusTag component (unchanged)
const StatusTag = ({ text }) => {
  let backgroundColor;
  switch (text) {
    case "pending":
      backgroundColor = "#f8a35b";
      break;
    case "rejected":
      backgroundColor = "#ff4d4d";
      break;
    case "accepted":
      backgroundColor = "#4caf50";
      break;
    default:
      backgroundColor = "#f8a35b";
  }
  return (
    <span
      className="textSm ms-1"
      style={{
        backgroundColor,
        color: "white",
        borderRadius: "1rem",
        padding: "0.1rem 0.5rem",
        fontSize: "0.8rem",
      }}
    >
      {text}
    </span>
  );
};

// export default ActionButtons;
