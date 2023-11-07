import React from "react";
import PropTypes from "prop-types";

import SearchPage from "@/components/Searchpage/SearchPage";

import { axiosClient } from "@/libraries/axiosClient";

function ProductCategory({ product }) {
  return (
    <div className="my-[140px]">
      <SearchPage data={product} />
    </div>
  );
}

export default ProductCategory;

export async function getStaticPaths() {
  const results = await axiosClient.get(`/products/categories`);
  const products = results.data;
  const paths = products.map((item) => ({
    params: { id: `${item}` },
  }));

  return { paths, fallback: false };
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  const results = await axiosClient.get(`/products/category/${params.id}`);
  const product = results.data;
  return { props: { product } };
}

ProductCategory.propTypes = {
  product: PropTypes.instanceOf(Object).isRequired,
};
