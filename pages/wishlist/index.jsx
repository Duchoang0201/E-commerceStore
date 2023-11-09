import React from "react";
import PropTypes from "prop-types";

import Wishlist from "@/components/Wishlist/Wishlist";

import { axiosClient } from "@/libraries/axiosClient";

function WishlisePage({ data }) {
  return (
    <div className="container">
      <section className="mt-[70px] mb-[140px]">
        <Wishlist data={data} />
      </section>
    </div>
  );
}

export default WishlisePage;

export async function getStaticProps() {
  // Carts

  const resCarts = await axiosClient.get("/products?limit=4");
  const { data } = resCarts;

  return {
    props: {
      data,
    },
  };
}

WishlisePage.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};
