import React from "react";
import "../css/CanvasToolNavbar.css";
import zoomInIcon from "../assets/zoom-in-lens-svgrepo-com.svg";
import zoomOutIcon from "../assets/zoom-out-svgrepo-com.svg";

const CanvasToolNavbar: React.FC = () => {
  return (
    <nav className="canvas-tool-navbar">
      <ul className="tool-actions">
        <li>
          <button className="tool-btn">
            <img src={zoomInIcon} alt="Zoom In" />
          </button>
        </li>
        <li>
          <button className="tool-btn">
            <img src={zoomOutIcon} alt="Zoom Out" />
          </button>
        </li>
        {/* More icons here*/}
      </ul>
    </nav>
  );
};

export default CanvasToolNavbar;
