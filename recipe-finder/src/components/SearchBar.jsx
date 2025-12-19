import { useState } from "react";
import  useRecipeStore  from "../store/recipeStore";

const searchBar = () =>{
    const [input, setInput] = useState("");
    const searchByName = useRecipeStore((state) => state.searchByName);
    const searchByIngredient = useRecipeStore((state) => state.searchByIngredient);

    const handlesubmit = (e) => {
        e.preventDefault();
        if (input.trim() === "") return;
    
    searchByName(input.trim());
    setInput("");
    }

    return (
        <form
        onSubmit={handlesubmit}
        className="flex justify-center items-center my-6">
            <input
            type="text"
            value={input}
            id="input"
            onChange={(e) => setInput(e.target.value)}
             className="p-3 rounded-l-lg w-80 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
      />
      <button
      type="submit"
      className="bg-green-500 text-white px-4 py-3 rounded-r-lg hover:bg-green-600">
        Search
      </button>
    </form>
    );
};

export default searchBar;