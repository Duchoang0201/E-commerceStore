import { getCookie, setCookie } from "cookies-next";

import { axiosClient } from "./axiosClient";

export const useRefreshToken = () => {
  const refreshToken = async () => {
    try {
      const token = getCookie("token");
      const refToken = getCookie("refreshToken");

      if (!token || !refToken) {
        throw new Error("Token or refresh token not found");
      }

      const response = await axiosClient.post("/auth/refresh-token", {
        refreshToken: refToken,
      });

      const newAccessToken = response.data["access-token"];

      if (newAccessToken) {
        setCookie("token", newAccessToken);
      } else {
        throw new Error("New access token not received");
      }
    } catch (error) {
      // Handle error: log, notify, etc.
      console.error("Error refreshing token:", error.message);
    }
  };

  return refreshToken;
};
