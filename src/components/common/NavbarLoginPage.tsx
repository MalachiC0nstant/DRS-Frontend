import React from "react";
import { useNavigate } from "react-router-dom";
import "../../css/common/NavbarLoginPage.css";

interface NavbarLoginProps {
  currentPage: "login" | "register";
}

const NavbarLogin: React.FC<NavbarLoginProps> = ({ currentPage }) => {
  const navigate = useNavigate();

  const handleTitleClick = () => {
    navigate("/");
  };

  const handleRightButtonClick = () => {
    if (currentPage === "login") {
      navigate("/register");
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="navbarLogin">
      <div className="navbarLogin-left-corner">
        <div
          className="navbarLogin-title"
          onClick={handleTitleClick}
          style={{ cursor: "pointer" }}
        >
          Digital Route Setter
        </div>
      </div>
      <div
        className="navbarLogin-right"
        onClick={handleRightButtonClick}
        style={{ cursor: "pointer" }}
      >
        {currentPage === "login" ? "Register" : "Login"}
      </div>
    </div>
  );
};

export default NavbarLogin;
