"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Search } from "lucide-react";
import Link from "next/link";
import * as yup from "yup";

import useAuthStore from "@/hooks/useAuth";
import { axiosClient } from "@/libraries/axiosClient";

const validationSchema = yup.object().shape({
  name: yup.string().required("User name is required"),

  userName: yup
    .string()
    .required("User name is required")
    .matches(
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$|^(\+\d{1,3}[- ]?)?\d{10}$/,
      "Invalid Email or Phone Number",
    ),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
});

function SignupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const { login } = useAuthStore();
  const onSubmit = async (data) => {
    await axiosClient.post(`/users/`, {
      ...data,
      avatar:
        "https://assets-prd.ignimgs.com/2023/06/17/atla-1280a-1687040323227.jpg",
      email: data.userName,
    });
    login(data);
  };

  return (
    <div className="flex flex-col">
      <span className="text-[16px] md:text-[24px] xl:text-[36px] font-inter leading-8 font-semibold tracking-[1.44px] pb-2 xl:pb-6">
        Create an account
      </span>
      <span className="text-[8px] md:text-[12px] xl:text-[16px]  leading-6 pb-2 xl:pb-12">
        Enter your details below
      </span>
      <div className="text-black-0">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="relative bg-black pb-10">
            <input
              {...register("name")}
              type="text"
              className="block bg-opacity-0 text-white border-Neutral-200 border-b-2 py-3 text-sm bg-gray-50 w-full focus:outline-none "
              placeholder="Name"
            />
            {errors.name && (
              <p className="text-error-600">{errors.name.message}</p>
            )}
          </div>

          <div className="relative bg-black pb-10">
            <input
              {...register("userName")}
              className="block bg-opacity-0 text-white border-Neutral-200 border-b-2 py-3 text-sm bg-gray-50 w-full focus:outline-none "
              placeholder="Email or Phone Number"
            />
            {errors.userName && (
              <p className="text-Red-500">{errors.userName.message}</p>
            )}
          </div>

          <div className="relative bg-black pb-10">
            <input
              {...register("password")}
              type="password"
              className="block bg-opacity-0 text-white border-Neutral-200 border-b-2 py-3 text-sm bg-gray-50 w-full focus:outline-none "
              placeholder="Password"
            />
            {errors.password && (
              <p className="text-Red-500">{errors.password.message}</p>
            )}
          </div>

          <div className="w-full bg-Secondary-2 rounded-md h-14 text-white-0 flex justify-center items-center mb-4">
            <button
              title="Create Account"
              type="submit"
              className=" leading-6 font-semibold w-full h-full"
            >
              Create Account
            </button>
          </div>
          <div className="w-full bg-white-0 border border-Neutral-200 rounded-md h-14 text-white-0 flex justify-center items-center mb-8">
            <button
              title="Google"
              type="submit"
              className="w-full  leading-6 font-semibold flex flex-row justify-center items-center"
            >
              <Search color="black" />
              <span className="px-2 text-black-0">Login with google</span>
            </button>
          </div>
          <div className="flex justify-center items-center">
            <p className="px-2">Already have account?</p>
            <Link
              href="/signin"
              className="opacity-70 underline underline-offset-8"
            >
              Log in
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignupForm;
