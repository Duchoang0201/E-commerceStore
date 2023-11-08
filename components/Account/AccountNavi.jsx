import React from "react";

import useTrans from "@/hooks/useTrans";

function AccountNavi() {
  const { accountMenu } = useTrans();

  return (
    <div className=" ">
      {" "}
      <div className="flex flex-col justify-start gap-y-[23px]">
        {accountMenu.map((item) => {
          return (
            <div key={item.name} className="max-w-[300px] w-full h-auto ">
              <span className="text-base font-medium">{item.name}</span>
              <div className="pl-[35px] flex flex-col gap-y-2 pt-[16px]">
                {item.child.map((child) => {
                  return (
                    <div key={child?.name}>
                      <span className="opacity-50">{child?.name}</span>
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
