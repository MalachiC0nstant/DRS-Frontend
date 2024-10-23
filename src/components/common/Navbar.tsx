import React from "react";
import "../../css/common/Navbar.css";
import searchIcon from "../../assets/searchIcon.svg";

const Navbar: React.FC = () => {
  return (
    <div className="navbar">
      <div className="navbar-left-corner">
        <div className="navbar-title">Digital Route Setter</div>
      </div>
      <div className="navbar-search">
        <img src={searchIcon} alt="Search" className="search-icon" />
        <input
          type="text"
          placeholder="Search for Projects, Templates, Communities"
        />
      </div>
      <div className="navbar-right">
        <div>Help</div>
        <div>Upgrade</div>
        <div>Login</div>
      </div>
    </div>
  );
};

export default Navbar;
