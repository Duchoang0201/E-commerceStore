import React from "react";
// import dynamic from "next/dynamic";
import PropTypes from "prop-types";

import IndexPage from "@/components/Layouts/IndexPage/IndexPage";

// import { API_URL } from "@/constant/URL";
// import { axiosClient } from "@/libraries/axiosClient";
import { getDataFunction } from "@/libraries/getDataFunction";

// const IndexPage = dynamic(
//   () => import("@/components/Layouts/IndexPage/IndexPage"),
//   {
//     ssr: false,
//     loading: () => {
//       <span>...</span>;
//     },
//   },
// );

export default function Home({ products, categories, thisMonth, ourProducts }) {
  return (
    <main>
      {/* <title>Exclusive E-commerce Shop</title> */}

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
    {
      dataName: "products",
      apiLink: "/products?offset=0&limit=10",
    },
    { dataName: "categories", apiLink: "/categories?offset=10" },
    {
      dataName: "thisMonth",
      apiLink: "/products?offset=0&limit=10",
    },
    {
      dataName: "ourProducts",
      apiLink: "/products?offset=0&limit=10",
    },
  ];

  // const [products, categories, thisMonth, ourProducts] = await Promise.all(
  //   data.map((item) =>
  //     fetch(`${API_URL}${item.apiLink}`, { cache: "force-cache" }).then((res) =>
  //       res.json(),
  //     ),
  //   ),
  // );
  const result = await getDataFunction(data);
  const props = result;

  return {
    // props: {
    //   products,
    //   categories,
    //   thisMonth,
    //   ourProducts,
    // },
    props,
  };
}

Home.propTypes = {
  products: PropTypes.instanceOf(Object).isRequired,
  categories: PropTypes.instanceOf(Object).isRequired,
  thisMonth: PropTypes.instanceOf(Object).isRequired,
  ourProducts: PropTypes.instanceOf(Object).isRequired,
};

// export const config = {
//   unstable_runtimeJS: false,
// };
