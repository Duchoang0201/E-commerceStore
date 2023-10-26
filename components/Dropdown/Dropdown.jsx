import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
// import Link from "next/link";
import { useRouter } from "next/router";
import PropTypes from "prop-types";

import { LoadingCom } from "../Commons/LoadingCom";

function Dropdown({ data }) {
  const [loading, setLoading] = useState(false);
  const { locale } = useRouter();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  const changeLang = (lang) => {
    setLoading(true);
    router.push("/", "/", { locale: lang }).then(() => {
      setLoading(false);
      setOpen(!open);
    });
  };

  return (
    <div className="relative inline-block text-left ">
      <button
        type="submit"
        onClick={handleOpen}
        className="text-white  text-sm  py-2.5 text-center inline-flex items-center"
      >
        <span className="w-20">
          {locale === "vi" ? "Tiếng việt" : "English"}
        </span>{" "}
        {open ? <ChevronUp size="24" /> : <ChevronDown size="24" />}
      </button>
      {open && (
        <div
          id="dropdown"
          className="z-10 origin-top-right absolute right-0 mt-2 w-44 bg-black-0 divide-y divide-gray-100 rounded-lg shadow-lg dark:bg-black"
          role="listbox"
          aria-labelledby="dropdownDefaultButton"
        >
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
            {data?.map((item) => (
              <li key={item.name}>
                <button
                  type="button"
                  onClick={() => {
                    changeLang(item.href);
                  }}
                  href={item.href}
                  className=" block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
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
  data: PropTypes.arrayOf(Object),
};

Dropdown.defaultProps = {
  data: [],
};

export default Dropdown;
