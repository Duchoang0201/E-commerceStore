"use client";

import React, { useRef } from "react";

import "swiper/css/grid";
import "swiper/css/pagination";

import SpaceBottom from "@/components/Commons/SpaceBottom";
import Title from "@/components/Commons/Title";

import useTrans from "@/hooks/useTrans";

// Import Swiper styles
import "swiper/css";

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
      />

      <div className="container ">123</div>
      <SpaceBottom border={false} />
    </div>
  );
}

export default Features;
