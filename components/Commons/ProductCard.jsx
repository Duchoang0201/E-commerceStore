import React from "react";
import ReactStars from "react-rating-stars-component";
// import { Rating } from "@material-tailwind/react";
import { Eye, Heart } from "lucide-react";
import Image from "next/image";
import PropTypes from "prop-types";
//  isHeart, isEye, isDiscount
function ProductCard({ item, isHeart, isEye, isDiscount }) {
  const { rate } = item.rating;
  return (
    <div className="w-[270px] h-[350px] ">
      <div className="group relative inline-flex justify-center overflow-hidden items-center p-[49px] bg-Secondary-0  text-sm font-medium text-center text-white bg-blue-700 rounded-lg ">
        <Image
          className="relative !w-[172px] !h-[152px]"
          src={item.image}
          width={172}
          height={152}
          alt={item.title}
        />
        <div className="absolute h-10 w-full bg-Neutral-600  flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
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

      <div className="justify-center items-center h-10">
        <p className="font-bold truncate text-ellipsis overflow-hidden">
          {item.title}
        </p>
      </div>
      <div className="justify-center items-center font-bold">
        <span className="text-Button-1  ">
          ${Math.round(Number(item.price) * 0.8)}
        </span>

        <span className="px-4 line-through opacity-50">${item.price}</span>
      </div>

      <div className=" pt-2 flex flex-row items-center font-bold ">
        <ReactStars
          value={rate}
          count={5}
          size={24}
          activeColor="#ffd700"
          color="gray"
          edit={false}
          isHalf
        />
        <p className="px-4 opacity-50">({item.rating.count})</p>
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
