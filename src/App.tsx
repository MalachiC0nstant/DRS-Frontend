import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import CanvasPage from "./pages/CanvasPage";
import Navbar from "./components/Navbar";
import "./App.css";

const App: React.FC = () => {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/canvas" element={<CanvasPage />} />
      </Routes>
    </Router>
  );
};
export default App;
