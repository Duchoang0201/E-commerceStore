"use client";

import React, { memo } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import PropTypes from "prop-types";

import { getNextDay } from "@/hooks/getSpecificDay";
import { useCountdown } from "@/hooks/useCountDown";

import Content from "./Content";
import ShowTime from "./ShowTime";

function Title({
  content,
  title,
  onPrev,
  onNext,
  bgButton,
  buttonText,
  isCountDown,
}) {
  const saturdayOfWeek = getNextDay("saturday") + 7 * 60 * 60;
  const [days, hours, minutes, seconds] = useCountdown(saturdayOfWeek);
  return (
    <div className="mb-[40px]">
      {" "}
      <Content title={title} />
      <div className="container flex flex-row justify-between mt-[20px]">
        <div className="flex flex-col w-full gap-y-2 md:flex md:flex-row md:gap-x-[87px]">
          <div className="font-inter font-semibold text-[20px] sm:text-[28px] md:text-[36px]">
            {content}
          </div>
          {isCountDown && (
            <ShowTime
              days={days}
              hours={hours}
              minutes={minutes}
              seconds={seconds}
            />
          )}
        </div>
        {onPrev && onNext ? (
          <div className="flex flex-row items-center justify-end max-w-[100px] w-full -mt-3 ">
            <div className="flex flex-row gap-2 w-full">
              <button
                className="text-center flex justify-center w-full items-center rounded-full bg-Secondary-0"
                type="button"
                onClick={onPrev}
              >
                <ArrowLeft />
              </button>

              <button
                className="text-center flex justify-center items-center w-full h-12 rounded-full bg-Secondary-0"
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
