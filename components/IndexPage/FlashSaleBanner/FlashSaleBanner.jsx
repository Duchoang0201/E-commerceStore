import React from "react";
import PropTypes from "prop-types"; // Import PropTypes from the correct module

import CardBanner from "./CardBanner";

function FlashSaleBanner({ products }) {
  return (
    <div>
      {" "}
      <div className=" text-black pt-20 ">
        <CardBanner products={products} />

        <div className="pt-[60px] pb-[60px] flex justify-center border-b border-Neutral-200 ">
          <button
            type="button"
            className="hover:bg-Neutral-600 transform transition-all duration-300 flex flex-row justify-center bg-Secondary-2 w-[234px] h-[56px] text-white-0 items-center text-white font-poppins text-base "
          >
            View All Products
          </button>
        </div>
      </div>
    </div>
  );
}

export default FlashSaleBanner;
FlashSaleBanner.propTypes = {
  products: PropTypes.arrayOf(Object),
};
FlashSaleBanner.defaultProps = {
  products: [], // Set a default value for products (an empty array in this case)
};
