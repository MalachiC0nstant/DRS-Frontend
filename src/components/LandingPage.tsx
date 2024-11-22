import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import LandingNavbar from "./common/LandingNavbar";
import "../css/common/LandingPage.css";

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  const checkAuthentication = () => {
    axios
      .get("http://localhost:8081/api/user/isAuthenticated", {
        withCredentials: true,
      })
      .then((response) => {
        if (response.data === true) {
          navigate("/home");
        } else {
          navigate("/login");
        }
      })
      .catch((error) => {
        console.error("Error checking authentication:", error);
        navigate("/login");
      });
  };

  return (
    <div>
      <LandingNavbar />
      <div className="landing-content">
        <h1>Welcome to Digital Route Setter</h1>
        <p>Your rock-climbing project management tool</p>
        <button onClick={checkAuthentication} className="start-button">
          Start your project
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
