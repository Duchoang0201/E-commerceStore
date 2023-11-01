"use client";

import React, { useRef } from "react";
import Image from "next/image";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/pagination";

import ProductCardFill from "@/components/Commons/ProductCardFill";
import Title from "@/components/Commons/Title";

import useTrans from "@/hooks/useTrans";

import Banner from "./Banner.png";

import "swiper/css";

function ThisMonth({ thisMonth }) {
  const swiperRef = useRef();
  const { thismonthContent } = useTrans();

  return (
    <div className="my-[70px]">
      <Title
        content={thismonthContent.content}
        title={thismonthContent.title}
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
      <div className=" mt-[140px]">
        <div className="relative pt-[37px] pr-[44px] pb-[43px] pl-[56px] container lg:flex lg:flex-row flex flex-col  items-center max-h-[500px] justify-between bg-black-0">
          {" "}
          <div className="w-full h-full text-white absolute z-30 flex flex-col justify-around text-center items-center -mt-9  lg:items-start lg:text-start lg:relative  lg:flex lg:flex-col lg:justify-between lg:gap-y-8">
            <div className="font-poppins" style={{ color: "#0F6" }}>
              {" "}
              Categories
            </div>
            <div className="font-inter text-5xl font-semibold text-white-0">
              Enhance Your Music Experience
            </div>
            <div className="lg:flex lg:flex-row lg:gap-x-6 w-full lg:justify-start flex justify-center">
              <div className="max-w-[62px] max-h-[62px] w-full h-full rounded-full bg-white-0 flex flex-col items-center">
                <div className="w-auto h-auto fex flex-col justify-center text-center py-3">
                  <div className="text-base">23</div>
                  <div className="text-[11px]">Hours</div>
                </div>
              </div>
              <div className="max-w-[62px] max-h-[62px] w-full h-full rounded-full bg-white-0 flex flex-col items-center">
                <div className="w-auto h-auto fex flex-col justify-center text-center py-3">
                  <div className="text-base">23</div>
                  <div className="text-[11px]">Hours</div>
                </div>
              </div>
              <div className="max-w-[62px] max-h-[62px] w-full h-full rounded-full bg-white-0 flex flex-col items-center">
                <div className="max-w-[43px] h-auto fex flex-col justify-center text-center py-3">
                  <div className="text-base">23</div>
                  <div className="text-[11px]">Hours</div>
                </div>
              </div>
              <div className="max-w-[62px] max-h-[62px] w-full h-full rounded-full bg-white-0 flex flex-col items-center">
                <div className="max-w-[43px] h-auto fex flex-col justify-center text-center py-3">
                  <div className="text-base">23</div>
                  <div className="text-[11px]">Hours</div>
                </div>
              </div>
            </div>
            <div>
              <button
                style={{ backgroundColor: "#0F6" }}
                type="button"
                className="text-base text-center py-4 px-12 rounded-md"
              >
                Buy Now!
              </button>
            </div>
          </div>
          <div className="relative max-w-[600px] max-h-[420px] py-[45px]  w-[135.847%] h-[234.327%] z-20">
            <div
              className="absolute top-0 left-0 w-full h-full rounded-full "
              style={{
                opacity: 0.3,
                background: "#D9D9D9",
                filter: "blur(100px)",
                zIndex: -1,
              }}
            />
            <Image
              objectFit="contain"
              src={Banner}
              alt="banner"
              width={568} // Set the width to match the parent div's width
              height={330} // Set the height to match the parent div's height
            />
          </div>
        </div>
      </div>
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
