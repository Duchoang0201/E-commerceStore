import { create } from "zustand";
import { devtools } from "zustand/middleware";

const useSearch = create(
  devtools((set) => ({
    searchString: "",
    setSearch: async (item) => {
      set({ searchString: item });
    },
  })),
);

export default useSearch;
