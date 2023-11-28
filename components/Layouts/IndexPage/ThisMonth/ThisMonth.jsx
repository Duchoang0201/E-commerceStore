"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/pagination";

import ProductCard from "@/components/Commons/ProductCard";
import TitleFunction from "@/components/Commons/TitleFunction";

import useTrans from "@/hooks/useTrans";

import Banner from "./Banner.png";

import "swiper/css";

function ThisMonth({ thisMonth }) {
  const swiperRef = useRef();
  const { thismonthContent } = useTrans();

  return (
    <div>
      <TitleFunction
        content={thismonthContent.content}
        title={thismonthContent.title}
        bgButton="bg-Secondary-2"
        buttonText="View all"
        onNext=""
        onPrev=""
        isCountDown={false}
      />
      <div className=" container mt-[60px] ">
        <Swiper
          freeMode
          watchSlidesProgress="true"
          // slidesPerView="auto"
          // spaceBetween={30}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          breakpoints={{
            1280: {
              slidesPerView: "auto",
              spaceBetween: 30,
            },
            860: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            480: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            400: {
              slidesPerView: 2.5,
              spaceBetween: 30,
            },
            320: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
          }}
        >
          {thisMonth &&
            thisMonth.map((item) => (
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
      </div>{" "}
      <div className="container max-h-[500px] h-full flex flex-row mt-[139px]">
        {" "}
        <div className="bg-black-0  pt-[37px] pr-[44px] py-[43px] pl-20 ssm:pl-[56px] ssm:flex ssm:flex-row relative">
          <div className="w-2/3 h-fit flex flex-col gap-12  md:gap-8 md:relative absolute z-30 ">
            <span className="font-poppins" style={{ color: "#0F6" }}>
              {" "}
              Categories
            </span>
            <span className="font-inter  text-14px sm:text-5xl font-semibold text-white-0">
              Enhance Your Music Experience
            </span>
            <div className="flex flex-row w-full gap-2 md:gap-6">
              <div className="max-w-[48px] w-full h-full md:max-w-[62px] md:w-full relative rounded-full bg-white-0 aspect-square flex flex-col justify-center items-center">
                {/* <div className="absolute inset-0 flex flex-col items-center justify-center text-center"> */}
                <span className="">23</span>
                <span className="md:text-[11px]">Day</span>
                {/* </div> */}
              </div>
              <div className="max-w-[48px] w-full h-full md:max-w-[62px] md:w-full relative rounded-full bg-white-0 aspect-square flex flex-col justify-center items-center">
                {/* <div className="absolute inset-0 flex flex-col items-center justify-center text-center"> */}
                <span className="">23</span>
                <span className="md:text-[11px]"> Hours</span>
                {/* </div> */}
              </div>
              <div className="max-w-[48px] w-full h-full md:max-w-[62px] md:w-full relative rounded-full bg-white-0 aspect-square flex flex-col justify-center items-center">
                {/* <div className="absolute inset-0 flex flex-col items-center justify-center text-center"> */}
                <span className="">23</span>
                <span className="md:text-[11px]">Minutes</span>
                {/* </div> */}
              </div>
              <div className="max-w-[48px] w-full h-full md:max-w-[62px] md:w-full relative rounded-full bg-white-0 aspect-square flex flex-col justify-center items-center">
                {/* <div className="absolute inset-0 flex flex-col items-center justify-center text-center"> */}
                <span className="">23</span>
                <span className="md:text-[11px]">Second</span>
                {/* </div> */}
              </div>
            </div>
            <button
              style={{ backgroundColor: "#0F6" }}
              type="button"
              className="max-w-[171px] w-full text-[8px] sm:text-base text-white py-4 px-4 rounded-md"
            >
              {" "}
              Buy Now!
            </button>
          </div>
          <div className="relative my-[45px] mx-[16px] z-20 max-w-[600px] w-full h-auto flex flex-col justify-center md:flex">
            <div
              className="absolute top-0 left-0 w-full h-full rounded-full  md:flex"
              style={{
                opacity: 0.3,
                background: "#D9D9D9",
                filter: "blur(100px)",
                zIndex: -1,
              }}
            />
            <Image
              // className="object-contain aspect-auto"
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
