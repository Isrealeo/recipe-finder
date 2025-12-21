import React from "react";
import useRecipeStore from "../store/recipeStore";

const categories = ["Beef", "Chicken", "Dessert", "Seafood", "Vegetarian"];

const CategorySelector = () => {
  const searchByCategory = useRecipeStore((state) => state.searchByCategory);
  const selectedCategory = useRecipeStore((state) => state.selectedCategory);

  return (
    <div className="flex gap-3 flex-wrap justify-center mb-6">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => searchByCategory(category)}
          className={`px-4 py-2 rounded transition font-medium ${
            selectedCategory === category
              ? "bg-green-500 text-white "
              : "bg-gray-200 text-gray-800 hover:bg-green-500 hover:text-white dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-500"
          }`}
        >
          {category}
        </button>
      ))}
      <button
        onClick={() => searchByCategory(null)}
        className="px-4 py-2 rounded bg-red-600 hover:bg-red-800 text-gray-800"
      >
        clear search
      </button>
    </div>
  );
};

export default CategorySelector;
