import React from "react";
import "./Profile.css";
import "../../../assets/fonts/font.css";

const BasicDetails = () => {
  return (
    <div className="basic-details">
      <div className="flex justify-between">
        <h3 className="font-open-sans">Basic Details</h3>
        <div className="edit">
          <i className="fas fa-edit"></i> EDIT
        </div>
      </div>
      <div className="details-grid">
        <div>
          <div className="text-sm text-gray-600">Name</div>
          <div className="text-md">Rajendra Singh Bhati</div>
        </div>
        <div>
          <div className="text-sm text-gray-600">Weight</div>
          <div className="text-md">75 kg</div>
        </div>
        <div>
          <div className="text-sm text-gray-600">Sub Caste</div>
          <div className="text-md">Singh</div>
        </div>
        <div>
          <div className="text-sm text-gray-600">Complexion</div>
          <div className="text-md">Fair</div>
        </div>
        <div>
          <div className="text-sm text-gray-600">Height</div>
          <div className="text-md">5ft 2in</div>
        </div>
        <div>
          <div className="text-sm text-gray-600">Body Type</div>
          <div className="text-md">Average</div>
        </div>
      </div>
    </div>
  );
};

export default BasicDetails;
