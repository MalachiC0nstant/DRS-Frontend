import React, { useState } from "react";
import axios from "axios";
import "../../css/login_page/LoginPage.css";
import NavbarLogin from "../common/NavbarLoginPage";
import { useNavigate } from "react-router-dom";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8081/api/user/login",
        {
          email: email,
          password: password,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "*/*",
          },
          withCredentials: true,
        }
      );

      if (response.status === 200) {
        setError("");
        navigate("/");
      } else {
        setError("Login failed. Please try again.");
      }
    } catch (err: any) {
      if (err.response && err.response.status === 401) {
        setError("Invalid email or password. Please try again.");
      } else {
        setError("An error occurred during login. Please try again.");
      }
      console.error("Login error:", err);
    }
  };

  return (
    <div className="login-page">
      <NavbarLogin currentPage="login" />
      <div className="login-container">
        <h2>Login</h2>
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <a href="#" className="forgot-password">
            Forgot password?
          </a>
        </div>
        <button className="login-btn" onClick={handleLogin}>
          Login
        </button>
        <button className="google-login-btn">Log in with Google</button>
        {error && <div className="error-message">{error}</div>}
      </div>
    </div>
  );
};

export default LoginPage;
