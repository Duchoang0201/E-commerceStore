import React, { useState } from "react";
import Link from "next/link";

import Draw from "@/components/Draw/Draw";

import useTrans from "@/hooks/useTrans";

import FunctionNavigation from "./FunctionNavigation";

function Navigation() {
  const [activeNav, setActiveNav] = useState("/");
  const { navigationList } = useTrans();
  const isUser = true;

  return (
    <div className="container">
      <div className="pt-[40px] flex flex-row justify-between mb-[14px] items-center">
        <div className="max-w-[118px]  ">
          <Link
            href="/"
            className="font-inter w-full text-[24px] tracking-[0.72px] not-italic  !font-bold text-black "
          >
            Exclusive
          </Link>
        </div>

        <div
          className={`${
            isUser
              ? " max-w-[440px] w-full lg:max-w-[892px] lg:w-full"
              : "lg:max-w-[862px] w-full"
          }  `}
        >
          <div className="flex justify-end md:flex md:flex-row md:justify-between">
            <ul className="hidden  lg:flex lg:flex-row lg:justify-between lg:!max-w-[367px] lg:gap-x-12 lg:w-full">
              {navigationList &&
                navigationList.map((item) => {
                  return (
                    <li
                      key={`${item.name}`}
                      className=" py-2 whitespace-nowrap"
                    >
                      <Link
                        onClick={() => {
                          setActiveNav(item.href);
                        }}
                        href={item.href}
                        className={`${
                          activeNav === item.href &&
                          "underline decoration-Neutral-300 underline-offset-4 font-normal text-base"
                        }`}
                        aria-current="page"
                      >
                        {item.name}
                      </Link>
                    </li>
                  );
                })}
            </ul>
            <FunctionNavigation isUser={isUser} />
            <div className="lg:hidden flex flex-row">
              <Draw />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
