// import React from "react";
// import style from "./RequestCard.module.css";

// import MessageCard from "../Forms/MessageCard";
// import { useState } from "react";

// import {
//   FaTrashAlt,
//   FaEye,
//   FaBell,
//   FaEnvelope,
//   FaCheckCircle,
//   FaPlusCircle,
// } from "react-icons/fa";

// const RequestCard = ({ profile, handlecheck, key }) => {
//   const [showMessageCard, setShowMessageCard] = useState(false);

//   const openMessageCard = () => {
//     setShowMessageCard(true);
//   };

//   const closeMessageCard = () => {
//     setShowMessageCard(false);
//   };

//   return (
//     <>
//       <div
//         className="col-10 col-sm-9 col-md-6 col-xl-6 mt-1 p-0 m-auto"
//         style={{ boxSizing: "border-box", marginInline: "0rem" }}
//       >
//         <div className="card shadow-sm border-0 rounded-0">
//           <div
//             className="row g-0 p-1"
//             style={{
//               boxSizing: "border-box",
//               borderBottom: "2px solid gray",
//               minWidth: "13rem",
//               width: "100%",
//               Height: "13rem",
//               objectFit: "cover",
//             }}
//           >
//             <div className="col-10 col-sm-6 col-md-5 d-flex align-items-center m-0 p-0">
//               <img
//                 src={profile.imageUrl}
//                 className="img-fluid m-auto"
//                 alt="Profile picture"
//               />
//             </div>

//             <div className="col-10 col-sm-6 col-md-7 m-auto">
//               <div className="card-body p-1">
//                 <div className="d-flex align-items-center justify-content-start mb-2">
//                   <span
//                     style={{
//                       fontSize: "1.5rem",
//                       fontWeight: "400",
//                       fontFamily: "Lustria, serif",
//                     }}
//                   >
//                     Matri ID: {profile.id}
//                   </span>
//                   <StatusTag text={profile.status} />
//                 </div>

//                 <p className={`card-text m-1 d-flex ${style.textSm}`}>
//                   <span className="text-secondary w-50">Clan</span>
//                   <span className="fw-bold w-50">{profile.clan}</span>
//                 </p>

//                 <p className={`card-text m-1 d-flex ${style.textSm}`}>
//                   <span className="text-secondary w-50">Age</span>
//                   <span className="fw-bold w-50">{profile.age} years old</span>
//                 </p>

//                 <p className={`card-text m-1 d-flex ${style.textSm}`}>
//                   <span className="text-secondary w-50">Location</span>
//                   <span className="fw-bold w-50">{profile.location}</span>
//                 </p>

//                 <p className={`card-text m-1 d-flex ${style.textSm}`}>
//                   <span className="text-secondary w-50">High. Education</span>
//                   <span className="fw-bold w-50">{profile.education}</span>
//                 </p>

//                 <p className={`card-text m-1 d-flex ${style.textSm}`}>
//                   <span className="text-secondary w-50">Occupation</span>
//                   <span className="fw-bold w-50">{profile.occupation}</span>
//                 </p>

//                 <p className={`card-text m-1 d-flex ${style.textSm}`}>
//                   <span className="text-secondary w-50">Class</span>
//                   <span className="fw-bold w-50">{profile.class}</span>
//                 </p>
//               </div>
//             </div>
//           </div>
//           <ActionButtons
//             status={profile.status}
//             openMessageCard={openMessageCard}
//           />
//         </div>
//         {showMessageCard && (
//           <MessageCard closeMessageCard={closeMessageCard} profile={profile} />
//         )}
//       </div>
//     </>
//   );
// };

// export default RequestCard;

// const ActionButtons = ({ status, openMessageCard }) => {
//   const renderButtons = () => {
//     switch (status) {
//       case "pending":
//         return (
//           <>
//             <div
//               style={{
//                 width: "25%",
//                 textAlign: "center",
//                 boxSizing: "border-box",
//               }}
//               className="p-3 border-2"
//             >
//               <FaTrashAlt />
//               <span className={style.actionText}> Delete</span>
//             </div>

//             <div
//               style={{
//                 width: "25%",
//                 borderLeft: "2px solid gray",
//                 textAlign: "center",
//                 boxSizing: "border-box",
//               }}
//               className="p-3"
//             >
//               <FaEye />
//               <span className={style.actionText}> View</span>
//             </div>

//             <div
//               style={{
//                 width: "25%",
//                 borderLeft: "2px solid gray",
//                 textAlign: "center",
//                 boxSizing: "border-box",
//               }}
//               className="p-3"
//             >
//               <FaBell />
//               <span className={style.actionText}> Reminder</span>
//             </div>

//             <div
//               style={{
//                 width: "25%",
//                 borderLeft: "2px solid gray",
//                 textAlign: "center",
//                 boxSizing: "border-box",
//               }}
//               className="p-3"
//               onClick={openMessageCard}
//             >
//               <FaEnvelope />
//               <span className={style.actionText}> Message</span>
//             </div>
//           </>
//         );

//       case "rejected":
//         return (
//           <>
//             <div
//               style={{
//                 width: "50%",
//                 textAlign: "center",
//                 boxSizing: "border-box",
//               }}
//               className="p-3"
//             >
//               <FaTrashAlt />
//               <span className={style.actionText}> Delete</span>
//             </div>

//             <div
//               style={{
//                 width: "50%",
//                 borderLeft: "2px solid gray",
//                 textAlign: "center",
//                 boxSizing: "border-box",
//               }}
//               className="p-3"
//             >
//               <FaEye />
//               <span className={style.actionText}> View</span>
//             </div>
//           </>
//         );

//       case "accepted":
//         return (
//           <>
//             <div
//               style={{
//                 width: "33.33%",
//                 textAlign: "center",
//                 boxSizing: "border-box",
//               }}
//               className="p-3"
//             >
//               <FaTrashAlt />
//               <span className={style.actionText}> Delete</span>
//             </div>

//             <div
//               style={{
//                 width: "33.33%",
//                 borderLeft: "2px solid gray",
//                 textAlign: "center",
//                 boxSizing: "border-box",
//               }}
//               className="p-3"
//             >
//               <FaEye />
//               <span className={style.actionText}> View</span>
//             </div>

//             <div
//               style={{
//                 width: "33.33%",
//                 borderLeft: "2px solid gray",
//                 textAlign: "center",
//                 boxSizing: "border-box",
//               }}
//               className="p-3"
//             >
//               <FaEnvelope />
//               <span className={style.actionText}> Send Message</span>
//             </div>
//           </>
//         );

//       case "null":
//         return (
//           <>
//             <div
//               style={{
//                 width: "33.33%",
//                 textAlign: "center",
//                 boxSizing: "border-box",
//               }}
//               className="p-3"
//             >
//               <FaEye />
//               <span className={style.actionText}> View</span>
//             </div>
//             <div
//               style={{
//                 width: "33.33%",
//                 borderLeft: "2px solid gray",
//                 textAlign: "center",
//                 boxSizing: "border-box",
//               }}
//               className="p-3"
//             >
//               <FaCheckCircle />
//               <span className={style.actionText}> Shortlist</span>
//             </div>
//             <div
//               style={{
//                 width: "33.33%",
//                 borderLeft: "2px solid gray",
//                 textAlign: "center",
//                 boxSizing: "border-box",
//               }}
//               className="p-3"
//               onClick={openMessageCard}
//             >
//               <FaPlusCircle />
//               <span className={style.actionText}> Send Request</span>
//             </div>
//           </>
//         );

//       default:
//         return null;
//     }
//   };

//   return <div className="d-flex">{renderButtons()}</div>;
// };

// StatusTag component (unchanged)
// const StatusTag = ({ text }) => {
//   let backgroundColor;
//   switch (text) {
//     case "pending":
//       backgroundColor = "#f8a35b";
//       break;
//     case "rejected":
//       backgroundColor = "#ff4d4d";
//       break;
//     case "accepted":
//       backgroundColor = "#4caf50";
//       break;
//     default:
//       backgroundColor = "#f8a35b";
//   }
//   return (
//     <span
//       className="textSm ms-1"
//       style={{
//         backgroundColor,
//         color: "white",
//         borderRadius: "1rem",
//         padding: "0.1rem 0.5rem",
//         fontSize: "0.8rem",
//       }}
//     >
//       {text}
//     </span>
//   );
// };

// export default ActionButtons;

//jhhhh

import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./RequestCard.module.css";
import MessageCard from "../Forms/MessageCard";
import {
  FaTrashAlt,
  FaEye,
  FaBell,
  FaEnvelope,
  FaCheckCircle,
  FaPlusCircle,
} from "react-icons/fa";

const RequestCard = ({ profile, handlecheck }) => {
  const [showMessageCard, setShowMessageCard] = useState(false);

  const openMessageCard = () => setShowMessageCard(true);
  const closeMessageCard = () => setShowMessageCard(false);

  const renderProfileDetails = () => {
    const details = [
      { label: "Clan", value: profile.clan },
      { label: "Age", value: `${profile.age} years old` },
      { label: "Location", value: profile.location },
      { label: "High. Education", value: profile.education },
      { label: "Occupation", value: profile.occupation },
      { label: "Class", value: profile.class },
    ];

    return details.map(({ label, value }, index) => (
      <div key={index} className={`card-text m-1 d-flex ${styles.textSm}`}>
        <span className="text-secondary w-50">{label}</span>
        <span className="w-50">{value}</span>
      </div>
    ));
  };

  return (
    <div className="col-10 col-sm-9 col-md-6 col-xl-6 mt-1 p-0 m-auto">
      <div className="card shadow-sm border-0 rounded-0">
        <div className="row g-0 p-1" style={{ borderBottom: "1px solid gray" }}>
          <div className="col-10 col-sm-6 col-md-5 d-flex align-items-center m-auto">
            <img
              src={profile.imageUrl}
              className="img-fluid m-auto"
              alt="Profile"
              style={{
                width: "100%",
                // minWidth: "14rem",
                maxHeight: "14rem",
                objectFit: "cover",
              }}
            />
          </div>

          <div className="col-10 col-sm-6 col-md-7 m-auto">
            <div className="card-body p-1">
              <div className="d-flex align-items-center justify-content-start mb-2">
                <span className={`${styles.textLg}`}>
                  Matri ID: {profile.id}
                </span>
                <StatusTag text={profile.status} />
              </div>
              {renderProfileDetails()}
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

RequestCard.propTypes = {
  profile: PropTypes.shape({
    id: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    clan: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    location: PropTypes.string.isRequired,
    education: PropTypes.string.isRequired,
    occupation: PropTypes.string.isRequired,
    class: PropTypes.string.isRequired,
  }).isRequired,
  handlecheck: PropTypes.func,
};

const ActionButtons = ({ status, openMessageCard }) => {
  const buttonConfig = {
    pending: [
      { icon: <FaTrashAlt />, label: "Delete" },
      { icon: <FaEye />, label: "View" },
      { icon: <FaBell />, label: "Reminder" },
      { icon: <FaEnvelope />, label: "Message", onClick: openMessageCard },
    ],
    rejected: [
      { icon: <FaTrashAlt />, label: "Delete" },
      { icon: <FaEye />, label: "View" },
    ],
    accepted: [
      { icon: <FaTrashAlt />, label: "Delete" },
      { icon: <FaEye />, label: "View" },
      { icon: <FaEnvelope />, label: "Send Message" },
    ],
    null: [
      { icon: <FaEye />, label: "View" },
      { icon: <FaCheckCircle />, label: "Shortlist" },
      {
        icon: <FaPlusCircle />,
        label: "Send Request",
        onClick: openMessageCard,
      },
    ],
  };

  return (
    <div className="d-flex">
      {buttonConfig[status]?.map(({ icon, label, onClick }, index) => (
        <div
          key={index}
          className={`p-3 ${index > 0 ? "borderLeft" : ""}`}
          style={{
            width: `${100 / buttonConfig[status].length}%`,
            textAlign: "center",
            borderLeft: index > 0 ? "1px solid gray" : "none",
          }}
          onClick={onClick}
        >
          {icon}
          <span className={styles.actionText}> {label}</span>
        </div>
      ))}
    </div>
  );
};

ActionButtons.propTypes = {
  status: PropTypes.string.isRequired,
  openMessageCard: PropTypes.func.isRequired,
};

const StatusTag = ({ text }) => {
  const colors = {
    pending: "#f8a35b",
    rejected: "#ff4d4d",
    accepted: "#4caf50",
    default: "#f8a35b",
  };

  return (
    <span
      style={{
        backgroundColor: colors[text] || colors.default,
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

StatusTag.propTypes = {
  text: PropTypes.string.isRequired,
};

export default RequestCard;
