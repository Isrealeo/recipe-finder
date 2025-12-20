// src/pages/Home.jsx
import React, { useState } from "react";
import useRecipeStore from "../store/recipeStore";
import SearchBar from "../components/SearchBar";
import RecipeList from "../components/RecipeList";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";

const Home = () => {
  const [searchInput, setSearchInput] = useState("");

  // Zustand state (selectors are separate to avoid creating new references)
  const recipes = useRecipeStore((state) => state.recipes);
  const loading = useRecipeStore((state) => state.loading);
  const error = useRecipeStore((state) => state.error);

  // Zustand actions (call these in handlers, not inside render)
  const searchByName = useRecipeStore((state) => state.searchByName);
  const searchByIngredients = useRecipeStore((state) => state.searchByIngredients);

  // Handle search button click
  const handleSearch = () => {
    const query = searchInput.trim();
    if (!query) return;

    // Choose either search by name or ingredients
    searchByName(query);
    // Or: searchByIngredients(query);
  };

  return (
    <div
     style={{ backgroundImage: "url('/images/background.jpg')" }}>
      <h1 style={{ textAlign: "center" }}>Recipe App</h1>

      <SearchBar
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        onSearch={handleSearch}
      />

      {loading && <Loader />}
      {error && <ErrorMessage message={error} />}
      {!loading && !error && <RecipeList recipes={recipes} />}
    </div>
  );
};

export default Home;
