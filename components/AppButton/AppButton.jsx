import React from "react";
import PropTypes from "prop-types";

function AppButton({ paddingY, buttonText }) {
  return (
    <button
      type="button"
      className={`py-[${paddingY}px] rounded-sm min-h-[44px] bg-Secondary-2 text-white-0 px-4 md:px-12 whitespace-nowrap`}
    >
      {buttonText}
    </button>
  );
}

export default AppButton;

AppButton.propTypes = {
  paddingY: PropTypes.string,
  buttonText: PropTypes.string.isRequired,
};
AppButton.defaultProps = {
  paddingY: 16,
};
