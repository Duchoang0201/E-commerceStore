import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";

import useMessage from "./useMessage";

const useWishList = create(
  devtools(
    persist(
      (set, get) => ({
        wishList: [],
        addWishList: async (item) => {
          const { carts, increase } = get();
          const checkValue = carts.find(
            (child) => child.product.id === item.id,
          );
          if (checkValue) {
            increase(item);
          } else {
            carts.push({ quantity: 1, product: item });
          }
          useMessage
            .getState()
            .setMessage({ type: "success", time: 2000, text: "Add a Cart" });
          set({ carts });
        },
        removeWishList: async (item) => {
          const { carts } = get();
          carts.filter((child) => child.product.id !== item.id);

          set({ carts });
        },

        reset: () => {
          set({ carts: [] });
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
