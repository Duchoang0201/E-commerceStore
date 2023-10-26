import React, { useState } from "react";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import Banner from "./Frame 560.png";

function HerroBanner() {
  const listNavi = [
    {
      name: "Woman’s Fashion",
      href: "Woman’sFashion",
      child: [
        { name: "women1", href: "women1" },
        { name: "women2", href: "women2" },
      ],
    },
    {
      name: "Man's Fashion",
      href: "Man'sFashion",
      child: [{ name: "man1", href: "man1" }],
    },
    { name: "Electronics", href: "Electronics" },
    { name: "Home & Lifestyle", href: "Home & Lifestyle" },
    { name: "Medicine", href: "Medicine" },
    { name: "Sports & Outdoor", href: "Sports & Outdoor" },
    { name: "Baby’s & Toys", href: "Baby’s & Toys" },
    { name: "Groceries & Pets", href: "Groceries & Pets" },
    { name: "Health & Beauty", href: "Health & Beauty" },
  ];
  const [showChild, setShowChild] = useState("");
  const openChild = (e) => {
    const liValue = e.target.getAttribute("value");
    setShowChild(liValue);
  };
  const closeChild = () => {
    setShowChild("");
  };
  return (
    <div className=" md:flex md:flex-row md:items-center md:justify-center md:mx-auto md:max-w-screen-xl ">
      <div className="md:flex md:flex-row md:justify-between w-full flex flex-row justify-between  ">
        <div className="w-[300px] border-r border-TEXT-1 py-5">
          <ul className="flex flex-col w-auto">
            {listNavi.map((item) => {
              return (
                <li
                  value={item.name}
                  onMouseLeave={closeChild}
                  onMouseEnter={openChild}
                  key={`${item.name}`}
                  className=" w-full px-5 py-2 hover:bg-TEXT-1 rounded-r-2xl "
                >
                  <Link
                    href={item.href}
                    className="text-base text-black w-auto flex flex-row justify-between"
                    aria-current="page"
                  >
                    <span>{item.name}</span>
                    {item.child && (
                      <span>
                        <ChevronRight size={24} />
                      </span>
                    )}
                  </Link>
                  {item.name === showChild && item.child && (
                    <ul
                      className={` w-52 flex flex-col absolute  h-auto ml-52 py-2 bg-Neutral-100 rounded`}
                    >
                      {item.child?.map((child) => {
                        return (
                          <li
                            className="px-2 py-2 hover:bg-TEXT-1"
                            key={child.name}
                          >
                            <Link
                              href={child.href}
                              className="text-base text-black w-auto flex flex-row justify-between"
                              aria-current="page"
                            >
                              {child.name}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        <div className=" flex-row items-center justify-between w-full ssm:w-full xl:w-[859px] hidden lg:flex py-5 ">
          <div className="flex flex-row flex-wrap items-center text-sm font-normal not-italic w-full ssm:w-[0px]">
            <div className="">
              <div
                className={`items-center justify-between w-full md:flex md:w-auto md:order-1 `}
                id="navbar-sticky"
              >
                <Image src={Banner} alt="Banner" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HerroBanner;
