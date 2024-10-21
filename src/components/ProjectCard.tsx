import React from "react";
import "../css/ProjectCard.css";
import placeholderImage from "../assets/PlaceHolderImage.png";

interface ProjectCardProps {
  name: string;
  dateModified: string;
  snapshotUrl?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  name,
  dateModified,
  snapshotUrl,
}) => {
  return (
    <div className="project-card">
      <div className="snapshot">
        <img src={snapshotUrl || placeholderImage} alt={`${name} snapshot`} />
      </div>
      <div className="project-info">
        <h4>{name}</h4>
        <p>Modified: {dateModified}</p>
      </div>
      <div className="project-options">
        <button className="options-button">•••</button>
      </div>
    </div>
  );
};

export default ProjectCard;
