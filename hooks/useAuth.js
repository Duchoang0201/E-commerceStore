import { deleteCookie, setCookie } from "cookies-next";
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
          const { data } = await axiosClient.post("/auth/login", {
            email: "john@mail.com",
            password: "changeme",
          });
          const token = data.access_token;
          setCookie("token", token);

          const refreshToken = data.refresh_token;
          setCookie("refreshToken", refreshToken);

          const decoded = jwtDecode(token);

          const { data: user } = await axiosClient.get(`/users/${decoded.sub}`);
          set({ user });
        },
        logout: async () => {
          useCartStore.getState().getCarts([]);

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
