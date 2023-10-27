import React from "react";

import SigninForm from "@/components/SigninForm/SigninForm";
// import Image from "next/image";

// import Banner from "./Side Image.png";

function Signin() {
  return (
    <div className="max-w-[1440px] mx-auto flex flex-row pt-10">
      <div className="w-[805px] h-[781px] bg-Blue-300">
        {/* <Image src={Banner} alt="Banner" width={805} height={781} /> */}
      </div>
      <div className="w-[500px] flex flex-row-reverse">
        <div className="w-[371px] py-[125px]">
          <SigninForm />
        </div>
      </div>
    </div>
  );
}

export default Signin;
