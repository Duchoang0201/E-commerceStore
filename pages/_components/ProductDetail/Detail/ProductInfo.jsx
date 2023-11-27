"use client";

import React, { useState } from "react";
import { Bus, Heart, Minus, Plus, Repeat } from "lucide-react";
import Link from "next/link";
import PropTypes from "prop-types";

import AppButton from "@/components/App/AppButton/AppButton";

import useWishList from "@/hooks/useWishList";

function ProductInfo({ product, amountProduct, setAmountProduct }) {
  const [pickSize, setPickSize] = useState("XS");
  const [pickColor, setPickColor] = useState(`bg-Blue-300`);

  const { addWishList } = useWishList();
  const arrColors = [
    { id: 1, color: "bg-Blue-300" },
    { id: 2, color: "bg-Secondary-2" },
    { id: 3, color: "bg-success-400" },
  ];
  const arraySize = ["XS", "S", "M", "L", "XL"];
  return (
    <div className="flex flex-col gap-y-6 mt-4">
      <p className="font-inter text-[24px] leading-6 tracking-[0.72px]">
        ${product.price}
      </p>
      <p className=" overflow-hidden  leading-[21px]">{product.description}</p>
      <hr />
      <div className="flex flex-row gap-8 items-center">
        <span className="text-[20px] tracking-[0.6px]">Colours:</span>
        <div className="flex flex-row gap-2">
          {arrColors.map((circle) => (
            <div
              key={circle.id}
              className={`${
                circle.color === pickColor
                  ? "border-black-0 border-2 w-[20px] h-[20px]"
                  : `bg-${circle.color} `
              }  flex items-center justify-center rounded-full  w-[20px] h-[20px] relative `}
            >
              <div
                className={`w-full h-full rounded-full  ${
                  pickColor === circle.color
                    ? `${circle.color} border-white-0 border-2 `
                    : ` ${circle.color}`
                } absolute `}
              />
              <input
                name="color"
                type="radio"
                id={`${circle.color}`}
                value={circle.color}
                onChange={() => setPickColor(circle.color)}
                className="w-full h-full opacity-0 cursor-pointer"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-row gap-8 items-center">
        <span className="text-[20px] tracking-[0.6px]">Size:</span>
        <div className="flex flex-row gap-2">
          {arraySize.map((item) => {
            return (
              <label
                key={item}
                htmlFor={`size${item}`}
                className={`${
                  pickSize === item
                    ? "bg-Secondary-2 text-white-0 border-none"
                    : "border-black-0/50"
                } w-[32px] h-[32px] rounded-md border flex justify-center items-center cursor-pointer  font-poppins`}
              >
                <input
                  onChange={() => {
                    setPickSize(item);
                  }}
                  className="hidden"
                  type="radio"
                  id={`size${item}`}
                  name="size"
                  value={item}
                />
                <span className="text-[14px] leading-[14px]">{item}</span>
              </label>
            );
          })}
        </div>{" "}
      </div>
      <div className="xl:flex xl:flex-row xl:max-h-[44px] xl:justify-between flex flex-row gap-4">
        <div className="flex flex-row border border-opacity-50 border-black-0 justify-between max-w-[160px] w-full items-center rounded-md">
          <button
            title="Minus"
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
            title="Plus"
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
          title="Add Wishlist"
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
  );
}

export default ProductInfo;

ProductInfo.propTypes = {
  product: PropTypes.instanceOf(Object).isRequired,
  amountProduct: PropTypes.number.isRequired,
  setAmountProduct: PropTypes.instanceOf(Function).isRequired,
};
