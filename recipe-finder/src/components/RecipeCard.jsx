import React from "react";
import { useNavigate } from "react-router-dom";
import useFavoriteStore from "../store/favoriteStore";
import { Heart } from "lucide-react";

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
    isFavorite ? removeFavorite(recipe.idMeal) : addFavorite(recipe);
  };

  return (
    <div
      className="
        max-w-xs rounded-xl overflow-hidden shadow-md
        bg-white dark:bg-gray-800
        text-gray-900 dark:text-gray-100
        hover:shadow-lg transition
      "
    >
      {/* Image */}
      <img
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        loading="lazy"
        onClick={handleViewDetails}
        className="w-full sm:w-72 md:w-80 lg:w-96 
    h-40 sm:h-48 object-cover 
    cursor-pointer
    mx-auto
  "
      />

      <div className="p-3 sm:p-4">
        <div className="flex justify-between items-start gap-2">
          <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-100">
            {recipe.strMeal}
          </h3>

          {/* Favorite button */}
          <button
            onClick={toggleFavorite}
            className={`p-2 rounded-full transition transform
              ${
                isFavorite
                  ? "bg-red-100 text-red-600 scale-110"
                  : "bg-gray-100 dark:bg-gray-700 text-gray-400 dark:text-gray-300 hover:text-red-400"
              }
            `}
            title={isFavorite ? "Remove from favorites" : "Add to favorites"}
          >
            <Heart size={18} fill={isFavorite ? "currentColor" : "none"} />
          </button>
        </div>

        {recipe.strCategory && (
          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
            {recipe.strCategory}
          </p>
        )}

        {recipe.strArea && (
          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
            {recipe.strArea}
          </p>
        )}

        <button
          onClick={handleViewDetails}
          className="mt-3 sm:mt-4 w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default RecipeCard;
