"use client";

import React, { useMemo } from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Landmark } from "lucide-react";
import Image from "next/image";
import * as yup from "yup";

import useCartStore from "@/hooks/useCartStore";
import useTrans from "@/hooks/useTrans";

const validationSchema = yup.object().shape({
  firstName: yup.string().required("Please enter your name"),
  company: yup.string(),
  address: yup.string().required("Please enter your address"),
  appartment: yup.string(),
  email: yup.string().email().required(),
  phoneNumber: yup
    .string()
    .required("Phone number is required")

    .matches(
      /^((\+84)|0)(3[2-9]|5[689]|7[06-9]|8[1-689]|9[0-46-9])\d{7}$/,
      "Invalid Vietnamese phone number",
    ),
  userName: yup
    .string()
    .required("Email or Phone Number is required")
    .matches(
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$|^(\+\d{1,3}[- ]?)?\d{10}$/,
      "Invalid Email or Phone Number",
    ),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
});
function Checkout() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });
  const { checkoutForm } = useTrans();
  const onSubmit = () => {};
  const { carts } = useCartStore();
  const total = useMemo(() => {
    const found = carts.reduce((curr, acc) => {
      return acc.quantity * acc.product.price + curr;
    }, 0);
    return found;
  }, [carts]);
  return (
    <div>
      <div className="text-3xl font-medium"> Billing Details</div>
      <div className="flex flex-row justify-between pt-12 ">
        <form
          className="max-w-[470px] w-full"
          onSubmit={handleSubmit(onSubmit)}
        >
          {checkoutForm &&
            checkoutForm.map((item) => {
              return (
                <div key={item.name} className="relative pb-8">
                  <label
                    htmlFor={item.route}
                    className="block text-sm font-medium "
                  >
                    <p className="opacity-40 text-black-0 pb-1">
                      {item.name}
                      {item.require && <span className="text-Red-600">*</span>}
                    </p>
                    <Controller
                      className="h-[43px]"
                      name={item.route}
                      control={control}
                      render={({ field }) => (
                        <input
                          {...field}
                          required
                          type={item.route}
                          id={item.route}
                          className="block bg-Secondary-0 rounded-sm text-white  py-3 text-sm  w-full focus:outline-none "
                        />
                      )}
                    />
                    <p
                      className={`${
                        errors.firstName ? "opacity-100" : "opacity-0"
                      } relative -top-1 text-Red-500 bg-green-600 transition-all duration-700 ease-in`}
                    >
                      {errors.firstName?.message}
                    </p>
                  </label>
                </div>
              );
            })}
          <div className="relative pb-8">
            <label htmlFor="firstName" className="block text-sm font-medium ">
              <p className="opacity-40 text-black-0">
                First Name<span className="text-Red-600">*</span>
              </p>
              <Controller
                className="h-[43px]"
                name="firstName"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    required
                    type="firstName"
                    id="default-firstName"
                    className="block bg-Secondary-0 rounded-sm text-white  py-3 text-sm  w-full focus:outline-none "
                  />
                )}
              />
              <p
                className={`${
                  errors.firstName ? "opacity-100" : "opacity-0"
                } relative -top-1 text-Red-500 bg-green-600 transition-all duration-700 ease-in`}
              >
                {errors.firstName?.message}
              </p>
            </label>
          </div>
          <div className="relative  pb-8">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              <p className="opacity-40 text-black-0">
                Password<span className="text-Red-600">*</span>
              </p>
              <Controller
                name="password"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    required
                    type="password"
                    id="default-password"
                    className="block bg-Secondary-0 rounded-sm  py-3 text-sm bg-gray-50 w-full focus:outline-none "
                  />
                )}
              />
              <p
                className={`${
                  errors.password ? "opacity-100" : "opacity-0"
                } relative -top-1 text-Red-500 bg-green-600 transition-all duration-700 ease-in`}
              >
                {errors.password?.message}
              </p>
            </label>
          </div>

          <div className="w-full  rounded-md h-14 text-white-0 flex justify-between items-center mb-4">
            <button
              type="submit"
              className="px-12 py-4 bg-Secondary-2 text-sm rounded-sm"
            >
              Log in
            </button>
            <div className="text-Secondary-2"> Forget Passwword?</div>
          </div>
        </form>
        <div className="flex flex-col gap-y-8 max-w-[527px] ">
          <div className="max-w-[422px] w-full h-auto ">
            <div className=" w-full ">
              {" "}
              <div className="w-full h-auto gap-y-8">
                {carts &&
                  carts.map((item) => {
                    return (
                      <div
                        key={item.product.id}
                        className="flex flex-row justify-between items-center "
                      >
                        <div className="flex flex-row items-center gap-x-6">
                          <div className="pl-1">
                            <Image
                              className="aspect-square"
                              src={item.product.image}
                              width={54}
                              height={54}
                              alt={item.product.image}
                            />
                          </div>
                          <p className="w-[96px] truncate">
                            {item.product.title}
                          </p>
                        </div>
                        <div>${item.product.price}</div>
                      </div>
                    );
                  })}
              </div>
              <div className="w-auto h-auto">
                <div className="py-4 flex flex-row justify-between border-b-2 border-Neutral-200">
                  <div className="font-normal leading-6 text-base">
                    Subtotal:
                  </div>
                  <div>${total}</div>
                </div>
                <div className="py-4 flex flex-row justify-between border-b-2 border-Neutral-200">
                  <div className="font-normal leading-6 text-base">
                    Shipping:
                  </div>
                  <div>Free</div>
                </div>
                <div className="py-4 flex flex-row justify-between">
                  <div className="font-normal leading-6 text-base">Total:</div>
                  <div>${total}</div>
                </div>
              </div>
              <div className="w-auto h-auto gap-y-8 flex flex-col">
                <div className="flex flex-row justify-between">
                  <div className="flex flex-row items-center gap-x-2">
                    {" "}
                    <input type="radio" className="w-6 h-6" />
                    Bank
                  </div>
                  <div className="flex flex-row">
                    <Landmark />
                    <Landmark />
                    <Landmark />
                    <Landmark />
                    <Landmark />
                  </div>
                </div>
                <div className="flex flex-row justify-between">
                  <div className="flex flex-row items-center gap-x-2">
                    <input type="radio" className="w-6 h-6" />
                    Cash on delivery
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" w-full xl:w-[527px]">
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
          <div>
            {" "}
            <button
              type="submit"
              className=" text-white-0 bg-Secondary-2 font-medium rounded-md border px-12 py-4"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
