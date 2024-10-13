import React from "react";
import { Link } from "react-router-dom";

const MainPage: React.FC = () => {
  return (
    <div>
      <h1>Main Page</h1>
      <p>Welcome to the Climbing App</p>
      <Link to="/canvas">Go to Canvas</Link>
    </div>
  );
};

export default MainPage;
