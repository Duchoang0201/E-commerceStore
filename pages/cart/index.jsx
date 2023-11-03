import React from "react";
import PropTypes from "prop-types";

import Card from "@/components/CartCom/CartCom";
import SpaceBottom from "@/components/Commons/SpaceBottom";
import SpaceTop from "@/components/Commons/SpaceTop";

import { axiosClient } from "@/libraries/axiosClient";

function CartPage({ carts }) {
  return (
    <div className="container">
      <SpaceTop />
      <div> Home / Cart</div>
      <SpaceTop />
      <Card carts={carts} />
      <SpaceBottom border={false} />
      <SpaceBottom border={false} />
    </div>
  );
}

export default CartPage;

export async function getServerSideProps({ req }) {
  let carts = [];

  const cartsString = req.cookies.carts;
  if (cartsString) {
    const data = JSON.parse(cartsString);
    const promises = data.products.map(async (item) => {
      const resCart = await axiosClient.get(`/products/${item.productId}`);
      return { quantity: item.quantity, product: resCart.data }; // Assuming you want to return the data, not an array with a single item
    });
    carts = await Promise.all(promises);
  }

  return {
    props: {
      carts,
    },
  };
}

CartPage.propTypes = {
  carts: PropTypes.instanceOf(Object).isRequired,
};
