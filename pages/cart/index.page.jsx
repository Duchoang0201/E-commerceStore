import React from "react";

import CartCom from "../_components/Cart/CartCom";

function CartPage() {
  return (
    <div className="container">
      <div className="my-[80px]"> Home / Cart</div>
      <CartCom />
    </div>
  );
}

export default CartPage;

export async function getServerSideProps({ req }) {
  let carts = [];

  const cartsString = req.cookies.carts;
  if (cartsString) {
    carts = JSON.parse(cartsString);
  }

  return {
    props: {
      carts,
    },
  };
}
