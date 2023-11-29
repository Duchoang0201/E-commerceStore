"use client";

import React from "react";
import dynamic from "next/dynamic";
import PropTypes from "prop-types"; // Import PropTypes from the correct module

import Categories from "./Categories/Categories";
import Features from "./Feature/Features";
import FlashSaleBanner from "./FlashSaleBanner/FlashSaleBanner";
// import HerroBanner from "./HerroBanner/HerroBanner";
import OurProducts from "./OurProducts/OurProducts";
import ThisMonth from "./ThisMonth/ThisMonth";

const HerroBanner = dynamic(() => import("./HerroBanner/HerroBanner"), {
  // ssr: false,
});
// const FlashSaleBanner = dynamic(
//   () => import("./FlashSaleBanner/FlashSaleBanner"),
//   {
//     ssr: false,
//   },
// );
// const Categories = dynamic(() => import("./Categories/Categories"), {
//   ssr: false,
// });

// const ThisMonth = dynamic(() => import("./ThisMonth/ThisMonth"), {
//   ssr: false,
// });
// const OurProducts = dynamic(() => import("./OurProducts/OurProducts"), {
//   ssr: false,
// });
// const Features = dynamic(() => import("./Feature/Features"), {
//   ssr: false,
// });
function IndexPage({ products, categories, thisMonth, ourProducts }) {
  return (
    <div className="container">
      <section>
        <HerroBanner />
      </section>
      <section className="mt-[25px] lg:mt-[140px]">
        <FlashSaleBanner products={products} />
      </section>
      <section className="mt-[80px] ">
        <Categories categories={categories} />
      </section>
      <section className="mt-[70px] mb-[6px]">
        <ThisMonth thisMonth={thisMonth} />
      </section>
      <section className="pt-[65px] ">
        <OurProducts ourProducts={ourProducts} />
      </section>
      <Features />
    </div>
  );
}

export default IndexPage;
IndexPage.propTypes = {
  products: PropTypes.arrayOf(Object),
  categories: PropTypes.arrayOf(Object),
  thisMonth: PropTypes.arrayOf(Object),
  ourProducts: PropTypes.arrayOf(Object),
};

IndexPage.defaultProps = {
  products: [],
  categories: [],
  thisMonth: [],
  ourProducts: [],
};
