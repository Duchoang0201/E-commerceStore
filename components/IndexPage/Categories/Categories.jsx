"use client";

import React, { useRef } from "react";
import { ArrowLeft, ArrowRight, MonitorSmartphone } from "lucide-react";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/pagination";

import Content from "../FlashSaleBanner/Content";

import "swiper/css";

function Categories({ categories }) {
  const swiperRef = useRef();

  return (
    <div>
      <Content content="Categories" />
      <div className="mx-auto max-w-screen-xl pt-5 flex flex-row justify-between">
        <div className="pl-5 font-inter text-[36px] font-bold">
          Browse By Category
        </div>
        <div className="flex flex-row items-center justify-end  ">
          <div className="flex flex-row gap-2">
            <button
              className="text-center flex justify-center items-center w-12 h-12 rounded-full bg-Secondary-0"
              type="button"
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <ArrowLeft />
            </button>
            <button
              className="text-center flex justify-center items-center w-12 h-12 rounded-full bg-Secondary-0"
              type="button"
              onClick={() => swiperRef.current?.slideNext()}
            >
              <ArrowRight />
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center justify-center mx-auto max-w-screen-xl pt-10 ">
        <Swiper
          spaceBetween={30}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            800: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
            1440: {
              slidesPerView: 6,
              spaceBetween: 10,
            },
          }}
        >
          {categories &&
            categories.map((item) => (
              <SwiperSlide
                key={item}
                className="border border-Neutral-100 hover:text-white-0 hover:bg-Secondary-2  rounded-lg"
              >
                <div className="w-full bg-red-400 h-48 flex flex-col items-center justify-center">
                  <MonitorSmartphone size={56} className="hover:text-white-0" />

                  <div className="py-4">{item}</div>
                </div>
              </SwiperSlide>
            ))}
          <SwiperSlide className="border border-Neutral-100 hover:text-white-0 hover:bg-Secondary-2  rounded-lg">
            <div className="w-full bg-red-400 h-48 flex flex-col items-center justify-center">
              <MonitorSmartphone size={56} className="hover:text-white-0 " />
              <div className="py-4">Gold</div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="border border-Neutral-100 hover:text-white-0 hover:bg-Secondary-2  rounded-lg">
            <div className="w-full bg-red-400 h-48 flex flex-col items-center justify-center">
              <MonitorSmartphone size={56} className="hover:text-white-0" />

              <div className="py-4">Silver</div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="pt-20 border-b border-red-600" />
    </div>
  );
}

export default Categories;

Categories.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string),
};

Categories.defaultProps = {
  categories: [],
};
