"use client";

import React, { memo } from "react";
import dynamic from "next/dynamic";
import PropTypes from "prop-types";

import { getNextDay } from "@/hooks/getSpecificDay";
import { useCountdown } from "@/hooks/useCountDown";

import AppButton from "../App/AppButton/AppButton";
import ButtonArrow from "../App/AppButton/ButtonArrow";
import CircleLoading from "../App/CircleLoading/CircleLoading";

// import ShowTime from "./ShowTime";

const ShowTime = dynamic(() => import("./ShowTime"), {
  // ssr: false,
  loading: () => {
    <CircleLoading />;
  },
});

function TitleFunction({
  content,
  title,
  onPrev,
  onNext,
  isCountDown,
  buttonText,
  // paddingY,
}) {
  const saturdayOfWeek =
    getNextDay("saturday") -
    (8 * 60 * 60 * 1000 + 45 * 60 * 1000 + 8 * 1000) +
    7 * 60 * 60 * 1000;
  const [days, hours, minutes, seconds] = useCountdown(saturdayOfWeek);
  return (
    <div className="lg:!max-h-[108px]  flex flex-row justify-between">
      <div className="md:flex md:flex-row md:gap-x-[87px] flex flex-col">
        <div
          className={`${
            !isCountDown
              ? "flex flex-col justify-between h-full lg:gap-y-5 lg:flex lg:flex-col"
              : "flex flex-col justify-between lg:gap-y-6 lg:flex lg:flex-col"
          }   `}
        >
          <div className=" flex flex-row items-center justify-start  ">
            <span className="w-5 h-10 bg-Secondary-2 rounded-sm " />
            <span className="text-Secondary-2 px-5 font-semibold font-poppins">
              {title}
            </span>
          </div>
          <span className="leading-[48px] tracking-[1.44px] font-inter font-semibold text-[20px] sm:text-[28px] md:text-[36px] ">
            {content}
          </span>
        </div>
        <div className="flex flex-col justify-end">
          {isCountDown && (
            <ShowTime
              days={days}
              hours={hours}
              minutes={minutes}
              seconds={seconds}
            />
          )}
        </div>
      </div>
      <div className="flex flex-col justify-end">
        {" "}
        {onPrev && onNext ? (
          <ButtonArrow onPrev={onPrev} onNext={onNext} />
        ) : (
          <AppButton buttonText={buttonText} paddingY="16" href="/searchpage" />
        )}
      </div>
    </div>
  );
}

export default memo(TitleFunction);

TitleFunction.propTypes = {
  onPrev: PropTypes.oneOfType([PropTypes.func, PropTypes.any]).isRequired,
  onNext: PropTypes.oneOfType([PropTypes.func, PropTypes.any]).isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  isCountDown: PropTypes.bool.isRequired,
};
