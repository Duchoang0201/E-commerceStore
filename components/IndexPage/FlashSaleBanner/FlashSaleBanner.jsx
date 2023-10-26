import React from "react";
import PropTypes from "prop-types"; // Import PropTypes from the correct module

import CardBanner from "./CardBanner";
import Content from "./Content";

function FlashSaleBanner({ products }) {
  return (
    <div>
      {" "}
      <div className="w-full text-black pt-20">
        <Content />
        <CardBanner products={products} />
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
