import React from "react";
import PropTypes from "prop-types";

function ShowTime({ days, hours, minutes, seconds }) {
  return (
    <div>
      {" "}
      <div className="!max-w-[302px] w-full max-h-[50px] flex flex-row justify-between md:flex md:flex-row  md:gap-[17px]">
        <div className="-mt-3">
          <div className="text-[12px] font-medium">Days</div>
          <div className="font-inter text-[24px] md:text-[32px] font-bold">
            {days.toString().padStart(2, "0")}
          </div>
        </div>
        <div className="mt-4">
          <div className="text-[15px] font-bold text-Button-2">:</div>
        </div>
        <div className="-mt-3">
          <div className="text-[12px] font-medium">Hours</div>
          <div className="font-inter text-[24px] md:text-[32px] font-bold">
            {hours.toString().padStart(2, "0")}
          </div>
        </div>
        <div className="mt-4">
          <div className="text-[15px] font-bold text-Button-2">:</div>
        </div>
        <div className="-mt-3">
          <div className="text-[12px] font-medium">Minutes</div>
          <div className="font-inter text-[24px] md:text-[32px] font-bold">
            {minutes.toString().padStart(2, "0")}
          </div>
        </div>
        <div className="mt-4">
          <div className="text-[15px] font-bold text-Button-2">:</div>
        </div>
        <div className="-mt-3">
          <div className="text-[12px] font-medium">Seconds</div>
          <div className="font-inter text-[24px] md:text-[32px] font-bold">
            {seconds.toString().padStart(2, "0")}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowTime;

ShowTime.propTypes = {
  days: PropTypes.number.isRequired,
  hours: PropTypes.number.isRequired,
  minutes: PropTypes.number.isRequired,
  seconds: PropTypes.number.isRequired,
};
