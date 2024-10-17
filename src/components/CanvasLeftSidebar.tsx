import React, { useState, useEffect } from "react";
import "../css/CanvasLeftSidebar.css";

const LeftSidebar: React.FC = () => {
  const [sidebarWidth, setSidebarWidth] = useState(200);
  const [isResizing, setIsResizing] = useState(false);

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsResizing(true);
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (e: MouseEvent) => {
    const newWidth = e.clientX;
    setSidebarWidth(newWidth > 100 ? newWidth : 100);
  };

  const handleMouseUp = () => {
    setIsResizing(false);
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--sidebar-width",
      `${sidebarWidth}px`
    );
  }, [sidebarWidth]);

  return (
    <div className="left-sidebar" style={{ width: `${sidebarWidth}px` }}>
      <div className="sidebar-content">
        <button className="shape-btn">Shape 1</button>
        <button className="shape-btn">Shape 2</button>
      </div>
      <div className="sidebar-resizer" onMouseDown={handleMouseDown}></div>
    </div>
  );
};

export default LeftSidebar;
