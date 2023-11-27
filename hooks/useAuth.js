"use client";

import { deleteCookie, setCookie } from "cookies-next";
// import { jwtDecode } from "jwt-decode";
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
    quantity: 2,
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

          const { access_token: token } = data;
          setCookie("token", token, {
            // expires: expirationTime,
            maxAge: 24 * 60 * 60 * 1000,
          });

          // set refreshToken in cookie

          const { refresh_token: refreshToken } = data;
          setCookie("refreshToken", refreshToken, {
            // expires: expirationTime,
            maxAge: 365 * 24 * 60 * 60 * 1000,
          });

          const { data: user } = await axiosClient.get(`/auth/profile`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          const { carts, getCarts } = useCartStore.getState();

          carts.forEach((cartItem) => {
            const existingCartItem = cartServer.find(
              (serverItem) => serverItem.product.id === cartItem.product.id,
            );
            if (existingCartItem) {
              // If the product already exists in cartServer, update the quantity
              existingCartItem.quantity += cartItem.quantity;
            } else {
              // If the product doesn't exist in cartServer, add it
              cartServer.push({ ...cartItem });
            }
          });
          getCarts(cartServer);
          set({ user });
        },
        getUser: async (user) => {
          set({ user });
        },
        logout: async () => {
          localStorage.clear();

          deleteCookie("carts");
          deleteCookie("refreshToken");
          deleteCookie("token");
          deleteCookie("user");
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
