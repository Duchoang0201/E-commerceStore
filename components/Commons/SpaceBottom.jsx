import React from "react";
import PropTypes from "prop-types";

function SpaceBottom({ border }) {
  return (
    <div className="container ">
      {" "}
      <div className={`${border && "border-b border-Neutral-200"} pt-[71px]`} />
    </div>
  );
}

export default SpaceBottom;

SpaceBottom.propTypes = {
  border: PropTypes.bool.isRequired,
};
