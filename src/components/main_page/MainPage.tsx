import React, { useState } from "react";
import Navbar from "../common/Navbar";
import MainPageContent from "./MainPageContent";
import NewProjectForm from "./NewProjectForm";
import "../../css/main_page/MainPage.css";

const MainPage: React.FC = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleNewCanvasClick = () => {
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
  };

  return (
    <div className="main-page">
      <Navbar />

      <div className="main-content">
        <div className="left-sidebar">
          <div className="big-button">
            <button className="sidebar-big-btn" onClick={handleNewCanvasClick}>
              New Canvas
            </button>
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
          <MainPageContent />
        </div>
      </div>
      {isFormOpen && <NewProjectForm onClose={closeForm} />}
    </div>
  );
};

export default MainPage;
