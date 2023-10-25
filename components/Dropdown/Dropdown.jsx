import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";
import PropTypes from "prop-types";

function Dropdown({ data }) {
  const [open, setOpen] = useState(false);
  const [picked, setPicked] = useState("English");
  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="relative inline-block text-left ">
      <button
        type="submit"
        onClick={handleOpen}
        className="text-white  text-sm  py-2.5 text-center inline-flex items-center"
      >
        <span className="w-20">{picked}</span>{" "}
        {open ? <ChevronUp size="24" /> : <ChevronDown size="24" />}
      </button>
      {open && (
        <div
          id="dropdown"
          className="z-10 origin-top-right absolute right-0 mt-2 w-44 bg-white divide-y divide-gray-100 rounded-lg shadow-lg dark:bg-black"
          role="listbox"
          aria-labelledby="dropdownDefaultButton"
        >
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
            {data?.map((item) => (
              <li key={item.name}>
                <Link
                  onClick={() => {
                    setPicked(item.name);
                    setOpen(!open);
                  }}
                  href="/"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  role="option"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

Dropdown.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      href: PropTypes.string,
    }),
  ),
};

Dropdown.defaultProps = {
  data: [],
};

export default Dropdown;
