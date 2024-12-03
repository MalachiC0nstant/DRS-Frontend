import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import LandingNavbar from "./common/LandingNavbar";
import { useAuth } from "./AuthContext";
import DemoEx1 from "../assets/DemoEx1.gif";
import DemoEx2 from "../assets/DemoEx2.gif";
import "../css/common/LandingPage.css";

const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  const { refreshAuthStatus } = useAuth();

  const checkAuthentication = () => {
    refreshAuthStatus();
    navigate("/home");
  };

  return (
    <div>
      <LandingNavbar />
      <div className="landing-content">
        <h1>Welcome to Digital Route Setter</h1>
        <p>
          Be able to create routes from your dreams and publish for all gumbies
          to see. <br />
          Have mediocre routesetters at your gym? Create some climbings here and
          propose them to your gym workers.
        </p>
        <div className="gif-container">
          <img src={DemoEx1} alt="Demo Example 1" className="gif" />
          <img src={DemoEx2} alt="Demo Example 2" className="gif" />
        </div>
        <button onClick={checkAuthentication} className="start-button">
          Start your project
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
