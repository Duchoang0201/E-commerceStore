import React from "react";
import Link from "next/link";

import Dropdown from "@/components/Dropdown/Dropdown";

function Language() {
  return (
    <div className="container flex flex-row justify-between ">
      <div className="max-w-[310px] " />
      <div className="flex flex-row justify-between max-w-[859px] w-full text-white-0 -my-[2px] ">
        <div className="flex justify-between xl:flex xl:justify-between xl:w-full  items-center text-sm font-normal not-italic w-full gap-2 ">
          <div className="lg:max-w-[550px] lg:w-full lg:flex lg:flex-row lg:justify-between w-full flex justify-center">
            <p className="text-truncate text-[14px]">
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!
            </p>
            <Link
              className="font-semibold underline text-sm px-2 flex flex-row justify-center text-center items-center"
              href="/"
            >
              ShopNow
            </Link>
          </div>
          <div className="md:flex hidden text-Secondary-0">
            <Dropdown
              color="white"
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
