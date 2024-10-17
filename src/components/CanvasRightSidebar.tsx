import React from "react";
import "../css/CanvasRightSidebar.css";

const CanvasRightSidebar: React.FC = () => {
  return (
    <div className="canvas-right-sidebar">
      <h3>Properties</h3>
      <ul>
        <li>
          <button>Property 1</button>
        </li>
        <li>
          <button>Property 2</button>
        </li>
      </ul>
    </div>
  );
};

export default CanvasRightSidebar;
