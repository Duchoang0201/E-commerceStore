import React, { useRef, useState } from "react";
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
  const liRef = useRef();
  const openChild = (e) => {
    const liValue = e.currentTarget.getAttribute("value");
    setShowChild(liValue);
  };
  const closeChild = () => {
    setShowChild("");
  };
  return (
    <div className="container">
      <div className="flex flex-row justify-center xl:flex xl:flex-row xl:justify-between">
        <div className="hidden xl:flex xl:w-full  border-r border-Neutral-200 pt-8 max-w-[233px] w-full">
          <div className="hidden xl:flex xl:w-full ">
            <ul className="w-full">
              {menuList.map((item, index) => {
                const isLastItem = index === menuList.length - 1;
                return (
                  <li
                    ref={liRef}
                    value={item.name}
                    onMouseLeave={closeChild}
                    onMouseEnter={openChild}
                    key={`${item.name}`}
                    className={`${
                      isLastItem ? "" : ""
                    } rounded-r-2xl max-w-[233px] `}
                  >
                    <Link
                      href={item.href}
                      className={`${
                        isLastItem ? "pt-2" : "py-2"
                      } text-base max-w-[217px] align-bottom text-black flex flex-row justify-between hover:bg-TEXT-1 hover:rounded-md duration-200 transition-all`}
                      aria-current="page"
                    >
                      <p>{item.name}</p>
                      {item.child && <ChevronRight size={24} />}
                    </Link>
                    {item.name === showChild && item.child && (
                      <ul
                        className={` max-w-[210px] w-full flex flex-col absolute -mt-7  h-auto ml-56  bg-Neutral-100 rounded  transition-all duration-200 z-50`}
                      >
                        {item.child?.map((child) => {
                          return (
                            <li className=" " key={child.name}>
                              <Link
                                href={child.href}
                                className="text-base h-10 items-center hover:bg-TEXT-1 hover:rounded-md text-black w-auto flex flex-row justify-between"
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

        <div className="flex flex-col-reverse max-w-[937px] w-full -pt-2">
          <Swiper
            centeredSlides={false}
            modules={[Pagination]}
            pagination={{ clickable: true }}
            navigation
            className="mySwiper !max-w-[892px] w-full !mr-0"
          >
            <SwiperSlide className=" ">
              <Image src={Banner} alt="banner" width="auto" height="auto" />
            </SwiperSlide>
            <SwiperSlide className=" ">
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
  );
}

export default HerroBanner;
