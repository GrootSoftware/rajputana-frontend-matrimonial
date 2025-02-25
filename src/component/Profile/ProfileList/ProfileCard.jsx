import React from "react";
import "./ShortListedProfile.css";

import { formatDate, calculateAge } from "../ProfileComp/ProfileInfoHeader";
import { useParams, useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

function ProfileCard({
  element,
  handleDelete,
  ProfileImagerender,
  handleBookmark,
}) {
  const navigate = useNavigate();

  const handleView = (profileId) => {
    console.log(profileId);
    navigate(`view/${profileId}`);
  };

  return (
    <div key={element?._id} className="profileCard">
      <div className="profileInfo">
        {element?.profile && <ProfileImagerender profile={element?.profile} />}

        <div>
          <div className="matrId">Matr ID: {element?.profile?.martrId}</div>
          <div className="profileName">
            {`${element?.profile?.firstName} ${element?.profile?.middleName} ${element?.profile?.lastName}`}
          </div>
        </div>
      </div>

      <div className="profileDetails">
        <div className="detailItems">
          <div className="detailLabel">Birthdate</div>
          <div className="detailValue">
            {formatDate(element?.profile?.dateOfBirth)}
          </div>
        </div>
        <div className="detailItems">
          <div className="detailLabel">Age</div>
          <div className="detailValue">
            {calculateAge(element?.profile?.dateOfBirth)} Years
          </div>
        </div>
        <div className="detailItems">
          <div className="detailLabel">Height</div>
          <div className="detailValue">
            {`${element?.profile.height?.feet}'${element?.profile.height?.inches}"`}
          </div>
        </div>
        <div className="detailItems">
          <div className="detailLabel">Shortlisted Date</div>
          <div className="detailValue">
            {formatDate(element?.dateShortlisted)}
          </div>
        </div>
        <div className={`${element.isbookmarked ? "bookmarked" : "actions"}`}>
          <MdDelete
            className="actionIcon"
            onClick={() => handleDelete(element?.profile._id)}
          />
        </div>
        <div className="actions">
          <FaEye
            className="actionIcon"
            onClick={() => handleView(element?.profile?._id)}
          />
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
