import React from "react";
import Navbar from "../components/Navbar";
import "../css/MainPage.css";

const MainPage: React.FC = () => {
  return (
    <div className="main-page">
      <Navbar />

      <div className="main-content">
        <div className="left-sidebar">
          <div className="big-button">
            <button className="sidebar-big-btn">New Canvas</button>
          </div>

          <div className="sidebar-section">
            <ul>
              <li>Home</li>
              <li>Recent</li>
              <li>Starred</li>
            </ul>
          </div>

          <div className="sidebar-section">
            <ul>
              <li className="community-dropdown">
                <button className="community-btn">Community ▼</button>
              </li>
              <li>Filler 2</li>
              <li>Filler 3</li>
            </ul>
          </div>
        </div>

        <div className="page-content">
          <h1>Main Page</h1>
          <p>Welcome to the Climbing App</p>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
