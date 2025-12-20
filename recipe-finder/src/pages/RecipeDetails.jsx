import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useRecipeStore from "../store/recipeStore";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";

const RecipeDetail = () => {
  const { id } = useParams();
  const selectedRecipe = useRecipeStore((state) => state.selectedRecipe);
  const loading = useRecipeStore((state) => state.loading);
  const error = useRecipeStore((state) => state.error);
  const searchByID = useRecipeStore.getState().searchByID;

  useEffect(() => {
    searchByID(id);
  }, [id]);

  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;
  if (!selectedRecipe) return null;

  const { strMeal, strCategory, strArea, strInstructions, strMealThumb, strYoutube } =
    selectedRecipe;

  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ing = selectedRecipe[`strIngredient${i}`];
    const measure = selectedRecipe[`strMeasure${i}`];
    if (ing) ingredients.push(`${ing} ${measure || ""}`);
  }

  return (
    <div className="relative min-h-screen">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center blur-lg scale-110"
        style={{ backgroundImage: `url(${strMealThumb})` }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto p-6">
        <div className="bg-white/95 rounded-xl shadow-xl p-6 flex flex-col md:flex-row gap-8">
          {/* Main Image */}
          <img
            src={strMealThumb}
            alt={strMeal}
            className="w-full md:w-1/2 max-h-80 object-cover rounded-lg"
          />

          {/* Text */}
          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-2">{strMeal}</h1>
            <p className="text-gray-600 mb-1">
              <strong>Category:</strong> {strCategory}
            </p>
            <p className="text-gray-600 mb-4">
              <strong>Area:</strong> {strArea}
            </p>

            <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
            <ul className="list-disc list-inside mb-4 space-y-1">
              {ingredients.map((i, idx) => (
                <li key={idx}>{i}</li>
              ))}
            </ul>

            <h2 className="text-xl font-semibold mb-2">Instructions</h2>
            <p className="text-gray-700 whitespace-pre-line">{strInstructions}</p>

            {strYoutube && (
              <a
                href={strYoutube}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-block bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition text-center"
              >
                Watch Video
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
