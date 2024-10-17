import React from "react";
import CanvasNavbar from "../components/CanvasNavbar";
import CanvasLeftSidebar from "../components/CanvasLeftSidebar";
import CanvasRightSidebar from "../components/CanvasRightSidebar";
import ThreeCanvas from "../components/Canvas";
import CanvasToolNavbar from "../components/CanvasToolNavbar";
import "../css/CanvasPage.css";
import CanvasFooter from "../components/CanvasFooter";

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
