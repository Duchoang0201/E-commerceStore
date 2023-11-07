import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";

import ProductCard from "../Commons/ProductCard";

function SearchPage({ data }) {
  return (
    <div>
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-4 gap-10 md:grid-cols-3  grid-cols-2">
          {data.length <= 0 ? (
            <div className="text-center">No Data</div>
          ) : (
            data.map((item) => (
              <Link key={item.title} href={`/products/${item.id}`}>
                <ProductCard
                  item={item}
                  isEye={{ isActive: true }}
                  isDiscount={{ isActive: false, value: 20 }}
                  isHeart={{ isActive: true }}
                />
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default SearchPage;

SearchPage.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};
