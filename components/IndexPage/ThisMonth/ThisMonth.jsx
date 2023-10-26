"use client";

import React, { useRef } from "react";
import Image from "next/image";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/pagination";

import ProductCardFill from "@/components/Commons/ProductCardFill";
import Title from "@/components/Commons/Title";

import Banner from "./Frame 600.png";

import "swiper/css";

function ThisMonth({ thisMonth }) {
  const swiperRef = useRef();

  const handleSlidePrev = () => {
    swiperRef.current.slidePrev();
  };

  const handleSlideNext = () => {
    swiperRef.current.slideNext();
  };
  return (
    <div>
      <Title
        content="This Month"
        title="Best Selling Products"
        onPrev={handleSlidePrev}
        onNext={handleSlideNext}
      />

      <div className="ml-14 sm:ml-auto mx-auto max-w-[1170px] pt-10 ">
        <Swiper
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            600: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            800: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
        >
          {thisMonth &&
            thisMonth.map((item) => (
              <SwiperSlide key={item.id} className="relative group ">
                <ProductCardFill
                  item={item}
                  isEye={{ isActive: true }}
                  isDiscount={{ isActive: false, value: 20 }}
                  isHeart={{ isActive: true }}
                />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
      <div className="flex flex-row items-center justify-center mx-auto max-w-[1170px] pt-10 ">
        <Image src={Banner} alt="banner" />
      </div>
      <div className="pt-20 border-b border-red-600" />
    </div>
  );
}

export default ThisMonth;

ThisMonth.propTypes = {
  thisMonth: PropTypes.arrayOf(Object),
};
ThisMonth.defaultProps = {
  thisMonth: [], // Set a default value for products (an empty array in this case)
};
