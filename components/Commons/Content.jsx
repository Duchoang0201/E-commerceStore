"use client";

import React from "react";
import PropTypes from "prop-types"; // Import PropTypes from the correct module

function Content({ title }) {
  return (
    <div className=" flex flex-row items-center justify-start  ">
      <div className="w-5 h-10 bg-Secondary-2 rounded-sm " />
      <div className="text-Secondary-2 text-lg px-5 font-semibold tracking-[1.44px]">
        {title}
      </div>
    </div>
  );
}

export default Content;

Content.propTypes = {
  title: PropTypes.string,
};
Content.defaultProps = {
  title: "",
};
