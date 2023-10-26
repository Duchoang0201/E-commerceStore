import React from "react";
import PropTypes from "prop-types"; // Import PropTypes from the correct module

import CardBanner from "./CardBanner";
import Content from "./Content";

function FlashSaleBanner({ products }) {
  return (
    <div>
      {" "}
      <div className="w-full text-black pt-20">
        <Content content={`Today's`} />
        <CardBanner products={products} />

        <div className="flex justify-center ">
          <button
            type="button"
            className="hover:bg-Neutral-600 transform transition-all duration-300 flex flex-row justify-center bg-Secondary-2 w-[234px] h-[56px] text-white-0 items-center text-white font-poppins text-base "
          >
            View All Products
          </button>
        </div>

        <div className="pt-20 border-b border-Neutral-100 mx-auto max-w-screen-2xl" />
      </div>
    </div>
  );
}

export default FlashSaleBanner;
FlashSaleBanner.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      price: PropTypes.number,
      category: PropTypes.string,
      description: PropTypes.string,
      image: PropTypes.string,
    }),
  ),
};
FlashSaleBanner.defaultProps = {
  products: [], // Set a default value for products (an empty array in this case)
};
