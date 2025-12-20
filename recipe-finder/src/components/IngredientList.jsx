import React from "react";

const IngredientList = ({ ingredients }) => {
  if (!ingredients.length) return null;

  return (
    <div className="bg-white/80 rounded-xl p-6 shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">
        Ingredients
      </h2>

      <ul className="space-y-2">
        {ingredients.map((item, index) => (
          <li
            key={index}
            className="flex justify-between border-b pb-2 text-gray-700"
          >
            <span className="font-medium">{item.ingredient}</span>
            <span className="text-sm text-gray-500">
              {item.measure}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IngredientList;
