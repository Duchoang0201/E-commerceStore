import React from "react";
import { Head, Html, Main, NextScript } from "next/document";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        {" "}
        {/* <div
          className={`flex flex-col h-screen justify-between max-w-screen-xxl mx-auto `}
        > */}
        <Main />
        {/* </div> */}
        <NextScript />
      </body>
    </Html>
  );
}
