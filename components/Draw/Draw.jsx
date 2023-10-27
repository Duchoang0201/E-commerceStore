import React, { useState } from "react";
import { Heart, List, Search, ShoppingCart, X } from "lucide-react";

import useTrans from "@/hooks/useTrans";

import Dropdown from "../Dropdown/Dropdown";

function Draw() {
  const [open, setOpen] = useState(false);
  const { navigationList } = useTrans();

  return (
    <div className="relative flex items-center">
      <button
        className=""
        onClick={() => {
          setOpen(!open);
        }}
        type="button"
      >
        <List color="gray" />
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
        className={`fixed inset-0 bg-white-0 bg-opacity-90 backdrop-blur-0 left-0 top-0 h-screen w-4/6  transform duration-700  transition-transform z-50 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="relative py-16 px-14 ">
          <div className="flex flex-col justify-center items-center gap-4  w-full   md:hidden">
            <form>
              <div className="relative">
                <input
                  type="search"
                  id="default-search"
                  className="block p-3 text-sm text-gray-900 bg-gray-50 w-[243px]"
                  placeholder="Looking for..."
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

            <div className="flex flex-row justify-center w-full">
              {" "}
              <Heart size={32} />
              <ShoppingCart size={32} />{" "}
              <div className="md:hiden ">
                <Dropdown
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
                    <a
                      href={item.href}
                      className=" block py-2  pr-4 text-black rounded hover:bg-TEXT-1 hover:text-white-0   "
                      aria-current="page"
                    >
                      {item.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <button
            onClick={() => setOpen(false)}
            type="button"
            className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full top-3 right-2"
          >
            <X />
          </button>
          <div
            type="button"
            className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-white  top-3 left-14"
          >
            Exclusive
          </div>
        </div>
      </div>
    </div>
  );
}

export default Draw;
