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
        <div className="flex flex-row justify-between h-auto">
          <div>
            <Image src={Banner1} alt="Banner1" />
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
