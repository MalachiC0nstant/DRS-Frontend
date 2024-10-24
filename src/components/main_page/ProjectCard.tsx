import React, { useState, useRef, useEffect } from "react";
import "../../css/main_page/ProjectCard.css";
import placeholderImage from "../../assets/PlaceHolderImage.png";
import { useNavigate } from "react-router-dom";

interface ProjectCardProps {
  name: string;
  dateModified: string;
  snapshotUrl?: string;
  isOptionsVisible: boolean;
  onOptionsToggle: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  name,
  dateModified,
  snapshotUrl,
  isOptionsVisible,
  onOptionsToggle,
}) => {
  const navigate = useNavigate();
  const optionsRef = useRef<HTMLDivElement | null>(null);

  const handleCardClick = () => {
    navigate("/canvas");
  };

  const handleOptionsClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    onOptionsToggle();
  };

  const handleOptionItemClick = (e: React.MouseEvent<HTMLLIElement>) => {
    e.stopPropagation();
    // TODO: add logic for stuff like, "Delete", "Share", by calling APIs later
  };

  return (
    <div
      className="project-card"
      onClick={handleCardClick}
      style={{ cursor: "pointer" }}
    >
      <div className="snapshot">
        <img src={snapshotUrl || placeholderImage} alt={`${name} snapshot`} />
      </div>
      <div className="project-info">
        <h4>{name}</h4>
        <p>Modified: {dateModified}</p>
      </div>
      <div className="project-options">
        <button className="options-button" onClick={handleOptionsClick}>
          •••
        </button>
        {isOptionsVisible && (
          <div
            className="options-menu"
            ref={optionsRef}
            onClick={(e) => e.stopPropagation()}
          >
            <ul>
              <li onClick={handleOptionItemClick}>Add to Starred</li>
              <li onClick={handleOptionItemClick}>Share</li>
              <li onClick={handleOptionItemClick}>Project Info</li>
              <li onClick={handleOptionItemClick}>Duplicate</li>
              <li onClick={handleOptionItemClick}>Move</li>
              <li onClick={handleOptionItemClick}>Archive</li>
              <li onClick={handleOptionItemClick}>Rename</li>
              <li onClick={handleOptionItemClick}>Delete</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
