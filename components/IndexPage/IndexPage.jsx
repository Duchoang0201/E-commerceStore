import React from "react";
import PropTypes, { string } from "prop-types"; // Import PropTypes from the correct module

import Categories from "./Categories/Categories";
import FlashSaleBanner from "./FlashSaleBanner/FlashSaleBanner";
import HerroBanner from "./HerroBanner/HerroBanner";
import ThisMonth from "./ThisMonth/ThisMonth";

function IndexPage({ products, categories, thisMonth }) {
  return (
    <div className="border-t border-TEXT-1 w-full ">
      <HerroBanner />
      <FlashSaleBanner products={products} />
      <Categories categories={categories} />
      <ThisMonth thisMonth={thisMonth} />
    </div>
  );
}

export default IndexPage;
IndexPage.propTypes = {
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
  categories: PropTypes.arrayOf(string),
  thisMonth: PropTypes.arrayOf(
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

IndexPage.defaultProps = {
  products: [],
  categories: [],
  thisMonth: [],
};
