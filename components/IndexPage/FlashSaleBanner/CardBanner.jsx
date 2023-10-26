"use client";

import React, { useCallback, useRef } from "react";
import PropTypes from "prop-types"; // Import PropTypes from the correct module
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/pagination";

import ProductCart from "@/components/Commons/ProductCart";
import Title from "@/components/Commons/Title";

// import FlashCard from "./FlashCard";
// Import Swiper styles
import "swiper/css";

function CardBanner({ products }) {
  const swiperRef = useRef();

  const handleSlidePrev = useCallback(() => {
    swiperRef.current.slidePrev();
  }, []);

  const handleSlideNext = useCallback(() => {
    swiperRef.current.slideNext();
  }, []);

  return (
    <div>
      {" "}
      <Title
        content="Today's"
        title="Flash Sales"
        onPrev={handleSlidePrev}
        onNext={handleSlideNext}
      />
      <div className=" mx-auto max-w-[1440px] pl-16 sm:pl-20  lg:pl-20 flex flex-1 justify-center">
        <Swiper
          slidesPerView="auto"
          spaceBetween={10}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          navigation={{
            nextEl: ".review-swiper-button-next",
            prevEl: ".review-swiper-button-prev",
          }}
          pagination={{
            clickable: true,
          }}
          className="mySwiper "
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            800: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
            1440: {
              slidesPerView: 4.5,
              spaceBetween: 10,
            },
          }}
        >
          {products.length > 0 &&
            products.map((item) => {
              return (
                <SwiperSlide key={item.id}>
                  <ProductCart
                    item={item}
                    isEye={{ isActive: true }}
                    isDiscount={{ isActive: true, value: 20 }}
                    isHeart={{ isActive: true }}
                  />
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </div>
  );
}

export default CardBanner;

CardBanner.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape(Object)),
};
CardBanner.defaultProps = {
  products: [], // Set a default value for products (an empty array in this case)
};
