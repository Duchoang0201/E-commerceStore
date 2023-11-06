import React from "react";

import Account from "@/components/Account/Account";

function AccountCom() {
  return (
    <div className="container mt-[80px] mb-[140px] ">
      <div className="my-[80px] flex flex-row justify-between">
        {" "}
        <span>Home/My Account</span>
        <span>Welcome! Md Rimel</span>
      </div>

      <Account />
    </div>
  );
}

export default AccountCom;
