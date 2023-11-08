import React, { useEffect, useState } from "react";
import Image from "next/image";
import PropTypes from "prop-types";
// import required modules
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/navigation";

import Rated from "../Rating/Rated";

import ProductInfor from "./ProductInfor";

// Import Swiper styles
import "swiper/css";

function ProductDetail({ product }) {
  const [pickImage, setPickImage] = useState({
    index: 0,
    image: product.image,
    title: product.title,
  });
  useEffect(() => {
    setPickImage({
      index: 0,
      image: product.image,
      title: product.title,
    });
  }, [product.id, product.image, product.title]);
  const [amountProduct, setAmountProduct] = useState(0);
  return (
    <div className="xl:flex xl:flex-row xl:justify-between flex flex-col gap-y-24 items-center">
      <div className=" lg:flex lg:flex-row">
        <Swiper
          breakpoints={{
            1080: {
              slidesPerView: 4,
              spaceBetween: 16,
              direction: "vertical",
            },
            860: {
              slidesPerView: 2,
              direction: "horizontal",
            },
          }}
        >
          {Array(4)
            .fill(null)
            .map((_, index) => {
              return (
                <SwiperSlide
                  className=" !w-[75px] md:!w-[170px] md:!h-[138px]"
                  key={`${_ - index}`}
                >
                  <button
                    className="w-full h-auto"
                    type="button"
                    onClick={() => {
                      setPickImage({
                        index,
                        image: product.image,
                        title: product.title,
                      });
                    }}
                  >
                    <Image
                      src={product.image}
                      alt={product.title}
                      width={170}
                      height={138}
                      className="object-contain aspect-[170/138] "
                    />
                  </button>
                </SwiperSlide>
              );
            })}
        </Swiper>
        <div className=" w-full lg:w-[600px] flex flex-row justify-center relative ">
          <Image
            width={300}
            height={300}
            src={pickImage.image}
            alt={pickImage.title}
            className="object-contain mx-auto"
          />
          <div className="absolute mx-auto top-2">{pickImage.index + 1}</div>
        </div>
      </div>
      <div className="w-2/3 xl:max-w-[400px]">
        <div className="flex flex-col gap-y-4">
          <p className="text-[24px] font-bold leading-6 tracking-[0.72px] w-full ">
            {product.title}
          </p>
          <div className="flex flex-row items-center">
            <Rated data={product.rating} />
            <span className="opacity-50 ml-2">(150 Reviews)</span>
            <div className="border-r h-4 ml-4" />
            <span className="ml-4 opacity-60 text-[14px] text-success-500">
              In Stock
            </span>
          </div>
        </div>

        <ProductInfor
          product={product}
          amountProduct={amountProduct}
          setAmountProduct={setAmountProduct}
        />
      </div>
    </div>
  );
}

export default ProductDetail;

ProductDetail.propTypes = {
  product: PropTypes.instanceOf(Object).isRequired,
};
