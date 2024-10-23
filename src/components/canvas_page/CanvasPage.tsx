import React from "react";
import CanvasNavbar from "./CanvasNavbar";
import CanvasLeftSidebar from "./CanvasLeftSidebar";
import CanvasRightSidebar from "./CanvasRightSidebar";
import ThreeCanvas from "./Canvas";
import CanvasToolNavbar from "./CanvasToolNavbar";
import CanvasFooter from "./CanvasFooter";
import "../../css/canvas_page/CanvasPage.css";

const CanvasPage: React.FC = () => {
  return (
    <div className="canvas-page">
      {/* Top Navbar */}
      <CanvasNavbar />

      {/* Tool Navbar */}
      <CanvasToolNavbar />

      {/* Main Content Area */}
      <div className="canvas-content">
        {/* Left Sidebar */}
        <CanvasLeftSidebar />

        {/* Canvas (Center) */}
        <div className="canvas-container">
          <ThreeCanvas />
        </div>

        {/* Right Sidebar */}
        <CanvasRightSidebar />
      </div>

      {/* Footer */}
      <CanvasFooter />
    </div>
  );
};

export default CanvasPage;
