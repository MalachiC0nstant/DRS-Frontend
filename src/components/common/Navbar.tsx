import React, { useState } from "react";
import "../../css/common/Navbar.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import searchIcon from "../../assets/searchIcon.svg";
import ProfilePicturePlaceholder from "../../assets/ProfilePicturePlaceholder.png";

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleProfileClick = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLogout = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8081/logoutUser",
        {},
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "*/*",
          },
          withCredentials: true,
        }
      );
      console.log("Logout successful");
      navigate("/");
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return (
    <div className="navbar">
      <div className="navbar-left-corner">
        <div className="navbar-title" onClick={() => navigate("/")}>
          Digital Route Setter
        </div>
      </div>
      <div className="navbar-center">
        <div className="search-box">
          <input
            type="search"
            placeholder="Search for projects"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <img src={searchIcon} alt="Search Icon" className="search-icon" />
        </div>
      </div>

      <div className="navbar-right">
        <div>Help</div>
        <div>Upgrade</div>
        <div className="profile-section">
          <img
            src={ProfilePicturePlaceholder}
            alt="Profile"
            className="profile-picture"
            onClick={handleProfileClick}
          />
          {dropdownOpen && (
            <div className="profile-dropdown">
              <ul>
                <li onClick={() => navigate("/profile")}>Profile</li>
                <li onClick={() => navigate("/settings")}>Settings</li>
                <li onClick={() => navigate("/notifications")}>
                  Notifications
                </li>
                <li onClick={handleLogout}>Logout</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
