import React, { memo } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import PropTypes from "prop-types";

function ButtonArrow({ onPrev, onNext }) {
  return (
    <div className="flex flex-row gap-x-2">
      <button
        className="max-w-[46px] h-auto justify-center flex p-[11px] rounded-full bg-Secondary-0"
        type="button"
        onClick={onPrev}
      >
        <ArrowLeft size={24} />
      </button>
      <button
        className="max-w-[46px] h-auto justify-center flex p-[11px] rounded-full bg-Secondary-0"
        type="button"
        onClick={onNext}
      >
        <ArrowRight size={24} />
      </button>
    </div>
  );
}

export default memo(ButtonArrow);

ButtonArrow.propTypes = {
  onPrev: PropTypes.oneOfType([PropTypes.func, PropTypes.any]).isRequired, // onPrev can be a function or null
  onNext: PropTypes.oneOfType([PropTypes.func, PropTypes.any]).isRequired,
};
