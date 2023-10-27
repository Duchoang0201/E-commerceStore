import React, { useState } from "react";
import Link from "next/link";

import Draw from "@/components/Draw/Draw";

import useTrans from "@/hooks/useTrans";

import FunctionNavigation from "./FunctionNavigation";

function Navigation() {
  const [activeNav, setActiveNav] = useState("/");
  const { navigationList } = useTrans();
  return (
    <div className=" mx-auto max-w-[1170px]">
      {" "}
      <div className="pt-7 flex flex-row  ">
        <div className="!w-[278px] ">
          <Link href="/" className="self-center text-2xl font-bold text-black ">
            Exclusive
          </Link>
        </div>

        <div className=" lg:w-[892px] lg:flex lg:flex-row lg:justify-between w-full flex justify-end">
          <div className="text-sm font-normal not-italic hidden lg:flex ">
            <ul className=" flex flex-row gap-x-2">
              {navigationList &&
                navigationList.map((item) => {
                  return (
                    <li
                      key={`${item.name}`}
                      className="md:w-[70px] w-full py-2"
                    >
                      <Link
                        onClick={() => {
                          setActiveNav(item.href);
                        }}
                        href={item.href}
                        className={`block px-2 py-2 pl-3 pr-4 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 ${
                          activeNav === item.href &&
                          "underline decoration-Neutral-300 underline-offset-4"
                        }`}
                        aria-current="page"
                      >
                        {item.name}
                      </Link>
                    </li>
                  );
                })}
            </ul>
          </div>
          <div className="text-black hidden md:flex ">
            <FunctionNavigation />
          </div>
          <div className="lg:hidden flex flex-row">
            <Draw />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
