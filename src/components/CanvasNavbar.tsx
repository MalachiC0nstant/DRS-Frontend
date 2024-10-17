import React from "react";
import "../css/CanvasNavbar.css";

const CanvasNavbar: React.FC = () => {
  return (
    <nav className="canvas-navbar">
      <ul className="navbar-left">
        <li>File</li>
        <li>Edit</li>
        <li>View</li>
        <li>Arrange</li>
        <li>Extras</li>
        <li>Help</li>
      </ul>

      <div className="navbar-center">
        <button>Save your work</button>
      </div>

      <div className="navbar-right">
        <button className="light-mode-btn">Light</button>
      </div>
    </nav>
  );
};

export default CanvasNavbar;
