"use client";

import React, { useCallback, useRef } from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import { Grid } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/grid";
import "swiper/css/pagination";

import AppButton from "@/components/App/AppButton/AppButton";
import ProductCard from "@/components/Commons/ProductCard";
import TitleFunction from "@/components/Commons/TitleFunction";

import useTrans from "@/hooks/useTrans";

import "swiper/css";

function OurProducts({ ourProducts }) {
  const { ourProductsContent } = useTrans();
  const swiperRef = useRef();
  const handleSlidePrev = useCallback(() => {
    swiperRef.current.slidePrev();
  }, []);

  const handleSlideNext = useCallback(() => {
    swiperRef.current.slideNext();
  }, []);
  return (
    <div>
      <TitleFunction
        paddingY="16"
        content={ourProductsContent.content}
        title={ourProductsContent.title}
        onPrev={handleSlidePrev}
        onNext={handleSlideNext}
        bgButton=""
        buttonText=""
        isCountDown={false}
      />

      <div className="container  pt-[65px] ">
        <Swiper
          watchSlidesProgress="true"
          modules={[Grid]}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          grid={{ fill: "row", rows: 2 }}
          breakpoints={{
            1280: {
              slidesPerView: "auto",
              spaceBetween: 30,
              grid: { fill: "row", rows: 2 },
            },
            830: {
              slidesPerView: 4,
              spaceBetween: 30,
              grid: { fill: "row", rows: 2 },
            },
            480: {
              slidesPerView: 3,
              spaceBetween: 30,
              grid: { fill: "row", rows: 2 },
            },
            400: {
              slidesPerView: 2.5,
              spaceBetween: 30,
              grid: { fill: "row", rows: 2 },
            },
            320: {
              slidesPerView: 2,
              spaceBetween: 30,
              grid: { fill: "row", rows: 2 },
            },
          }}
        >
          {ourProducts &&
            ourProducts.map((item) => (
              <SwiperSlide
                key={item.id}
                className="!max-w-[270px] !max-h-[350px]  "
              >
                <Link href={`/products/${item.id}`}>
                  {" "}
                  <ProductCard
                    item={item}
                    isEye={{ isActive: true }}
                    isDiscount={{ isActive: false, value: 20 }}
                    isHeart={{ isActive: true }}
                  />
                </Link>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>

      <div className="container flex flex-row justify-center mt-[58px] mb-[140px]">
        <AppButton
          buttonText="View All Products"
          paddingY="16"
          href="/searchpage"
        />
      </div>
    </div>
  );
}

export default OurProducts;

OurProducts.propTypes = {
  ourProducts: PropTypes.arrayOf(Object),
};
OurProducts.defaultProps = {
  ourProducts: [], // Set a default value for products (an empty array in this case)
};
