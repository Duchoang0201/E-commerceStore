"use client";

import React from "react";
import Image from "next/image";

import useOpenPhoto from "@/hooks/useOpenPhoto";

function PhotoPreview() {
  const { photoOpen, setOpenPhoto } = useOpenPhoto();
  return (
    <div className="relative flex items-center ">
      {photoOpen && (
        <div
          aria-hidden="true"
          className="fixed inset-0 z-40 bg-black-0 bg-opacity-90 h-screen w-full"
          onClick={() => setOpenPhoto("")}
        />
      )}
      <div
        aria-hidden={photoOpen ? "false" : "true"}
        className={`fixed inset-0 px-10 bg-black-0 bg-opacity-5 backdrop-blur-0 mt-[20%] md:mt-[5%]   mx-auto w-fit transform duration-700  transition-transform z-50 ${
          photoOpen ? "translate-x-0" : "-translate-x-[2000px] "
        }`}
      >
        <div className=" flex flex-row justify-between items-center ">
          <div
            title="HomePage"
            type="button"
            className=" text-xs font-bold text-white-0 bg-Red-500 border-white-0  "
          >
            Exclusive
          </div>
          <button
            title="Exit"
            onClick={() => setOpenPhoto(false)}
            type="button"
            className=" w-4 h-4 text-white-0 bg-Red-500  rounded-full  flex flex-row items-center justify-center  "
          >
            {/* <X size={16} color="white" /> */}X
          </button>
        </div>
        <div className=" flex flex-row justify-center items-center">
          {photoOpen && (
            <Image
              loading="lazy"
              src={photoOpen}
              alt="Pick"
              width={800}
              height={800}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default PhotoPreview;
