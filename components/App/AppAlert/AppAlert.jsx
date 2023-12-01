import React from "react";

import useMessage from "@/hooks/useMessage";

import Toast from "./Toast";
// import Toast2 from "./Toast2";

function AppAlert() {
  const { messages } = useMessage();

  // const removeMessage = useCallback(
  //   (idToRemove) => {
  //     const newData =
  //       messages.length > 0 &&
  //       messages.filter((toast) => toast.id !== idToRemove);
  //     reSetMessages(newData);
  //   },
  //   [messages],
  // );

  return (
    <div className="fixed  right-[50px] z-10 top-[50px] ">
      {messages?.length > 0 &&
        messages?.map((item, index) => {
          return (
            <Toast
              key={item.id}
              item={item}
              index={index}
              // messages={messages}
              // removeMessage={removeMessage}
            />
          );
        })}
      {/* <Toast2 /> */}
    </div>
  );
}

export default AppAlert;
