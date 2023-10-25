import React from "react";
import { Heart, Search, ShoppingCart } from "lucide-react";

function FunctionNavigation() {
  return (
    <div className="flex flex-row items-center gap-4 pr-3 w-full">
      <form>
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

      <Heart size={32} />
      <ShoppingCart size={32} />
    </div>
  );
}

export default FunctionNavigation;
