import React from "react";
import { Inter } from "next/font/google";
import Header from "@/components/Header/Header";
import ModelDraw from "@/components/Header/Navigation/ModalDraw";
import IndexPage from "@/components/IndexPage/IndexPage";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
    // className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <IndexPage />
    </main>
  );
}
