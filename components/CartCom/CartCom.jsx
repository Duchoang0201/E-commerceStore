"use client";

import React, { useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import PropTypes from "prop-types";

import { getAllData } from "@/constant/ALLPROUCTS";
import useCartStore from "@/hooks/useCartStore";

function CartCom({ data }) {
  const { carts, increase, getCarts } = useCartStore();

  useEffect(() => {
    const fetchData = async () => {
      const total = await getAllData();

      const promises = data[0].products.map(async (item) => {
        const matchingChild = total.find(
          (child) => item.productId === child.id,
        );
        return { product: matchingChild, quantity: item.quantity };
      });

      const updatedCartsList = await Promise.all(promises);
      getCarts(updatedCartsList);
    };

    fetchData();
  }, [carts, data, data.products, getCarts]);

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
                <div className="ml-10 lg:flex lg:flex-col lg:justify-center xl:flex xl:flex-row xl:items-center xl:w-[347px] xl:ml-10">
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
                <div className="ml-10 lg:flex lg:flex-col lg:justify-center lg:ml-16 xl:flex xl:flex-row xl:items-center xl:w-[347px] xl:ml-28">
                  ${item.product?.price}
                </div>
                <div className="xl:flex xl:flex-row xl:items-center xl:w-[347px] xl:ml-56">
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
                <div className="xl:flex xl:flex-row xl:items-center xl:w-[347px] xl:ml-64">
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
    </div>
  );
}

export default CartCom;

CartCom.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};
