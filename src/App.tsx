import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./components/main_page/MainPage";
import CanvasPage from "./components/canvas_page/CanvasPage";
import LoginPage from "./components/login_page/LoginPage";
import RegisterPage from "./components/login_page/RegisterPage";
import LandingPage from "./components/LandingPage";
import { AuthProvider } from "./components/AuthContext";
import PrivateRoute from "./components/PrivateRoute";
import "./App.css";
import ProfilePage from "./components/profile_page/ProfilePage";

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route
            path="/home"
            element={<PrivateRoute element={<MainPage />} />}
          />
          <Route
            path="/canvas"
            element={<PrivateRoute element={<CanvasPage />} />}
          />
          <Route
            path="/profile"
            element={<PrivateRoute element={<ProfilePage />} />}
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
