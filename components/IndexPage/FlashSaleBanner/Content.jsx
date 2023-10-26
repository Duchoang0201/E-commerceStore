import React from "react";

function Content() {
  return (
    <>
      <div className=" flex flex-row items-center justify-start mx-auto max-w-screen-xl px-5">
        <div className="w-5 h-10 bg-Secondary-2 rounded-sm " />
        <div className="text-Secondary-2 text-lg px-5 font-semibold ">
          Today’s
        </div>
      </div>
      <div className=" md:flex md:flex-row md:items-center md:justify-center md:mx-auto md:max-w-screen-xl px-5">
        <div className="md:flex md:flex-row md:justify-between w-full flex flex-row justify-between  ">
          <div className="w-full py-5 bg-red-300 text-[36px] font-semibold font-inter">
            Flash Sales
          </div>

          <div className=" flex-row items-center justify-between w-full ssm:w-full xl:w-[859px] hidden lg:flex py-5 ">
            <div className="flex flex-row flex-wrap items-center text-sm font-normal not-italic w-full ssm:w-[0px]">
              <div className="">
                <div
                  className={`items-center justify-between w-full md:flex md:w-auto md:order-1 `}
                  id="navbar-sticky"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Content;
