import React, { useEffect, useState } from "react";
import style from "./Profile.module.css";
import ProfileHeader from "./ProfileHeader";
import { useAuth } from "../../Layout/AuthContext";

const ProfileInfoHeader = () => {
  const { fetchUserData } = useAuth();
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchData = async () => {
    try {
      setLoading(true);
      setError("");
      const route = "user";
      const Data = await fetchUserData(route);

      const formattedDateOfBirth = Data?.dateOfBirth
        ? Data.dateOfBirth.split("T")[0]
        : "";

      setUserData({
        firstName: Data?.firstName || "",
        middleName: Data?.middleName || "",
        lastName: Data?.lastName || "",
        dateOfBirth: formattedDateOfBirth,
        mobile: Data?.mobile || "",
        email: Data?.email || "",
        martrId: Data?.martrId || "",
      });
    } catch (error) {
      setError("Failed to fetch user data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="d-flex justify-content-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return <div className="alert alert-danger">{error}</div>;
  }

  return (
    <div className="border pb-3 bg-white text-right">
      <ProfileHeader />

      <div className="d-flex row p-0 m-0">
        <div
          className={`col-12 col-md-8 col-lg-5 mt-md-2 accordion ${style.Relative}`}
        >
          <p className="mb-1">
            <span
              style={{
                fontFamily: "Open Sans, sans-serif",
                fontWeight: "400",
                fontSize: "1rem",
                padding: "0.2rem 0.7rem",
                color: "rgba(153, 37, 37, 1)",
                backgroundColor: "rgba(248, 235, 210, 1)",
              }}
            >
              Matri ID: {userData?.martrId}
            </span>
            <span
              style={{
                fontSize: "0.875rem",
                fontFamily: "Open Sans, sans-serif",
                fontWeight: "700",
                color: "rgba(119, 119, 119, 1)",
              }}
            >
              {calculateAge(userData?.dateOfBirth)} Years
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
            {`${userData?.firstName || ""} ${userData?.middleName || ""} ${
              userData?.lastName || ""
            }`}
          </div>
        </div>

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
                fontSize: "0.9rem",
              }}
            >
              {formatDate(userData?.dateOfBirth)}
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
              {userData?.mobile}
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
                fontSize: "0.9rem",
                wordWrap: "break-word",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {userData?.email}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export function calculateAge(dateOfBirth) {
  if (!dateOfBirth) return "N/A";
  const birthDate = new Date(dateOfBirth);
  const today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDifference = today.getMonth() - birthDate.getMonth();
  const dayDifference = today.getDate() - birthDate.getDate();

  if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
    age--;
  }

  return age;
}

export function formatDate(dateString) {
  if (!dateString) return "N/A";

  const date = new Date(dateString);
  if (isNaN(date)) return "Invalid Date";

  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();

  return `${day} ${month}, ${year}`;
}

export default ProfileInfoHeader;
