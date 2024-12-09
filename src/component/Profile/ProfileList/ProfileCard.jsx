import React from "react";
import "./ShortListedProfile.css";

function ProfileCard({ profile, handleDelete }) {
  return (
    <div key={profile.id} className="profile-card">
      <div className="profile-info">
        <img
          src={profile.imgSrc}
          alt={profile.imgAlt}
          className="profile-image"
        />
        <div>
          <div className="matr-id">Matr ID: {profile.matrimonyId}</div>
          <div className="profile-name">{profile.name}</div>
        </div>
      </div>
      <div className="profile-details">
        <div className="detail-items">
          <div className="detail-label">Age</div>
          <div className="detail-value">{profile.age}</div>
        </div>
        <div className="detail-items">
          <div className="detail-label">Height</div>
          <div className="detail-value">{profile.height}</div>
        </div>
        <div className="actions">
          <i className="fas fa-comment-dots action-icon"></i>
          <i
            className="fas fa-times-circle action-icon delete-icon"
            onClick={() => handleDelete(profile.id)}
          >
            Delete
          </i>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
