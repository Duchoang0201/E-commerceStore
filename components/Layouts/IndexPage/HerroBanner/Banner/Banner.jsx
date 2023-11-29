"use client";

import React from "react";
import Image from "next/image";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import Banner from "../Banner.jpg";

function SlidesBanner() {
  return (
    <Swiper
      className="flex mt-10  flex-row  max-w-[892px] w-full !mx-0"
      watchSlidesProgress="true"
      centeredSlides={false}
      modules={[Pagination]}
      pagination={{ clickable: true }}
    >
      <SwiperSlide>
        <div className="relative w-full h-0 pb-[38.55%]">
          <Image
            src={Banner}
            alt="..."
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className="rounded-md"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 892px"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative w-full h-0 pb-[38.55%]">
          <Image
            src={Banner}
            alt="..."
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className="rounded-md"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 892px"
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default SlidesBanner;
