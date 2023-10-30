"use client";

import React from "react";
import { Heart, Search, ShoppingCart } from "lucide-react";
import Link from "next/link";

import UserDropdown from "@/components/User/UserDropdown";

import useCartStore from "@/hooks/useCartStore";

function FunctionNavigation() {
  const { carts } = useCartStore();
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
      <Link href="cart" className=" group relative inline-flex justify-center ">
        <Heart
          className="relative"
          strokeWidth={1.25}
          color="black"
          size={32}
        />
        <div className="absolute inline-flex items-start justify-end w-12 h-12 text-xs -top-2 -right-2 ">
          <div className="bg-Secondary-2 w-6 h-6 rounded-full text-white-0 flex justify-center">
            {carts.length}
          </div>
        </div>
      </Link>
      <Link href="cart" className=" group relative inline-flex justify-center ">
        <ShoppingCart
          className="relative"
          strokeWidth={1.25}
          color="black"
          size={32}
        />
        <div className="absolute inline-flex items-start justify-end w-12 h-12 text-xs -top-2 -right-2 ">
          <div className="bg-Secondary-2 w-6 h-6 rounded-full text-white-0 flex justify-center">
            {carts.length}
          </div>
        </div>
      </Link>

      <UserDropdown />
    </div>
  );
}

export default FunctionNavigation;
