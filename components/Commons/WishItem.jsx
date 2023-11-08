import React from "react";
import { Eye, Trash } from "lucide-react";
import Image from "next/image";
import PropTypes from "prop-types";

import useCartStore from "@/hooks/useCartStore";
import useOpenPhoto from "@/hooks/useOpenPhoto";
import useWishList from "@/hooks/useWishList";

import Rated from "../Rating/Rated";

function WishItem({ item, isEye, isTrash }) {
  const { setOpenPhoto } = useOpenPhoto();
  const { removeWishList } = useWishList();
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
        <div className="absolute h-10 w-full bg-black-0  flex items-center justify-center bottom-0   ">
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

        {isEye.isActive && (
          <button
            onClick={(e) => {
              e.preventDefault();

              setOpenPhoto(item.image);
            }}
            type="button"
            className="max-w-[34px] max-h-[34px] w-full h-full absolute flex-col justify-center bg-Secondary-0 inline-flex items-center rounded-full top-4  right-2"
          >
            <Eye className="w-[24/34] h-[24/34] " />
          </button>
        )}
        {isTrash.isActive && (
          <button
            onClick={(e) => {
              e.preventDefault();
              removeWishList(item);
            }}
            type="button"
            className="max-w-[34px] max-h-[34px] w-full h-full absolute flex-col justify-center bg-Secondary-0 inline-flex items-center rounded-full top-4  right-2"
          >
            <Trash className="w-[24/34] h-[24/34] " />
          </button>
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

export default WishItem;

WishItem.propTypes = {
  item: PropTypes.shape(Object),
  isEye: PropTypes.instanceOf(Object),
  isTrash: PropTypes.instanceOf(Object),
};
WishItem.defaultProps = {
  item: {},
  isEye: {},
  isTrash: {},
};
