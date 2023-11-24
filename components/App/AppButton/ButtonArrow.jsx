import React, { memo } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import PropTypes from "prop-types";

function ButtonArrow({ onPrev, onNext }) {
  return (
    <div className="flex flex-row gap-x-2 items-end">
      <button
        title="Prev"
        className="  w-12 h-12 p-2 md:p-[11px] rounded-full bg-Secondary-0 flex flex-row justify-center items-center"
        type="button"
        onClick={onPrev}
      >
        <ArrowLeft />
      </button>
      <button
        title="Next"
        className="  w-12 h-12 p-2 md:p-[11px] rounded-full bg-Secondary-0 flex flex-row justify-center items-center"
        type="button"
        onClick={onNext}
      >
        <ArrowRight />
      </button>
    </div>
  );
}

export default memo(ButtonArrow);

ButtonArrow.propTypes = {
  onPrev: PropTypes.oneOfType([PropTypes.func, PropTypes.any]).isRequired,
  onNext: PropTypes.oneOfType([PropTypes.func, PropTypes.any]).isRequired,
};
