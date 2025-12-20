export const getIngredients = (recipe) => {
  if (!recipe) return [];

  const ingredients = [];

  for (let i = 1; i <= 20; i++) {
    const ingredient = recipe[`strIngredient${i}`];
    const measure = recipe[`strMeasure${i}`];

    if (ingredient && ingredient.trim() !== "") {
      ingredients.push({
        ingredient,
        measure: measure?.trim() || "",
      });
    }
  }

  return ingredients;
};
