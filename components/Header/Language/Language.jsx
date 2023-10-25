import React from "react";
import Link from "next/link";
import Dropdown from "@/components/Dropdown/Dropdown";
const Language = () => {
  return (
    <>
      <div className="mx-auto max-w-screen-xl flex flex-row justify-between">
        <div className="w-0 ssm:w-[0px] xl:w-[445px]"></div>
        <div className="flex flex-row items-center justify-between ssm:w-full xl:w-[859px] text-center   ">
          <div className="flex flex-row  items-center text-sm font-normal not-italic w-full ">
            <div className="md:w-[474px] ">
              <span className="text-truncate">
                Summer Sale For All Swim Suits And Free Express Delivery - OFF
                50%!
              </span>
            </div>
            <Link
              className="font-bold underline text-sm w-[68px] px-2"
              href="/"
            >
              ShopNow
            </Link>
          </div>
          <div className="md:flex hidden">
            <Dropdown
              data={[
                { name: "Tiếng việt", href: "#" },
                { name: "English", href: "#" },
              ]}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Language;
