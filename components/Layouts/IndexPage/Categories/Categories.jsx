"use client";

import React, { useCallback, useRef } from "react";
// import { MonitorSmartphone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import PropTypes from "prop-types";
// import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/pagination";

import TitleFunction from "@/components/Commons/TitleFunction";

import useTrans from "@/hooks/useTrans";

import "swiper/css";

function Categories({ categories }) {
  const { categoriesContent } = useTrans();
  const swiperRef = useRef();

  const handleSlidePrev = useCallback(() => {
    swiperRef.current.slidePrev();
  }, []);

  const handleSlideNext = useCallback(() => {
    swiperRef.current.slideNext();
  }, []);
  return (
    <div className=" mt-[80px] pb-[70px] border-b border-Neutral-200">
      <TitleFunction
        content={categoriesContent.content}
        title={categoriesContent.title}
        onPrev={handleSlidePrev}
        onNext={handleSlideNext}
        buttonText=""
        bgButton=""
        isCountDown={false}
      />
      <Swiper
        className="mt-[60px]"
        watchSlidesProgress="true"
        slidesPerView="auto"
        spaceBetween={30}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        breakpoints={{
          1280: {
            slidesPerView: 6,
            spaceBetween: 30,
          },
          990: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
          860: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          480: {
            slidesPerView: 3.5,
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
        {categories.map((item) => {
          return (
            <SwiperSlide
              key={item.id}
              className="!max-w-[170px] !max-h-[145px]  border border-Neutral-100 hover:text-white-0     "
            >
              <Link
                href={`/products/category/${item.id}`}
                className="w-full min-h-full flex flex-col items-center justify-end 
                shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg rounded-lg hover:shadow-black-0/30
                "
              >
                <Image
                  loading="lazy"
                  src={item.image}
                  alt={item.id}
                  width={170}
                  height={145}
                  quality={100}
                  className=" aspect-[170/145] rounded-lg"
                />

                <span className=" truncate absolute text-white-0 font-bold text-[18px] shadow-2xl ">
                  {item.name}
                </span>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default Categories;

Categories.propTypes = {
  categories: PropTypes.instanceOf(Object).isRequired,
};
