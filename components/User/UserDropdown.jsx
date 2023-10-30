import React, { useState } from "react";
import { User } from "lucide-react";

// import Link from "next/link";
import useTrans from "@/hooks/useTrans";

function UserDropdown() {
  const { userDropdown } = useTrans();

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="relative items-center">
      <button
        type="submit"
        onClick={handleOpen}
        className={` text-sm text-center flex justify-center items-center`}
      >
        <User strokeWidth={1.25} color="black" size={32} />
      </button>
      {open && (
        <div
          id="dropdown"
          className={` z-10 origin-top-right absolute right-0  bg-white-0 bg-opacity-5 backdrop-blur-[75px] rounded-md shadow-lg`}
          role="listbox"
          aria-labelledby="dropdownDefaultButton"
        >
          <ul className="bg-black-0 bg-opacity-60 backdrop-blur-lg rounded-md ">
            {userDropdown?.map((item) => (
              <li
                key={item.title}
                className="hover:bg-black-0 hover:bg-opacity-60 w-[224px] duration-200 "
              >
                <div className="text-sm pl-5 pr-3  py-2 ">
                  {" "}
                  <button
                    type="submit"
                    className="w-full text-white-0 flex flex-row items-center justify-between"
                  >
                    <item.icon size={19} />
                    <p className="w-[156px] text-start py-1 text-sm leading-5 font-normal ">
                      {item.title}
                    </p>
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default UserDropdown;
