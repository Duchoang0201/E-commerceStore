import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";

import useMessage from "./useMessage";

const useWishList = create(
  devtools(
    persist(
      (set, get) => ({
        wishList: [],
        addWishList: async (item) => {
          const { wishList } = get();
          const checkValue = wishList.find((child) => child.id === item.id);
          if (checkValue) {
            useMessage.getState().setMessage({
              type: "warning",
              time: 2000,
              text: "product already taken in Wish List",
            });
          } else {
            wishList.push(item);
            useMessage.getState().setMessage({
              type: "success",
              time: 2000,
              text: "Add a product to Wish List",
            });
          }
          set({ wishList });
        },
        removeWishList: async (item) => {
          const { wishList } = get();
          const newList = wishList.filter((child) => child.id !== item.id);

          useMessage.getState().setMessage({
            type: "success",
            time: 2000,
            text: "Delete a product ",
          });
          set({ wishList: newList });
        },

        reset: () => {
          set({ wishList: [] });
        },
      }),
      {
        name: "wishList-Storage",
        storage: createJSONStorage(() => sessionStorage),
      },
    ),
  ),
);

export default useWishList;
