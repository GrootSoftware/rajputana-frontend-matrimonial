import React from "react";
import style from "./Profile.module.css";

const ProfileInfoHeader = () => {
  return (
    <div className="border pt-2 pb-3 bg-white">
      <div className="d-flex justify-content-evenly align-items-end row m-0">
        {/* Left Section */}
        <div className="col-md-1"></div>
        <div className=" col-md-4  mt-5 mt-sm-1 accordion text-center">
          <p className="mb-1 fw-bold text-muted small" style={{ fontFamily: "serif" }}>
            Matri ID: <span className="text-warning">8647 </span>
            <span className="text-dark ml-2">30 Years</span>
          </p>

          <h3 className="mb-0">Gaurav Singh</h3>
        </div>

        {/* Right Section */}
        <div className="col-md-7 d-flex justify-content-evenly flex-wrap">
          <div className="col-md-2">
            <p className="mb-1 text-muted small">Birth Date:</p>
            <p className="mb-1 fw-bold text-dark">09 Sep, 1996</p>
          </div>
          <div className="col-md-3">
            <p className="mb-1 text-muted small">Mobile Number:</p>
            <p className="mb-1 fw-bold text-dark">1245787825</p>
          </div>
          <div className="">
            <p className="mb-1 text-muted small">Email ID:</p>
            <p className="mb-1 fw-bold text-dark">rajendrasingh@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfoHeader;
