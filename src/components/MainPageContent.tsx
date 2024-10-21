import React from "react";
import ProjectCard from "./ProjectCard";
import "../css/MainPage.css";

const MainPageContent: React.FC = () => {
  const projects = [
    {
      name: "Katy Momentum Wall",
      dateModified: "2024-10-10",
      //snapshotUrl: "", TODO: Add actual path to snapshot
    },
    {
      name: "Silver Street",
      dateModified: "2024-09-15",
      // No snapshotUrl, so it will use the placeholder
    },
  ];

  return (
    <div className="projects-container">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          name={project.name}
          dateModified={project.dateModified}
          //snapshotUrl={project.snapshotUrl} // TODO: Add actual snapshot
        />
      ))}
    </div>
  );
};

export default MainPageContent;
