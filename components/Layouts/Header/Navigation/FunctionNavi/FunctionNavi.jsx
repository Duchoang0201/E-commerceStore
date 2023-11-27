/* eslint-disable no-undef */

"use client";

import React, { useEffect } from "react";
import dynamic from "next/dynamic";

import useAuthStore from "@/hooks/useAuth";
import { axiosClient } from "@/libraries/axiosClient";

import FNLoading from "../FunctionNaviLoading/FNLoading";
import NDLoading from "../FunctionNaviLoading/NDLoading";

const FunctionNavigation = dynamic(() => import("./FunctionNavigation"), {
  ssr: false,
  loading: () => <FNLoading />,
});
const NavigateDropdown = dynamic(() => import("./NavigateDropdown"), {
  ssr: false,
  loading: () => <NDLoading />,
});

function FunctionNavi() {
  const { user: isUser, getUser } = useAuthStore();

  useEffect(() => {
    if (!isUser && !isUser?.name) {
      axiosClient
        .get(`/auth/profile`)
        .then(({ data: user }) => {
          getUser(user);
        })
        .catch(() => {});
    }
  }, [getUser, isUser]);

  return (
    <div className="flex flex-row gap-4">
      {" "}
      <FunctionNavigation isUser={isUser || {}} />
      <div className="lg:hidden flex flex-row">
        <NavigateDropdown isUser={isUser || {}} />
      </div>
    </div>
  );
}

export default FunctionNavi;
