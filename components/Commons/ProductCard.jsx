import React from "react";
import { Eye, Heart } from "lucide-react";
import Image from "next/image";
import PropTypes from "prop-types";

import useCartStore from "@/hooks/useCartStore";
import useOpenPhoto from "@/hooks/useOpenPhoto";
import useWishList from "@/hooks/useWishList";

import Rated from "../App/AppRating/Rated";

function ProductCard({ item, isHeart, isEye, isDiscount }) {
  const { setOpenPhoto } = useOpenPhoto();
  const { addWishList } = useWishList();
  const { addCart } = useCartStore();
  return (
    <>
      <div className="group overflow-hidden relative rounded-md w-full">
        <Image
          loading="lazy"
          quality={75}
          width={270}
          height={250}
          className="aspect-[270/250]"
          src={item.images[0]}
          alt={item.id}
        />

        <button
          title="Add to Cart"
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            addCart(item);
          }}
          className="bg-black text-white-0 lg:py-2 px-5 absolute h-10 w-full bg-black-0  lg:flex lg:items-center lg:justify-center hidden  lg:-bottom-10 
          lg:group-hover:bottom-0 lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-300"
        >
          Add to cart
        </button>
        {isHeart.isActive && (
          <button
            title="Add wish list"
            type="button"
            onClick={(e) => {
              e.preventDefault();

              addWishList(item);
            }}
            className="w-[24px] h-[24px] md:w-[34px] md:h-[34px]  absolute flex-col justify-center bg-Secondary-0 inline-flex items-center rounded-full top-4 right-2 hover:bg-Secondary-2 hover:duration-500 hover:text-white-0"
          >
            <Heart className="w-2/3 h-2/3" />
          </button>
        )}
        {isEye.isActive && (
          <button
            title="Preview"
            onClick={(e) => {
              e.preventDefault();
              setOpenPhoto(item.images[0]);
            }}
            type="button"
            className="w-[24px] h-[24px] md:w-[34px] md:h-[34px] absolute flex-col justify-center bg-Secondary-0
             inline-flex items-center rounded-full top-[3.5rem] sm:top-14 right-2
              hover:bg-Secondary-2 hover:duration-500 hover:text-white-0"
          >
            <Eye className="w-2/3 h-2/3 " />
          </button>
        )}
        {isDiscount.isActive && (
          <span
            title="Discount"
            className="absolute inline-flex items-center justify-center md:w-[55px] md:h-[26px] w-10 h-auto 
                top-4 left-6 dark:border-gray-900
               text-[8px] md:text-[12px]  px-2 py-1 md:px-3 md:py-1 
               bg-Secondary-2 rounded-sm text-white-0"
          >
            -{isDiscount.value}%
          </span>
        )}
      </div>

      <ul className="pt-4 flex flex-col gap-y-2">
        <li className="font-medium truncate text-ellipsis overflow-hidden">
          {item.title}
        </li>
        <li className="justify-center items-center font-medium">
          <span className="text-Button-1">
            ${Math.round(Number(item.price) * 0.8)}
          </span>
          <span className="px-4 line-through opacity-50">${item.price}</span>
        </li>
        <li className="flex flex-row items-center font-semibold">
          <Rated data={{ rate: 4 }} />
          <span className="px-2 opacity-50 text-[14px]">100</span>
        </li>
      </ul>
    </>
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
