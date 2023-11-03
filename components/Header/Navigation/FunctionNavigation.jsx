"use client";

import React from "react";
import { Heart, Search, ShoppingCart } from "lucide-react";
import Link from "next/link";
import PropTypes from "prop-types";

import UserDropdown from "@/components/User/UserDropdown";

import useCartStore from "@/hooks/useCartStore";

function FunctionNavigation({ isUser }) {
  const loveList = [];
  const { carts } = useCartStore();
  return (
    <div
      className={` hidden md:flex md:flex-row items-center md:justify-end md:w-full max-w-[395px] w-full gap-x-6`}
    >
      <form className=" max-w-[243px] w-full flex flex-row justify-between bg-Secondary-0 py-[7px] pl-5 pr-3  rounded-sm">
        <input
          id="default-search"
          className="text-[12px] bg-Secondary-0 w-[153px]  outline-none  "
          placeholder="What are you looking for?"
        />

        <button type="submit" className=" ">
          <Search strokeWidth={1.25} />
        </button>
      </form>
      <div className="flex flex-row gap-x-4">
        {" "}
        <Link
          href="cart"
          className=" group relative  max-w-[32px] max-h-[32px] "
        >
          {loveList.length > 0 ? (
            <div className="flex flex-row justify-center items-center w-[32px] h-[32px]  ">
              <Heart
                className="relative"
                strokeWidth={1.25}
                color="black"
                width={20}
                height={18}
              />
              <div className="absolute inline-flex items-start justify-end text-xs bottom-1/2 left-1/2">
                <div className="bg-Secondary-2 w-[16px] h-[16px] rounded-full text-[12px] text-white-0 flex justify-center">
                  {loveList.length}
                </div>
              </div>
            </div>
          ) : (
            <Heart
              className="relative"
              strokeWidth={1.25}
              color="black"
              size={32}
            />
          )}
        </Link>
        <Link
          href="cart"
          className=" group relative  max-w-[32px] max-h-[32px] "
        >
          {carts.length > 0 ? (
            <div className="flex flex-col items-start justify-end w-[32px] h-[32px]  ">
              <ShoppingCart strokeWidth={1.25} color="black" size={24} />
              <div className="absolute inline-flex items-start justify-end text-xs bottom-1/2 left-1/2">
                <div className="bg-Secondary-2 w-[16px] h-[16px] rounded-full text-[12px] text-white-0 flex justify-center">
                  {carts.length}
                </div>
              </div>
            </div>
          ) : (
            <ShoppingCart strokeWidth={1.25} color="black" size={32} />
          )}
        </Link>
        {/* <Link
          href="cart"
          className=" group relative inline-flex justify-center "
        >
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
        </Link> */}
        {isUser && <UserDropdown isUser={isUser} />}
      </div>
    </div>
  );
}

export default FunctionNavigation;

FunctionNavigation.propTypes = {
  isUser: PropTypes.bool.isRequired,
};
