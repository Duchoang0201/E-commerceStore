import React, { useEffect } from "react";

import useAuthStore from "@/hooks/useAuth";
import { axiosClient } from "@/libraries/axiosClient";

import FunctionNavigation from "./FunctionNavigation";
import NavigateDropdown from "./NavigateDropdown";

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
    <div>
      {" "}
      <FunctionNavigation isUser={isUser || {}} />
      <div className="lg:hidden flex flex-row">
        <NavigateDropdown isUser={isUser || {}} />
      </div>
    </div>
  );
}

export default FunctionNavi;
