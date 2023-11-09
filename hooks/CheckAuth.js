/* eslint-disable react/display-name */
/* eslint-disable func-names */
// components/RequireAuth.js

import React from "react";
import { useRouter } from "next/router";

import useAuthStore from "./useAuth";

const RequireAuth = (WrappedComponent) => {
  const { user } = useAuthStore();
  const router = useRouter();

  return function (props) {
    if (!user && !user.user) {
      router.push("/login");
      return null; // You can also display a loading spinner or message
    }

    return <WrappedComponent {...props} />;
  };
};

export default RequireAuth;
