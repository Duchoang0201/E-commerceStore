import React from "react";

import Language from "./Language/Language";
import Navigation from "./Navigation/Navigation";

function Header() {
  return (
    <>
      <div className="bg-black">
        <Language />
      </div>
      <div className="">
        <Navigation />
      </div>
    </>
  );
}

export default Header;
