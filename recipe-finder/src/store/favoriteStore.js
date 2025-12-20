import { create } from "zustand";

const getFavoritesFromStorage = () => {
  const stored = localStorage.getItem("favorites");
  return stored ? JSON.parse(stored) : [];
};

const useFavoriteStore = create((set, get) => ({
  favorites: getFavoritesFromStorage(),

  addFavorite: (recipe) => {
    const exists = get().favorites.some(
      (fav) => fav.idMeal === recipe.idMeal
    );
    if (exists) return;

    const updated = [...get().favorites, recipe];
    localStorage.setItem("favorites", JSON.stringify(updated));
    set({ favorites: updated });
  },

  removeFavorite: (id) => {
    const updated = get().favorites.filter(
      (fav) => fav.idMeal !== id
    );
    localStorage.setItem("favorites", JSON.stringify(updated));
    set({ favorites: updated });
  },

  isFavorite: (id) => {
    return get().favorites.some(
      (fav) => fav.idMeal === id
    );
  },
}));

export default useFavoriteStore;
