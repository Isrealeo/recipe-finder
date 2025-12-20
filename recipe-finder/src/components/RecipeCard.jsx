import React from "react";
import { useNavigate } from "react-router-dom";
import useFavoriteStore from "../store/favoriteStore";

const RecipeCard = ({ recipe }) => {
  const navigate = useNavigate();

  const addFavorite = useFavoriteStore((state) => state.addFavorite);
  const removeFavorite = useFavoriteStore((state) => state.removeFavorite);
  const isFavorite = useFavoriteStore((state) =>
    state.isFavorite(recipe.idMeal)
  );

  const handleViewDetails = () => {
    navigate(`/recipe/${recipe.idMeal}`);
  };

  const toggleFavorite = (e) => {
    e.stopPropagation();
    isFavorite
      ? removeFavorite(recipe.idMeal)
      : addFavorite(recipe);
  };

  return (
    <div className="max-w-xs rounded-lg overflow-hidden shadow-md bg-white hover:shadow-lg transition">
      
      <img
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        className="w-full h-48 object-cover cursor-pointer"
        onClick={handleViewDetails}
      />

      <div className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold text-gray-800">
            {recipe.strMeal}
          </h3>

          {/* Favorite toggle */}
          <button
            onClick={toggleFavorite}
            className={`text-xl cursor-pointer ${
              isFavorite ? "text-red-500" : "text-gray-400"
            }`}
            title="Add to favorites"
          >
            ❤️
          </button>
        </div>

        {recipe.strCategory && (
          <p className="text-sm text-gray-500">{recipe.strCategory}</p>
        )}
        {recipe.strArea && (
          <p className="text-sm text-gray-500">{recipe.strArea}</p>
        )}

        <button
          onClick={handleViewDetails}
          className="mt-3 w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition cursor-pointer"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default RecipeCard;
