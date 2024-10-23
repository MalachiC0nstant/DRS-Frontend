import React, { useState } from "react";
import "../css/NewProjectForm.css";

interface NewProjectFormProps {
  onClose: () => void;
}

const NewProjectForm: React.FC<NewProjectFormProps> = ({ onClose }) => {
  const [projectName, setProjectName] = useState("");

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
          <select id="projectLocation">
            <option value="" disabled selected>
              Select location
            </option>
            <option value="placeholder">Placeholder</option>
          </select>
        </div>

        <div className="form-footer">
          <button className="cancel-btn" onClick={onClose}>
            Cancel
          </button>
          <button className="create-btn">Create Project</button>
        </div>
      </div>
    </div>
  );
};

export default NewProjectForm;
