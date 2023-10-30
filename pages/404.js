import React from "react";

import SpaceBottom from "@/components/Commons/SpaceBottom";
import SpaceTop from "@/components/Commons/SpaceTop";

export default function Custom404() {
  return (
    <div className="container">
      {" "}
      <SpaceTop />
      <div> Home / 404 Error</div>
      <SpaceTop />
      <div className="flex flex-row justify-center">
        <div className="flex flex-col text-center ">
          <div className="font-inter text-[110px] pb-10 ">404 Not Found</div>
          <div className="pb-20">
            Your visited page not found. You may go home page.
          </div>
          <div>
            <button
              type="button"
              className={` px-12 py-4 border bg-Secondary-2 rounded-md text-white-0 items-center text-white font-poppins text-base `}
            >
              Back to home page
            </button>
          </div>
        </div>
      </div>
      <SpaceBottom />
      <SpaceBottom />
    </div>
  );
}
