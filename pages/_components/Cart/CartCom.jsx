"use client";

import React, { useMemo } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";

// import PropTypes from "prop-types";
import useCartStore from "@/hooks/useCartStore";

function CartCom() {
  const { increase, decrease, carts, remove } = useCartStore();
  const dep = carts.map((item) => item.quantity).join(",");
  const total = useMemo(() => {
    const result = carts.reduce((acc, item) => {
      return item.quantity * item.product.price + acc;
    }, 0);
    return result;
  }, [carts, dep]);

  return (
    <div className="mb-[140px]">
      <div className=" rounded shadow-md flex flex-row gap-x-[284px] px-10 py-6 text-base leading-6 font-normal">
        <div>Product</div>
        <div>Price</div>
        <div>Quantity</div>
        <div>Subtotal</div>
      </div>
      <div className="ssm:grid ssm:grid-cols-2 md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 xl:grid xl:grid-cols-1 gap-y-10">
        {carts &&
          carts.map((item) => {
            return (
              <div
                key={item.product.id}
                className="xl:flex xl:flex-row xl:justify-between rounded shadow-md  py-6 text-base leading-6 font-normal"
              >
                <div className=" flex flex-col justify-center items-center xl:flex xl:flex-row xl:items-center xl:w-[347px] xl:pl-10 gap-x-4">
                  <button
                    type="button"
                    onClick={() => {
                      remove(item.product);
                    }}
                    className="relative group"
                  >
                    <Image
                      className="xl:!w-14 xl:!h-14 lg:!w-36 lg:!h-36 !w-28 !h-28"
                      width={54}
                      height={54}
                      src={item.product.images[0]}
                      alt={item.product.title}
                    />
                    <div className="absolute -left-3 -top-3 w-6 h-6 rounded-full bg-Secondary-2 inline-flex flex-row justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-white-0">X</span>
                    </div>
                  </button>

                  <p className="text-black-0 truncate  xl:w-full w-3/5 text-center xl:text-start">
                    {" "}
                    {item.product?.title}{" "}
                  </p>
                </div>
                <div className="flex flex-col justify-center items-center xl:flex xl:flex-row xl:max-w-[784px]  xl:justify-between xl:w-full">
                  <p className="xl:max-w-[320px] xl:w-full ">
                    ${item.product?.price}
                  </p>
                  <div className="xl:max-w-[360px] xl:w-full ">
                    <div className="rounded-lg border-Neutral-300 w-[50px]  xl:w-[72px] xl:h-[44px] border flex flex-row justify-between py-[6px] px-3 items-center">
                      <div>{item.quantity}</div>
                      <div className="flex flex-col items-center">
                        <button
                          className="mouseup"
                          type="button"
                          onClick={() => {
                            increase(item.product);
                          }}
                        >
                          {" "}
                          <ChevronUp size={16} />
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            decrease(item.product);
                          }}
                        >
                          {" "}
                          <ChevronDown size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                  <p className="max-w-[124px] text-center xl:text-start w-full xl:pl-5">
                    ${item.product.price * item.quantity}
                  </p>
                </div>
              </div>
            );
          })}
      </div>

      <div className=" rounded flex flex-row justify-between text-base leading-6 font-normal pt-10">
        <div className="border border-Neutral-300  px-12 py-3 text-base font-bold leading-6">
          Return To Shop
        </div>
        <div className="border border-Neutral-300  px-12 py-3 text-base font-bold leading-6">
          Update Cart
        </div>
      </div>
      <div className=" flex flex-col justify-center items-center gap-y-10 rounded lg:flex lg:flex-row lg:justify-between lg:items-start text-base leading-6 font-normal pt-10">
        <div className=" max-w-[527px] w-full">
          <form>
            <div className="flex flex-row justify-between">
              <input
                type="search"
                className="block p-3 text-sm text-gray-900 bg-gray-50 max-w-[300px] w-full border border-Neutral-600 rounded-md"
                placeholder="Coupon Code"
                required
              />
              <button
                type="submit"
                className="text-white-0 bg-Secondary-2 font-medium rounded-md border px-12 py-4"
              >
                Apply Coupon
              </button>
            </div>
          </form>
        </div>
        <div className=" max-w-[470px] w-full max-h-[324px] h-full border-2 border-Neutral-600 rounded-md">
          <div className="py-8 px-6">
            <div className="text-xl font-medium">Cart Total</div>
            <div className="py-4 flex flex-row justify-between border-b-2 border-Neutral-200">
              <div className="font-normal leading-6 text-base">Subtotal:</div>
              <div>${total.toFixed(2)}</div>
            </div>
            <div className="py-4 flex flex-row justify-between border-b-2 border-Neutral-200">
              <div className="font-normal leading-6 text-base">Shipping:</div>
              <div>Free</div>
            </div>
            <div className="py-4 flex flex-row justify-between">
              <div className="font-normal leading-6 text-base">Total:</div>
              <div>${total.toFixed(2)}</div>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="text-white-0 bg-Secondary-2 font-medium rounded-md border px-12 py-4"
              >
                Procees to checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartCom;
