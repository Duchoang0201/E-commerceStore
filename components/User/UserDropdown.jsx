import React, { useEffect, useRef, useState } from "react";
import { deleteCookie } from "cookies-next";
import { User } from "lucide-react";
import Link from "next/link";

// import Link from "next/link";
import useTrans from "@/hooks/useTrans";

function UserDropdown() {
  const { userDropdown } = useTrans();

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };

  const dropdownRef = useRef();
  // Add a click event listener to close the dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(!open);
      }
    }

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
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
          ref={dropdownRef}
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
                <Link
                  onClick={() => {
                    if (item.route === "logout") {
                      deleteCookie("user");
                    }
                  }}
                  href={item.route === "logout" ? "/" : item.route}
                  className="text-sm "
                >
                  {" "}
                  <div className="w-full text-white-0 flex flex-row items-center justify-evenly">
                    <item.icon size={19} />
                    <span className="w-[156px] text-start py-1 text-sm leading-5 font-normal ">
                      {item.title}
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default UserDropdown;
