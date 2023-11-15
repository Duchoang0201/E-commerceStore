import React, { useRef } from "react";
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
  const searchRef = useRef();
  const router = useRouter();

  const { wishList: loveList } = useWishList();
  const { carts } = useCartStore();
  const { handleSubmit, control } = useForm({
    defaultValues: {
      search: router.query.title,
    },
  });
  const { setSearch } = useSearch();
  const onSubmit = (data) => {
    if (searchRef.current) {
      clearTimeout(searchRef.current);
    }
    searchRef.current = setTimeout(() => {
      if (data.search) {
        setSearch(data.search);

        router.push(`/searchpage?title=${data.search}`);
      } else {
        setSearch("");

        router.push(`/searchpage?title=${""}`);
      }
    }, [1000]);
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
          name="search"
          control={control}
          render={({ field }) => (
            <input
              defaultValue={field.value}
              value={field.value}
              {...field}
              className="text-[12px] bg-Secondary-0 w-[153px] outline-none"
              placeholder="What are you looking for?"
            />
          )}
        />

        <button type="submit">
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
          {loveList.length > 0 ? (
            <div className="flex flex-row justify-center items-center w-[32px] h-[32px]  ">
              <Heart
                className="relative"
                strokeWidth={1.5}
                width={24}
                height={24}
              />
              <div className="absolute inline-flex items-start justify-end text-xs bottom-1/2 right-0">
                <div className="bg-Secondary-2 w-[16px] h-[16px] rounded-full text-[12px] text-white-0 flex justify-center">
                  {loveList.length}
                </div>
              </div>
            </div>
          ) : (
            <Heart className="relative" strokeWidth={1.5} size={28} />
          )}
        </Link>
        <Link
          href="/cart"
          className=" group relative flex-row justify-center items-center  max-w-[32px] max-h-[32px] hover:bg-Secondary-2 hover:duration-500 rounded-full hover:text-white-0"
        >
          {carts && carts.length > 0 ? (
            <div className="flex flex-col items-start justify-end w-[32px] h-[32px]  ">
              <ShoppingCart strokeWidth={1.5} size={24} />
              <div className="absolute inline-flex items-start justify-end text-xs bottom-1/2 left-1/2">
                <div className="bg-Secondary-2 w-[16px] h-[16px] rounded-full text-[12px] text-white-0 flex justify-center">
                  {carts.length}
                </div>
              </div>
            </div>
          ) : (
            <ShoppingCart strokeWidth={1.5} size={28} />
          )}
        </Link>
        {isUser && isUser.name && (
          // <Link href="/account">
          <UserDropdown isUser={isUser} />
          // </Link>
        )}
      </div>
    </div>
  );
}

export default FunctionNavigation;

FunctionNavigation.propTypes = {
  isUser: PropTypes.instanceOf(Object).isRequired,
};
