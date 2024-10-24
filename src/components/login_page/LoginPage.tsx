import React from "react";
import "../../css/login_page/LoginPage.css";
import NavbarLogin from "../common/NavbarLoginPage";

const LoginPage: React.FC = () => {
  return (
    <div className="login-page">
      <NavbarLogin currentPage="login" />
      <div className="login-container">
        <h2>Login</h2>
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Enter your email" />
        </div>
        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
          />
          <a href="#" className="forgot-password">
            Forgot password?
          </a>
        </div>
        <button className="login-btn">Login</button>
        <button className="google-login-btn">Log in with Google</button>
      </div>
    </div>
  );
};

export default LoginPage;
