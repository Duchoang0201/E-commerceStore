"use client";

import React from "react";
import { Controller, useForm } from "react-hook-form";
import { Mail, Phone } from "lucide-react";

import AppButton from "@/components/AppButton/AppButton";

function Contact() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const onSubmit = (data) => console.log(data);
  return (
    <div className="">
      {" "}
      <div className="flex flex-col sm:flex sm:flex-row sm:justify-between">
        <div className="flex flex-col justify-start max-w-[340px] gap-y-[23px] shadow-sm rounded-sm px-[35px] pt-[40px] pb-[51px]">
          <div className="flex flex-col gap-4 ">
            <div className=" flex flex-row items-center">
              <div className="w-[40px] h-[40px] border-white-0 bg-Secondary-2 rounded-full text-white-0 flex flex-row justify-center items-center">
                <Phone size={24} />
              </div>
              <p className="ml-4 font-medium">Call To Us</p>
            </div>
            <p className="text-[14px]">We are available 24/7, 7 days a week.</p>
            <p className="text-[14px]">Phone: +8801611112222</p>
          </div>
          <hr className="my-[9px]" />
          <div className="flex flex-col gap-4">
            <div className=" flex flex-row items-center">
              <div className="w-[40px] h-[40px] border-white-0 bg-Secondary-2 rounded-full text-white-0 flex flex-row justify-center items-center">
                <Mail size={24} />
              </div>
              <p className="ml-4 font-medium ">Write To US</p>
            </div>
            <p className="text-[14px]">
              Fill out our form and we will contact you within 24 hours.
            </p>
            <p className="text-[14px]">Emails: customer@exclusive.com</p>
            <p className="text-[14px]">Emails: support@exclusive.com</p>
          </div>
        </div>
        <div className="max-w-[800px]  w-full shadow-sm px-[30px] py-[40px]">
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col ">
            <div className="flex flex-col  xl:flex xl:flex-row xl:justify-between">
              <div className="relative bg-black max-w-[235px] w-full mb-6 ">
                <Controller
                  name="name"
                  control={control}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="text"
                      id="name"
                      className="block pt-2 focus:outline-none bg-Secondary-0 py-[13px] pl-4 w-full  rounded-sm "
                      placeholder="Your name"
                    />
                  )}
                />
                {errors.name && (
                  <p className="text-error-600">{errors.name.message}</p>
                )}
              </div>
              <div className="relative bg-black max-w-[235px] w-full mb-6 ">
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="text"
                      id="email"
                      className="block pt-2 focus:outline-none bg-Secondary-0 py-[13px] pl-4 w-full  rounded-sm "
                      placeholder="Your email"
                    />
                  )}
                />
                {errors.email && (
                  <p className="text-error-600">{errors.email.message}</p>
                )}
              </div>
              <div className="relative bg-black max-w-[235px] w-full mb-6 ">
                <Controller
                  name="phone"
                  control={control}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="text"
                      id="phone"
                      className="block pt-2 focus:outline-none bg-Secondary-0 py-[13px] pl-4 w-full  rounded-sm "
                      placeholder="Your phone"
                    />
                  )}
                />
                {errors.phone && (
                  <p className="text-error-600">{errors.phone.message}</p>
                )}
              </div>
            </div>

            <div className="flex flex-col mb-[40px]">
              <Controller
                name="currentPassword"
                control={control}
                render={({ field }) => (
                  <textarea
                    {...field}
                    type="password"
                    id="currentPassword"
                    className="block pt-2 focus:outline-none bg-Secondary-0 py-[13px] pl-4 w-full h-[207px] rounded-sm "
                    placeholder="Your Massage"
                  />
                )}
              />
              {errors.currentPassword && (
                <p className="text-error-600">
                  {errors.currentPassword.message}
                </p>
              )}
            </div>
            <div className="flex flex-row justify-end ">
              <div className="xl:flex flex-row gap-8">
                <button type="button">Cancel</button>
                <AppButton buttonText="Save Change" paddingY="16" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
