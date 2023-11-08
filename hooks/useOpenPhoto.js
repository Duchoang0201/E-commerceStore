import { create } from "zustand";
import { devtools } from "zustand/middleware";

const useOpenPhoto = create(
  devtools((set) => ({
    photoOpen: "",
    setOpenPhoto: async (item) => {
      set({ photoOpen: item });
    },
  })),
);

export default useOpenPhoto;
