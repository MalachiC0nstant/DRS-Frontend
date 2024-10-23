import React, { useState } from "react";
import "../../css/canvas_page/SidebarShapes.css";

interface SidebarShapesProps {
  title: string;
}

const SiderbarShapes: React.FC<SidebarShapesProps> = ({ title }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sidebar-shapes">
      <div className="shapes-header" onClick={toggleDropdown}>
        <h4>{title}</h4>
        <span>{isOpen ? "▲" : "▼"}</span>
      </div>
      {isOpen && (
        <div className="shapes-content">
          <button>Shape 1</button>
          <button>Shape 2</button>
          {/* Internal shapes */}
        </div>
      )}
    </div>
  );
};

export default SiderbarShapes;
