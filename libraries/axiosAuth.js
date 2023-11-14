/* eslint-disable no-param-reassign */
import { useEffect } from "react";
import { getCookie } from "cookies-next";

import useAuthStore from "@/hooks/useAuth";

import { axiosClient } from "./axiosClient";
import { useRefreshToken } from "./useRefreshToken";

const useAxiosAuth = () => {
  const token = getCookie("token");
  const refreshToken = useRefreshToken();
  const { logout } = useAuthStore();
  const axioAuth = axiosClient;
  useEffect(() => {
    const requestIntercept = axioAuth.interceptors.request.use(
      (config) => {
        config.headers.Authorization = `Bearer ${token}`;
        return config;
      },
      (error) => {
        Promise.reject(error);
      },
    );

    const responseIntercept = axioAuth.interceptors.response.use(
      (response) => response,
      async (error) => {
        console.log(`🚀🚀🚀!..error`, error);

        if (error?.response?.status !== 401) {
          return Promise.reject(error);
        }
        if (
          error?.response?.status === 401 &&
          (error?.response?.data?.message ===
            "refreshToken is not a valid Token" ||
            error?.response?.data?.message ===
              "refreshToken and id's not match!")
        ) {
          logout();
        }
        const prevRequest = error.config;

        if (
          error?.response?.status === 401 &&
          error?.response?.data === "Unauthorized" &&
          !prevRequest.sent
        ) {
          console.log("Error 🚀", error);
          prevRequest.sent = true;
          await refreshToken();

          prevRequest.headers.Authorization = `Bearer ${token}`;
          return axioAuth(prevRequest);
        }

        return Promise.reject(error);
      },
    );

    // Clean up the interceptor when the component unmounts
    return () => {
      axiosClient.interceptors.request.eject(requestIntercept);
      axiosClient.interceptors.response.eject(responseIntercept);
    };
  }, [axioAuth, logout, refreshToken, token]);

  return axiosClient;
};

export default useAxiosAuth;
