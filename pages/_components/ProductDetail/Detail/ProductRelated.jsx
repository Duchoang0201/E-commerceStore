"use client";

import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";

import ProductCard from "@/components/Commons/ProductCard";

function ProductRelated({ related }) {
  return (
    <div>
      {" "}
      <Swiper
        freeMode
        watchSlidesProgress="true"
        breakpoints={{
          1280: {
            slidesPerView: "auto",
            spaceBetween: 30,
          },
          860: {
            slidesPerView: "4",
            spaceBetween: 30,
          },
          480: {
            slidesPerView: "3",
            spaceBetween: 30,
          },
          320: {
            slidesPerView: 1.5,
            spaceBetween: 30,
          },
        }}
      >
        {related &&
          related.map((item) => (
            <SwiperSlide
              key={item.id}
              className="!max-w-[270px] !max-h-[350px]"
            >
              <Link href={`/products/${item.id}`}>
                <ProductCard
                  item={item}
                  isEye={{ isActive: true }}
                  isDiscount={{ isActive: false, value: 20 }}
                  isHeart={{ isActive: true }}
                />
              </Link>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}

export default ProductRelated;

ProductRelated.propTypes = {
  related: PropTypes.instanceOf(Object).isRequired,
};
