import React from "react";
import PropTypes from "prop-types";

function ShowTime({ days, hours, minutes, seconds }) {
  const arr = [
    { title: "Days", data: days },
    { title: "Hours", data: hours },
    { title: "Minutes", data: minutes },
    { title: "Seconds", data: seconds },
  ];
  return (
    <div className="leading-[30px] ">
      {" "}
      <div className="w-full md:flex md:flex-row md:gap-[17px] flex flex-row gap-[5px] text-center">
        {arr.map((item, index) => {
          const isLastItem = index === arr.length - 1;
          return (
            <div key={item.title} className="flex flex-row">
              <div className="md:flex md:flex-col md:gap-y-2 flex flex-col">
                <div className="text-[8px] md:text-[12px] font-medium leading-[18px] text-start">
                  {item.title}
                </div>
                <span className="font-inter text-[18px] md:text-[32px] font-bold leading-[32px]">
                  {item.data.toString().padStart(2, "0")}
                </span>
              </div>
              {!isLastItem && (
                <span className="text-[18px] font-bold text-Button-2 mt-6 sm:mt-6 md:mt-7  px-3 ssm:pl-[13px] ssm:pr-[7px]">
                  :
                </span>
              )}
            </div>
          );
        })}
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
