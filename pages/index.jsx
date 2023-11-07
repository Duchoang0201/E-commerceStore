import React from "react";
import PropTypes from "prop-types"; // Import PropTypes from the correct module

import IndexPage from "@/components/IndexPage/IndexPage";

import { axiosClient } from "@/libraries/axiosClient";

export default function Home({ products, categories, thisMonth, ourProducts }) {
  return (
    <main>
      <IndexPage
        products={products}
        categories={categories}
        thisMonth={thisMonth}
        ourProducts={ourProducts}
      />
    </main>
  );
}

export async function getStaticProps() {
  // Products

  const resProducts = await axiosClient.get("/products");
  const products = resProducts.data;

  // Categories

  const resCategories = await axiosClient.get("/products/categories");
  const categories = resCategories.data;

  // This Month

  const resThisMonth = await axiosClient.get("/products?limit=5");
  const thisMonth = resThisMonth.data;

  // Our Products

  const resOurProducts = await axiosClient.get("/products");
  const ourProducts = resOurProducts.data;
  return {
    props: {
      products,
      categories,
      thisMonth,
      ourProducts,
    },
  };
}
Home.propTypes = {
  products: PropTypes.instanceOf(Object).isRequired,
  categories: PropTypes.instanceOf(Object).isRequired,
  thisMonth: PropTypes.instanceOf(Object).isRequired,
  ourProducts: PropTypes.instanceOf(Object).isRequired,
};
