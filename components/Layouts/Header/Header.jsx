"use client";

import React from "react";

import Language from "./Language/Language";
import Navigation from "./Navigation/Navigation";

function Header() {
  // const { getUser } = useAuthStore();
  // useEffect(() => {
  //   if (!token) {
  //     getUser({});
  //   } else {
  //     const handleGetUser = async () => {
  //       const { data: user } = await axiosClient.get(`/auth/profile`, {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       });
  //       getUser(user);
  //     };
  //     handleGetUser();
  //   }
  // }, [token]);
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
