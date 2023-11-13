"use client";

import React from "react";
import PropTypes from "prop-types"; // Import PropTypes from the correct module

import IndexPage from "@/components/Layouts/IndexPage/IndexPage";

import { getDataFunction } from "@/libraries/getDataFunction";

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
  const data = [
    { dataName: "products", apiLink: "/products?offset=10" },
    { dataName: "categories", apiLink: "/categories?offset=10" },
    {
      dataName: "thisMonth",
      apiLink: "/products/?price_min=100&price_max=1000&offset=10&limit=10",
    },
    { dataName: "ourProducts", apiLink: "/products?offset=10" },
  ];

  const result = await getDataFunction(data);
  const props = result;

  // try {
  //   const [resProducts, resCategories, resThisMonth, resOurProducts] =
  //     await Promise.all([
  //       axiosClient.get("/products"),
  //       axiosClient.get("/categories"),
  //       axiosClient.get(
  //         "products/?price_min=100&price_max=1000&offset=10&limit=10"
  //       ),
  //       axiosClient.get("/products"),
  //     ]);
  //   const products = resProducts.data;
  //   const categories = resCategories.data;
  //   const thisMonth = resThisMonth.data;
  //   const ourProducts = resOurProducts.data;

  //   return {
  //     props: {
  //       products,
  //       categories,
  //       thisMonth,
  //       ourProducts,
  //     },
  //   };
  // } catch (error) {
  //   return {
  //     props: {
  //       products: [],
  //       categories: [],
  //       thisMonth: [],
  //       ourProducts: [],
  //     },
  //   };
  // }
  return {
    props,
  };
}

Home.propTypes = {
  products: PropTypes.instanceOf(Object).isRequired,
  categories: PropTypes.instanceOf(Object).isRequired,
  thisMonth: PropTypes.instanceOf(Object).isRequired,
  ourProducts: PropTypes.instanceOf(Object).isRequired,
};
