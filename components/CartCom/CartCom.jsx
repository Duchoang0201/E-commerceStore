"use client";

import React, { useEffect, useMemo, useState } from "react";
import { getCookie } from "cookies-next";
import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import PropTypes from "prop-types";

import { getAllData } from "@/constant/ALLPROUCTS";

function CartCom({ data }) {
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const total = await getAllData();

      const promises = data[0].products.map(async (item) => {
        const matchingChild = total.find(
          (child) => item.productId === child.id
        );
        return { product: matchingChild, quantity: item.quantity };
      });

      const updatedCartsList = await Promise.all(promises);
      setCarts(updatedCartsList);
    };

    fetchData();
  }, [data, setCarts]);

  const total = useMemo(() => {
    const found = carts.reduce((curr, acc) => {
      return acc.quantity * acc.product.price + curr;
    }, 0);
    return found;
  }, [carts]);

  return (
    <div>
      <div className=" rounded shadow-md flex flex-row gap-x-[284px] px-10 py-6 text-base leading-6 font-normal">
        <div>Product</div>
        <div>Price</div>
        <div>Quantity</div>
        <div>Subtotal</div>
      </div>
      <div className="sm:grid sm:grid-cols-2 lg:grid lg:grid-cols-3 xl:grid xl:grid-cols-1 gap-y-10">
        {carts &&
          carts.map((item) => {
            return (
              <div
                key={item.product.id}
                className="xl:flex xl:flex-row rounded shadow-md  py-6 text-base leading-6 font-normal"
              >
                <div className=" lg:flex lg:flex-col lg:justify-center xl:flex xl:flex-row xl:items-center xl:w-[347px] xl:pl-10 gap-x-4">
                  <Image
                    className="xl:!w-14 xl:!h-14 lg:!w-36 lg:!h-36 !w-28 !h-28"
                    width={54}
                    height={54}
                    src={item.product.image}
                    alt={item.product.title}
                  />
                  <p className="text-black-0 lg:truncate lg:w-52   justify-center">
                    {" "}
                    {item.product?.title}{" "}
                  </p>
                </div>
                <div className=" lg:flex lg:flex-col lg:justify-center  xl:flex xl:flex-row xl:items-center xl:justify-start xl:w-[347px] xl:pl-28 ">
                  ${item.product?.price}
                </div>
                <div className="lg:flex lg:flex-col lg:justify-center  xl:flex xl:flex-row xl:items-center xl:justify-start xl:w-[347px] xl:pl-36">
                  <div className="rounded-lg border-Neutral-300  w-[72px] h-[44px] border flex flex-row justify-between py-[6px] px-3 items-center">
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
                          increase(item.product);
                        }}
                      >
                        {" "}
                        <ChevronDown size={16} />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex justify-end xl:flex xl:flex-row xl:items-center xl:w-[347px] xl:justify-start  xl:pl-52 ">
                  ${item.product.price * item.quantity}
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
        <div className=" w-[527px]">
          <form>
            <div className="flex flex-row justify-between">
              <input
                type="search"
                id="default-search"
                className="block p-3 text-sm text-gray-900 bg-gray-50 w-[300px] border border-Neutral-600 rounded-md"
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
        <div className=" w-[470px] h-[324px] border-2 border-Neutral-600 rounded-md">
          <div className="py-8 px-6">
            <div className="text-xl font-medium">Cart Total</div>
            <div className="py-4 flex flex-row justify-between border-b-2 border-Neutral-200">
              <div className="font-normal leading-6 text-base">Subtotal:</div>
              <div>12</div>
            </div>
            <div className="py-4 flex flex-row justify-between border-b-2 border-Neutral-200">
              <div className="font-normal leading-6 text-base">Shipping:</div>
              <div>Free</div>
            </div>
            <div className="py-4 flex flex-row justify-between">
              <div className="font-normal leading-6 text-base">Total:</div>
              <div>{total}</div>
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

CartCom.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};
