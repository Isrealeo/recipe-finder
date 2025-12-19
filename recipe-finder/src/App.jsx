// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RecipeDetail from "./pages/RecipeDetails";

const App = () => {
  return (
    <Router>
      <div className="app-container" style={{ fontFamily: "Arial, sans-serif" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
