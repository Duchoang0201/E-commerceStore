"use client";

import React, { memo } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import PropTypes from "prop-types";

import Content from "./Content";

function Title({ content, title, onPrev, onNext, bgButton, buttonText }) {
  return (
    <div className="pb-[60px]">
      {" "}
      <Content title={title} />
      <div className="container pt-5 flex flex-row justify-between items-center">
        <div className="font-inter font-semibold text-[36px]">
          {content}
          {/* <div className="flex flex-row ">
            <div className="w-[46] h-[50px]">
              <div>
                <div className="text-sm">Days</div>
                <div className="text-3xl">03</div>
              </div>
            </div>
          </div> */}
        </div>
        {onPrev && onNext ? (
          <div className="flex flex-row items-center justify-end  ">
            <div className="flex flex-row gap-2">
              <button
                className="text-center flex justify-center items-center w-12 h-12 rounded-full bg-Secondary-0"
                type="button"
                onClick={onPrev}
              >
                <ArrowLeft />
              </button>
              <button
                className="text-center flex justify-center items-center w-12 h-12 rounded-full bg-Secondary-0"
                type="button"
                onClick={onNext}
              >
                <ArrowRight />
              </button>
            </div>
          </div>
        ) : (
          <button
            type="button"
            className={`${bgButton} hover:bg-Neutral-600 w-[159px]  transform transition-all duration-300 flex flex-row justify-center bg-Secondary-2  h-[56px] text-white-0 items-center text-white font-poppins text-base `}
          >
            {buttonText}
          </button>
        )}
      </div>
    </div>
  );
}

export default memo(Title);

Title.propTypes = {
  onPrev: PropTypes.oneOfType([PropTypes.func, PropTypes.any]).isRequired, // onPrev can be a function or null
  onNext: PropTypes.oneOfType([PropTypes.func, PropTypes.any]).isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  bgButton: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
};
