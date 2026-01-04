# Recipe Finder App 🍲

The **Recipe Finder App** is a frontend capstone project built with **React**.  
It allows users to search, browse, and manage recipes using data from  
[TheMealDB API](https://www.themealdb.com/).

The project emphasizes **clean architecture**, **responsive UI design**, and **modern state management** with Zustand.

---

## 🌍 Live Demo
👉 https://recipe-finder-lac-seven.vercel.app

---

## 🚀 Tech Stack
- **React** (Vite)
- **Tailwind CSS v3**
- **Zustand** – global state management
- **Axios** – API requests
- **TheMealDB API**

---

## ✨ Current Features
- 🔍 Search recipes by **name**
- 🧂 Search recipes by **ingredient**
- 🗂️ Browse recipes by **predefined categories**
- 🖼️ Recipe cards with image, category, and area
- 📖 Detailed recipe view:
  - Ingredients & measurements
  - Cooking instructions
  - YouTube video (if available)
  - Source link
- ❤️ Favorites list (persisted in **localStorage**)
- 🛒 Shopping list with editable quantities
- 🌙 Dark mode toggle (light/dark themes)
- 📱 Fully responsive UI (mobile, tablet, desktop)
- ⚡ Global state management using Zustand
- 🔗 API integration using Axios

---

## 🔄 Planned Features
- Additional recipe categories
- Improved mobile UI and animations
- Export shopping list as a file (PDF/CSV)
- Dark mode persistence across sessions
- Performance optimizations (lazy loading & pagination)

---

## 🛠️ Project Status
This project is **in progress** as part of a frontend capstone requirement.

Core functionality, API integration, and major features are complete.  
Future updates will focus on **UX polish, performance, and accessibility**.

---

## 📦 Getting Started

### 1️⃣ Clone the repository
git clone https://github.com/yourusername/recipe-finder-app.git
cd recipe-finder-app

###2️⃣ Install dependencies
npm install

###3️⃣ Run the development server
npm run dev

###The app will be available at:

http://localhost:5173
---
Project Structure

/src
  /components    Reusable UI components (Header, RecipeCard, SearchBar, etc.)
  /pages        Page components (Home.jsx, RecipeDetail.jsx)
  /store         Zustand stores (recipeStore, favoriteStore, shoppingListStore, themeStore)
  /services      API services (mealApi.js)
/public          Static assets (images)
/tailwind.config.js
/package.json
---
## Deployment

The application is deployed on Vercel.

To deploy updates manually:

vercel --prod
---
## 👤 Author

Isreal Nwaminogbe
Frontend Developer | React & Tailwind CSS
