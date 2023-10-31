"use client";

import React, { useRef } from "react";
import Image from "next/image";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/pagination";

import ProductCardFill from "@/components/Commons/ProductCardFill";
import SpaceBottom from "@/components/Commons/SpaceBottom";
import SpaceTop from "@/components/Commons/SpaceTop";
import Title from "@/components/Commons/Title";

import Banner from "./Frame 600.png";

import "swiper/css";

function ThisMonth({ thisMonth }) {
  const swiperRef = useRef();

  return (
    <div>
      <SpaceTop />
      <Title
        content="This Month"
        title="Best Selling Products"
        bgButton="bg-Secondary-2"
        buttonText="View all"
        onNext=""
        onPrev=""
      />

      <div className="sm:ml-auto container  ">
        <Swiper
          slidesPerView="auto"
          spaceBetween={30}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          // breakpoints={{
          //   0: {
          //     slidesPerView: 1.5,
          //     spaceBetween: 30,
          //   },
          //   710: {
          //     slidesPerView: 2.5,
          //     spaceBetween: 30,
          //   },
          //   1010: {
          //     slidesPerView: 3.5,
          //     spaceBetween: 20,
          //   },
          //   1200: {
          //     slidesPerView: 4,
          //     spaceBetween: 30,
          //   },
          //   1440: {
          //     slidesPerView: 4,
          //     spaceBetween: 30,
          //   },
          // }}
        >
          {thisMonth &&
            thisMonth.map((item) => (
              <SwiperSlide
                key={item.id}
                className="!max-w-[270px] !max-h-[350px]"
              >
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
      <div className="flex flex-row items-center justify-center container pt-10 ">
        <Image src={Banner} alt="banner" />
      </div>
      <SpaceBottom border={false} />
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
