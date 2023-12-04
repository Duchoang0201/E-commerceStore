"use client";

import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";

import ProductCard from "@/components/Commons/ProductCard";

function SearchPage({ data }) {
  return (
    <div>
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-4 gap-10 md:grid-cols-3  grid-cols-2">
          {data && data.length > 0 ? (
            data.map((item) => (
              <Link key={item.title} href={`/products/${item.id}`}>
                <ProductCard
                  item={item}
                  isDiscount={{ isActive: false, value: 20 }}
                />
              </Link>
            ))
          ) : (
            <div className="text-center">No Data</div>
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
