import React from "react";
import "../../css/main_page/ProjectCard.css";
import placeholderImage from "../../assets/PlaceHolderImage.png";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/canvas");
  };

  const handleOptionsClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    console.log("Options button clicked");
  };

  return (
    <div
      className="project-card"
      onClick={handleClick}
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
      </div>
    </div>
  );
};

export default ProjectCard;
