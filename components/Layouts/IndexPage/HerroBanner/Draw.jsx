"use client";

import React, { useState } from "react";
import { ChevronLeft, List, X } from "lucide-react";
import Link from "next/link";
import PropTypes from "prop-types";

import useTrans from "@/hooks/useTrans";

function Draw({ open, setOpen }) {
  const { menuList } = useTrans();
  const [showChild, setShowChild] = useState("");

  const openChild = (e) => {
    const liValue = e.currentTarget.getAttribute("value");
    setShowChild(liValue);
  };
  const closeChild = () => {
    setShowChild("");
  };
  return (
    <div className="relative flex items-center">
      <button
        title="Menu list"
        className="bg-white"
        onClick={() => {
          setOpen(!open);
        }}
        type="button"
      >
        <List strokeWidth={2} size={24} color="black" />
      </button>
      {open && (
        <div
          aria-hidden="true"
          className="fixed inset-0 z-40 bg-black-0 bg-opacity-70  h-screen w-full"
          onClick={() => setOpen(false)}
        />
      )}
      <div
        aria-hidden={open ? "false" : "true"}
        className={`fixed inset-0 bg-white-0 bg-opacity-90  h-screen w-fit transform duration-700 transition-transform right-0 left-auto z-50 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-row justify-between items-center max-w-[200px]">
          <span
            title="Home page"
            type="button"
            className="text-xs font-bold text-white bg-red-500 border-white p-2 rounded"
          >
            Exclusive
          </span>

          <button
            title="Close"
            onClick={() => setOpen(false)}
            type="button"
            className="w-4 h-4 text-white bg-Red-500 rounded-full"
          >
            <X size={16} color="white" />
          </button>
        </div>
        <ul className="w-fit">
          {menuList.map((item, index) => {
            const isLastItem = index === menuList.length - 1;
            return (
              <li
                key={`${item.name}`}
                className={`${
                  isLastItem ? "" : ""
                } rounded-r-2xl max-w-[233px] `}
              >
                <Link
                  value={item.name}
                  onMouseLeave={closeChild}
                  onMouseOver={openChild}
                  href={`/${item.href}`}
                  className={`${
                    isLastItem ? "pt-2" : "py-2"
                  } text-base text-end max-w-[150px] align-bottom text-black flex flex-row justify-between hover:bg-TEXT-1 hover:rounded-md duration-200 transition-all`}
                  aria-current="page"
                >
                  {item.child && <ChevronLeft size={16} />}
                  <p className="text-end w-full">{item.name}</p>

                  {item.name === showChild && item.child && (
                    <ul
                      className={` max-w-[210px] w-full flex flex-col absolute mt-2  h-auto -ml-[80px]  bg-Neutral-100 rounded  transition-all duration-200 z-50`}
                    >
                      {item.child?.map((child) => {
                        return (
                          <li key={child.name}>
                            <Link
                              href={`/${child.href}`}
                              className="text-base h-10 items-center hover:bg-TEXT-1 hover:rounded-md text-black w-auto flex flex-row justify-between"
                              aria-current="page"
                            >
                              {child.name}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Draw;

Draw.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};
