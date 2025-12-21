// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RecipeDetail from "./pages/RecipeDetails";
import useThemeStore from "./store/themeStore";

const App = () => {
  const { darkMode, toggleDarkMode } = useThemeStore();

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
    <Router>
      <div className="app-container" style={{ fontFamily: "Arial, sans-serif" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
        </Routes>
      </div>
    </Router>
    </div>
  );
};

export default App;
