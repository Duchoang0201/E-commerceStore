import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Heart, List, Search, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/router";
import PropTypes from "prop-types";

import Dropdown from "@/components/App/AppLangue/Dropdown";
import UserDropdown from "@/components/User/UserDropdown";

import useCartStore from "@/hooks/useCartStore";
import useTrans from "@/hooks/useTrans";
import useWishList from "@/hooks/useWishList";

function NavigateDropdown({ isUser }) {
  const [open, setOpen] = useState(false);
  const { navigationList } = useTrans();
  const { carts } = useCartStore();
  const router = useRouter();
  const { wishList: loveList } = useWishList();

  const { handleSubmit, control } = useForm();
  const onSubmit = () => {
    router.push("/searchpage");
  };
  return (
    <div className={`relative flex items-center `}>
      <button
        title="openDraw"
        className=""
        onClick={() => {
          setOpen(!open);
        }}
        type="button"
      >
        <List strokeWidth={2} size={32} color="black" />
      </button>
      {open && (
        <div
          aria-hidden="true"
          className="fixed inset-0 z-40 bg-opacity-80 bg-black-0 backdrop-blur-sm  h-screen w-full"
          onClick={() => setOpen(false)}
        >
          12
        </div>
      )}
      <div
        aria-hidden={open ? "false" : "true"}
        className={`fixed inset-0 bg-white-0 backdrop-blur-0 left-0 top-0 h-screen max-w-fit  transform duration-700  transition-transform z-50 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-row justify-between items-center w-[244px] ">
          <div
            title="homepage"
            type="button"
            className=" text-xl font-bold text-white bg-red-500 border-white  "
          >
            Exclusive
          </div>
          <button
            title="Exit"
            onClick={() => setOpen(false)}
            type="button"
            className=" w-6 h-6 text-white-0 text-center bg-Red-500  rounded-full flex flex-row justify-center "
          >
            <span>X</span>
          </button>
        </div>
        <div className="w-full pt-4">
          <div className="flex flex-col justify-center items-center gap-4  w-full   md:hidden">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="max-w-[243px] w-full flex flex-row gap-x-[34px] bg-Secondary-0 py-[7px] pl-5 pr-3 rounded-sm"
            >
              <Controller
                name="search" // Add a name for the input field
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    className="text-[12px] bg-Secondary-0 w-[153px] outline-none"
                    placeholder="What are you looking for?"
                  />
                )}
              />

              <button title="Search" type="submit">
                <Search strokeWidth={1.25} />
              </button>
            </form>

            <div className="items-center flex flex-row justify-around w-full">
              {" "}
              <Link
                href="/wishlist"
                className=" group relative inline-flex justify-center "
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
                className=" group relative inline-flex justify-center "
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
              {isUser && isUser.name && <UserDropdown />}
              <div className="md:hiden ">
                <Dropdown
                  color="black"
                  data={[
                    { name: "Tiếng việt", href: "vi" },
                    { name: "English", href: "en" },
                  ]}
                />
              </div>
            </div>
          </div>
          <ul className="flex flex-col w-full  py-2 h-auto">
            {navigationList.map((item) => {
              return (
                <li key={`${item.name}`} className="w-auto py-2">
                  <Link
                    onClick={() => {
                      setOpen(false);
                    }}
                    href={`/${item.href}`}
                    className={`${
                      router.asPath === `/${item.href}` && "bg-TEXT-1"
                    } block py-2  pr-4 text-black rounded hover:bg-TEXT-1 hover:text-white-0   text-center`}
                    aria-current="page"
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavigateDropdown;
NavigateDropdown.propTypes = {
  isUser: PropTypes.instanceOf(Object).isRequired,
};
