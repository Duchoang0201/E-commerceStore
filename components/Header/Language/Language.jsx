import React from "react";
import Link from "next/link";

import Dropdown from "@/components/Dropdown/Dropdown";

function Language() {
  return (
    <div className="container flex flex-row justify-between">
      <div className="max-w-[310px] " />
      <div className="flex flex-row justify-between max-w-[859px] w-full text-white-0  ">
        <div className="flex justify-between xl:flex xl:justify-between  items-center text-sm font-normal not-italic w-full gap-2 ">
          <div className="max-w-[550px] w-full flex flex-row justify-between">
            <p className="text-truncate text-[14px]">
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!
            </p>
            <Link className="font-semibold underline text-sm px-2 " href="/">
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
