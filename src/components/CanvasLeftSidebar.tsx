import React from "react";
import "../css/CanvasLeftSidebar.css";

const CanvasLeftSidebar: React.FC = () => {
  return (
    <div className="canvas-left-sidebar">
      <h3>Tools</h3>
      <ul>
        <li>
          <button>Shape 1</button>
        </li>
        <li>
          <button>Shape 2</button>
        </li>
      </ul>
    </div>
  );
};

export default CanvasLeftSidebar;
