import React from "react";
import { Bus, Heart, Minus, Plus, Repeat } from "lucide-react";
import Link from "next/link";
import PropTypes from "prop-types";

import AppButton from "@/components/AppButton/AppButton";

import useWishList from "@/hooks/useWishList";

function ProductInfo({ product, amountProduct, setAmountProduct }) {
  const { addWishList } = useWishList();

  return (
    <div>
      {" "}
      <div className="flex flex-col gap-y-6 mt-4">
        <p className="font-inter text-[24px] leading-6 tracking-[0.72px]">
          ${product.price}
        </p>
        <p className=" overflow-hidden leading-[21px]">{product.description}</p>
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
          <div className="flex flex-row border border-opacity-50 border-black-0 justify-between max-w-[160px] w-full items-center rounded-md">
            <button
              onClick={() => {
                if (amountProduct <= 0) {
                  setAmountProduct(0);
                } else {
                  setAmountProduct((prev) => prev - 1);
                }
              }}
              type="button"
              className="w-[41px] border-r border-opacity-50 border-black-0 h-full rounded-sm flex justify-center items-center"
            >
              <Minus />
            </button>
            <span>{amountProduct}</span>
            <button
              type="button"
              onClick={() => {
                setAmountProduct((prev) => prev + 1);
              }}
              className="w-[41px] bg-Secondary-2 border-l h-full border-opacity-50 border-black-0 rounded-sm flex justify-center items-center "
            >
              <Plus color="white" />
            </button>
          </div>
          <AppButton buttonText="Buy Now" paddingY="10" />
          <button
            type="button"
            onClick={() => {
              addWishList(product);
            }}
            className="w-[44px] h-[44px] rounded-sm border flex justify-center items-center"
          >
            <Heart strokeWidth={0.8} size={32} />
          </button>
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
  );
}

export default ProductInfo;

ProductInfo.propTypes = {
  product: PropTypes.instanceOf(Object).isRequired,
  amountProduct: PropTypes.instanceOf(Object).isRequired,
  setAmountProduct: PropTypes.instanceOf(Object).isRequired,
};
