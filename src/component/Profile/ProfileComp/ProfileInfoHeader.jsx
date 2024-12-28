import React from "react";
import style from "./Profile.module.css";
import ProfileHeader from "./ProfileHeader";

const ProfileInfoHeader = () => {
  return (
    <div className="border pb-3 bg-white text-right">
      <ProfileHeader />
      <div className="d-flex row p-0 m-0">
        <div
          className={`col-12 col-md-8 col-lg-5 mt-md-2 accordion ${style.Relative}`}
        >
          <p className="mb-1">
            <span
              className=""
              style={{
                fontfamily: "Open Sans, sans-serif",
                fontWeight: "400",
                fontSize: "1rem",
                padding: "0.2rem 0.7rem",
                color: "rgba(153, 37, 37, 1)",
                backgroundColor: "rgba(248, 235, 210, 1)",
              }}
            >
              {" "}
              Matri ID: 8647
            </span>
            <span
              style={{
                fontSize: "0.875rem",
                fontFamily: "Open Sans, sans-serif",
                fontWeight: "700",
                color: "rgba(119, 119, 119, 1)",
              }}
            >
              {" "}
              30 Years
            </span>
          </p>

          <div
            className="mb-0"
            style={{
              fontFamily: "Lustria, serif ",
              fontWeight: "400",
              fontSize: "1.75rem",
            }}
          >
            Gaurav Singh Solanki
          </div>
        </div>

        {/* Right Section */}
        <div className="col-lg-7 d-flex justify-content-evenly flex-wrap mt-2">
          <div className="col-md-2">
            <p
              className="mb-1"
              style={{
                fontFamily: "Open Sans, sans-serif",
                fontWeight: "400",
                fontSize: "0.75rem",
                color: "rgba(122, 121, 115, 1)",
              }}
            >
              Birth Date:
            </p>
            <p
              className="mb-1"
              style={{
                fontFamily: "Open Sans, sans-serif",
                fontWeight: "400",
                fontSize: "1rem",
              }}
            >
              09 Sep, 1996
            </p>
          </div>
          <div className="col-md-2">
            <p
              className="mb-1"
              style={{
                fontFamily: "Open Sans, sans-serif",
                fontWeight: "400",
                fontSize: "0.75rem",
                color: "rgba(122, 121, 115, 1)",
              }}
            >
              Mobile Number:
            </p>
            <p
              className="mb-1"
              style={{
                fontFamily: "Open Sans, sans-serif",
                fontWeight: "400",
                fontSize: "1rem",
              }}
            >
              9587481609
            </p>
          </div>
          <div className="col-md-2">
            <p
              className="mb-1"
              style={{
                fontFamily: "Open Sans, sans-serif",
                fontWeight: "400",
                fontSize: "0.75rem",
                color: "rgba(122, 121, 115, 1)",
              }}
            >
              Email ID:
            </p>
            <p
              className="mb-1"
              style={{
                fontFamily: "Open Sans, sans-serif",
                fontWeight: "400",
                fontSize: "1rem",
              }}
            >
              gauravpanahera@gmail
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfoHeader;
