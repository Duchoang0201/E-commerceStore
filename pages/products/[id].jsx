import React from "react";
import PropTypes from "prop-types";

import ProductDetail from "@/components/ProductId/ProductDetail";

import { axiosClient } from "@/libraries/axiosClient";

function ProductId({ product }) {
  return (
    <div className="container mt-[80px] mb-[140px] ">
      <div className="my-[80px] flex flex-row justify-between">
        {" "}
        <span>Home / {product.title}</span>
      </div>

      <ProductDetail product={product} />
    </div>
  );
}

export default ProductId;

export async function getStaticPaths() {
  const results = await axiosClient.get(`/products`);
  const products = results.data;
  const paths = products.map((item) => ({
    params: { id: `${item.id}` },
  }));

  return { paths, fallback: false };
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  const results = await axiosClient.get(`/products/${params.id}`);
  const product = results.data;
  return { props: { product } };
}

ProductId.propTypes = {
  product: PropTypes.instanceOf(Object).isRequired,
};
