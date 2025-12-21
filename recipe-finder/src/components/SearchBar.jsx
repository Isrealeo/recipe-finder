import { useState } from "react";
import useRecipeStore from "../store/recipeStore";

const SearchBar = () => {
  const [term, setTerm] = useState("");
  const [type, setType] = useState("name"); // 'name' or 'ingredient'
  const searchByName = useRecipeStore((state) => state.searchByName);
  const searchByIngredients = useRecipeStore((state) => state.searchByIngredients);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!term) return;

    if (type === "name") searchByName(term);
    else searchByIngredients(term);
  };

  return (
    <div className="flex justify-center mb-6">
      <form
        onSubmit={handleSearch}
        className="flex flex-col md:flex-row gap-3 items-center p-6 rounded-xl bg-white/30 backdrop-blur-md shadow-lg dark:bg-gray-800/30"
      >
        <input
          type="text"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          placeholder={`Search by ${type}`}
          className="flex-1 p-3 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition placeholder-gray-400 dark:placeholder-gray-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
        />

        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="p-3 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
        >
          <option value="name">Name</option>
          <option value="ingredient">Ingredient</option>
        </select>

        <button
          type="submit"
          className="bg-green-500 dark:text-gray-300 dark:bg-green-600 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition transform hover:-translate-y-0.5"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
