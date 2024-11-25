import React, { useState, useRef } from "react";
import "../../css/main_page/ProjectCard.css";
import placeholderImage from "../../assets/PlaceHolderImage.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import { ObjectId } from "mongodb";

interface ProjectCardProps {
  id: string;
  name: string;
  dateModified: string;
  snapshotUrl?: string;
  isOptionsVisible: boolean;
  onOptionsToggle: () => void;
  onDelete: (id: string) => void;
  onDuplicate: (newProject: any) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  name,
  dateModified,
  snapshotUrl,
  isOptionsVisible,
  onOptionsToggle,
  onDelete,
  onDuplicate,
}) => {
  const navigate = useNavigate();
  const optionsRef = useRef<HTMLDivElement | null>(null);

  const handleDeleteProject = async () => {
    try {
      await axios.delete(`http://localhost:8081/api/projectcard/delete/${id}`, {
        withCredentials: true,
      });
      onDelete(id);
    } catch (error) {
      console.error("Error deleting project:", error);
    }
  };

  const handleDuplicateProject = async () => {
    try {
      const response = await axios.post(
        `http://localhost:8081/api/projectcard/duplicate/${id}`,
        {},
        { withCredentials: true }
      );
      const duplicatedProject = response.data;
      onDuplicate(duplicatedProject);
    } catch (error) {
      console.error("Error duplicating project:", error);
    }
  };

  const handleCardClick = () => {
    navigate("/canvas");
  };

  const handleOptionsClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    onOptionsToggle();
  };

  const handleOptionItemClick = (
    e: React.MouseEvent<HTMLLIElement>,
    action: string
  ) => {
    e.stopPropagation();
    if (action === "Delete") {
      handleDeleteProject();
    } else if (action === "Duplicate") {
      handleDuplicateProject();
    }
    // TODO: Add other options here like share, info...
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
              <li onClick={(e) => handleOptionItemClick(e, "Add to Starred")}>
                Add to Starred
              </li>
              <li onClick={(e) => handleOptionItemClick(e, "Share")}>Share</li>
              <li onClick={(e) => handleOptionItemClick(e, "Project Info")}>
                Project Info
              </li>
              <li onClick={(e) => handleOptionItemClick(e, "Duplicate")}>
                Duplicate
              </li>
              <li onClick={(e) => handleOptionItemClick(e, "Move")}>Move</li>
              <li onClick={(e) => handleOptionItemClick(e, "Archive")}>
                Archive
              </li>
              <li onClick={(e) => handleOptionItemClick(e, "Rename")}>
                Rename
              </li>
              <li onClick={(e) => handleOptionItemClick(e, "Delete")}>
                Delete
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
