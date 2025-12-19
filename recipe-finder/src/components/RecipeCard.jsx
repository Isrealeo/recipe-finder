// src/components/RecipeCard.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/recipe/${recipe.idMeal}`);
  };

  return (
    <div className="max-w-xs rounded-lg overflow-hidden shadow-md bg-white cursor-pointer">
      <img
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{recipe.strMeal}</h3>
        {recipe.strCategory && <p className="text-sm text-gray-500">{recipe.strCategory}</p>}
        {recipe.strArea && <p className="text-sm text-gray-500">{recipe.strArea}</p>}
        <button
          onClick={handleViewDetails}
          className="mt-3 w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default RecipeCard;
