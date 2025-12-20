// src/store/recipeStore.js
import { create } from "zustand";
import {
  searchMealsByName,
  searchMealByID,
  searchMealByIngredients,
  searchMealByCategory
} from "../services/mealApi";

const useRecipeStore = create((set) => ({
  recipes: [],
  query: "",
  loading: false,
  error: null,
  selectedRecipe: null,
  selectedCategory: null,

  setQuery: (q) => set({ query: q }),

  searchByName: async (name) => {
    set({ loading: true, error: null });
    try {
      const data = await searchMealsByName(name);
      set({ recipes: data || [], loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  searchByIngredients: async (ingredient) => {
    set({ loading: true, error: null });
    try {
      const data = await searchMealByIngredients(ingredient);
      set({ recipes: data || [], loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  searchByID: async (id) => {
    set({ loading: true, error: null });
    try {
      const data = await searchMealByID(id);
      set({ selectedRecipe: data || null, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  searchByCategory: async (category) => {
    set({ loading: true, error: null, selectedCategory: category });
    try {
      const data = await searchMealByCategory(category);
      set({ recipes: data || [], loading: false });
    } catch (error) {
      set({ error: "Failed to fetch meals by category", loading: false });
    }
  },
}));

export default useRecipeStore;
