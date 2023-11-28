"use client";

import React, { useRef, useState } from "react";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/pagination";

import useTrans from "@/hooks/useTrans";

import Banner from "./Banner.jpg";
import Draw from "./Draw";

import "swiper/css";

function HerroBanner() {
  const { menuList } = useTrans();
  const [open, setOpen] = useState(false);
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
    <>
      <div className=" relative flex flex-row justify-center mt-10 xl:mt-0">
        <div className="hidden xl:flex xl:w-full  border-r border-Neutral-200 pt-[32px] max-w-[233px] w-full">
          <ul className="w-full">
            {menuList.map((item, index) => {
              const isLastItem = index === menuList.length - 1;
              return (
                <li
                  key={`${item.name}`}
                  className={`${
                    isLastItem ? "" : ""
                  } rounded-r-2xl max-w-[233px] `}
                >
                  <Link
                    ref={liRef}
                    value={item.name}
                    onMouseLeave={closeChild}
                    onMouseOver={openChild}
                    href={`/${item.href}`}
                    className={`${
                      isLastItem ? "pt-2" : "py-2"
                    } text-base max-w-[217px]  flex flex-row justify-between   duration-200 transition-all`}
                    aria-current="page"
                  >
                    <span className="hover:opacity-60 ">{item.name}</span>
                    {item.child && <ChevronRight size={24} />}
                    {item.name === showChild && item.child && (
                      <ul
                        className={`  max-w-[210px] w-full flex flex-col absolute mt-2  h-auto ml-[215px]  bg-Neutral-100 rounded  transition-all duration-200 z-50`}
                      >
                        {item.child?.map((child) => {
                          return (
                            <li key={child.name}>
                              <Link
                                href={`/${child.href}`}
                                className="text-base h-10 items-center   text-black w-auto flex flex-row justify-between"
                                aria-current="page"
                              >
                                <span className="hover:opacity-60">
                                  {child.name}
                                </span>
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="flex flex-col-reverse max-w-[937px] w-full ">
          <Swiper
            watchSlidesProgress="true"
            centeredSlides={false}
            modules={[Pagination]}
            pagination={{ clickable: true }}
            className="mySwiper !max-w-[892px] w-full !mr-0"
          >
            <SwiperSlide>
              <Image
                src={Banner}
                alt="banner"
                // loading="lazy"
                // priority="true"
                loading="eager"
                priority="true"
                width={892}
                height={344}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src={Banner}
                alt="banner"
                // priority="true"
                // loading="lazy"
                loading="eager"
                priority="true"
                width={892}
                height={344}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>{" "}
      <div className="visible xl:hidden absolute left-[2px] top-[150px]  z-10">
        <Draw open={open} setOpen={setOpen} />
      </div>
    </>
  );
}

export default HerroBanner;
