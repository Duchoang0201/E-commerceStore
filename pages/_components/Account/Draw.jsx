"use client";

import React from "react";
import { List, X } from "lucide-react";
import PropTypes from "prop-types";

import AccountNavi from "./AccountNavi";

function Draw({ open, setOpen }) {
  return (
    <div className="relative flex items-center">
      <button
        title="list"
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
          <button
            title="homepage"
            type="button"
            className="text-xs font-bold text-white bg-red-500 border-white p-2 rounded"
          >
            Exclusive
          </button>

          <button
            title="exit"
            onClick={() => setOpen(false)}
            type="button"
            className="w-4 h-4 text-white bg-Red-500 rounded-full"
          >
            <X size={16} color="white" />
          </button>
        </div>
        <AccountNavi />
      </div>
    </div>
  );
}

export default Draw;

Draw.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};
