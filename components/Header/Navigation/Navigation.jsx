import React from "react";

import { DialogCom } from "./DialogCom";
import FunctionNavigation from "./FunctionNavigation";

function Navigation() {
  const listNavi = [
    { name: "Home", href: "home" },
    { name: "Contact", href: "contact" },
    { name: "About", href: "about" },
    { name: "Sign up", href: "signup" },
  ];
  return (
    <div className="pt-7 md:flex md:flex-row md:items-center md:justify-center md:mx-auto md:max-w-screen-xl  ">
      <div className="md:flex md:flex-row md:justify-between w-full flex flex-row justify-between  ">
        <div className="sm:w-[50px] md:w-[200px] xl:w-[445px] items-center ">
          <a href="https://flowbite.com/" className="w-full  ">
            <span className="self-center text-2xl font-bold  text-black ">
              Exclusive
            </span>
          </a>
        </div>

        <div className=" flex-row items-center justify-between w-full ssm:w-full xl:w-[859px] hidden lg:flex  ">
          <div className="flex flex-row flex-wrap items-center text-sm font-normal not-italic w-full ssm:w-[0px]">
            <div className="w-[474px]">
              <div
                className={`items-center justify-between w-full md:flex md:w-auto md:order-1 `}
                id="navbar-sticky"
              >
                <ul className="absolute flex flex-col px-4 md:p-0 mt-6 font-medium border md:flex-row md:space-x-12 md:mt-0 md:border-0 sm:mt-10 rounded-md w-1/2">
                  {listNavi.map((item) => {
                    return (
                      <li
                        key={`${item.name}`}
                        className="md:w-[61px] w-full py-2"
                      >
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
          <div className="text-black hidden lg:flex ">
            <FunctionNavigation />
          </div>
        </div>
        <div className="lg:hidden flex flex-row">
          <DialogCom />
        </div>
      </div>
    </div>
  );
}

export default Navigation;
