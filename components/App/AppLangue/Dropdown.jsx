"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp, Globe } from "lucide-react";
// import Link from "next/link";
import { useRouter } from "next/router";
import PropTypes from "prop-types";

import { LoadingCom } from "../AppLoading/LoadingCom";

function Dropdown({ data, color }) {
  const [loading, setLoading] = useState(false);
  const { locale } = useRouter();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  const changeLang = (lang) => {
    const currentPath = router.asPath;
    setLoading(true);
    router.push(currentPath, currentPath, { locale: lang }).then(() => {
      setLoading(false);
      setOpen(!open);
    });
  };

  return (
    <div className="relative inline-block text-end text-white-0 ">
      <button
        type="submit"
        onClick={handleOpen}
        className={` text-white-0  text-sm  py-2.5 text-center inline-flex items-center`}
      >
        <div
          className={`${
            color === "white" ? "text-white-0" : "text-black-0"
          } w-20 flex flex-row justify-center items-center gap-2`}
        >
          <Globe size={28} strokeWidth={1.25} /> {locale === "vi" ? "Vi" : "En"}
        </div>{" "}
        {open ? <ChevronUp size="22" /> : <ChevronDown size="22" />}
      </button>
      {open && (
        <div
          id="dropdown"
          className={`${
            color !== "white" ? "bg-white-0" : "bg-black-0"
          } z-10 origin-top-right absolute right-0 mt-2 w-44 bg-black-0  rounded-lg shadow-lg`}
          role="listbox"
          aria-labelledby="dropdownDefaultButton"
        >
          <ul
            className={`${
              color === "white" ? "text-white-0" : "text-black-0"
            } text-sm`}
          >
            {data?.map((item) => (
              <li key={item.name} className="">
                <button
                  type="submit"
                  onClick={() => {
                    changeLang(item.href);
                  }}
                  href={`/${item.href}`}
                  className="w-full"
                >
                  <LoadingCom language={item.name} open={loading} />
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

Dropdown.propTypes = {
  data: PropTypes.arrayOf(Object).isRequired,
};

Dropdown.propTypes = {
  color: PropTypes.string.isRequired,
};

export default Dropdown;
