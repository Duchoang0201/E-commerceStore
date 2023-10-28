import React from "react";
import PropTypes from "prop-types"; // Import PropTypes from the correct module

import Categories from "./Categories/Categories";
import Features from "./Feature/Features";
import FlashSaleBanner from "./FlashSaleBanner/FlashSaleBanner";
import HerroBanner from "./HerroBanner/HerroBanner";
import OurProducts from "./OurProducts/OurProducts";
import ThisMonth from "./ThisMonth/ThisMonth";
// categories, thisMonth, ourProducts
function IndexPage({ products, categories, thisMonth, ourProducts }) {
  return (
    <div className="border-t border-TEXT-1 w-full ">
      <HerroBanner />
      <FlashSaleBanner products={products} />
      <Categories categories={categories} />
      <ThisMonth thisMonth={thisMonth} />
      <OurProducts ourProducts={ourProducts} />
      <Features />
    </div>
  );
}

export default IndexPage;
IndexPage.propTypes = {
  products: PropTypes.arrayOf(Object),
  categories: PropTypes.arrayOf(String),
  thisMonth: PropTypes.arrayOf(Object),
  ourProducts: PropTypes.arrayOf(Object),
};

IndexPage.defaultProps = {
  products: [],
  categories: [],
  thisMonth: [],
  ourProducts: [],
};
