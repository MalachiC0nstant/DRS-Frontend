import React from "react";
import CanvasNavbar from "./CanvasNavbar";
import CanvasLeftSidebar from "./CanvasLeftSidebar";
import CanvasRightSidebar from "./CanvasRightSidebar";
import ThreeCanvas from "./Canvas";
import CanvasToolNavbar from "./CanvasToolNavbar";
import CanvasFooter from "./CanvasFooter";
import { HoldProvider } from "./HoldContext";
import "../../css/canvas_page/CanvasPage.css";

const CanvasPage: React.FC = () => {
  return (
    <HoldProvider>
      <div className="canvas-page">
        <CanvasNavbar />
        <CanvasToolNavbar />
        <div className="canvas-content">
          <CanvasLeftSidebar />
          <div className="canvas-container">
            <ThreeCanvas />
          </div>
          <CanvasRightSidebar />
        </div>
        <CanvasFooter />
      </div>
    </HoldProvider>
  );
};

export default CanvasPage;
