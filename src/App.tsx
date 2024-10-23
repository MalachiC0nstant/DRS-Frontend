import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./components/main_page/MainPage";
import CanvasPage from "./components/canvas_page/CanvasPage";
import "./App.css";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/canvas" element={<CanvasPage />} />
        <Route path="/login" element={<CanvasPage />} />
        {/*TODO: Make the login page */}
      </Routes>
    </Router>
  );
};

export default App;
