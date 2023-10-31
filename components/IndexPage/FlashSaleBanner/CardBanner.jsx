"use client";

import React, { useCallback, useRef } from "react";
import Link from "next/link";
import PropTypes from "prop-types"; // Import PropTypes from the correct module
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/pagination";

import ProductCart from "@/components/Commons/ProductCard";
import Title from "@/components/Commons/Title";

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

  return (
    <div>
      {" "}
      <Title
        content={flashSaleContent.content}
        title={flashSaleContent.title}
        onPrev={handleSlidePrev}
        onNext={handleSlideNext}
        buttonText=""
        bgButton=""
        isCountDown
      />
      <div className="relative container xxl:max-w-[1465px]  ">
        <div className="xxl:ml-[145px] w-auto">
          {" "}
          <Swiper
            slidesPerView="auto"
            spaceBetween={30}
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
            className="mySwiper w-full"
            // breakpoints={{
            //   0: {
            //     slidesPerView: 1.5,
            //     spaceBetween: 32,
            //   },
            //   710: {
            //     slidesPerView: 2.5,
            //     spaceBetween: 32,
            //   },
            //   1010: {
            //     slidesPerView: 3.5,
            //     spaceBetween: 32,
            //   },
            //   1280: {
            //     slidesPerView: 4,
            //     spaceBetween: 32,
            //   },
            //   1440: {
            //     slidesPerView: 4.5,
            //     spaceBetween: 32,
            //   },
            // }}
          >
            {products.length > 0 &&
              products.map((item) => {
                return (
                  <SwiperSlide
                    className="!max-w-[270px] !max-h-[350px]"
                    key={item.id}
                  >
                    <Link href="/">
                      <ProductCart
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
        </div>
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
