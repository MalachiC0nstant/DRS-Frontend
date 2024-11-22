import React, { useState } from "react";
import axios from "axios"; // Import axios
import "../../css/login_page/RegisterPage.css";
import NavbarLogin from "../common/NavbarLoginPage";

const RegisterPage: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Make sure password and confirmPassword match
    // if (formData.password !== formData.confirmPassword) {
    //   setError("Passwords do not match.");
    //   return;
    // }

    try {
      const response = await axios.post(
        "http://localhost:8081/api/user/register",
        {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          password: formData.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "*/*",
          },
        }
      );

      if (response.status === 200) {
        console.log("User registered successfully.");
        setError("");
      } else {
        setError("Registration failed. Please try again.");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
      console.error("Registration error:", err);
    }
  };

  return (
    <div className="register-page">
      <NavbarLogin currentPage="register" />
      <div className="register-container">
        <h2>Sign Up</h2>
        <div className="name-fields">
          <div className="input-field">
            <label htmlFor="first-name">First Name</label>
            <input
              type="text"
              id="first-name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="input-field">
            <label htmlFor="last-name">Last Name</label>
            <input
              type="text"
              id="last-name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div className="input-field">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            type="password"
            id="confirm-password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </div>
        {error && <div className="error-message">{error}</div>}
        <button className="register-btn" onClick={handleSubmit}>
          Sign Up
        </button>
        <button className="google-register-btn">Sign Up with Google</button>
      </div>
    </div>
  );
};

export default RegisterPage;
