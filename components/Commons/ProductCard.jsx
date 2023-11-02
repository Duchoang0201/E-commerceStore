import React from "react";
import { Eye, Heart } from "lucide-react";
import Image from "next/image";
import PropTypes from "prop-types";

import Rated from "../Rating/Rated";

function ProductCard({
  item,
  isHeart,
  isEye,
  isDiscount,
  // lastVisibleSlideIndex,
  // index,
  // isVisible,
}) {
  return (
    <div
    // className={`${
    //   lastVisibleSlideIndex === index && isVisible
    //     ? "before:w-1/2 before:ml-32 before:inset-1 before:z-40  before:h-full before:bg-white-0 before:bg-opacity-60 before:backdrop-blur-2xl before:absolute before:flex before:flex-row before:justify-end"
    //     : "opacity-100"
    // }`}
    // style={{
    //   boxShadow:
    //     "0 0 10px 0 rgba(0, 0, 0, 0.5) inset, 0 0 0 10px rgba(0, 0, 0, 1)}",
    // }}
    >
      <div className=" h-auto relative group justify-center overflow-hidden text-sm font-medium text-center text-white  rounded-lg  max-h-[250px]">
        <Image
          className="object-contain aspect-square"
          width={270}
          height={250}
          src={item.image}
          alt={item.title}
        />
        <div className="absolute h-10 w-full bg-black-0  flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <button type="submit" className="bg-black text-white-0 py-2 px-5">
            Add to cart
          </button>
        </div>
        {isHeart.isActive && (
          <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500  rounded-full top-4 right-4 dark:border-gray-900">
            <div className="px-2 py-2 bg-white-0 rounded-full">
              <Heart />
            </div>
          </div>
        )}
        {isEye.isActive && (
          <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500  rounded-full top-16 right-4 dark:border-gray-900">
            <div className="px-2 py-2 bg-white-0 rounded-full">
              <Eye />
            </div>
          </div>
        )}
        {isDiscount.isActive && (
          <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs  text-white bg-red-500  rounded-full top-4 left-6 dark:border-gray-900">
            <div className="font-thin px-3 py-1 bg-Secondary-2 rounded-sm text-white-0">
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
  // isVisible: PropTypes.instanceOf(Boolean).isRequired,
  // lastVisibleSlideIndex: PropTypes.instanceOf(Number).isRequired,
  // index: PropTypes.instanceOf(Number).isRequired,
};
ProductCard.defaultProps = {
  item: {},
  isHeart: {},
  isEye: {},
  isDiscount: {},
};
