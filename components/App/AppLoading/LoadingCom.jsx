import React from "react";
import ReactLoading from "react-loading";
import PropTypes from "prop-types";

export function LoadingCom({ open, language }) {
  return (
    <div>
      {language && (
        <div className="flex flex-col text-start hover:bg-Neutral-300 transition-all duration-300 hover:rounded-md px-2 py-2">
          {language}
        </div>
      )}
      {open && (
        <div className="fixed items-center flex inset-0 z-40 bg-black-0 bg-opacity-40 h-screen w-full">
          <div className="mx-auto ">
            <ReactLoading />
          </div>
        </div>
      )}
    </div>
  );
}

LoadingCom.propTypes = {
  open: PropTypes.bool.isRequired,
  language: PropTypes.string.isRequired,
};
