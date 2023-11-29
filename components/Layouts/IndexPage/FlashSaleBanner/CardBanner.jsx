"use client";

import React, { useCallback, useRef, useState } from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/pagination";

import ProductCart from "@/components/Commons/ProductCard";
import TitleFunction from "@/components/Commons/TitleFunction";

import useTrans from "@/hooks/useTrans";

import "swiper/css";

function CardBanner({ products }) {
  const swiperRef = useRef();
  const { flashSaleContent } = useTrans();

  const handleSlidePrev = useCallback(() => {
    swiperRef.current.slidePrev();
  }, []);

  const handleSlideNext = useCallback(() => {
    swiperRef.current.slideNext();
  }, []);
  const [hideSlide, setHideSlide] = useState(5);
  return (
    <>
      <TitleFunction
        content={flashSaleContent.content}
        title={flashSaleContent.title}
        onPrev={handleSlidePrev}
        onNext={handleSlideNext}
        buttonText=""
        isCountDown
        paddingY="16"
      />

      <Swiper
        watchOverflow="true"
        watchSlidesProgress="true"
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={(swiper) => {
          // eslint-disable-next-line no-unused-expressions
          swiper.touches.startX > swiper.touches.currentX
            ? setHideSlide((prev) => prev + 1)
            : setHideSlide((prev) => prev - 1);
        }}
        navigation={{
          nextEl: ".review-swiper-button-next",
          prevEl: ".review-swiper-button-prev",
        }}
        className="mySwiper !-mr-32 mt-[40px]"
        breakpoints={{
          1280: {
            slidesPerView: "auto",
            spaceBetween: 30,
            // slidesOffsetBefore: 135,
            slidesOffsetAfter: 115,
          },

          1010: {
            slidesPerView: 4,

            spaceBetween: 30,
          },
          680: {
            slidesPerView: 3.5,
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
        {products.length > 0 &&
          products.map((item, index) => {
            return (
              <SwiperSlide
                className="!max-w-[270px] max-h-[350px]"
                key={item.id}
              >
                <Link href={`/products/${item.id}`}>
                  <ProductCart
                    index={index}
                    item={item}
                    isEye={{ isActive: true }}
                    isDiscount={{ isActive: true, value: 20 }}
                    isHeart={{ isActive: true }}
                  />
                </Link>
              </SwiperSlide>
            );
          })}
      </Swiper>
      <style>
        {`
          .swiper-slide:nth-of-type(${hideSlide}){
            opacity: 1 !important;
            filter: none;
          
          }`}
      </style>
    </>
  );
}

export default CardBanner;

CardBanner.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape(Object)),
};

CardBanner.defaultProps = {
  products: [],
};
