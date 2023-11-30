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
      const data = [...messages, newData];
      set({ messages: data });
    },
    reSetMessages: async (item) => {
      console.log(`🚀🚀🚀!..item`, item);
      set({ messages: item });
    },
  })),
);

export default useMessage;
