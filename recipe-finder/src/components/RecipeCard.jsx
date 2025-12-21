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
    isFavorite
      ? removeFavorite(recipe.idMeal)
      : addFavorite(recipe);
  };

  return (
    <div className="max-w-xs rounded-xl overflow-hidden shadow-md bg-white hover:shadow-lg transition ">
      
      {/* Image */}
      <img
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        loading="lazy"
        onClick={handleViewDetails}
        className="w-full h-48 object-cover cursor-pointer"
      />

      <div className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold text-gray-800">
            {recipe.strMeal}
          </h3>

          {/* Favorite button */}
          <button
            onClick={toggleFavorite}
            className={`p-2 rounded-full transition transform cursor-pointer
              ${
                isFavorite
                  ? "bg-red-100 text-red-600 scale-110"
                  : "bg-gray-100 text-gray-400 hover:text-red-400 hover:bg-red-50"
              }
            `}
            title={isFavorite ? "Remove from favorites" : "Add to favorites"}
          >
            <Heart
              size={20}
              fill={isFavorite ? "currentColor" : "none"}
            />
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
          className="mt-4 w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default RecipeCard;
