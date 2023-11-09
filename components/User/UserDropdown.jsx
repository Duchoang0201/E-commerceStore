import React, { useEffect, useRef, useState } from "react";
import { User } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/router";

import useAuthStore from "@/hooks/useAuth";
// import Link from "next/link";
import useTrans from "@/hooks/useTrans";

function UserDropdown() {
  const { userDropdown } = useTrans();
  const [hoverIcon, setHoverIcon] = useState("manageaccount");
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  const router = useRouter();
  const dropdownRef = useRef();
  // Add a click event listener to close the dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [open]);

  const { logout } = useAuthStore();
  return (
    <div className="relative items-center  w-full">
      {/* <button
        type="submit"
        onClick={handleOpen}
        className={` text-sm text-center flex justify-center items-center`}
      >
        <User strokeWidth={1.25} color="black" size={32} />
      </button> */}

      <button
        ref={dropdownRef}
        onClick={handleOpen}
        type="button"
        className={`${
          open || router.asPath === "/account"
            ? " bg-Secondary-2 text-white-0"
            : "text-black-0"
        } w-[32px] h-[32px]  flex flex-row justify-center   items-center rounded-full `}
      >
        <User strokeWidth={1.5} size={open ? 24 : 32} />
      </button>
      {open && (
        <div
          id="dropdown"
          className={` z-10 origin-top-right absolute right-0  bg-white-0 bg-opacity-5 backdrop-blur-[75px] rounded-md shadow-lg`}
          role="listbox"
        >
          <ul className="bg-black-0 bg-opacity-60 backdrop-blur-lg rounded-md pl-[20px] py-[10px] flex flex-col gap-[13px]">
            {userDropdown?.map((item) => (
              <li
                value={item.route}
                key={item.title}
                className=" hover:bg-opacity-60 w-[224px] duration-200 max-h-[32px] leading-3 "
                onMouseEnter={(e) => {
                  if (hoverIcon) {
                    setHoverIcon("");
                    const checkValue = e.currentTarget.getAttribute("value");
                    setHoverIcon(checkValue);
                  }
                }}
              >
                <Link
                  value={item.name}
                  onClick={() => {
                    if (item.route === "logout") {
                      // deleteCookie("user");
                      // deleteCookie("carts");
                      logout();
                    }
                  }}
                  href={item.route === "logout" ? "/" : `/${item.route}`}
                  className=" text-white-0  flex flex-row items-center gap-4"
                >
                  {" "}
                  <item.icon
                    size={24}
                    className={`${
                      hoverIcon === item.route && "h-[32px] w-[32px]"
                    }  duration-500`}
                  />
                  <span className="title-Check text-start py-1 text-[14px]  font-normal ">
                    {item.title}
                  </span>
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
