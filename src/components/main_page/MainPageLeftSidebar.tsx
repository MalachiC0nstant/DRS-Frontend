import React from "react";
import "../../css/main_page/MainPageLeftSidebar.css";

const MainPageLeftSidebar: React.FC = () => {
  return (
    <div className="left-sidebar">
      <div className="sidebar-content">
        <ul>
          <li>Home</li>
          <li>Recent</li>
          <li>Starred</li>
          <li>Templates</li>
          {/* Add more sidebar items here*/}
        </ul>
      </div>
    </div>
  );
};

export default MainPageLeftSidebar;
