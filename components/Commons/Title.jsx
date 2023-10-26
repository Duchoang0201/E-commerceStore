"use client";

import React, { memo } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import PropTypes from "prop-types";

import Content from "./Content";

function Title({ content, title, onPrev, onNext }) {
  return (
    <div className="pb-[60px]">
      {" "}
      <Content content={content} />
      <div className="mx-auto max-w-[1170px] pt-5 flex flex-row justify-between">
        <div className="font-inter text-[36px] font-bold">{title}</div>
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
            className="hover:bg-Neutral-600 w-[159px]  transform transition-all duration-300 flex flex-row justify-center bg-Secondary-2  h-[56px] text-white-0 items-center text-white font-poppins text-base "
          >
            View All
          </button>
        )}
      </div>
    </div>
  );
}

export default memo(Title);

Title.propTypes = {
  onPrev: PropTypes.func.isRequired, // Define the onPrev and onNext props
  onNext: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
