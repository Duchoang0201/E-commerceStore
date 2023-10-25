import React, { useState, useMemo } from "react";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Heart, List, Search, ShoppingCart, X } from "lucide-react";
import FunctionNavigation from "./FunctionNavigation";
import classNames from "classnames";

const ModalDraw = () => {
  const listNavi = useMemo(
    () => [
      { name: "Home", href: "home" },
      { name: "Contact", href: "contact" },
      { name: "About", href: "about" },
      { name: "Sign up", href: "signup" },
    ],
    []
  );

  const [open, setOpen] = useState(false);

  const openDrawer = () => {
    setOpen(true);
  };

  const closeDrawer = () => {
    setOpen(false);
  };

  return (
    <>
      <Button
        onClick={openDrawer}
        className={classNames("text-red-300", { hidden: open })}
      >
        <List size={24} color="gray" />
      </Button>
      <Drawer
        open={open}
        onClose={closeDrawer}
        className={classNames("z-50 bg-white text-black w-full", {
          hidden: !open,
        })}
      >
        <div className="absolute right-2 bg-white rounded border-2 border-slate-300 w-[350px] ">
          <div className="mb-6 flex items-center justify-between ">
            <Typography className="px-2" variant="h5" color="blue-gray">
              Exclusive
            </Typography>

            <button className=" right-0" onClick={closeDrawer}>
              <X />
            </button>
          </div>
          <div>
            <div className="flex flex-row flex-wrap items-center gap-4">
              <form>
                <label
                  htmlFor="default-search"
                  className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                >
                  Search
                </label>
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

              <Heart onClick={() => {}} size={32} />
              <ShoppingCart size={32} />

              <ul className="flex flex-col w-full px-2 py-2 h-auto">
                {listNavi.map((item, index) => {
                  return (
                    <li key={index} className="w-auto py-2">
                      <a
                        href={item.href}
                        className=" block px-2 py-2 pl-3 pr-4 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                        aria-current="page"
                      >
                        {item.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default ModalDraw;
