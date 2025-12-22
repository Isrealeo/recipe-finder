import useFavoritesStore from "../store/favoriteStore";
import RecipeCard from "./RecipeCard";

const Favorites = () => {
  const favorites = useFavoritesStore((state) => state.favorites);

  return (
    <div className="flex flex-col">

      <main className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-6 dark:text-gray-300">Your Favorites</h1>

        {favorites.length === 0 ? (
          <p className="text-gray-500">No favorites yet ❤️</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6 h-auto">
            {favorites.map((recipe) => (
              <RecipeCard key={recipe.idMeal} recipe={recipe} />
            ))}
          </div>
        )}
      </main>

    </div>
  );
};

export default Favorites;
