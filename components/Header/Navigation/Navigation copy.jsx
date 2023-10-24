import React from "react";
import FunctionNavigation from "./FunctionNavigation";

const Navigation = () => {
  const listNavi = [
    { name: "Home", href: "home" },
    { name: "Contact", href: "contact" },
    { name: "About", href: "about" },
    { name: "Sign up", href: "signup" },
  ];
  return (
    <nav className="bg-white pt-7">
      <div className="flex flex-row items-center h-12">
        <div className="w-full ssm:w-[0px] xl:w-[445px]">
          <a
            href="https://flowbite.com/"
            className="w-full ssm:w-[0px] xl:w-[445px] px-5"
          >
            <span className="self-center text-2xl font-bold  text-black ">
              Exclusive
            </span>
          </a>
        </div>
        <div className="flex flex-row items-center justify-between w-full ssm:w-full xl:w-[859px]  ">
          <div className="flex flex-row flex-wrap items-center text-sm font-normal not-italic w-full ">
            <div className="w-[474px]">
              <div
                className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                id="navbar-sticky"
              >
                <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border   md:flex-row md:space-x-12 md:mt-0 md:border-0 ">
                  {listNavi.map((item, index) => {
                    return (
                      <li>
                        <a
                          href={item.href}
                          className="  text-black text-base font-normal rounded md:bg-transparent  md:p-0 "
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
          <div className="text-black">
            <FunctionNavigation />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
