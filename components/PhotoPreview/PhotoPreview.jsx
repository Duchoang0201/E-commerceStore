import React from "react";
import { X } from "lucide-react";
import Image from "next/image";

import useOpenPhoto from "@/hooks/useOpenPhoto";

function PhotoPreview() {
  const { photoOpen, setOpenPhoto } = useOpenPhoto();
  return (
    <div className="relative flex items-center">
      {photoOpen && (
        <div
          aria-hidden="true"
          className="fixed inset-0 z-40 bg-black-0 bg-opacity-90 h-screen w-full"
          onClick={() => setOpenPhoto("")}
        />
      )}
      <div
        aria-hidden={photoOpen ? "false" : "true"}
        className={`fixed inset-0 bg-black-0 bg-opacity-5 backdrop-blur-0 my-[20px]  mx-auto w-fit transform duration-700  transition-transform z-50 ${
          photoOpen ? "translate-x-0" : "-translate-x-[2000px]"
        }`}
      >
        <div className="flex flex-row justify-between items-center w-full ">
          <div
            type="button"
            className=" text-xs font-bold text-white-0 bg-Red-500 border-white-0  "
          >
            Exclusive
          </div>
          <button
            onClick={() => setOpenPhoto(false)}
            type="button"
            className=" w-4 h-4 text-white bg-Red-500  rounded-full "
          >
            <X size={16} color="white" />
          </button>
        </div>
        <div className="w-full pt-4 flex flex-row justify-center items-center">
          <Image src={photoOpen} alt="Pick" width={400} height={400} />
        </div>
      </div>
    </div>
  );
}

export default PhotoPreview;
