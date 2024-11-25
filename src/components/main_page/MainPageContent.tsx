import React, { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import axios from "axios";
import "../../css/main_page/MainPage.css";

interface MainPageContentProps {
  selectedOption: string;
}

const MainPageContent: React.FC<MainPageContentProps> = ({
  selectedOption,
}) => {
  // Kind of ugly, but will use these options to find out what content (projects) to load when calling backend api
  let subtitle = "";
  if (selectedOption === "Home") {
    subtitle = "Your projects";
  } else if (selectedOption === "Recent") {
    subtitle = "Recently opened projects";
  } else if (selectedOption === "Starred") {
    subtitle = "Starred projects";
  }

  const [openMenuIndex, setOpenMenuIndex] = useState<number | null>(null);
  const [projects, setProjects] = useState<any[]>([]);

  const handleMenuToggle = (index: number) => {
    if (openMenuIndex === index) {
      setOpenMenuIndex(null);
    } else {
      setOpenMenuIndex(index);
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    const clickedElement = event.target as HTMLElement;
    if (!clickedElement.closest(".project-card")) {
      setOpenMenuIndex(null);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:8081/api/projectcard/projects", {
        withCredentials: true,
      })
      .then((response) => {
        setProjects(response.data);
      })
      .catch((error) => {
        console.error("Error fetching projects:", error);
      });
  }, []);

  const handleDeleteProject = (projectId: string) => {
    setProjects((prevProjects) =>
      prevProjects.filter((project) => project.id !== projectId)
    );
  };

  const handleDuplicateProject = (newProject: any) => {
    setProjects((prevProjects) => [...prevProjects, newProject]);
  };

  return (
    <div>
      <h1>{selectedOption}</h1>
      <h2>{subtitle}</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id.toString()}
            id={project.id}
            name={project.name}
            dateModified={project.dateModified}
            isOptionsVisible={openMenuIndex === index}
            onOptionsToggle={() => handleMenuToggle(index)}
            onDelete={handleDeleteProject}
            onDuplicate={handleDuplicateProject}
          />
        ))}
      </div>
    </div>
  );
};

export default MainPageContent;
