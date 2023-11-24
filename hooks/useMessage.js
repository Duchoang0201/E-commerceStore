"use client";

import { create } from "zustand";
import { devtools } from "zustand/middleware";

function getUniqueID() {
  return Math.floor(Math.random() * Date.now()).toString();
}

const useMessage = create(
  devtools((set) => ({
    messages: {},
    setMessage: async (item) => {
      const newData = item;
      newData.id = getUniqueID();
      set({ messages: newData });
    },
  })),
);

export default useMessage;
