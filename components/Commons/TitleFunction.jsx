import React, { memo } from "react";
import PropTypes from "prop-types";

import { getNextDay } from "@/hooks/getSpecificDay";
import { useCountdown } from "@/hooks/useCountDown";

import AppButton from "../AppButton/AppButton";
import ButtonArrow from "../AppButton/ButtonArrow";

import ShowTime from "./ShowTime";

function TitleFunction({
  content,
  title,
  onPrev,
  onNext,
  isCountDown,
  buttonText,
  paddingY,
}) {
  const saturdayOfWeek = getNextDay("saturday") + 7 * 60 * 60;
  const [days, hours, minutes, seconds] = useCountdown(saturdayOfWeek);
  return (
    <div className="lg:!max-h-[108px] container flex flex-row justify-between">
      <div className="md:flex md:flex-row md:gap-x-[87px] flex flex-col">
        <div
          className={`${isCountDown ? "gap-y-6" : "gap-y-5"}  flex flex-col `}
        >
          {" "}
          <div className=" flex flex-row items-center justify-start  ">
            <div className="w-5 h-10 bg-Secondary-2 rounded-sm " />
            <div className="text-Secondary-2 text-lg px-5 font-semibold tracking-[1.44px]">
              {title}
            </div>
          </div>
          <div className="leading-[48px] tracking-[1.44px] font-inter font-semibold text-[20px] sm:text-[28px] md:text-[36px] ">
            {content}
          </div>
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
      <div>
        {" "}
        {onPrev && onNext ? (
          <div className="flex flex-col justify-end h-full ">
            <ButtonArrow onPrev={onPrev} onNext={onNext} />
          </div>
        ) : (
          <div className="flex flex-col justify-end h-full ">
            <AppButton buttonText={buttonText} paddingY={paddingY} />
          </div>
        )}
      </div>
    </div>
  );
}

export default memo(TitleFunction);

TitleFunction.propTypes = {
  onPrev: PropTypes.oneOfType([PropTypes.func, PropTypes.any]).isRequired, // onPrev can be a function or null
  onNext: PropTypes.oneOfType([PropTypes.func, PropTypes.any]).isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  isCountDown: PropTypes.bool.isRequired,
  paddingY: PropTypes.string.isRequired,
};
