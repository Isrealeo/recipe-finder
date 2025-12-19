import { create } from "zustand";
import { searchMealsByName, searchMealByID, searchMealByIngredients } from "../services/mealApi";

const useRecipeStore = create ((set) => ({
    recipes: [],
    query: "",
    loading : false,
    error: null,
    selectedRecipe: null,

   setQuery: (q) => set({ query: q}),
   
   searchByName: async (name) => {
    set({ loading: true, error: null});
    try {
        const data = await searchMealsByName(name);
        set({recipes: data || [], loading:false});
    } catch (error){
        set({ error: error.message, loading:false});
    }
   },

   searchByIngredients: async (ingredient) =>{
    set({loading: true, error: null});
    try{
        const data = await searchMealByIngredients(ingredient);
        set ({ recipes: data || [], loading: false});
    } catch (error){
        set ({ error: error.message, loading: false})
    }
   },

   searchByID: async (id) => {
    set ({loading: true, error: null});
    try {
        const data = await searchMealByID(id);
        set ({ selectedRecipe : data? data : null, loading: false});
    } catch (error) {
    set ({ error: error.message, loading: false})
   }
}}));

export default useRecipeStore;