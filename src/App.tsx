import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./components/main_page/MainPage";
import CanvasPage from "./components/canvas_page/CanvasPage";
import LoginPage from "./components/login_page/LoginPage";
import RegisterPage from "./components/login_page/RegisterPage";
import "./App.css";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/canvas" element={<CanvasPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        {/*Add more routing here */}
      </Routes>
    </Router>
  );
};

export default App;
