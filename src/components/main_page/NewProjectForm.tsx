import React, { useState } from "react";
import "../../css/main_page/NewProjectForm.css";
import axios from "axios";

interface NewProjectFormProps {
  onClose: () => void;
}

const NewProjectForm: React.FC<NewProjectFormProps> = ({ onClose }) => {
  const [projectName, setProjectName] = useState("");
  const [projectLocation, setProjectLocation] = useState("");

  const handleCreateProject = async () => {
    try {
      const projectData = {
        name: projectName,
        snapshotUrl: "http://example.com/snapshot.jpg",
      };

      const response = await axios.post(
        "http://localhost:8081/api/projectcard/create",
        projectData,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "*/*",
          },
        }
      );

      console.log("Project created:", response.data);
      onClose();
    } catch (error) {
      console.error("Error creating project:", error);
    }
  };

  return (
    <div className="form-overlay">
      <div className="new-project-form">
        <div className="form-header">
          <h2>Create a new project</h2>
          <button className="close-btn" onClick={onClose}>
            X
          </button>
        </div>

        <div className="form-body">
          <label htmlFor="projectName">Project Name</label>
          <input
            type="text"
            id="projectName"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            placeholder="Enter project name"
          />

          <label htmlFor="projectLocation" className="dropdown-label">
            Project Location
          </label>
          <select
            id="projectLocation"
            value={projectLocation}
            onChange={(e) => setProjectLocation(e.target.value)}
          >
            <option value="" disabled>
              Select location
            </option>
            <option value="placeholder">Placeholder</option>
          </select>
        </div>

        <div className="form-footer">
          <button className="cancel-btn" onClick={onClose}>
            Cancel
          </button>
          <button className="create-btn" onClick={handleCreateProject}>
            Create Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewProjectForm;
