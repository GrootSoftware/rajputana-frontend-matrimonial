import React from "react";
import "./ShortListedProfile.css";
import { FaRegBookmark } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";

function ProfileCard({ profile, handleDelete }) {
  return (
    <div key={profile.id} className="profileCard">
      
      <div className="profileInfo">
        <img
          src={profile.imageUrl}
          alt={profile.imgAlt}
          className="profileImage"
        />
        <div>
          <div className="matrId">Matr ID: {profile.id}</div>
          <div className="profileName">{profile.name}</div>
        </div>
      </div>

      <div className="profileDetails">
        <div className="detailItems">
          <div className="detailLabel">Birthdate</div>
          <div className="detailValue">23 July, 1999 (26year)</div>
        </div>
        <div className="detailItems">
          <div className="detailLabel">Age</div>
          <div className="detailValue">{profile.age}</div>
        </div>
        <div className="detailItems">
          <div className="detailLabel">Height</div>
          <div className="detailValue">
            {profile.height ? profile.height : "N/A"}
          </div>
        </div>
        <div className="detailItems">
          <div className="detailLabel">Shortlisted Date</div>
          <div className="detailValue">23 July, 2024</div>
        </div>
        <div className="actions">
          <FaRegBookmark
            className="actionIcon"
            onClick={() => handleDelete(profile.id)}
          />
        </div>
        <div className="actions">
          <AiOutlineDelete
            className="actionIcon"
            onClick={() => handleDelete(profile.id)}
          />
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
