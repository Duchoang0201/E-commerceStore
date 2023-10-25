import React from "react";
import Image from "next/image";

import Banner from "./Frame 560.png";

function HerroBanner() {
  const listNavi = [
    { name: "Woman’s Fashion", href: "Woman’sFashion" },
    { name: "Man's Fashion", href: "Man'sFashion" },
    { name: "Electronics", href: "Electronics" },
    { name: "Home & Lifestyle", href: "Home & Lifestyle" },
    { name: "Medicine", href: "Medicine" },
    { name: "Sports & Outdoor", href: "Sports & Outdoor" },
    { name: "Baby’s & Toys", href: "Baby’s & Toys" },
    { name: "Groceries & Pets", href: "Groceries & Pets" },
    { name: "Health & Beauty", href: "Health & Beauty" },
  ];
  return (
    <div className=" md:flex md:flex-row md:items-center md:justify-center md:mx-auto md:max-w-screen-xl ">
      <div className="md:flex md:flex-row md:justify-between w-full flex flex-row justify-between  ">
        <div className="w-[300px] border-r-2 py-5">
          <ul className="flex flex-col w-auto">
            {listNavi.map((item) => {
              return (
                <li key={`${item.name}`} className=" w-full px-5 py-2">
                  <a
                    href={item.href}
                    className="text-base  text-black w-auto"
                    aria-current="page"
                  >
                    {item.name}
                  </a>
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
