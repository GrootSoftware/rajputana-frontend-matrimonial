import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import "./Sidebar.css";

const Sidebar = ({ setActiveContent }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("");

  const handleItemClick = (item) => {
    setActiveItem(item);
    setActiveContent(item);
    setIsDropdownOpen(false); // Close dropdown on selection
  };

  return (
    <aside className="sidebar">
      <div
        className="dropdown-toggle"
        aria-expanded={isDropdownOpen}
      >
        <AiOutlineMenu    onClick={() => setIsDropdownOpen((prev) => !prev)}/>
      </div>

      <ul className={`menu ${isDropdownOpen ? "show" : ""}`}>
        {[
          { label: "My Details", value: "myDetails" },
          { label: "Shortlisted Profile", value: "shortlisted" },
          { label: "Viewed Profile", value: "viewed" },
          { label: "Visited Profile", value: "visited" },
          { label: "Interest Profile", value: "interest" },
          { label: "Photo Request", value: "request" },
        ].map((item) => (
          <li
            key={item.value}
            className={` ${activeItem === item.value ? "active" : ""}`}
            onClick={() => handleItemClick(item.value)}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
