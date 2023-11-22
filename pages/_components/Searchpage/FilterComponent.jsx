import React from "react";
import PropTypes from "prop-types";

import CategoriesFilter from "./CategoriesFilter";
import ClearFilter from "./ClearFilter";
import LimitFilter from "./LimitFiilter";
import PriceFilter from "./PriceFilter";

function FilterComponent({ categories }) {
  return (
    <div className="flex flex-row justify-center container">
      <CategoriesFilter categories={categories} />
      <PriceFilter />
      <LimitFilter />
      <ClearFilter />
    </div>
  );
}

export default FilterComponent;

FilterComponent.propTypes = {
  categories: PropTypes.instanceOf(Object).isRequired,
};
