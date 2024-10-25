import React, { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
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

  // TODO: Call API to receive project data
  // TODO: Create snapshot of project canvas and add input type to project
  const projects = [
    { name: "Katy Momentum Wall", dateModified: "2024-10-10" },
    { name: "Silver Street", dateModified: "2024-09-15" },
    { name: "Katy Momentum Wall", dateModified: "2024-10-10" },
    { name: "Katy Momentum Wall", dateModified: "2024-10-10" },
    { name: "Katy Momentum Wall", dateModified: "2024-10-10" },
    { name: "Katy Momentum Wall", dateModified: "2024-10-10" },
  ];

  return (
    <div>
      <h1>{selectedOption}</h1>
      <h2>{subtitle}</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            name={project.name}
            dateModified={project.dateModified}
            isOptionsVisible={openMenuIndex === index}
            onOptionsToggle={() => handleMenuToggle(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default MainPageContent;
