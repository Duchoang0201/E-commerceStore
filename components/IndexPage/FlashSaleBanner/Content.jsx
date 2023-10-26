import React from "react";
import PropTypes, { string } from "prop-types"; // Import PropTypes from the correct module

function Content({ content }) {
  return (
    <div className=" flex flex-row items-center justify-start mx-auto max-w-screen-xl px-5">
      <div className="w-5 h-10 bg-Secondary-2 rounded-sm " />
      <div className="text-Secondary-2 text-lg px-5 font-semibold ">
        {content}
      </div>
    </div>
  );
}

export default Content;

Content.propTypes = {
  content: PropTypes.instanceOf(string),
};
Content.defaultProps = {
  content: "",
};
