// RecipeList.jsx
import React, { useState, useEffect } from "react";
import RecipeCard from "./RecipeCard";

const RecipeList = ({ recipes }) => {
  const INITIAL_COUNT = 12;
  const LOAD_MORE_COUNT = 12;

  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  // Reset visibleCount when recipes change (new search)
  useEffect(() => {
    setVisibleCount(INITIAL_COUNT);
  }, [recipes]);

  if (!recipes || recipes.length === 0) {
    return (
      <p className="text-center mt-8 text-red-500">
        No recipes found.
      </p>
    );
  }

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + LOAD_MORE_COUNT, recipes.length));
  };

  return (
    <div className="w-full p-4">
      <div
        className="grid gap-4"
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        }}
      >
        {recipes.slice(0, visibleCount).map((recipe) => (
          <RecipeCard key={recipe.idMeal} recipe={recipe} />
        ))}
      </div>

      {visibleCount < recipes.length && (
        <div className="flex justify-center mt-6">
          <button
            onClick={handleLoadMore}
            className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default RecipeList;
