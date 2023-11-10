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
  try {
    const [resProduct] = await Promise.all([
      axiosClient.get(`/categories/${params.id}/products`),
    ]);

    const product = resProduct.data;

    return {
      props: {
        product,
      },
    };
  } catch (error) {
    console.error("Error fetching data for props:", error);

    return {
      props: {
        product: [],
      },
    };
  }
}

ProductCategory.propTypes = {
  product: PropTypes.instanceOf(Object).isRequired,
};
