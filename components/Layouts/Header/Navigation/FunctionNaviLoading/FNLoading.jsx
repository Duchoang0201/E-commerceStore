"use client";

import React from "react";
import { Heart, Search, ShoppingCart, User } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/router";

import CircleLoading from "@/components/App/CircleLoading/CircleLoading";

function FNLoading() {
  const router = useRouter();
  return (
    <div
      className={` hidden md:flex md:flex-row items-center md:justify-end md:w-fit max-w-[395px] w-full gap-x-[24px]`}
    >
      <form className="max-w-[243px] w-full flex flex-row gap-x-[34px] bg-Secondary-0 py-[7px] pl-5 pr-3 rounded-sm">
        <input
          className="text-[12px] bg-Secondary-0 w-[153px] outline-none"
          placeholder="What are you looking for?"
        />

        <button title="Search" type="submit">
          <Search strokeWidth={1.5} />
        </button>
      </form>
      <div
        className={`flex flex-row gap-x-4 ${
          (router.pathname === "/signin" || router.pathname === "/signup") &&
          "hidden"
        }`}
      >
        {" "}
        <Link
          href="/wishlist"
          className=" group relative flex flex-row justify-center items-center  max-w-[32px] max-h-[32px]  hover:text-white-0 hover:bg-Secondary-2 hover:duration-500 rounded-full"
        >
          <div className="flex flex-row justify-center items-center w-[32px] h-[32px]  ">
            <Heart
              className="relative"
              strokeWidth={1.5}
              width={24}
              height={24}
            />
            <div className="absolute inline-flex items-start justify-end text-xs bottom-1/2 right-0">
              <div className="bg-Secondary-2 w-[16px] h-[16px] rounded-full text-[12px] text-white-0 flex justify-center">
                <CircleLoading />
              </div>
            </div>
          </div>
        </Link>
        <Link
          href="/cart"
          className=" group relative flex-row justify-center items-center  max-w-[32px] max-h-[32px] hover:bg-Secondary-2 hover:duration-500 rounded-full hover:text-white-0"
        >
          <div className="flex flex-col items-start justify-end w-[32px] h-[32px]  ">
            <ShoppingCart strokeWidth={1.5} size={24} />
            <div className="absolute inline-flex items-start justify-end text-xs bottom-1/2 left-1/2">
              <div className="bg-Secondary-2 w-[16px] h-[16px] rounded-full text-[12px] text-white-0 flex justify-center">
                <CircleLoading />
              </div>
            </div>
          </div>
        </Link>
        <button
          title="User dropdown"
          type="button"
          className={`${
            router.asPath === "/account"
              ? " bg-Secondary-2 text-white-0"
              : "text-black-0"
          } w-[32px] h-[32px]  flex flex-row justify-center   items-center rounded-full hover:bg-Secondary-2 hover:duration-500 hover:text-white-0 `}
        >
          <User strokeWidth={1.5} size={32} />
        </button>
      </div>
    </div>
  );
}

export default FNLoading;
