"use client";

import React from "react";
import Image from "next/image";

import "swiper/css/grid";
import "swiper/css/pagination";

import TitleFunction from "@/components/Commons/TitleFunction";

import useTrans from "@/hooks/useTrans";

import Banner1 from "./Frame 684.png";
import Banner2 from "./Frame 685.png";
import Banner3 from "./Frame 686.png";
import Banner4 from "./Frame 687.png";
import Banner5 from "./Frame 701.png";
import Banner6 from "./Frame 702.png";
import Banner7 from "./Frame 704.png";

function Features() {
  const { featureContent } = useTrans();

  return (
    <div>
      <TitleFunction
        content={featureContent.content}
        title={featureContent.title}
        isCountDown={false}
      />

      <div className="mt-[65px] flex flex-col gap-y-2 sm:flex sm:flex-row sm:justify-between sm:gap-2 ">
        <div className=" relative bg-black-0">
          <div className=" max-w-[570px] w-full h-auto mt-[89px] mx-[29px]">
            <Image
              loading="lazy"
              className="!w-[511px] !h-auto"
              src={Banner1}
              alt="Banner1"
              width={511}
              height={511}
            />
            <ul className="flex flex-col justify-between gap-y-4 max-w-[242px] ml-[3px] max-h-[122px] h-full w-auto absolute bottom-8  bg-opacity-50 text-white-0">
              <li className="font-inter text-[24px] font-semibold leading-6">
                PlayStation 5
              </li>
              <li className="text-[14px] font-poppins">
                Black and White version of the PS5 coming out on sale.
              </li>
              <li className="font-poppins text-base font-medium underline decoration-Neutral-300 underline-offset-4">
                Shop Now
              </li>
            </ul>
          </div>
        </div>

        <div className=" flex flex-col justify-between gap-y-2">
          <div
            className="max-w-[570px]  relative"
            style={{ backgroundColor: "#0D0D0D" }}
          >
            {" "}
            <Image
              loading="lazy"
              src={Banner2}
              alt="Banner2"
              width={432}
              height={286}
            />
            <ul className="flex flex-col justify-between gap-y-4 max-w-[255px] ml-[24px] max-h-[122px] h-full w-auto absolute bottom-6  bg-opacity-50 text-white-0">
              <li className="font-inter text-[24px] font-semibold leading-6 tracking-[0.72px]">
                Women’s Collections
              </li>
              <li className="text-[14px] font-poppins">
                Featured woman collections that give you another vibe.
              </li>
              <li className="font-poppins text-base font-medium underline decoration-Neutral-300 underline-offset-4">
                Shop Now
              </li>
            </ul>
          </div>

          <div className=" md:max-h-[284px] md:flex md:flex-row md:justify-between flex flex-row gap-2 ">
            <div className="bg-black-0 relative ">
              {" "}
              <div className="w-full h-auto text-white-0 px-10 pt-[31px] pb-8 relative">
                <Image src={Banner3} alt="Banner3" width={190} height={221} />
              </div>
              <ul className="flex flex-col justify-between gap-y-2 max-w-[191px] ml-[24px]  absolute  bottom-6  bg-opacity-50 text-white-0">
                <li className="font-inter text-[24px] font-semibold leading-6 tracking-[0.72px]">
                  Speakers
                </li>
                <li className="text-[14px] font-poppins">
                  Amazon wireless speakers
                </li>
                <li className="font-poppins text-base font-medium underline decoration-Neutral-300 underline-offset-4">
                  Shop Now
                </li>
              </ul>
            </div>
            <div className="bg-black-0 relative ">
              {" "}
              <div className="w-full h-auto text-white-0 px-10 pt-[31px] pb-8 relative">
                <Image src={Banner4} alt="Banner4" width={190} height={221} />
              </div>
              <ul className="flex flex-col justify-between gap-y-2 max-w-[191px] ml-[24px]  absolute bottom-16  bg-opacity-50 text-white-0">
                <li className="font-inter text-[24px] font-semibold leading-6 tracking-[0.72px]">
                  Perfume
                </li>
                <li className="text-[14px] font-poppins">
                  GUCCI INTENSE OUD EDP
                </li>
                <li className="font-poppins text-base font-medium underline decoration-Neutral-300 underline-offset-4">
                  Shop Now
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container items-center flex flex-col justify-between lg:flex lg:flex-row lg:justify-center gap-x-[88px] my-[140px] ">
        <Image src={Banner5} alt="Banner5" />
        <Image src={Banner6} alt="Banner6" />
        <Image src={Banner7} alt="Banner7" />
      </div>
    </div>
  );
}

export default Features;
