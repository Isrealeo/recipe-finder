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
  }, [id, searchByID]);

  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;
  if (!selectedRecipe) return <p>Loading recipe...</p>;

  const { strMeal, strCategory, strArea, strInstructions, strMealThumb, strYoutube } = selectedRecipe;

  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = selectedRecipe[`strIngredient${i}`];
    const measure = selectedRecipe[`strMeasure${i}`];
    if (ingredient && ingredient.trim() !== "") {
      ingredients.push(`${ingredient} - ${measure}`);
    }
  }

  return (
    <div
      className="min-h-screen bg-cover bg-center p-6"
      style={{ backgroundImage: "url('/images/kitchen-bg.jpg')" }}
    >
      <div className="max-w-6xl mx-auto bg-white/90 rounded-lg p-6 shadow-lg">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Recipe Image */}
          <img
            src={strMealThumb}
            alt={strMeal}
            className="w-full md:w-1/2 max-h-96 object-cover rounded-lg shadow-lg border-2 border-gray-200"
          />

          {/* Recipe Info */}
          <div className="md:w-1/2 flex flex-col gap-4">
            <h1 className="text-3xl font-bold text-gray-800">{strMeal}</h1>
            <p><strong>Category:</strong> {strCategory}</p>
            <p><strong>Area:</strong> {strArea}</p>

            <div>
              <h2 className="text-2xl font-semibold mt-4 mb-2">Ingredients:</h2>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                {ingredients.map((ing, idx) => <li key={idx}>{ing}</li>)}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mt-4 mb-2">Instructions:</h2>
              <p className="text-gray-700 whitespace-pre-line">{strInstructions}</p>
            </div>

            {strYoutube && (
              <a
                href={strYoutube}
                target="_blank"
                rel="noopener noreferrer"
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
