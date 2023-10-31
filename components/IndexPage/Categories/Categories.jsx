"use client";

import React, { useRef } from "react";
import { MonitorSmartphone } from "lucide-react";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/pagination";

import SpaceBottom from "@/components/Commons/SpaceBottom";
import SpaceTop from "@/components/Commons/SpaceTop";
import Title from "@/components/Commons/Title";

import useTrans from "@/hooks/useTrans";

import "swiper/css";

function Categories({ categories }) {
  const { categoriesContent } = useTrans();
  const swiperRef = useRef();

  const handleSlidePrev = () => {
    swiperRef.current.slidePrev();
  };

  const handleSlideNext = () => {
    swiperRef.current.slideNext();
  };
  return (
    <div>
      <SpaceTop />
      <Title
        content={categoriesContent.content}
        title={categoriesContent.title}
        onPrev={handleSlidePrev}
        onNext={handleSlideNext}
        buttonText=""
        bgButton=""
      />
      <div className="container ">
        <Swiper
          slidesPerView="auto"
          spaceBetween={30}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          // breakpoints={{
          //   0: {
          //     slidesPerView: 1,
          //     spaceBetween: 10,
          //   },
          //   480: {
          //     slidesPerView: 2,
          //     spaceBetween: 10,
          //   },
          //   800: {
          //     slidesPerView: 3,
          //     spaceBetween: 10,
          //   },
          //   1280: {
          //     slidesPerView: 4,
          //     spaceBetween: 10,
          //   },
          //   1440: {
          //     slidesPerView: 6,
          //     spaceBetween: 10,
          //   },
          // }}
        >
          {Array.from({ length: 10 }, (_, index) => (
            <SwiperSlide
              key={index}
              className="!max-w-[170px] !max-h-[145px] py-6 border border-Neutral-100 hover:text-white-0 hover:bg-Secondary-2 hover:transition-all hover:duration-500  rounded-lg"
            >
              <div
                key={index}
                className="w-full min-h-full flex flex-col items-center justify-center"
              >
                <MonitorSmartphone size={56} className="hover:text-white-0" />

                <div className="py-4">Item - {index}</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <SpaceBottom border />
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
