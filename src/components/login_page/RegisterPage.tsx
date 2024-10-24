import React from "react";
import "../../css/login_page/RegisterPage.css";
import NavbarLogin from "../common/NavbarLoginPage";

const RegisterPage: React.FC = () => {
  return (
    <div className="register-page">
      <NavbarLogin currentPage="register" />
      <div className="register-container">
        <h2>Sign Up</h2>
        <div className="name-fields">
          <div className="input-field">
            <label htmlFor="first-name">First Name</label>
            <input type="text" id="first-name" name="firstName" />
          </div>
          <div className="input-field">
            <label htmlFor="last-name">Last Name</label>
            <input type="text" id="last-name" name="lastName" />
          </div>
        </div>
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" />
        </div>
        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" />
        </div>
        <div className="input-field">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input type="password" id="confirm-password" name="confirmPassword" />
        </div>
        <button className="register-btn">Sign Up</button>
        <button className="google-register-btn">Sign Up with Google</button>
      </div>
    </div>
  );
};

export default RegisterPage;
