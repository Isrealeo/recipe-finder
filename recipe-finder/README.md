# Recipe Finder App 🍲

The Recipe Finder App is a frontend capstone project built with React. It allows users to search for meals and view detailed recipe information using data from [TheMealDB API](https://www.themealdb.com/). The project focuses on clean architecture, responsive UI design, and modern state management with Zustand.

---

## 🚀 Tech Stack
- **React** (Vite)
- **Tailwind CSS v3**
- **Zustand** (state management)
- **Axios** (API requests)
- **TheMealDB API**

---

## ✨ Current Features
- Search recipes by name
- Search recipes by ingredient
- Display recipe cards with images, category, and area
- Detailed recipe view (ingredients, instructions, YouTube video, source link)
- Favorites list saved in localStorage
- Shopping list with editable quantities
- Browse recipes by predefined categories
- Dark mode toggle for light/dark themes
- Responsive UI using Tailwind CSS
- Global state management with Zustand
- API integration with Axios

---

## 🔄 Planned Features
- Additional recipe categories
- Improved UI for better user experience
- Export shopping list as a file
- Enhanced dark mode persistence across sessions

---

## 🛠️ Project Status
This project is **in progress** as part of a frontend capstone requirement. Core setup, API integration, and foundational components are complete, with additional UI/UX improvements planned.

---

## 📦 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/recipe-finder-app.git
cd recipe-finder-app


project structure
/src
  /components   # Reusable UI components (RecipeCard, Header, SearchBar, etc.)
  /pages        # Page components (Home.jsx, RecipeDetail.jsx)
  /store        # Zustand stores (recipeStore, favoriteStore, shoppingListStore, themeStore)
  /services     # API services (mealApi.js)
/public         # Static assets (images)
/tailwind.config.js
/package.json
