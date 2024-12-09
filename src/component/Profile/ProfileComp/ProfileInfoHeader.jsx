import React from "react";

const ProfileInfoHeader = () => {
  return (
    <div className="profile-details">
      <div className="info-header">
        <div className="info">
          <div className="text-sm text-gray-600">
            Matri ID: <span className="text-orange-600">8647</span>
            <span className="text-lg text-gray-600">30 Years</span>
          </div>
          <h3 className="mt-0">Gaurav Singh</h3>
        </div>

        <div className="text-right">
          <div>
            <div className="text-sm text-gray-600">Birth Date:</div>
            <div className="text-lg">09 Sep, 1996</div>
          </div>
          <div>
            <div className="text-sm text-gray-600">mobile Number:</div>
            <div className="text-lg">1245787825</div>
          </div>
          <div>
            <div className="text-sm text-gray-600">Email ID:</div>
            <div className="text-lg">rajendrasingh@gmail.com</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfoHeader;
