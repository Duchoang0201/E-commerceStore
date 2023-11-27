// "use client";

import React from "react";

// import dynamic from "next/dynamic";
import Language from "./Language/Language";
import Navigation from "./Navigation/Navigation";

// const Language = dynamic(
//   () => import("@/components/Layouts/IndexPage/IndexPage"),
//   { ssr: false },
// );

function Header() {
  return (
    <div>
      <div className="bg-black-0">
        <Language />
      </div>
      <div className="">
        <Navigation />
      </div>
    </div>
  );
}

export default Header;
