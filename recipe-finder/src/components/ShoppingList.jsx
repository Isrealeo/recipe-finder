import React from "react";
import useShoppingListStore from "../store/shoppingListStore";

const ShoppingList = () => {
  // Fix: use correct state key
  const shoppingList = useShoppingListStore((state) => state.shoppingList);
  const removeIngredient = useShoppingListStore((state) => state.removeIngredient);
  const updateIngredient = useShoppingListStore((state) => state.updateIngredient);

  const handleQuantityChange = (name, value) => {
    updateIngredient(name, value);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className=" bg-gray-50 p-6 flex flex-col items-center dark:bg-gray-900">
      <h1 className="text-3xl font-bold mb-6 dark:text-gray-300">Shopping List</h1>

      {shoppingList.length === 0 ? (
        <p className="text-gray-600">No ingredients added yet.</p>
      ) : (
        <div className="w-full max-w-3xl bg-white rounded-lg shadow-md p-4 dark:bg-gray-800">
          <ul className="space-y-4">
            {shoppingList.map((item, idx) => (
              <li
                key={idx}
                className="flex justify-between items-center border-b pb-2"
              >
                <div>
                  <span className="font-medium dark:text-gray-200">{item.name}</span>
                </div>
                <div className="flex items-center gap-2  p-2 rounded">
                  <input
                    type="text"
                    value={item.measure || ""}
                    onChange={(e) =>
                      handleQuantityChange(item.name, e.target.value)
                    }
                    placeholder="Quantity"
                    className="border rounded px-2 py-1 w-24 text-center bg-gray-50 dark:bg-gray-700 dark:text-gray-200"
                  />
                  <button
                    onClick={() => removeIngredient(item.name)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <button
            onClick={handlePrint}
            className="mt-6 bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 transition"
          >
            Print List
          </button>
        </div>
      )}
    </div>
  );
};

export default ShoppingList;
