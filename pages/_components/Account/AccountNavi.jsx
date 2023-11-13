/* eslint-disable react/no-array-index-key */

"use client";

import React from "react";

import useTrans from "@/hooks/useTrans";

function AccountNavi() {
  const { accountMenu } = useTrans();

  return (
    <div className=" ">
      {" "}
      <div className="flex flex-col justify-start gap-y-[23px]">
        {accountMenu.map((item, index) => {
          return (
            <div
              key={`${item.route}-${index}`}
              className="max-w-[300px] w-full h-auto "
            >
              <span className="text-base font-medium">{item.name}</span>
              <div className="pl-[35px] flex flex-col gap-y-2 pt-[16px]">
                {item.child.map((child, indexNumber) => {
                  return (
                    <div key={`${child?.route} - ${indexNumber}`}>
                      <span
                        className={`${
                          child?.route === "myprofile"
                            ? "text-Secondary-2"
                            : "text-opacity-50 text-black-0"
                        } `}
                      >
                        {child?.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AccountNavi;
