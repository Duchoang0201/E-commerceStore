import React from "react";

import useAuthStore from "@/hooks/useAuth";

import Account from "../_components/Account/Account";

function AccountCom() {
  const { user } = useAuthStore();
  return (
    <div className="container mt-[80px] mb-[140px] ">
      <div className="my-[80px] flex flex-row justify-between">
        {" "}
        <span>Home/My Account</span>
        <span>
          Welcome! <span className="text-Secondary-2">{user.name}</span>
        </span>
      </div>

      <Account user={user} />
    </div>
  );
}

export default AccountCom;
