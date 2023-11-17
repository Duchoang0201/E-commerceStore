"use client";

import React, { useEffect } from "react";
import { getCookie } from "cookies-next";

import useAuthStore from "@/hooks/useAuth";

import Language from "./Language/Language";
import Navigation from "./Navigation/Navigation";

function Header() {
  const token = getCookie("token") || "";
  const { getUser } = useAuthStore();

  useEffect(() => {
    if (!token) {
      getUser({});
    }
  }, [token]);

  return (
    <>
      <div className="bg-black-0">
        <Language />
      </div>
      <div className="">
        <Navigation />
      </div>
    </>
  );
}

export default Header;
