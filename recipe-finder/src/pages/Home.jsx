// src/pages/Home.jsx
import React, { useState } from "react";
import useRecipeStore from "../store/recipeStore";
import SearchBar from "../components/SearchBar";
import RecipeList from "../components/RecipeList";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";
import Header from "../components/Header";
import Footer from "../components/Footer";
import RecipeCard from "../components/RecipeCard";
import FavoritesList from "../components/FavoritesList";
import ShoppingList from "../components/ShoppingList";
import CategorySelector from "../components/CategorySelector";

const Home = () => {
  const [searchInput, setSearchInput] = useState("");

  // Zustand state
  const recipes = useRecipeStore((state) => state.recipes);
  const loading = useRecipeStore((state) => state.loading);
  const error = useRecipeStore((state) => state.error);

  // Zustand actions
  const searchByName = useRecipeStore((state) => state.searchByName);
  const searchByIngredients = useRecipeStore(
    (state) => state.searchByIngredients
  );

  // Handle search button click
  const handleSearch = () => {
    const query = searchInput.trim();
    if (!query) return;

    // You can choose either search by name or by ingredient
    searchByName(query);
    // Or: searchByIngredients(query);
  };
  const backgroundImage = "/images/ham.jpg";

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Header />
      <main className="flex-1 flex flex-col justify-center items-center gap-6 p-6 bg-white/50 backdrop-blur-sm">
        <h1 className="text-5xl font-bold text-gray-800 text-center">
          Recipe Finder
        </h1>
        <h1 className="text-1xl font-bold text-gray-800 text-center">
          find meals by name or ingredients
        </h1>

        <CategorySelector />

        <SearchBar
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          onSearch={handleSearch}
        />

        {loading && <Loader />}
        {error && <ErrorMessage message={error} />}
        {!loading && !error && recipes.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
            {recipes.map((recipe) => (
              <RecipeCard key={recipe.idMeal} recipe={recipe} />
            ))}
          </div>
        )}
        <div className="flex flex-col gap-6">
          <FavoritesList />
          <ShoppingList />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
