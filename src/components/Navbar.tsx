import React from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">ClimbingApp</Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/canvas">Canvas</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
