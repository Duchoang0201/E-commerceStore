import { Heart, Search, ShoppingCart } from "lucide-react";
import React from "react";

const FunctionNavigation = () => {
  return (
    <div className="flex flex-row items-center gap-4 w-full">
      <form>
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <input
            type="search"
            id="default-search"
            className="block p-3 text-sm text-gray-900 bg-gray-50 w-[243px]"
            placeholder="Search Mockups, Logos..."
            required
          />
          <button
            type="submit"
            className="text-black absolute right-2.5 bottom-2.5  focus:ring-4 focus:outline-none  font-medium rounded-lg "
          >
            <Search />
          </button>
        </div>
      </form>

      <Heart
        onClick={() => {
          console.log(`🎶🎶🎶.. 123`);
        }}
        size={32}
      />
      <ShoppingCart size={32} />
    </div>
  );
};

export default FunctionNavigation;
