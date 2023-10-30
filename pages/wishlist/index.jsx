import React from "react";
import PropTypes from "prop-types";

import SpaceBottom from "@/components/Commons/SpaceBottom";
import SpaceTop from "@/components/Commons/SpaceTop";
import Wishlist from "@/components/Wishlist/Wishlist";

import { axiosClient } from "@/libraries/axiosClient";

function WishlisePage({ data }) {
  return (
    <div className="container">
      <SpaceTop />
      <Wishlist data={data} />
      <SpaceBottom border={false} />
      <SpaceBottom border={false} />
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
