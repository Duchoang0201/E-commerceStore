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

  const [lastVisibleSlideIndex, setLastVisibleSlideIndex] = useState(null);

  const handleSlideVisibilityChange = (isVisible, slideIndex) => {
    if (isVisible) {
      setLastVisibleSlideIndex(slideIndex);
    }
  };

  return (
    <div className="relative">
      <TitleFunction
        content={flashSaleContent.content}
        title={flashSaleContent.title}
        onPrev={handleSlidePrev}
        onNext={handleSlideNext}
        isCountDown
        paddingY="16"
        buttonText="View All"
      />
      {/* <div className="w-full relative">
        <div
          className="absolute inset-0 bg-black-0 bg-opacity-50 filter blur-md"
          style={{ zIndex: -1 }}
        />
        <div className="container bg-Red-300  p-4 relative z-10">
          <div className="content">Your content goes here.</div>
        </div>
      </div> */}
      <div className="container xxl:max-w-[1465px] mt-[40px] relative max-h-[350px]">
        <div className="xxl:ml-[105px] h-auto">
          <Swiper
            watchSlidesProgress
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
            className="mySwiper xxl:!overflow-visible !h-auto"
          >
            {products.length > 0 &&
              products.map((item, index) => {
                return (
                  <SwiperSlide
                    className="!max-w-[270px] swiper-slide"
                    key={item.id}
                  >
                    {({ isVisible }) => {
                      handleSlideVisibilityChange(isVisible, index);
                      return (
                        <Link href="/">
                          <ProductCart
                            index={index}
                            lastVisibleSlideIndex={lastVisibleSlideIndex}
                            isVisible={isVisible}
                            item={item}
                            isEye={{ isActive: true }}
                            isDiscount={{ isActive: true, value: 20 }}
                            isHeart={{ isActive: true }}
                          />
                        </Link>
                      );
                    }}
                  </SwiperSlide>
                );
              })}
          </Swiper>

          {/* // STYLE */}
          <style>
            {`
          /* Style for all swiper slides */
          .swiper-slide {
            opacity: 0.4  ;
            filter: blur(2px);
            z-index: -1;
          }
          .swiper-slide.swiper-slide-prev {
            filter: none; /* Remove blur for visible slides */

            opacity: 0.7 !important;
            // width: 50%; /* Set half of the width for previous slides */
          }
          /* Style for slides that are currently visible */
          .swiper-slide.swiper-slide-visible {
            opacity: 1;
            z-index: 10;
            filter: none; /* Remove blur for visible slides */
            width: 50%; /* Set half of the width for visible slides */
          }
          
          /* Style for slides that are fully visible in the viewport */
          .swiper-slide.swiper-slide-visible-active {
            opacity: 1 ;
            filter: none; /* Remove blur for visible slides */
          }
          
          /* Style for the currently active slide */
          .swiper-slide.swiper-slide-active {
            width: 100%
            }
          
          /* Style for slides that are both visible and fully visible */
          .swiper-slide.swiper-slide-visible.swiper-slide-fully-visible {
            opacity: 1;
            filter: none; /* Remove blur for visible slides */
          }
   
    `}
          </style>
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
  products: [],
};
