// src/store/shoppingListStore.js
import { create } from "zustand";

const LOCAL_STORAGE_KEY = "shoppingList";

const loadFromLocalStorage = () => {
  const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
  return stored ? JSON.parse(stored) : [];
};

const saveToLocalStorage = (list) => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(list));
};

const useShoppingListStore = create((set, get) => ({
  shoppingList: loadFromLocalStorage(),

  // Add ingredient (if exists, keep previous measure or update)
  addIngredient: (ingredient) => {
    set((state) => {
      const existsIndex = state.shoppingList.findIndex(
        (item) => item.name === ingredient.name
      );

      let newList;
      if (existsIndex >= 0) {
        // Keep previous measure if exists
        const updatedItem = {
          ...state.shoppingList[existsIndex],
          measure: ingredient.measure || state.shoppingList[existsIndex].measure,
          added: true, // flag for UI feedback (tick)
        };
        newList = [
          ...state.shoppingList.slice(0, existsIndex),
          updatedItem,
          ...state.shoppingList.slice(existsIndex + 1),
        ];
      } else {
        newList = [...state.shoppingList, { ...ingredient, added: true }];
      }

      saveToLocalStorage(newList);
      return { shoppingList: newList };
    });

    // Remove tick after 1.5s (for UI feedback)
    setTimeout(() => {
      set((state) => ({
        shoppingList: state.shoppingList.map((item) =>
          item.name === ingredient.name ? { ...item, added: false } : item
        ),
      }));
    }, 1500);
  },

  // Remove ingredient
  removeIngredient: (name) => {
    set((state) => {
      const newList = state.shoppingList.filter((item) => item.name !== name);
      saveToLocalStorage(newList);
      return { shoppingList: newList };
    });
  },

  // Clear entire shopping list
  clearList: () => {
    set(() => {
      saveToLocalStorage([]);
      return { shoppingList: [] };
    });
  },

  // Update ingredient measure
  updateIngredient: (name, newMeasure) => {
    set((state) => {
      const newList = state.shoppingList.map((item) =>
        item.name === name ? { ...item, measure: newMeasure } : item
      );
      saveToLocalStorage(newList);
      return { shoppingList: newList };
    });
  },
}));

export default useShoppingListStore;
