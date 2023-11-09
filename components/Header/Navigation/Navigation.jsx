import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import Draw from "@/components/Draw/Draw";

import useAuthStore from "@/hooks/useAuth";
import useTrans from "@/hooks/useTrans";

import FunctionNavigation from "./FunctionNavigation";

function Navigation() {
  const [activeNav, setActiveNav] = useState("/");
  const { navigationList } = useTrans();
  const router = useRouter();
  const { user: isUser } = useAuthStore();

  const isUserClass =
    isUser && isUser.name
      ? "max-w-[440px] w-full lg:max-w-[892px] lg:w-min"
      : `  ${
          router.pathname === "/signin" || router.pathname === "/signup"
            ? "max-w-[820px] w-full"
            : "w-full lg:max-w-[862px]"
        }`;
  return (
    <div className="pb-[14px] pt-[40px] border-b border-Neutral-200">
      <div className="container">
        <div className=" flex flex-row justify-between  items-center">
          <div className="max-w-[118px]  ">
            <Link
              href="/"
              className="font-inter w-full text-[24px] tracking-[0.72px] not-italic  !font-bold text-black "
            >
              Exclusive
            </Link>
          </div>

          <div className={isUserClass}>
            <div className="flex flex-row justify-end gap-4  lg:flex lg:flex-row lg:justify-between w-full">
              <ul className="hidden  lg:flex lg:flex-row lg:justify-between lg:!max-w-[367px] lg:gap-x-12 lg:w-full">
                {navigationList &&
                  navigationList.map((item) => {
                    return (
                      <li key={item.name} className=" py-2 whitespace-nowrap">
                        <Link
                          onClick={() => {
                            setActiveNav(
                              `/${item.href === "/" ? "" : item.href}`,
                            );
                          }}
                          href={`/${item.href === "/" ? "" : item.href}`}
                          className={`${
                            activeNav ===
                              `/${item.href === "/" ? "" : item.href}` &&
                            "underline "
                          } decoration-Neutral-300 underline-offset-4 font-normal text-base`}
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
    </div>
  );
}

export default Navigation;
