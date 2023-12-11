/* eslint-disable jsx-a11y/label-has-associated-control */

"use client";

import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import PropTypes from "prop-types";
import * as yup from "yup";

import useAuthStore from "@/hooks/useAuth";
import { axiosClient } from "@/libraries/axiosClient";

import AccountNavi from "./AccountNavi";
import Draw from "./Draw";

const validationSchema = yup.object().shape({
  name: yup.string(),
  email: yup.string().email(),
  password: yup.string().min(6, "Password must be at least 6 characters"),
});

function Account() {
  const { user } = useAuthStore();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      firstName: user.name,
      lastName: user.name,
      email: user.email,
    },
  });
  const [emailChange, setEmailChange] = useState(user.email);
  const [open, setOpen] = useState(false);

  const onSubmit = () => {};
  const emailCheck = useRef();

  return (
    <div className="relative">
      {" "}
      <div className="md:flex md:flex-row md:justify-between ">
        <div className="hidden md:flex">
          <AccountNavi />
        </div>
        <div className="max-w-[870px] max-h-[630px] h-full w-full shadow-md px-[80px] py-[40px]">
          <span className="text-Secondary-2 text-[20px] font-medium">
            Edit Your Profile
          </span>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col pt-[14px]"
          >
            <div className="flex flex-col lg:flex lg:flex-row lg:justify-between">
              <div className="relative bg-black max-w-[330px] w-full mb-6 ">
                <label htmlFor="firstName" className="block text-base  ">
                  <p className="text-base font-normal mb-2"> First Name</p>

                  <input
                    {...register("firstName")}
                    className="block pt-2 focus:outline-none bg-Secondary-0 py-[13px] pl-4 w-full  rounded-sm "
                    placeholder={user.name}
                  />
                </label>
                {errors.firstName && (
                  <p className="text-error-600">{errors.firstName.message}</p>
                )}
              </div>
              <div className="relative bg-black max-w-[330px] w-full mb-6 ">
                <label htmlFor="lastName" className="block text-base  ">
                  <p className="text-base font-normal mb-2"> First Name</p>

                  <input
                    {...register("lastName")}
                    className="block pt-2 focus:outline-none bg-Secondary-0 py-[13px] pl-4 w-full  rounded-sm "
                    placeholder={user.name}
                  />
                </label>
                {errors.lastName && (
                  <p className="text-error-600">{errors.lastName.message}</p>
                )}
              </div>
            </div>

            <div className="flex flex-col lg:flex lg:flex-row lg:justify-between">
              <div className="relative mb-3 max-w-[330px] w-full ">
                <p className="text-base font-normal mb-2">Email</p>

                <input
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Invalid email format",
                    },
                  })}
                  onChange={(e) => {
                    setEmailChange(e.target.value);
                    const enteredEmail = e.target.value;
                    // Email format validation using a regular expression
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (emailRegex.test(enteredEmail)) {
                      if (emailCheck.current) {
                        clearTimeout(emailCheck.current);
                      }
                      emailCheck.current = setTimeout(async () => {
                        try {
                          const { data } = await axiosClient.post(
                            "/users/is-available",
                            {
                              email: enteredEmail,
                            },
                          );
                          if (data.isAvailable) {
                            setError("email", {
                              type: "pattern",
                              message: "Email is available",
                            });
                          } else {
                            setError("email", {
                              type: "shouldUnregister",
                              message: "Email is already resigtered",
                            });
                          }
                        } catch (error) {
                          // Handle Axios request errors here
                        }
                      }, 1500);
                    } else {
                      // Handle invalid email format here
                      setError("email", "Invalid email format");
                    }
                  }}
                  type="email"
                  className="py-[10px] peer bg-Secondary-0 text-black-0 block min-h-[auto] w-full rounded border-0 bg-transparent px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                />
                <label
                  htmlFor="exampleFormControlInput1"
                  className={`${
                    !emailChange ? "opacity-20" : "opacity-0"
                  } pointer-events-none font-medium text-black-0 absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[2.5rem] leading-[1.6] text-neutral-500 transition-all duration-500 ease-out peer-focus:opacity-20
                   peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.9] peer-focus:text-Primary-1 peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary`}
                >
                  {user.email}
                </label>
              </div>
              {/* <div className="relative   max-w-[330px] w-full ">
                <label htmlFor="email" className="block mb-2 ">
                  <p className="text-base font-normal mb-2">Email</p>

                  <input
                    // ref={errors.email?.ref}
                    {...register("email")}
                    onChange={(e) => {
                      const enteredEmail = e.target.value;
                      // Email format validation using a regular expression
                      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                      if (emailRegex.test(enteredEmail)) {
                        if (emailCheck.current) {
                          clearTimeout(emailCheck.current);
                        }
                        emailCheck.current = setTimeout(async () => {
                          try {
                            const { data } = await axiosClient.post(
                              "/users/is-available",
                              {
                                email: enteredEmail,
                              },
                            );
                            console.log(`🚀🚀🚀!..data`, data);
                            if (data.isAvailable) {
                              setError("email", {
                                type: "pattern",
                                message: "Email is available",
                              });
                            } else {
                              setError("email", {
                                type: "shouldUnregister",
                                message: "Email is already resigtered",
                              });
                            }
                          } catch (error) {
                            // Handle Axios request errors here
                            console.error("Error:", error);
                          }
                        }, 1500);
                      } else {
                        // Handle invalid email format here
                        setError("email", "Invalid email format");
                      }
                    }}
                    type="email"
                    id="email"
                    className="block pt-2 focus:outline-none bg-Secondary-0 py-[13px] pl-4 w-full rounded-sm "
                    placeholder={user.email}
                  />
                </label>
                {errors.email && (
                  <p
                    ref={errors.email?.ref}
                    className="text-white-0 absolute bg-error-600 z-50"
                  >
                    {errors.email.message}
                  </p>
                )}
              </div> */}
              <div className="relative bg-black  max-w-[330px] w-full ">
                <label htmlFor="address" className="block mb-2 text-base  ">
                  <p className="text-base font-normal mb-2">Address</p>

                  <input
                    {...register("address")}
                    type="text"
                    id="address"
                    className="block pt-2 focus:outline-none bg-Secondary-0 py-[13px] pl-4 w-full rounded-sm "
                    placeholder="Kingston, 5236, United State"
                  />
                </label>
                {errors.address && (
                  <p className="text-error-600">{errors.address.message}</p>
                )}
              </div>
            </div>
            <div className="flex flex-col mb-[40px]">
              <label htmlFor="currentPassword" className="gap-y-2 mb-4 ">
                <p className="text-base font-normal mb-2">Password Change</p>

                <input
                  {...register("currentPassword")}
                  type="password"
                  id="currentPassword"
                  className="block pt-2 focus:outline-none bg-Secondary-0 py-[13px] pl-4 w-full rounded-sm "
                  placeholder="**************"
                />
              </label>
              {errors.currentPassword && (
                <p className="text-error-600">
                  {errors.currentPassword.message}
                </p>
              )}
              <input
                {...register("newPassword")}
                type="password"
                id="newPassword"
                className="block pt-2 focus:outline-none bg-Secondary-0 py-[13px] pl-4 w-full rounded-sm  mb-4"
                placeholder="**************"
              />
              {errors.newPassword && (
                <p className="text-error-600">{errors.newPassword.message}</p>
              )}
              <input
                {...register("confirmNewPassword")}
                type="password"
                id="confirmNewPassword"
                className="block pt-2 focus:outline-none bg-Secondary-0 py-[13px] pl-4 w-full rounded-sm "
                placeholder="**************"
              />
              {errors.confirmNewPassword && (
                <p className="text-error-600">
                  {errors.confirmNewPassword.message}
                </p>
              )}
            </div>
            <div className="flex flex-row justify-end ">
              <div className="flex flex-row gap-8">
                <button type="button">Cancel</button>
                <button
                  type="submit"
                  className="py-[16px] rounded-sm min-h-[44px] bg-Secondary-2 text-white-0 px-4 md:px-12 whitespace-nowrap"
                >
                  Save Change
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="visible md:hidden absolute left-[2px] top-[150px]  z-10">
        <Draw open={open} setOpen={setOpen} />
      </div>
    </div>
  );
}

export default Account;

Account.propTypes = {
  user: PropTypes.instanceOf(Object).isRequired,
};
