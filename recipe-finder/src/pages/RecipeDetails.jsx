// src/pages/RecipeDetail.jsx
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useRecipeStore from "../store/recipeStore";
import useShoppingListStore from "../store/shoppingListStore";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";

const RecipeDetail = () => {
  const { id } = useParams();
  const selectedRecipe = useRecipeStore((state) => state.selectedRecipe);
  const loading = useRecipeStore((state) => state.loading);
  const error = useRecipeStore((state) => state.error);
  const searchByID = useRecipeStore.getState().searchByID;

  const shoppingList = useShoppingListStore((state) => state.shoppingList);
  const addIngredient = useShoppingListStore((state) => state.addIngredient);
  const removeIngredient = useShoppingListStore(
    (state) => state.removeIngredient
  );

  useEffect(() => {
    searchByID(id);
  }, [id]);

  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;
  if (!selectedRecipe) return null;

  const {
    strMeal,
    strCategory,
    strArea,
    strInstructions,
    strMealThumb,
    strYoutube,
    strSource,
  } = selectedRecipe;

  // Build ingredients list
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ing = selectedRecipe[`strIngredient${i}`];
    const measure = selectedRecipe[`strMeasure${i}`];
    if (ing) ingredients.push({ name: ing, measure: measure || "" });
  }

  const handleBack = () => {
    window.history.back();
  };

  const toggleIngredient = (ingredient) => {
    if (shoppingList.some((item) => item.name === ingredient.name)) {
      removeIngredient(ingredient.name);
    } else {
      addIngredient(ingredient);
    }
  };

  const isAdded = (ingredient) =>
    shoppingList.some((item) => item.name === ingredient.name);

  return (
    <div className="relative min-h-screen">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center blur-lg scale-110"
        style={{ backgroundImage: `url(${strMealThumb})` }}
      />
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 max-w-5xl mx-auto p-6">
        <div className="bg-white/95 rounded-xl shadow-xl p-6 flex flex-col md:flex-row gap-8 dark:bg-gray-800/95 text-gray-900 dark:text-gray-100">
          {/* Recipe Image */}
          <img
            src={strMealThumb}
            alt={strMeal}
            className="w-full md:w-1/2 max-h-80 object-cover rounded-lg"
          />

          {/* Text Content */}
          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-2">{strMeal}</h1>
            <p className="text-gray-600 mb-1 dark:text-gray-300">
              <strong>Category:</strong> {strCategory}
            </p>
            <p className="text-gray-600 mb-4 dark:text-gray-300">
              <strong>Area:</strong> {strArea}
            </p>

            {/* Ingredients */}
            <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
            <ul className="list-disc list-inside mb-4 space-y-1 ">
              {ingredients.map((item, idx) => (
                <li key={idx} className="flex justify-between items-center">
                  <span>{`${item.name} ${item.measure}`}</span>
                  <button
                    onClick={() => toggleIngredient(item)}
                    className={`ml-4 px-2 py-1 rounded transition dark:bg-gray-300 ${
                      isAdded(item)
                        ? "bg-green-500 text-white"
                        : "bg-gray-200 text-gray-800 hover:bg-green-500 hover:text-white"
                    }`}
                  >
                    {isAdded(item) ? "✔" : "Add"}
                  </button>
                </li>
              ))}
            </ul>

            {/* Instructions */}
            <h2 className="text-xl font-semibold mb-2">Instructions</h2>
            <p className="text-gray-700 whitespace-pre-line dark:text-gray-300">
              {strInstructions}
            </p>

            {/* External Links */}
            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:gap-6">
              {strYoutube && (
                <a
                  href={strYoutube}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto bg-red-500 text-white py-3 px-6 rounded-lg text-center hover:bg-red-600 transition"
                >
                  Watch Video
                </a>
              )}

              {strSource && (
                <a
                  href={strSource}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-green-500 text-white py-3 px-6 rounded-lg text-center hover:bg-green-600 transition"
                >
                  View Full Recipe
                </a>
              )}
            </div>

            {/* Back Button */}
            <button
              onClick={handleBack}
              className="fixed top-4 left-4 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg shadow-md transition"
            >
              ← Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
