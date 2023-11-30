"use client";

import React from "react";

import useMessage from "@/hooks/useMessage";

import Toast from "./Toast";

function AppAlert() {
  const { messages } = useMessage();

  return (
    <div
      className="fixed block right-[50px] z-10 top-[50px]  min-h-0 border-2 max-h-fit transition-all duration-1000
     "
    >
      {messages.length > 0 &&
        messages.map((item, index) => {
          return <Toast key={item.id} item={item} index={index} />;
        })}
    </div>
  );
}

export default AppAlert;
