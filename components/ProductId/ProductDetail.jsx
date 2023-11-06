import React, { useState } from "react";
import { Bus, Heart, Minus, Plus, Repeat } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import PropTypes from "prop-types";
// import required modules
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/navigation";

import AppButton from "../AppButton/AppButton";
import Rated from "../Rating/Rated";

// Import Swiper styles
import "swiper/css";

function ProductDetail({ product }) {
  const [pickImage, setPickImage] = useState({
    index: 0,
    image: product.image,
    title: product.title,
  });

  return (
    <div className="flex flex-row  justify-between">
      <div className="relative">
        <div className=" flex flex-row max-w-[700px] max-h-[600px] gap-x-[30px] h-full">
          {" "}
          <Swiper spaceBetween={16} direction="vertical" slidesPerView={4}>
            {Array(4)
              .fill(null)
              .map((_, index) => {
                return (
                  <SwiperSlide className="123" key={`${_ - index}`}>
                    <button
                      type="button"
                      onClick={() => {
                        setPickImage({
                          index,
                          image: product.image,
                          title: product.title,
                        });
                      }}
                      className="w-[170px] h-[138px] flex items-center justify-center relative"
                    >
                      <Image
                        src={product.image}
                        alt={product.title}
                        width={170}
                        height={138}
                        className="object-contain w-full h-full"
                      />
                    </button>
                  </SwiperSlide>
                );
              })}
          </Swiper>
          <div className="w-[500px] h-[600px] relative">
            <Image
              src={pickImage.image}
              alt={pickImage.title}
              className="object-contain relative"
              fill="true"
            />
            <div className="absolute mx-auto top-2">{pickImage.index + 1}</div>
          </div>
        </div>{" "}
      </div>
      <div className="max-w-[399px]">
        <div className="flex flex-col gap-y-4">
          <p className="text-[24px] font-bold leading-6 tracking-[0.72px] w-full truncate">
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

        <div className="flex flex-col gap-y-6 mt-4">
          <p className="font-inter text-[24px] leading-6 tracking-[0.72px]">
            ${product.price}
          </p>
          <p className="max-h-[63px] overflow-hidden leading-[21px]">
            {product.description}
          </p>
          <hr />
          <div className="flex flex-row gap-8 items-center">
            <span className="text-[20px] tracking-[0.6px]">Colours:</span>
            <div className="flex flex-row gap-2">
              <div className="w-[20px] h-[20px] rounded-full bg-success-800" />
              <div className="w-[20px] h-[20px] rounded-full bg-Purple-600" />
            </div>
          </div>
          <div className="flex flex-row gap-8 items-center">
            <span className="text-[20px] tracking-[0.6px]">Size:</span>
            <div className="flex flex-row gap-2">
              <div className="w-[32px] h-[32px] rounded-sm border flex justify-center items-center">
                <span>XS</span>
              </div>
              <div className="w-[32px] h-[32px] rounded-sm border flex justify-center items-center">
                <span>S</span>
              </div>
              <div className="w-[32px] h-[32px] rounded-sm border flex justify-center items-center">
                <span>M</span>
              </div>
              <div className="w-[32px] h-[32px] rounded-sm border flex justify-center items-center">
                <span>L</span>
              </div>
              <div className="w-[32px] h-[32px] rounded-sm border flex justify-center items-center">
                <span>XL</span>
              </div>
            </div>
          </div>
          <div className="flex flex-row max-h-[44px] justify-between">
            <div className="flex flex-row border border-opacity-50 border-black-0 justify-between max-w-[160px] w-full items-center">
              <button
                type="button"
                className="w-[41px] border-r border-opacity-50 border-black-0 h-full rounded-sm flex justify-center items-center"
              >
                <Minus />
              </button>
              <span>2</span>
              <button
                type="button"
                className="w-[41px] bg-Secondary-2 border-l h-full border-opacity-50 border-black-0 rounded-sm flex justify-center items-center"
              >
                <Plus />
              </button>
            </div>
            <AppButton buttonText="Buy Now" paddingY="10" />
            <div className="w-[44px] h-[44px] rounded-sm border flex justify-center items-center">
              <Heart strokeWidth={0.8} size={32} />
            </div>
          </div>
          <div>
            <div className="flex flex-row items-center border border-black-0 border-opacity-50 pt-6 pb-4 pl-4">
              <Bus size={40} />
              <div className="pl-4">
                <p className="leading-6 font-medium">Free Delivery</p>
                <p className="underline leading-[18px] font-medium text-[12px]">
                  Enter your postal code for Delivery Availability
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center border border-black-0 border-opacity-50 pt-6 pb-4 pl-4">
              <Repeat size={40} />
              <div className="pl-4">
                <p className="leading-6 font-medium">Return Delivery</p>
                <p className=" leading-[18px] font-medium text-[12px]">
                  Free 30 Days Delivery Returns.{" "}
                  <Link href="/" className="underline">
                    Details
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;

ProductDetail.propTypes = {
  product: PropTypes.instanceOf(Object).isRequired,
};
