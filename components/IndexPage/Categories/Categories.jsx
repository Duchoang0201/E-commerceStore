"use client";

import React, { useRef } from "react";
import { ArrowLeft, ArrowRight, Eye, Heart } from "lucide-react";
import Image from "next/image";
import PropTypes, { string } from "prop-types"; // Import PropTypes from the correct module
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/pagination";

// Import Swiper styles
import "swiper/css";

function Categories({ categories }) {
  const swiperRef = useRef();
  return (
    <div>
      {" "}
      <div className="flex flex-row items-center justify-end mx-auto max-w-screen-xl px-5 py-2">
        <div className="flex flex-row gap-2">
          <button
            className="text-center flex justify-center items-center w-[46px] h-[46px] rounded-full bg-Secondary-0 "
            type="button"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <ArrowLeft />
          </button>
          <button
            className="text-center flex justify-center items-center w-[46px] h-[46px] rounded-full bg-Secondary-0 "
            type="button"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <ArrowRight />
          </button>
        </div>
      </div>
      <div className=" flex flex-row items-center justify-center mx-auto max-w-screen-xl px-5">
        <Swiper
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          navigation={{
            nextEl: ".review-swiper-button-next",
            prevEl: ".review-swiper-button-prev",
          }}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          className="mySwiper flex flex-row justify-center overflow-hidden "
          breakpoints={{
            0: {
              slidesPerView: 1,
              centeredSlides: true,
            },
            580: {
              slidesPerView: 2,
              centeredSlides: false,
              centeredSlidesBounds: 12,
            },
            860: {
              slidesPerView: 3,
            },
            1200: {
              slidesPerView: 4.5,
              initialSlide: 2,
            },
          }}
        >
          {/* {categories?.map((item) => {
            return (
              <SwiperSlide key={item.id} className="relative">
                <div className=" w-full flex flex-row justify-center">
                  <div className="w-[270px] h-[350px]  flex flex-col ">
                    <button
                      type="button"
                      className="relative inline-flex justify-center overflow-hidden items-center p-[49px] bg-Secondary-0  text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      <Image
                        className="relative !w-[172px] !h-[152px]"
                        src={item.image}
                        width={172}
                        height={152}
                        alt={item.title}
                      />
                      <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500  rounded-full top-4 right-4 dark:border-gray-900">
                        <div className="px-2 py-2 bg-white-0 rounded-full">
                          <Heart />
                        </div>
                      </div>
                      <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500  rounded-full top-16 right-4 dark:border-gray-900">
                        <div className="px-2 py-2 bg-white-0 rounded-full">
                          <Eye />
                        </div>
                      </div>
                      <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs  text-white bg-red-500  rounded-full top-4 left-6 dark:border-gray-900">
                        <div className="font-thin px-3 py-1 bg-Secondary-2 rounded-sm text-white-0">
                          -40%
                        </div>
                      </div>
                      <div className="absolute inline-flex items-center justify-center text-xs text-white bg-red-500 rounded-full bottom-0 dark:border-gray-900 opacity-0 hover:opacity-100">
                        <div className="font-thin px-3 py-1 bg-black-0 w-64 rounded-sm text-white-0">
                          Add to Cart
                        </div>
                      </div>
                    </button>

                    <div className="justify-center items-center h-10">
                      <p className="font-bold truncate text-ellipsis overflow-hidden">
                        {item.title}
                      </p>
                    </div>
                    <div className="justify-center items-center font-bold">
                      <span className="text-Button-1  ">
                        ${Math.round(Number(item.price) * 0.8)}
                      </span>

                      <span className="px-4 line-through opacity-50">
                        ${item.price}
                      </span>
                    </div>
                    <div className="justify-center items-center " />
                  </div>
                </div>
              </SwiperSlide>
            );
          })} */}
        </Swiper>
      </div>
    </div>
  );
}

export default Categories;

Categories.propTypes = {
  categories: PropTypes.arrayOf(string),
};
Categories.defaultProps = {
  categories: "",
};
