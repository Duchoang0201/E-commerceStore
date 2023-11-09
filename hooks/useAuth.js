import { setCookie } from "cookies-next";
import { jwtDecode } from "jwt-decode";
import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";

import { axiosClient } from "@/libraries/axiosClient";

import useCartStore from "./useCartStore";

const useAuthStore = create(
  devtools(
    persist(
      (set) => ({
        user: {},
        login: async () => {
          const data = await axiosClient.post("/auth/login", {
            username: "mor_2314",
            password: "83r5^_",
          });
          const { token } = data.data;
          const decoded = jwtDecode(token);
          // const user = JSON.stringify(decoded);

          const cartsData = await axiosClient.get(`/carts/user/${decoded.sub}`);
          let { data: carts } = cartsData;

          if (carts) {
            const promises = carts[0].products.map(async (item) => {
              const resCart = await axiosClient.get(
                `/products/${item.productId}`,
              );
              return { quantity: item.quantity, product: resCart.data }; // Assuming you want to return the data, not an array with a single item
            });
            carts = await Promise.all(promises);
            useCartStore.getState().getCarts(carts);
          }
          setCookie("carts", JSON.stringify(carts[0]));

          setCookie("token", token);

          set({ user: decoded });
        },
        logout: async () => {
          set({ user: null });
        },
      }),
      {
        name: "authStorage",
        storage: createJSONStorage(() => sessionStorage),
      },
    ),
  ),
);

export default useAuthStore;
