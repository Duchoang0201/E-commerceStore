"use client";

import { ChevronDown, ChevronUp } from "lucide-react";

import PropTypes from "prop-types";
import React, { useState } from "react";

const Dropdown = ({ data }) => {
  const [open, setOpen] = useState(false);
  const [picked, setPicked] = useState("English");
  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="relative inline-block text-left ">
      <button
        onClick={handleOpen}
        className="text-white  text-sm  py-2.5 text-center inline-flex items-center"
      >
        <span className="w-20">{picked}</span>{" "}
        {open ? (
          <ChevronUp width={"24px"} height={"24px"} />
        ) : (
          <ChevronDown width={"24px"} height={"24px"} />
        )}
      </button>
      {open && (
        <div
          id="dropdown"
          className="z-10 origin-top-right absolute right-0 mt-2 w-44 bg-white divide-y divide-gray-100 rounded-lg shadow-lg dark:bg-black"
          role="listbox"
          aria-labelledby="dropdownDefaultButton"
        >
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
            {data.map((item, index) => (
              <li
                key={index}
                onClick={() => {
                  setPicked(item.name);
                  setOpen(!open);
                }}
              >
                <a
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  role="option"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

Dropdown.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      href: PropTypes.string,
    })
  ),
};

export default Dropdown;
