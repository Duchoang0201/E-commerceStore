import React, { useState } from "react";
import Link from "next/link";

import Draw from "@/components/Draw/Draw";

import useTrans from "@/hooks/useTrans";

import FunctionNavigation from "./FunctionNavigation";

function Navigation() {
  const [activeNav, setActiveNav] = useState("/");
  const { navigationList } = useTrans();
  return (
    <div className="container">
      {" "}
      <div className="pt-7 flex flex-row  ">
        <div className="!w-[308px] ">
          <Link href="/" className="self-center text-2xl font-bold text-black ">
            Exclusive
          </Link>
        </div>

        <div className=" lg:w-[892px] lg:flex lg:flex-row lg:justify-between w-full flex justify-end">
          <div className="text-sm font-normal not-italic hidden lg:flex ">
            <ul className=" flex flex-row gap-x-12">
              {navigationList &&
                navigationList.map((item) => {
                  return (
                    <li key={`${item.name}`} className=" py-2 ">
                      <Link
                        onClick={() => {
                          setActiveNav(item.href);
                        }}
                        href={item.href}
                        className={`block !text-base leading-6 text-black rounded md:hover:bg-transparent md:hover:text-Neutral-300 md:p-0 ${
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
