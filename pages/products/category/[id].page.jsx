import React from "react";
import PropTypes from "prop-types";

import { axiosClient } from "@/libraries/axiosClient";
import { getDataFunction } from "@/libraries/getDataFunction";
import SearchPage from "@/pages/_components/Product/SearchPage";

function ProductCategory({ products }) {
  return (
    <div className="my-[140px]">
      <SearchPage data={products} />
    </div>
  );
}

export default ProductCategory;

export async function getStaticPaths() {
  try {
    const results = await axiosClient.get(`/categories`);

    const paths = results.data.map((item) => ({
      params: { id: `${item.id}` },
    }));

    return { paths, fallback: false };
  } catch (error) {
    console.error("Error fetching data for paths:", error);

    return { paths: [], fallback: false };
  }
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  const data = [
    { dataName: "products", apiLink: `/categories/${params.id}/products` },
  ];

  const result = await getDataFunction(data);

  const props = result;
  return {
    props,
  };
}

ProductCategory.propTypes = {
  products: PropTypes.instanceOf(Object).isRequired,
};
