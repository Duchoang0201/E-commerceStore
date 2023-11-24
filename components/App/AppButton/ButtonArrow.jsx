import React, { memo } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import PropTypes from "prop-types";

function ButtonArrow({ onPrev, onNext }) {
  return (
    <div className="flex flex-row gap-x-2">
      <button
        title="Prev"
        className="max-w-[46px] max-h-[46px] w-full h-auto justify-center p-[11px] rounded-full bg-Secondary-0"
        type="button"
        onClick={onPrev}
      >
        <ArrowLeft size={24} />
      </button>
      <button
        title="Next"
        className="max-w-[46px] max-h-[46px] w-full h-auto justify-center p-[11px] rounded-full bg-Secondary-0"
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
  onPrev: PropTypes.oneOfType([PropTypes.func, PropTypes.any]).isRequired,
  onNext: PropTypes.oneOfType([PropTypes.func, PropTypes.any]).isRequired,
};
