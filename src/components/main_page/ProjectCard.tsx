import React, { useState, useRef, useEffect } from "react";
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
  const [isOptionsVisible, setOptionsVisible] = useState(false);
  const optionsRef = useRef<HTMLDivElement | null>(null);

  const handleClick = () => {
    navigate("/canvas");
  };

  const handleOptionsClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setOptionsVisible(!isOptionsVisible);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      optionsRef.current &&
      !optionsRef.current.contains(event.target as Node)
    ) {
      setOptionsVisible(false);
    }
  };

  const handleOptionItemClick = (e: React.MouseEvent<HTMLLIElement>) => {
    e.stopPropagation();
    console.log("Option item clicked");
  };

  useEffect(() => {
    if (isOptionsVisible) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOptionsVisible]);

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
        {isOptionsVisible && (
          <div className="options-menu" ref={optionsRef}>
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
