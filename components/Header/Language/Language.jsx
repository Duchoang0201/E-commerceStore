import React from "react";
import Link from "next/link";

import Dropdown from "@/components/Dropdown/Dropdown";

function Language() {
  return (
    <div className="mx-auto max-w-[1170px] flex justify-center  md:flex md:flex-row">
      <div className="hidden lg:flex md:w-[311px]" />
      <div className="flex items-center justify-evenly ssm:w-full xl:w-[859px] text-center text-white-0  ">
        <div className="flex flex-row  items-center text-sm font-normal not-italic w-full gap-2 ">
          <div className="md:w-[474px] text-start ">
            <p className="text-truncate text-[14px]">
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!
            </p>
          </div>
          <Link className="font-bold underline text-sm " href="/">
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
  );
}

export default Language;
