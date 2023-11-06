import { setCookie } from "cookies-next";
import { jwtDecode } from "jwt-decode";
import { create } from "zustand";
import {
  createJSONStorage,
  devtools,
  persist,
  sessionStorage,
} from "zustand/middleware";

import { axiosClient } from "@/libraries/axiosClient";

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
          const user = JSON.stringify(decoded);

          const cartsData = await axiosClient.get(`/carts/user/${decoded.sub}`);
          const { data: carts } = cartsData;

          setCookie("carts", JSON.stringify(carts[0]));

          setCookie("user", user);

          set({ user: decoded });
        },
        logout: async () => {
          set({ user: null });
        },
      }),
      {
        name: "cart-storage",
        getStorage: createJSONStorage(() => sessionStorage),
      },
    ),
  ),
);

export default useAuthStore;
