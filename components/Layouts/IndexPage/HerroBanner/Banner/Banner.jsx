import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import Banner from "../Banner.jpg";

function SlidesBanner() {
  return (
    <Swiper
      watchSlidesProgress="true"
      centeredSlides={false}
      modules={[Pagination]}
      pagination={{ clickable: true }}
    >
      <SwiperSlide>
        <Link href="/cart" className="max-w-[892px] max-h-[344px]">
          <Image width={892} height={344} src={Banner} alt="..." />
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link href="/cart" className="max-w-[892px] max-h-[344px]">
          <Image width={892} height={344} src={Banner} alt="..." />
        </Link>
      </SwiperSlide>
    </Swiper>
  );
}

export default SlidesBanner;
