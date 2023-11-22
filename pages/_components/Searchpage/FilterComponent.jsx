import React from "react";

import CategoriesFilter from "./CategoriesFilter";
import ClearFilter from "./ClearFilter";
import LimitFilter from "./LimitFiilter";
import PriceFilter from "./PriceFilter";

function FilterComponent() {
  return (
    <div className="flex flex-row justify-center container">
      <CategoriesFilter />
      <PriceFilter />
      <LimitFilter />
      <ClearFilter />
    </div>
  );
}

export default FilterComponent;
