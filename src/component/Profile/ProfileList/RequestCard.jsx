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
    <>
      <div
        className="col-12 col-sm-9 col-md-6 col-xl-6 mt-2 p-0 p-sm-1  m-auto"
        style={{ boxSizing: "border-box", marginInline: "0rem" }}
      >
        <div className="card shadow-sm border-0 rounded-0">
          <div
            className="row g-0 m-md-0 p-md-1"
            style={{ boxSizing: "border-box", borderBottom: "2px solid gray" }}
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
    </>
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
                // border: "2px solid gray",
                textAlign: "center",
                boxSizing: "border-box",
              }}
              className="p-3 border-2"
            >
              <FaTrashAlt />
              <span> Delete</span>
            </div>

            <div
              style={{
                width: "25%",
                borderLeft: "2px solid gray",
                textAlign: "center",
                boxSizing: "border-box",
              }}
              className="p-3"
            >
              <FaEye /> <span>View</span>
            </div>

            <div
              style={{
                width: "25%",
                borderLeft: "2px solid gray",
                textAlign: "center",
                boxSizing: "border-box",
              }}
              className="p-3"
            >
              <FaBell /> <span>Reminder</span>
            </div>

            <div
              style={{
                width: "25%",
                borderLeft: "2px solid gray",
                textAlign: "center",
                boxSizing: "border-box",
              }}
              className="p-3"
              onClick={openMessageCard}
            >
              <FaEnvelope /> <span>Message</span>
            </div>
          </>
        );

      case "rejected":
        return (
          <>
            <div
              style={{
                width: "50%",
                // border: "2px solid gray",
                textAlign: "center",
                boxSizing: "border-box",
              }}
              className="p-3"
            >
              <FaTrashAlt /> <span>Delete</span>
            </div>

            <div
              style={{
                width: "50%",
                borderLeft: "2px solid gray",
                textAlign: "center",
                boxSizing: "border-box",
              }}
              className="p-3"
            >
              <FaEye />
              <span> View</span>
            </div>
          </>
        );

      case "accepted":
        return (
          <>
            <div
              style={{
                width: "33.33%",
                // border: "2px solid gray",
                textAlign: "center",
                boxSizing: "border-box",
              }}
              className="p-3"
            >
              <FaTrashAlt /> <span>Delete</span>
            </div>

            <div
              style={{
                width: "33.33%",
                borderLeft: "2px solid gray",
                textAlign: "center",
                boxSizing: "border-box",
              }}
              className="p-3"
            >
              <FaEye />
              <span> View</span>
            </div>

            <div
              style={{
                width: "33.33%",
                borderLeft: "2px solid gray",
                textAlign: "center",
                boxSizing: "border-box",
              }}
              className="p-3"
            >
              <FaEnvelope /> <span>Send Message</span>
            </div>
          </>
        );

      case "null":
        return (
          <>
            <div
              style={{
                width: "33.33%",
                // border: "2px solid gray",
                textAlign: "center",
                boxSizing: "border-box",
              }}
              className="p-3"
            >
              <FaEye /> <span>View</span>
            </div>
            <div
              style={{
                width: "33.33%",
                borderLeft: "2px solid gray",
                textAlign: "center",
                boxSizing: "border-box",
              }}
              className="p-3"
            >
              <FaCheckCircle /> <span>Shortlist</span>
            </div>
            <div
              style={{
                width: "33.33%",
                borderLeft: "2px solid gray",
                textAlign: "center",
                boxSizing: "border-box",
              }}
              className="p-3"
              onClick={openMessageCard}
            >
              <FaPlusCircle /> <span>Send Request</span>
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
