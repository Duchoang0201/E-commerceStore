"use client";

import React from "react";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";

import ProductCardFill from "../Commons/ProductCardFill";

import "swiper/css";
import SpaceTop from "../Commons/SpaceTop";

function Wishlist({ data }) {
  return (
    <div>
      <div className="pb-[60px]">
        {" "}
        <div className="container pt-5 flex flex-row justify-between items-center">
          <div className="font-inter text-xl ">Wishlist ({data.length})</div>
          <button
            type="button"
            className={`transform transition-all duration-300 flex flex-row justify-center px-12 py-4 border border-Neutral-200 rounded-md text-black-0 items-center text-white font-poppins text-base `}
          >
            Move All To Bag
          </button>
        </div>
      </div>
      <Swiper slidesPerView="auto" spaceBetween={30}>
        {data &&
          data.map((item) => (
            <SwiperSlide key={item.id} className="!w-auto !h-auto  ">
              <ProductCardFill
                item={item}
                isTrash={{ isActive: true }}
                cartShow={{ isActive: true }}
              />
            </SwiperSlide>
          ))}
      </Swiper>

      <SpaceTop />
      <div className="flex flex-row justify-between">
        <div className=" flex flex-row items-center justify-start  ">
          <div className="w-5 h-10 bg-Secondary-2 rounded-sm " />
          <div className="text-Secondary-2 text-lg px-5 font-semibold ">
            Just for you
          </div>
        </div>
        <button
          type="button"
          className={`w-auto px-12 py-4 border border-Neutral-200 rounded-md text-black-0 items-center text-white font-poppins text-base `}
        >
          See All
        </button>
      </div>
      <SpaceTop />
      <Swiper slidesPerView="auto" spaceBetween={30}>
        {data &&
          data.map((item) => (
            <SwiperSlide key={item.id} className="!w-auto !h-auto  ">
              <ProductCardFill
                item={item}
                isTrash={{ isActive: true }}
                cartShow={{ isActive: true }}
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}

export default Wishlist;

Wishlist.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};
