import React from "react";
import PropTypes, { string } from "prop-types"; // Import PropTypes from the correct module

import Categories from "./Categories/Categories";
import FlashSaleBanner from "./FlashSaleBanner/FlashSaleBanner";
import HerroBanner from "./HerroBanner/HerroBanner";

function IndexPage({ products, categories }) {
  return (
    <div className="border-t border-TEXT-1 w-full ">
      <HerroBanner />
      <FlashSaleBanner products={products} />
      <Categories categories={categories} />
    </div>
  );
}

IndexPage.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      price: PropTypes.number,
      category: PropTypes.string,
      description: PropTypes.string,
      image: PropTypes.string,
    })
  ),
  categories: PropTypes.arrayOf(string),
};
IndexPage.defaultProps = {
  products: [], // Set a default value for products (an empty array in this case)
  categories: "",
};

export default IndexPage;
