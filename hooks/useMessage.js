"use client";

import { create } from "zustand";
import { devtools } from "zustand/middleware";

function getUniqueID() {
  return Math.floor(Math.random() * Date.now()).toString();
}

const useMessage = create(
  devtools((set, get) => ({
    messages: [],
    setMessage: async (item) => {
      const { messages } = get();
      const newData = item;
      newData.id = getUniqueID();
      // newData.timeStart = Date.now() + 1;
      // if (messages[0]) {
      //   newData.timeExtra = Date.now() - messages[0].timeStart;
      // } else {
      //   newData.timeExtra = 0;
      // }

      // newData.clearTime =
      //   Math.round(((newData.time + newData.timeExtra).toFixed(1) * 5) / 1000) /
      //   5;

      // // newData.animation = `after:animate-[width-down_3s_linear_forwards]`;
      // newData.animation = `after:animate-[width-down_${newData.clearTime.toString()}s_linear_forwards]`;
      messages.push(newData);
      set({ messages });
    },
    reSetMessages: async (itemId, ref) => {
      const { messages } = get();
      let newMessages = [];
      await ref?.current?.classList.add("animate-toastOut");

      await ref?.current?.addEventListener("animationend", () => {
        newMessages = messages.filter((toast) => toast.id !== itemId);
      });
      set({ messages: newMessages });
    },
  })),
);

export default useMessage;
