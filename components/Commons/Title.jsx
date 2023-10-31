"use client";

import React, { memo } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import PropTypes from "prop-types";

import { useCountdown } from "@/hooks/useCountDown";

import Content from "./Content";

function Title({
  content,
  title,
  onPrev,
  onNext,
  bgButton,
  buttonText,
  isCountDown,
}) {
  const [days, hours, minutes, seconds] = useCountdown("11/5/2023 23:59:59");
  return (
    <div className="pb-[60px]">
      {" "}
      <Content title={title} />
      <div className="container flex flex-row justify-between">
        <div className="flex flex-row gap-x-[87px]">
          <div className="font-inter font-semibold text-[36px]">{content}</div>
          {isCountDown && (
            <div className="w-[46] h-[50px] flex flex-row gap-[17px]">
              <div className="-mt-3">
                <div className="text-[12px] font-medium">Days</div>
                <div className="font-inter text-[32px] font-bold">{days}</div>
              </div>
              <div className="mt-4">
                <div className="text-[15px] font-bold text-Button-2">:</div>
              </div>
              <div className="-mt-3">
                <div className="text-[12px] font-medium">Hours</div>
                <div className="font-inter text-[32px] font-bold">{hours}</div>
              </div>
              <div className="mt-4">
                <div className="text-[15px] font-bold text-Button-2">:</div>
              </div>
              <div className="-mt-3">
                <div className="text-[12px] font-medium">Minutes</div>
                <div className="font-inter text-[32px] font-bold">
                  {minutes}
                </div>
              </div>
              <div className="mt-4">
                <div className="text-[15px] font-bold text-Button-2">:</div>
              </div>
              <div className="-mt-3">
                <div className="text-[12px] font-medium">Seconds</div>
                <div className="font-inter text-[32px] font-bold">
                  {seconds}
                </div>
              </div>
            </div>
          )}
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
  isCountDown: PropTypes.bool,
};

Title.defaultProps = {
  isCountDown: false,
};
