"use client";

import React from "react";
import PropTypes from "prop-types"; // Import PropTypes from the correct module

function Content({ content }) {
  return (
    <div className=" flex flex-row items-center justify-start mx-auto max-w-[1170px] ">
      <div className="w-5 h-10 bg-Secondary-2 rounded-sm " />
      <div className="text-Secondary-2 text-lg px-5 font-semibold ">
        {content}
      </div>
    </div>
  );
}

export default Content;

Content.propTypes = {
  content: PropTypes.string,
};
Content.defaultProps = {
  content: "",
};
