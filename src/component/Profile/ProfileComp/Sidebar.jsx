import React, { useState } from "react";
import "./Profile.css";
import "./Sidebar.css";
import { AiOutlineMenu } from "react-icons/ai";

const Sidebar = ({ setActiveContent }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  // const [activeContent, setActiveContent] = useState("myDetails");

  return (
    <aside className={`sidebar ${isDropdownOpen ? "open" : ""}`}>
      <div
        className="dropdown-toggle"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        <AiOutlineMenu />
      </div>
      <ul className={`menu ${isDropdownOpen ? "show" : ""}`}>
        <li onClick={() => setActiveContent("myDetails")}>My Details</li>
        <li onClick={() => setActiveContent("shortlisted")}>
          Shortlisted Profile
        </li>
        <li onClick={() => setActiveContent("blocked")}>Blocked Profile</li>
        <li onClick={() => setActiveContent("viewed")}>Viewed Profile</li>
        <li onClick={() => setActiveContent("visited")}>
          People Visited My Profile
        </li>
        <li onClick={() => setActiveContent("interest")}>My Interest</li>
        <li onClick={() => setActiveContent("photo")}>Photo Request</li>
      </ul>
    </aside>
  );
};

export default Sidebar;
