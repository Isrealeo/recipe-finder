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