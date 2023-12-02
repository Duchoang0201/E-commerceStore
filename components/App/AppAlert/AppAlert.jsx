"use client";

import React from "react";
import dynamic from "next/dynamic";

import useMessage from "@/hooks/useMessage";
// import PropTypes from "prop-types";

const Toast = dynamic(() => import("./ToastBackup"), {
  ssr: false,
});

function AppAlert() {
  const { messages } = useMessage();
  // console.log(`🚀🚀🚀!..messages`, messages);
  return (
    <div className="fixed  right-[50px] z-10 top-[50px] ">
      {messages?.map((item, index) => {
        return <Toast key={item.id} item={item} index={index} />;
      })}
    </div>
  );
}

export default AppAlert;

// AppAlert.propTypes = {
//   messages: PropTypes.instanceOf(Object).isRequired,
// };
