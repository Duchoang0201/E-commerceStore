import React from "react";
import Link from "next/link";

import Dropdown from "@/components/App/AppLangue/Dropdown";

function Language() {
  return (
    <div className="container flex flex-row justify-end ">
      <div className="flex flex-row justify-between max-w-[859px] w-full text-white-0 -my-[2px] ">
        <div className="lg:max-w-[550px] lg:w-full lg:flex lg:flex-row lg:justify-between w-full flex justify-center lg:items-center items-center">
          <span className="text-truncate text-[14px] text-center">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </span>
          <Link
            className="md:visible  hidden font-semibold underline text-sm px-2 flex flex-row justify-center text-center items-center"
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
  );
}

export default Language;
