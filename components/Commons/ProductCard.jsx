import React from "react";
import { Eye, Heart } from "lucide-react";
import Image from "next/image";
import PropTypes from "prop-types";

import useCartStore from "@/hooks/useCartStore";

import Rated from "../Rating/Rated";

function ProductCard({ item, isHeart, isEye, isDiscount }) {
  const { addCart } = useCartStore();
  return (
    <div className="w-full relative ">
      <div className="group overflow-hidden relative w-auto rounded-md">
        <Image
          className="object-contain aspect-[270/250] w-full"
          width={270}
          height={250}
          src={item.image}
          alt={item.title}
        />
        <div className="absolute h-10 w-full bg-black-0  flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              addCart(item);
            }}
            className="bg-black text-white-0 py-2 px-5"
          >
            Add to cart
          </button>
        </div>
        {isHeart.isActive && (
          <div className="max-w-[34px] max-h-[34px] w-full h-full absolute flex-col justify-center bg-Secondary-0 inline-flex items-center rounded-full top-4 right-2">
            <Heart size={24} />
          </div>
        )}
        {isEye.isActive && (
          <div className="max-w-[34px] max-h-[34px] w-full h-full absolute flex-col justify-center bg-Secondary-0 inline-flex items-center rounded-full top-[5rem] sm:top-14 right-2">
            <Eye className="w-[24/34] h-[24/34] " />
          </div>
        )}
        {isDiscount.isActive && (
          <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs  text-white bg-red-500  rounded-full top-4 left-6 dark:border-gray-900">
            <div className="text-[8px] md:text-[12px] font-thin px-2 py-1 md:px-3 md:py-1 bg-Secondary-2 rounded-sm text-white-0">
              -{isDiscount.value}%
            </div>
          </div>
        )}
      </div>

      <div className="pt-4 flex flex-col gap-y-2">
        <span className="font-medium truncate text-ellipsis overflow-hidden">
          {item.title}
        </span>
        <div className="justify-center items-center font-medium">
          <span className="text-Button-1  ">
            ${Math.round(Number(item.price) * 0.8)}
          </span>

          <span className="px-4 line-through opacity-50">${item.price}</span>
        </div>

        <div className=" flex flex-row items-center font-semibold">
          <div>
            <Rated data={item.rating} />
          </div>
          <div>
            <span className="px-2 opacity-50 text-[14px]">
              ({item.rating.count})
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;

ProductCard.propTypes = {
  item: PropTypes.shape(Object),
  isHeart: PropTypes.instanceOf(Object),
  isEye: PropTypes.instanceOf(Object),
  isDiscount: PropTypes.instanceOf(Object),
};
ProductCard.defaultProps = {
  item: {},
  isHeart: {},
  isEye: {},
  isDiscount: {},
};
