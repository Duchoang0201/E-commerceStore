import React from "react";

import Account from "@/components/Account/Account";

import useAuthStore from "@/hooks/useAuth";

function AccountCom() {
  const { user } = useAuthStore();
  return (
    <div className="container mt-[80px] mb-[140px] ">
      <div className="my-[80px] flex flex-row justify-between">
        {" "}
        <span>Home/My Account</span>
        <span>
          Welcome! <span className="text-Secondary-2">{user.user}</span>
        </span>
      </div>

      <Account />
    </div>
  );
}

export default AccountCom;
