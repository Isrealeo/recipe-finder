import axios from 'axios';

const BASE_URL = 'https://www.themealdb.com/api/json/v1/1';

export const searchMealsByName = async (name) => {
  try {
    const response = await axios.get(`${BASE_URL}/search.php?s=${name}`);
    return response.data.meals;
  } catch (error){
    throw new Error("Failed to fetch meals by name")
  }};

  export const searchMealByIngredients = async (ingredient) => {
    try {
        const response = await axios.get(`${BASE_URL}/filter.php?i=${ingredient}`);
        return response.data.meals;
    } catch (error) {
        throw new Error("Failed to fetch meals by ingredient")
    }};

    export const searchMealByID = async (id) => {
        try {
            const response = await axios.get(`${BASE_URL}/lookup.php?i=${id}`);
            return response.data.meals? response.data.meals[0] : null;
        } catch (error) {
            throw new Error("Failed to lookup meal by ID")
        }
    };
    // Get all meal categories
export const getMealCategories = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/categories.php`);
    return response.data.categories; 
  } catch (error) {
    throw new Error("Failed to fetch meal categories");
  }
};

// Search meals by category
export const searchMealByCategory = async (category) => {
  try {
    const response = await axios.get(`${BASE_URL}/filter.php?c=${category}`);
    return response.data.meals;
  } catch (error) {
    throw new Error("Failed to fetch meals by category");
  }
};
