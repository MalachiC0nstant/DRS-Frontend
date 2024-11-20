import React from "react";
import { useNavigate } from "react-router-dom";
import "../../css/common/landingpage.css";

const LandingNavbar: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-navbar">
      <div className="logo" onClick={() => navigate("/")}>
        Digital Route Setter
      </div>
      <div className="nav-links">
        <button onClick={() => navigate("/login")}>Login</button>
        <button onClick={() => navigate("/home")}>Home</button>
      </div>
    </div>
  );
};

export default LandingNavbar;
