import { create } from "zustand";
import { devtools } from "zustand/middleware";

const useMessage = create(
  devtools((set, get) => ({
    newClick: 0,
    messages: {},
    setMessage: async (item) => {
      let { newClick } = get();
      newClick += 1;

      set({ messages: item, newClick });
    },
  })),
);

export default useMessage;
