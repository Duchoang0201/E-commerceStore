"use client";

import React from "react";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";

import ProductCard from "../Commons/ProductCard";
import SpaceTop from "../Commons/SpaceTop";

import "swiper/css";

function Wishlist({ data }) {
  return (
    <div>
      <div className="pb-[60px]">
        {" "}
        <div className=" pt-5 flex flex-row justify-between items-center">
          <div className="font-inter text-xl ">Wishlist ({data.length})</div>
          <button
            type="button"
            className="py-[16px] rounded-md min-h-[44px] border border-Neutral-200  text-black-0 px-4 md:px-12 whitespace-nowrap"
          >
            Move All To Bag
          </button>
        </div>
      </div>
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
        {data &&
          data.map((item) => (
            <SwiperSlide
              key={item.id}
              className="!max-w-[270px] !max-h-[350px]"
            >
              <ProductCard
                item={item}
                isEye={{ isActive: true }}
                isDiscount={{ isActive: false, value: 20 }}
                isHeart={{ isActive: true }}
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
          className="py-[16px] rounded-md min-h-[44px] border border-Neutral-200  text-black-0 px-4 md:px-12 whitespace-nowrap"
        >
          See All
        </button>
      </div>
      <SpaceTop />
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
        {data &&
          data.map((item) => (
            <SwiperSlide
              key={item.id}
              className="!max-w-[270px] !max-h-[350px]"
            >
              <ProductCard
                item={item}
                isEye={{ isActive: true }}
                isDiscount={{ isActive: false, value: 20 }}
                isHeart={{ isActive: true }}
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
