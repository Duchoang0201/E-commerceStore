import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";

import useMessage from "./useMessage";

const useCartStore = create(
  devtools(
    persist(
      (set, get) => ({
        carts: [],
        getCarts: (data) => {
          set({ carts: data });
        },
        addCart: async (item) => {
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
        increase: async (item) => {
          const { carts } = get();
          const productChange = carts.find(
            (child) => child.product.id === item.id,
          );
          productChange.quantity += 1;
          // await axiosClient.patch("/carts/3", {
          //   userId: 2,
          //   date: Date.now,
          //   products: carts,
          // });
          set({ carts });
        },
        decrease: async (item) => {
          let { carts } = get();

          const productChange = carts.find(
            (child) => child.product.id === item.id,
          );

          if (productChange.quantity === 1) {
            carts = carts.filter((child) => child.product.id !== item.id);
          } else {
            productChange.quantity -= 1;
          }
          // await axiosClient.patch("/carts/3", {
          //   userId: 2,
          //   date: Date.now,
          //   products: carts,
          // });
          set({ carts });
        },
        reset: () => {
          set({ carts: [] });
        },
      }),
      {
        name: "cartStorage",
        storage: createJSONStorage(() => localStorage),
      },
    ),
  ),
);

export default useCartStore;
