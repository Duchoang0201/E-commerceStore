"use client";

import React, { useRef } from "react";
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

  const handleSlidePrev = () => {
    swiperRef.current.slidePrev();
  };

  const handleSlideNext = () => {
    swiperRef.current.slideNext();
  };
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
      <div className="mt-[60px] container">
        <Swiper
          watchSlidesProgress="true"
          slidesPerView="auto"
          spaceBetween={30}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {categories.map((item) => {
            return (
              <SwiperSlide
                key={item.id}
                className="!max-w-[170px] !max-h-[145px] py-6 border border-Neutral-100 hover:text-white-0 hover:!bg-Secondary-2 hover:transition-all hover:duration-500  rounded-lg"
              >
                <Link href={`/products/category/${item.id}`}>
                  <div className="w-full min-h-full flex flex-col items-center justify-center">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={56}
                      height={56}
                      className="object-contain aspect-[56/56]"
                    />

                    <div className="py-4">{item.name}</div>
                  </div>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

export default Categories;

Categories.propTypes = {
  categories: PropTypes.instanceOf(Object).isRequired,
};
