import React from "react";
// import dynamic from "next/dynamic";
import PropTypes from "prop-types";

import IndexPage from "@/components/Layouts/IndexPage/IndexPage";

import { getDataFunction } from "@/libraries/getDataFunction"; // Import PropTypes from the correct module

// const IndexPage = dynamic(
//   () => import("@/components/Layouts/IndexPage/IndexPage"),
//   { ssr: false },
// );

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
      apiLink: "/products/?price_min=100",
    },
    { dataName: "ourProducts", apiLink: "/products?offset=10" },
  ];

  const result = await getDataFunction(data);
  const props = result;

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
