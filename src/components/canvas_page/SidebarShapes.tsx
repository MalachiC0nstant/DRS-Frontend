// src/components/SidebarShapes.tsx
import React, { useContext, useState } from "react";
import "../../css/canvas_page/SidebarShapes.css";
import { HoldContext } from "./HoldContext";

interface SidebarShapesProps {
  title: string;
}

const SidebarShapes: React.FC<SidebarShapesProps> = ({ title }) => {
  const { addHold } = useContext(HoldContext)!;
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);


  // TODO: Make sure this calls an api to get certain climbing objects. Hardcoded for now
  const addCube = () => {
    addHold({
      id: Date.now(),
      type: "cube",
      position: [Math.random() * 2 - 1, Math.random() * 2 - 1, 0],
      color: "blue",
      size: [0.3, 0.3, 0.3],
    });
  };

  const addSphere = () => {
    addHold({
      id: Date.now(),
      type: "sphere",
      position: [Math.random() * 2 - 1, Math.random() * 2 - 1, 0],
      color: "red",
      size: [0.3, 0.3, 0.3],
    });
  };

  return (
    <div className="sidebar-shapes">
      <div className="shapes-header" onClick={toggleDropdown}>
        <h4>{title}</h4>
        <span>{isOpen ? "▲" : "▼"}</span>
      </div>
      {isOpen && (
        <div className="shapes-content">
          <button onClick={addCube}>Add Cube</button>
          <button onClick={addSphere}>Add Sphere</button>
        </div>
      )}
    </div>
  );
};

export default SidebarShapes;
