// src/components/RecipeList.jsx
import React from "react";
import RecipeCard from "./RecipeCard";

const RecipeList = ({ recipes }) => {
  if (!recipes || recipes.length === 0) {
    return <p style={{ textAlign: "center", marginTop: "2rem" }}>No recipes found.</p>;
  }

  return (
    <div className="recipe-list" style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "1rem",
      padding: "1rem"
    }}>
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.idMeal} recipe={recipe} />
      ))}
    </div>
  );
};

export default RecipeList;
