import React, { useState } from "react";
import "../css/CanvasRightSidebar.css";

const CanvasRightSidebar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  const toggleSidebar = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <button className="toggle-sidebar-btn" onClick={toggleSidebar}>
        {isVisible ? "Close Properties" : "Open Properties"}
      </button>
      {isVisible && (
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
      )}
    </>
  );
};

export default CanvasRightSidebar;
