import React from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";

function AppButton({ paddingY, buttonText }) {
  const router = useRouter();
  return (
    <button
      title={buttonText}
      type="button"
      onClick={() => {
        router.push("/searchpage");
      }}
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
  paddingY: "16",
};
