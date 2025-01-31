import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import useAuthStore from "@/hooks/useAuth";

import SigninForm from "../_components/Sigin/SigninForm";
import Banner from "../signup/signBanner.png";

function Signin() {
  const { user } = useAuthStore();
  const router = useRouter();

  if (user && user.user) {
    router.push("/");
  } else {
    return (
      <div className="max-w-[1440px] mx-auto flex flex-row justify-center items-center xl:flex xl:flex-row xl:justify-between pt-10 ">
        <div className="max-w-[805px] max-h-[781px] w-full relative ">
          <Image src={Banner} alt="Banner" width={805} height={781} />
        </div>
        <div className="max-w-[500px] w-2/3 xl:relative xl:py-[125px] absolute">
          <div className=" max-w-[371px] ">
            <SigninForm />
          </div>
        </div>
      </div>
    );
  }
}

export default Signin;
