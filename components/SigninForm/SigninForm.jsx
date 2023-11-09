"use client";

import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import * as yup from "yup";

import useAuthStore from "@/hooks/useAuth";
import { LoadingCom } from "../Commons/LoadingCom";

const validationSchema = yup.object().shape({
  userName: yup
    .string()
    .required("Email or Phone Number is required")
    .matches(
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$|^(\+\d{1,3}[- ]?)?\d{10}$/,
      "Invalid Email or Phone Number"
    ),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
});

function SigninForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });
  const { login } = useAuthStore();
  const router = useRouter();
  const [loadingCom, setLoadingCom] = useState(false);
  const onSubmit = async (e) => {
    setLoadingCom(true);
    try {
      await login(e);
      setLoadingCom(false);
      router.push("/");
    } catch (error) {
      console.log(`🚀🚀🚀!..error`, error);
    }

    // const data = await axiosClient.post("/auth/login", {
    //   username: "mor_2314",
    //   password: "83r5^_",
    // });
    // const { token } = data.data;
    // const decoded = jwtDecode(token);
    // const user = JSON.stringify(decoded);

    // const cartsData = await axiosClient.get(`/carts/user/${decoded.sub}`);
    // const { data: carts } = cartsData;

    // setCookie("carts", JSON.stringify(carts[0]));

    // setCookie("user", user);
    // router.push("/");
  };

  return (
    <div className="flex flex-col">
      <LoadingCom language="waitting" open={loadingCom} />

      <span className="text-[16px] md:text-[24px] xl:text-[36px] font-inter leading-8 font-semibold tracking-[1.44px] pb-2 xl:pb-6">
        Log in to Exclusive
      </span>
      <span className="text-[8px] md:text-[12px] xl:text-[16px] font-poppins leading-6 pb-2 xl:pb-12">
        Enter your details below
      </span>
      <div className="text-black-0">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="relative bg-black pb-10">
            <Controller
              name="userName"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  id="default-userName"
                  className="block bg-opacity-0 text-white border-Neutral-200 border-b-2 py-3 text-sm bg-gray-50 w-full focus:outline-none "
                  placeholder="Email or Phone Number"
                />
              )}
            />
            <p
              className={`${
                errors.userName ? "opacity-100" : "opacity-0"
              } relative -top-1 text-Red-500 bg-green-600 transition-all duration-700 ease-in`}
            >
              {/* <span className="absolute -top-4">
                <ChevronUp size={20} />
              </span> */}
              {errors.userName?.message}
            </p>
          </div>

          <div className="relative  pb-10">
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="password"
                  id="default-password"
                  className="block bg-opacity-0 text-white border-Neutral-200 border-b-2 py-3 text-sm bg-gray-50 w-full focus:outline-none "
                  placeholder="Password"
                />
              )}
            />
            <p
              className={`${
                errors.password ? "opacity-100" : "opacity-0"
              } relative -top-1 text-Red-500 bg-green-600 transition-all duration-700 ease-in`}
            >
              {/* <span className="absolute -top-4">
                <ChevronUp size={20} />
              </span> */}
              {errors.password?.message}
            </p>
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
      </div>
    </div>
  );
}

export default SigninForm;
