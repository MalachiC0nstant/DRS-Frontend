import React from "react";
import "../css/CanvasNavbar.css";

const CanvasNavbar: React.FC = () => {
  return (
    <nav className="canvas-navbar">
      <div className="canvas-navbar-logo">Canvas Navbar</div>
      <ul className="canvas-navbar-actions">
        <li>
          <button>Save</button>
        </li>
        <li>
          <button>Undo</button>
        </li>
        <li>
          <button>Redo</button>
        </li>
      </ul>
    </nav>
  );
};

export default CanvasNavbar;
