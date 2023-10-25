import React, { useState } from "react";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Heart, List, Search, ShoppingCart, X } from "lucide-react";
import FunctionNavigation from "./FunctionNavigation";

const ModalDraw = () => {
  const listNavi = [
    { name: "Home", href: "home" },
    { name: "Contact", href: "contact" },
    { name: "About", href: "about" },
    { name: "Sign up", href: "signup" },
  ];
  const [open, setOpen] = useState(false);

  const openDrawer = () => {
    setOpen(true);
  };
  const closeDrawer = () => setOpen(false);

  return (
    <React.Fragment>
      <Button
        onClick={openDrawer}
        className={`text-red-300 ${open && " hidden"}`}
      >
        <List size={24} color="gray" />
      </Button>
      <Drawer
        children
        open={open}
        onClose={closeDrawer}
        hidden={false}
        className={`${!open && " hidden"} z-50 bg-white text-black w-full `}
      >
        <div className="absolute right-2 bg-white rounded border-2 border-slate-300 w-[350px] ">
          <div className="mb-6 flex items-center justify-between ">
            <Typography className="px-2" variant="h5" color="blue-gray">
              Material Tailwind
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

              <ul className=" flex flex-col px-4 md:p-0 mt-6 font-medium border md:flex-row md:space-x-12 md:mt-0 md:border-0 sm:mt-10 rounded-md w-1/2">
                {listNavi.map((item, index) => {
                  return (
                    <li key={index} className="md:w-[61px] w-full py-2">
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
    </React.Fragment>
  );
};

export default ModalDraw;
