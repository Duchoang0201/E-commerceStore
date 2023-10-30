import React from "react";
import PropTypes from "prop-types";

import Card from "@/components/CartCom/CartCom";
import SpaceBottom from "@/components/Commons/SpaceBottom";
import SpaceTop from "@/components/Commons/SpaceTop";

import { axiosClient } from "@/libraries/axiosClient";

function CartPage({ data }) {
  return (
    <div className="container">
      <SpaceTop />
      <div> Home / Cart</div>
      <SpaceTop />
      <Card data={data} />
      <SpaceBottom border={false} />
      <SpaceBottom border={false} />
    </div>
  );
}

export default CartPage;

export async function getStaticProps() {
  // Carts

  const resCarts = await axiosClient.get("/carts/user/1");
  const { data } = resCarts;

  return {
    props: {
      data,
    },
  };
}

CartPage.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};
