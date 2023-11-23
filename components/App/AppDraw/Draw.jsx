import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Heart, List, Search, ShoppingCart, X } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/router";

import useCartStore from "@/hooks/useCartStore";
import useTrans from "@/hooks/useTrans";

import Dropdown from "../AppLangue/Dropdown";

function Draw() {
  const [open, setOpen] = useState(false);
  const { navigationList } = useTrans();
  const { carts } = useCartStore();
  const router = useRouter();

  const { handleSubmit, control } = useForm();
  const onSubmit = () => {
    router.push("/searchpage");
  };
  return (
    <div className="relative flex items-center">
      <button
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
          className="fixed inset-0 z-40 bg-black-0 bg-opacity-90 h-screen w-full"
          onClick={() => setOpen(false)}
        >
          12
        </div>
      )}
      <div
        aria-hidden={open ? "false" : "true"}
        className={`fixed inset-0 bg-white-0 bg-opacity-90 backdrop-blur-0 left-0 top-0 h-screen max-w-fit  transform duration-700  transition-transform z-50 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-row justify-between items-center w-[244px] ">
          <div
            type="button"
            className=" text-xl font-bold text-white bg-red-500 border-white  "
          >
            Exclusive
          </div>
          <button
            onClick={() => setOpen(false)}
            type="button"
            className=" w-4 h-4 text-white-0 text-center bg-Red-500  rounded-full "
          >
            <X size={12} color="white" />
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

              <button type="submit">
                <Search strokeWidth={1.25} />
              </button>
            </form>

            <div className="items-center flex flex-row justify-around w-full">
              {" "}
              <Link
                href="/wishlist"
                className=" group relative inline-flex justify-center "
              >
                <Heart
                  className="relative"
                  strokeWidth={1.25}
                  color="black"
                  size={24}
                />
                <div className="absolute inline-flex items-start justify-end w-12 h-12 text-xs -top-2 -right-2 ">
                  <div className="bg-Secondary-2 w-6 h-6 rounded-full text-white-0 flex justify-center">
                    {carts.length}
                  </div>
                </div>
              </Link>
              <Link
                href="/cart"
                className=" group relative inline-flex justify-center "
              >
                <ShoppingCart
                  className="relative"
                  strokeWidth={1.25}
                  color="black"
                  size={24}
                />
                <div className="absolute inline-flex items-start justify-end w-12 h-12 text-xs -top-2 -right-2 ">
                  <div className="bg-Secondary-2 w-6 h-6 rounded-full text-white-0 flex justify-center">
                    {carts.length}
                  </div>
                </div>
              </Link>
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
          <div>
            <ul className="flex flex-col w-full  py-2 h-auto">
              {navigationList.map((item) => {
                return (
                  <li key={`${item.name}`} className="w-auto py-2">
                    <Link
                      href={`/${item.href}`}
                      className=" block py-2  pr-4 text-black rounded hover:bg-TEXT-1 hover:text-white-0   text-center"
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
    </div>
  );
}

export default Draw;
