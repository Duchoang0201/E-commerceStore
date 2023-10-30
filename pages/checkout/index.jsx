import React from "react";

import Checkout from "@/components/Checkout/Checkout";
import SpaceBottom from "@/components/Commons/SpaceBottom";
import SpaceTop from "@/components/Commons/SpaceTop";

function CartPage() {
  return (
    <div className="container">
      <SpaceTop />
      <div> Home / Check out</div>
      <SpaceTop />
      <Checkout />
      <SpaceBottom border={false} />
      <SpaceBottom border={false} />
    </div>
  );
}

export default CartPage;
