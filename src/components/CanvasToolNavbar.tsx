import React from "react";
import "../css/CanvasToolNavbar.css";

const CanvasToolNavbar: React.FC = () => {
  return (
    <nav className="canvas-tool-navbar">
      <button>Zoom In</button>
      <button>Zoom Out</button>
      <button>Color</button>
    </nav>
  );
};

export default CanvasToolNavbar;
