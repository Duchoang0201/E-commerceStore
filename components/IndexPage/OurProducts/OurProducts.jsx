"use client";

import React, { useRef } from "react";
import ReactStars from "react-stars";
import { Eye, Heart } from "lucide-react";
import Image from "next/image";
import PropTypes from "prop-types";
import { Grid } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/grid";
import "swiper/css/pagination";

import Title from "@/components/Commons/Title";

import "swiper/css";

function OurProducts({ ourProducts }) {
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
        content="Our Products"
        title="Explore Our Products"
        onPrev={handleSlidePrev}
        onNext={handleSlideNext}
      />

      <div className="mx-auto  max-w-screen-xl pt-10 ">
        <Swiper
          modules={[Grid]}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              grid: { fill: "row", rows: 2 },

              spaceBetween: 30,
            },
            480: {
              slidesPerView: 2,
              grid: { fill: "row", rows: 2 },

              spaceBetween: 30,
            },
            800: {
              grid: { fill: "row", rows: 2 },

              slidesPerView: 3,
              spaceBetween: 30,
            },
            1280: {
              grid: { fill: "row", rows: 2 },
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
        >
          {ourProducts &&
            ourProducts.map((item) => (
              <SwiperSlide key={item.id} className=" ">
                <div className=" w-full flex flex-row justify-center bg-Secondary-0">
                  <div className="w-[270px] h-[350px]  flex flex-col ">
                    <div
                      type="button"
                      className=" relative inline-flex justify-center overflow-hidden items-center p-[49px]   text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      <Image
                        className="relative !w-[140px] !h-[146px]"
                        src={item.image}
                        width={140}
                        height={146}
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
                    </div>

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
                    <div className=" pt-2 flex flex-row items-center font-bold ">
                      <ReactStars
                        value={item.rating.rate}
                        count={5}
                        size={24}
                        activeColor="#ffd700"
                        color="gray"
                        edit={false}
                        isHalf
                      />
                      <p className="px-4 opacity-50">({item.rating.count})</p>
                    </div>
                    <div className="justify-center items-center " />
                  </div>
                </div>
                <div className="absolute h-10 w-full bg-Neutral-600  flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <button
                    type="submit"
                    className="bg-black text-white-0 py-2 px-5"
                  >
                    Add to cart
                  </button>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
      <div className="pt-20 border-b border-red-600" />
    </div>
  );
}

export default OurProducts;

OurProducts.propTypes = {
  ourProducts: PropTypes.arrayOf(Object),
};
OurProducts.defaultProps = {
  ourProducts: [], // Set a default value for products (an empty array in this case)
};
