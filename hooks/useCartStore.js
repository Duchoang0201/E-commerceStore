import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";

const useCartStore = create(
  devtools(
    persist(
      (set, get) => ({
        carts: [],
        getCarts: (data) => {
          set({ carts: data });
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
        reset: () => {
          set({ carts: [] });
        },
      }),
      {
        name: "cart-storage",
        storage: createJSONStorage(() => sessionStorage),
      },
    ),
  ),
);

export default useCartStore;
