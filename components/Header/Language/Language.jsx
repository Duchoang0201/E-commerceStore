import React from "react";
import Link from "next/link";
import Dropdown from "@/components/Dropdown/Dropdown";
const Language = () => {
  return (
    <div className="bg-black">
      <div className="flex flex-row items-center h-12">
        <div className="w-full ssm:w-[0px] xl:w-[445px]"></div>
        <div className="flex flex-row items-center justify-between ssm:w-full xl:w-[859px]  ">
          <div className="flex flex-row flex-wrap items-center text-sm font-normal not-italic w-full ">
            <div className="w-[474px]">
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!
            </div>
            <Link className="font-bold underline text-sm w-[68px]" href="/">
              ShopNow
            </Link>
          </div>
          <div>
            <Dropdown
              data={[
                { name: "Tiếng việt", href: "#" },
                { name: "English", href: "#" },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Language;
