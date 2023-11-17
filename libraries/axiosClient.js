/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
import axios from "axios";
import { getCookie, setCookie } from "cookies-next";
import { useRouter } from "next/router";

import { API_URL } from "@/constant/URL";
import useAuthStore from "@/hooks/useAuth";

const axiosClient = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// REQUEST
axiosClient.interceptors.request.use(
  (config) => {
    const token = getCookie("token") || "";

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    Promise.reject(error);
  },
);

// RESPONSE

axiosClient.interceptors.response.use(
  async (response) => {
    const { access_token: token, refresh_token: refreshToken } = response.data;

    if (token) {
      setCookie("token", token);
    }
    if (refreshToken) {
      setCookie("refreshToken", refreshToken);
    }
    return response;
  },
  async (error) => {
    if (error?.response?.status !== 401) {
      return Promise.reject(error);
    }
    if (
      error?.response?.data.statusCode === 401 &&
      error?.response?.data?.message === "Unauthorized"
    ) {
      localStorage.clear();
      return Promise.reject(error);
    }
    const originalConfig = error.config;
    if (error?.response?.status === 401 && !originalConfig.sent) {
      originalConfig.sent = true;
      try {
        // Trường hợp không có token thì chuyển sang trang LOGIN
        const token = getCookie("token") || "";
        if (!token) {
          useRouter().push("/");
          useAuthStore.getState().getUser({});
          return Promise.reject(error);
        }

        const refreshToken = getCookie("refreshToken");
        if (refreshToken) {
          const response = await axiosClient.post("/auth/refresh-token", {
            refreshToken,
          });

          const { access_token: newToken, refresh_token: newRefreshToken } =
            response.data;
          setCookie("token", newToken);
          setCookie("refreshToken", newRefreshToken);

          originalConfig.headers = {
            ...originalConfig.headers,
            Authorization: `Bearer ${newToken}`,
          };

          return axiosClient(originalConfig);
        }
        return Promise.reject(error);
      } catch (err) {
        return Promise.reject(err);
      }
    }
  },
);
export { axiosClient };
