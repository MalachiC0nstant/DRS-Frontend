import React, { useState } from "react";
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

  // const checkEmailExists = async (email: string) => {
  //   try {
  //     const response = await fetch(
  //       `https://your-backend-url.com/check-email?email=${email}`,
  //       {
  //         method: "GET",
  //       }
  //     );

  //     if (!response.ok) {
  //       throw new Error("Failed to check email.");
  //     }

  //     const data = await response.json();
  //     return data.exists;
  //   } catch (err) {
  //     console.error("Error checking email:", err);
  //     return false;
  //   }
  // };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // const emailExists = await checkEmailExists(formData.email);
    // if (emailExists) {
    //   setError("Email is already registered.");
    //   return;
    // }

    try {
      const response = await fetch("http://localhost:8081/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          password: formData.password,
        }),
      });

      if (response.ok) {
        console.log("User registered successfully.");
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
