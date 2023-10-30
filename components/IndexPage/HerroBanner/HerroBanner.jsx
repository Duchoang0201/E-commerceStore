import React, { useState } from "react";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/pagination";

import useTrans from "@/hooks/useTrans";

import Banner from "./Banner.jpg";

import "swiper/css";

function HerroBanner() {
  const { menuList } = useTrans();

  const [showChild, setShowChild] = useState("");
  const openChild = (e) => {
    const liValue = e.target.getAttribute("value");
    setShowChild(liValue);
  };
  const closeChild = () => {
    setShowChild("");
  };
  return (
    <div className="  container ">
      <div className="md:flex md:flex-row  flex flex-row justify-center  ">
        <div className="border-r border-Neutral-200 pt-10">
          <div className="hidden xl:flex xl:w-[259px] ">
            <ul className="w-full   ">
              {menuList.map((item, index) => {
                const isLastItem = index === menuList.length - 1;
                return (
                  <li
                    value={item.name}
                    onMouseLeave={closeChild}
                    onMouseEnter={openChild}
                    key={`${item.name}`}
                    className={`${
                      isLastItem ? "" : "pb-4"
                    } hover:bg-TEXT-1 rounded-r-2xl transition-all duration-200`}
                  >
                    <Link
                      href={item.href}
                      className="text-base h-[24px] align-bottom text-black w-auto flex flex-row justify-between "
                      aria-current="page"
                    >
                      <p>{item.name}</p>
                      {item.child && (
                        <p className="pr-4">
                          <ChevronRight size={24} />
                        </p>
                      )}
                    </Link>
                    {item.name === showChild && item.child && (
                      <ul
                        className={` w-52 flex flex-col absolute  h-auto ml-52 py-2 bg-Neutral-100 rounded transition-all duration-200 z-50`}
                      >
                        {item.child?.map((child) => {
                          return (
                            <li
                              className="px-2 py-2 hover:bg-TEXT-1 transition-all duration-200"
                              key={child.name}
                            >
                              <Link
                                href={child.href}
                                className="text-base text-black w-auto flex flex-row justify-between"
                                aria-current="page"
                              >
                                {child.name}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="w-full h-max xl:flex xl:w-[910px]   pt-10 ">
          <div className="flex flex-row flex-wrap items-center text-sm font-normal not-italic w-full ssm:w-[0px]">
            <Swiper
              centeredSlides
              modules={[Pagination]}
              pagination={{ clickable: true }}
              navigation
              className="mySwiper "
            >
              <SwiperSlide className=" !flex !justify-center xl:!flex xl:!justify-end w-full ">
                <Image src={Banner} alt="banner" width="auto" height="auto" />
              </SwiperSlide>
              <SwiperSlide className=" !flex !justify-center xl:!flex xl:!justify-end w-full ">
                <Image src={Banner} alt="banner" width="auto" height="auto" />
              </SwiperSlide>
              <SwiperSlide className=" !flex !justify-center xl:!flex xl:!justify-end w-full ">
                <Image src={Banner} alt="banner" width="auto" height="auto" />
              </SwiperSlide>
              <style>
                {`
      /* Style the border of Swiper pagination bullets inline */
      .swiper-pagination-bullet {
        width: 16px;
        height: 16px;
        margin: 0 5px;
        cursor: pointer;
        border-radius: 50%;
        background-color: #999999; /* Change to your desired color for the active bullet */
        opacity: 0.9

      }

      /* Change the color of the active (selected) bullet */
      .swiper-pagination-bullet-active {
        background-color: #DB4444; /* Change to your desired color for the active bullet */
        border: 2px solid white; /* Set the border style */

      },
   
    `}
              </style>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HerroBanner;
