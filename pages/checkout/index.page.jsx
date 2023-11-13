import React from "react";

import Checkout from "../_components/Checkout/Checkout";

function CartPage() {
  return (
    <div className="container">
      <div className="my-[70px]"> Home / Check out</div>
      <div className="pb-[160px]">
        <Checkout />
      </div>
    </div>
  );
}

export default CartPage;
