import React from "react";
import { Heart, Search, ShoppingCart } from "lucide-react";
import Link from "next/link";

import UserDropdown from "@/components/User/UserDropdown";

function FunctionNavigation() {
  return (
    <div className="flex flex-row items-center gap-4 w-full">
      <form>
        <div className="relative">
          <input
            type="search"
            id="default-search"
            className="block p-3 text-sm text-gray-900 bg-gray-50 w-[243px] bg-Secondary-0 rounded-md"
            placeholder="What are you looking for?"
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
      <Heart strokeWidth={1.25} color="black" size={32} />

      <Link href="cart">
        <ShoppingCart strokeWidth={1.25} color="black" size={32} />
      </Link>

      <UserDropdown />
    </div>
  );
}

export default FunctionNavigation;
