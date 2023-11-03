import React from "react";
import PropTypes from "prop-types";

import Card from "@/components/CartCom/CartCom";
import SpaceBottom from "@/components/Commons/SpaceBottom";
import SpaceTop from "@/components/Commons/SpaceTop";

import { axiosClient } from "@/libraries/axiosClient";

function CartPage({ data, carts }) {
  return (
    <div className="container">
      <SpaceTop />
      <div> Home / Cart</div>
      <SpaceTop />
      <Card data={data} carts={carts} />
      <SpaceBottom border={false} />
      <SpaceBottom border={false} />
    </div>
  );
}

export default CartPage;

export async function getServerSideProps({ req }) {
  const userString = req.cookies.user;
  const user = JSON.parse(userString);
  const { sub } = user;

  const resCarts = await axiosClient.get(`/carts/user/${sub}`);
  const { data } = resCarts;

  // Use `map` with async/await to fetch products
  const promises = data[0].products.map(async (item) => {
    const resCart = await axiosClient.get(`/products/${item.productId}`);
    return { quantity: item.quantity, product: resCart.data }; // Assuming you want to return the data, not an array with a single item
  });

  const carts = await Promise.all(promises);

  return {
    props: {
      data,
      carts,
    },
  };
}

CartPage.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
  carts: PropTypes.instanceOf(Object).isRequired,
};
