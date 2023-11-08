import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Heart, Search, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/router";
import PropTypes from "prop-types";

import UserDropdown from "@/components/User/UserDropdown";

import useCartStore from "@/hooks/useCartStore";
import useSearch from "@/hooks/useSearch";
import useWishList from "@/hooks/useWishList";

function FunctionNavigation({ isUser }) {
  const { wishList: loveList } = useWishList();
  const { carts } = useCartStore();
  const { handleSubmit, control } = useForm();
  const [valueSearch, setValueSearch] = useState();
  const { setSearch } = useSearch();
  const router = useRouter();
  const onSubmit = (data) => {
    setSearch(data.search);
    setValueSearch(data.search);

    router.push("/searchpage");
  };
  return (
    <div
      className={` hidden md:flex md:flex-row items-center md:justify-end md:w-fit max-w-[395px] w-full gap-x-[24px]`}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-[243px] w-full flex flex-row gap-x-[34px] bg-Secondary-0 py-[7px] pl-5 pr-3 rounded-sm"
      >
        <Controller
          name="search" // Add a name for the input field
          control={control}
          render={({ field }) => (
            <input
              value={valueSearch}
              id="default-search"
              {...field}
              className="text-[12px] bg-Secondary-0 w-[153px] outline-none"
              placeholder="What are you looking for?"
            />
          )}
        />

        <button type="submit">
          <Search strokeWidth={1.25} />
        </button>
      </form>
      <div
        className={`flex flex-row gap-x-4 ${
          (router.asPath === "/signin" || router.asPath === "/signup") &&
          "hidden"
        }`}
      >
        {" "}
        <Link
          href="wishlist"
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
          {carts && carts.length > 0 && isUser && isUser.user ? (
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
        {isUser && isUser.user && <UserDropdown isUser={isUser} />}
      </div>
    </div>
  );
}

export default FunctionNavigation;

FunctionNavigation.propTypes = {
  isUser: PropTypes.bool.isRequired,
};
