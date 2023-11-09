/* eslint-disable react/no-array-index-key */
import React from "react";
import {
  Bus,
  CircleDollarSign,
  Facebook,
  Headphones,
  Linkedin,
  ShieldCheck,
  ShoppingBag,
  Store,
  Twitter,
  Wallet,
} from "lucide-react";
import Image from "next/image";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/pagination";

import Banner from "./Banner.png";

// Import Swiper styles
import "swiper/css";

function AboutCom() {
  const arrList = [
    {
      icon: Store,
      amount: "10.5k",
      title: "Sallers active our site",
    },
    {
      icon: CircleDollarSign,
      amount: "33k",
      title: "Mopnthly Produduct Sale",
    },
    {
      icon: ShoppingBag,
      amount: "45.5k",
      title: "Customer active in our site",
    },
    {
      icon: Wallet,
      amount: "25k",
      title: "Anual gross sale in our site",
    },
  ];

  const arrSP = [
    {
      icon: Bus,
      title: "FREE AND FAST DELIVERY",
      content: "Free delivery for all orders over $140",
    },
    {
      icon: Headphones,
      title: "24/7 CUSTOMER SERVICE",
      content: "Mopnthly Produduct Sale",
    },
    {
      icon: ShieldCheck,
      title: "MONEY BACK GUARANTEE",
      content: "We reurn money within 30 days",
    },
  ];
  return (
    <div className="container">
      <div className="flex flex-col  overflow-visible md:flex md:flex-row md:justify-between relative ">
        <div className="max-w-[525px] w-full mt-[137px] text-start order-2 md:order-1">
          <span className="font-inter text-[54px] font-semibold leading-[64px] tracking-[3.24px]">
            Our Story
          </span>
          <p className="mt-[40px] mb-[24px]">
            Launced in 2015, Exclusive is South Asia’s premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sallers and 300 brands and serves 3 millioons customers
            across the region.
          </p>
          <p>
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assotment in categories
            ranging from consumer.
          </p>
        </div>
        <div className="overflow-visible order-1  md:-mr-[267px]  ">
          <Image src={Banner} alt="banner" width={837} height={609} />
        </div>
      </div>
      <div className="my-[140px] flex flex-col items-center gap-y-6 xl:flex xl:flex-row justify-between w-full ">
        {arrList.map((item) => {
          return (
            <div
              key={item.title}
              className=" border rounded border-opacity-10 border-black-0 max-w-[270px] w-full max-h-[230px] "
            >
              <div className=" justify-center items-center flex flex-col gap-y-6  my-[30px]">
                <div className="flex flex-row justify-center">
                  <div className="w-[80px] h-[80px] border-[10px] border-opacity-80 border-white-0 bg-black-0 rounded-full text-white-0 flex flex-row justify-center items-center">
                    <item.icon className="w-1/2 h-1/2" />
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center w-full">
                  <p className="font-inter text-[32px] font-bold">
                    {item.amount}{" "}
                  </p>
                  <p>{item.title}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Swiper
        centeredSlides="auto"
        spaceBetween={30}
        modules={[Pagination]}
        pagination={{ clickable: true }}
        className="mySwiper"
      >
        {Array(10)
          .fill(null)
          .map((_, index) => {
            console.log(`🚀🚀🚀!..index`, index);
            return (
              <SwiperSlide className="!max-w-[370px] w-full" key={index + 1}>
                <div className=" flex flex-col ">
                  <div className="max-w-[370px] w-full h-auto">
                    <Image
                      objectFit="contain"
                      src={Banner}
                      alt="Banner"
                      width={370}
                      height={430}
                    />
                  </div>
                  <div className="pt-4 flex flex-col">
                    <span className="font-medium text-[32px] truncate text-ellipsis overflow-hidden font-inter">
                      Tom Cruise
                    </span>
                    <div className="justify-center items-center font-medium">
                      <span>Founder & Chairman</span>
                      <div className="flex flex-row items-center gap-x-4 pt-4">
                        <Twitter size={24} />
                        <Facebook size={24} />
                        <Linkedin size={24} />
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        <style>
          {`
      /* Style the border of Swiper pagination bullets inline */
      .swiper-pagination {
        position: relative;
        margin-top: 48px
      }
      .swiper-pagination-bullet {
        width: 16px;
        height: 16px;
        margin: 0 5px;
        cursor: pointer;
        border-radius: 50%;
        background-color: #999999; /* Change to your desired color for the active bullet */
        opacity: 0.9;
        margin-top: 10px
      }

      /* Change the color of the active (selected) bullet */
      .swiper-pagination-bullet-active {
        background-color: #DB4444; /* Change to your desired color for the active bullet */
        border: 1px solid white; /* Set the border style */

      },
   
    `}
        </style>
      </Swiper>

      <div className="flex flex-col justify-between items-center md:flex md:flex-row max-w-[943px] mx-auto md:justify-between mt-[125px] my-[110px] ">
        {arrSP.map((item) => {
          return (
            <div
              key={item.title}
              className="rounded max-w-[270px] w-full max-h-[230px] "
            >
              <div className=" justify-center items-center flex flex-col gap-y-6  my-[30px]">
                <div className="flex flex-row justify-center">
                  <div className="w-[80px] h-[80px] border-[10px] border-opacity-80 border-white-0 bg-black-0 rounded-full text-white-0 flex flex-row justify-center items-center">
                    <item.icon size={40} />
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center w-full">
                  <p className="font-inter text-[20px] font-bold">
                    {item.title}
                  </p>
                  <p className="text-[14px]">{item.content}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AboutCom;
