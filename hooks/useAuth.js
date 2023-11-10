import { deleteCookie, setCookie } from "cookies-next";
import { jwtDecode } from "jwt-decode";
import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";

import { axiosClient } from "@/libraries/axiosClient";

import useCartStore from "./useCartStore";

const cartServer = [
  {
    product: {
      id: 4,
      title: "Handmade Fresh Table",
      price: 687,
      description: "Andy shoes are designed to keeping in...",
      category: {
        id: 5,
        name: "Others",
        image: "https://placeimg.com/640/480/any?r=0.591926261873231",
      },
      images: [
        "https://placeimg.com/640/480/any?r=0.9178516507833767",
        "https://placeimg.com/640/480/any?r=0.9300320592588625",
        "https://placeimg.com/640/480/any?r=0.8807778235430017",
      ],
    },
    quantity: 1,
  },
];
const useAuthStore = create(
  devtools(
    persist(
      (set) => ({
        user: {},
        login: async () => {
          const { data } = await axiosClient.post("/auth/login", {
            email: "john@mail.com",
            password: "changeme",
          });

          // set token in cookie
          const token = data.access_token;
          setCookie("token", token);
          // set refreshToken in cookie

          const refreshToken = data.refresh_token;
          setCookie("refreshToken", refreshToken);

          const decoded = jwtDecode(token);

          const { data: user } = await axiosClient.get(`/users/${decoded.sub}`);

          const { carts, getCarts } = useCartStore.getState();

          cartServer.forEach((mergeValue) => {
            const checkValue = carts.find(
              (child) => child.product.id === mergeValue.product.id,
            );

            if (checkValue) {
              // eslint-disable-next-line no-param-reassign
              mergeValue.quantity += checkValue.quantity;
            } else {
              cartServer.push(checkValue);
            }
            getCarts(cartServer);
          });
          set({ user });
        },
        logout: async () => {
          localStorage.clear();
          deleteCookie("carts");

          deleteCookie("token");
          set({ user: null });
        },
      }),
      {
        name: "authStorage",
        storage: createJSONStorage(() => localStorage),
      },
    ),
  ),
);

export default useAuthStore;
