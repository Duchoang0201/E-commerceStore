import React from "react";

export default function Custom404() {
  return (
    <div className="container pb-[140px]">
      {" "}
      <div className="py-[70px]"> Home / 404 Error</div>
      <div className="flex flex-row justify-center">
        <div className="flex flex-col text-center ">
          <div className="font-inter text-[110px] pb-10 ">404 Not Found</div>
          <div className="pb-20">
            Your visited page not found. You may go home page.
          </div>
          <div>
            <button
              type="button"
              className={` px-12 py-4 border bg-Secondary-2 rounded-md text-white-0 items-center `}
            >
              Back to home page
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
