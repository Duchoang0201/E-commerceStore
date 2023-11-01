"use client";

import React, { useRef } from "react";
import Image from "next/image";

import "swiper/css/grid";
import "swiper/css/pagination";

import SpaceBottom from "@/components/Commons/SpaceBottom";
import SpaceTop from "@/components/Commons/SpaceTop";
import Title from "@/components/Commons/Title";

import useTrans from "@/hooks/useTrans";

import Banner1 from "./Frame 684.png";
import Banner2 from "./Frame 685.png";
import Banner3 from "./Frame 686.png";
import Banner4 from "./Frame 687.png";
import Banner5 from "./Frame 701.png";
import Banner6 from "./Frame 702.png";
import Banner7 from "./Frame 704.png";

function Features() {
  const swiperRef = useRef();
  const { featureContent } = useTrans();

  const handleSlidePrev = () => {
    swiperRef.current.slidePrev();
  };

  const handleSlideNext = () => {
    swiperRef.current.slideNext();
  };
  return (
    <div>
      <Title
        content={featureContent.content}
        title={featureContent.title}
        onPrev={handleSlidePrev}
        onNext={handleSlideNext}
        bgButton=""
        buttonText=""
      />

      <div className="container ">
        <div className="flex flex-row justify-between max-h-[600px]">
          <div className="max-w-[570px] w-[570px] bg-black-0 relative">
            <div className="relative h-auto mt-[89px] mx-[29px]">
              <div className="relative">
                <Image
                  className="!w-[511px] !h-auto"
                  src={Banner1}
                  alt="Banner1"
                  layout="responsive"
                  width={511}
                  height={511}
                  objectFit="contain"
                />
              </div>
              <div className="flex flex-col justify-between gap-y-4 max-w-[242px] ml-[3px] max-h-[122px] h-full w-auto absolute bottom-8  bg-opacity-50 text-white-0">
                <div className="font-inter text-[24px] font-semibold leading-6">
                  PlayStation 5
                </div>
                <div className="text-[14px] font-poppins">
                  Black and White version of the PS5 coming out on sale.
                </div>
                <div className="font-poppins text-base font-medium">
                  Shop Now
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <Image src={Banner2} alt="Banner2" />

            <div className="flex flex-row justify-between ">
              <div>
                <Image src={Banner3} alt="Banner3" />
              </div>
              <div>
                <Image src={Banner4} alt="Banner4" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <SpaceTop />
      <SpaceTop />
      <div className="container items-center flex flex-col justify-between lg:flex lg:flex-row lg:justify-center gap-x-[88px]">
        <div>
          <Image src={Banner5} alt="Banner5" />
        </div>
        <div>
          <Image src={Banner6} alt="Banner6" />
        </div>
        <div>
          <Image src={Banner7} alt="Banner7" />
        </div>
      </div>
      <SpaceBottom border={false} />
    </div>
  );
}

export default Features;
