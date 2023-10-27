import React from "react";
import Link from "next/link";

import Dropdown from "@/components/Dropdown/Dropdown";

function Language() {
  return (
    <div className="container flex justify-center  md:flex md:flex-row">
      <div className="hidden lg:flex  lg:w-[310px]" />
      <div className=" flex justify-between xl:flex xl:justify-between xl:text-center w-full xl:w-[859px]  text-white-0  ">
        <div className="flex justify-center xl:flex xl:justify-between  items-center text-sm font-normal not-italic w-full gap-2 ">
          <div className="md:w-[550px] text-start flex flex-row ">
            <p className="text-truncate text-[14px]">
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!
            </p>
            <Link className="font-bold underline text-sm px-2 " href="/">
              ShopNow
            </Link>
          </div>
          <div className="md:flex hidden">
            <Dropdown
              data={[
                { name: "Tiếng việt", href: "vi" },
                { name: "English", href: "en" },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Language;
