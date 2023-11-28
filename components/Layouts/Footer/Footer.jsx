"use client";

import React from "react";
import { FacebookIcon, Instagram, LinkedinIcon, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import Commons from "./Columns/Commons";
import FormCommon from "./Columns/FormCommon";
import AppStore from "./AppStore.png";
import Ggbanner from "./Ggbanner.png";
import QrCode from "./Qrcode.png";

function Footer() {
  const columnFirst = {
    title: "Support",
    list: [
      {
        name: "111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.",
        href: "",
      },
      {
        name: "exclusive@gmail.com",
        href: "mailto:exclusive@gmail.com",
        type: "email",
      },
      {
        name: "+88015-88888-9999",
        href: "tel:+88015-88888-9999",
        type: "phone",
      },
    ],
  };
  const columnSecond = {
    title: "Account",
    list: [
      { name: "My Account", href: "account" },
      { name: "Login / Register", href: "signup" },
      { name: "Cart", href: "cart" },
      { name: "Wishlist", href: "wishlist" },
      { name: "Shop", href: "" },
    ],
  };
  const columnThird = {
    title: "Quick Link",
    list: [
      { name: "Privacy Policy", href: "" },
      { name: "Terms Of Use", href: "" },
      { name: "FAQ", href: "" },
      { name: "Contact", href: "contact" },
    ],
  };
  return (
    <footer className="bg-black-0 text-white-0 pt-20 container">
      <div className="grid grid-cols-1 items-center ssm:grid ssm:grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-5 pb-16">
        <div className="h-full ">
          <h2 className="text-xl mb-6 font-semibold  dark:text-white">
            Exclusive
          </h2>
          <ul className="  font-medium">
            <li className="mb-4">
              <Link href="/" className="text-xl hover:underline">
                Subscribe
              </Link>
            </li>
            <li className="mb-4">
              <Link href="/" className="hover:underline">
                Get 10% off your first order
              </Link>
            </li>
            <li className="mb-4">
              <FormCommon />
            </li>
          </ul>
        </div>
        <Commons data={columnFirst} />
        <Commons data={columnSecond} />
        <Commons data={columnThird} />
        <div>
          <h2 className="mb-6 text-xl font-semibold  dark:text-white">
            Download App
          </h2>
          <ul className="  font-medium">
            <li className="mb-4">
              <Link href="/" className="hover:underline text-sm">
                Save $3 with App New User Only
              </Link>
            </li>
            <li className="mb-4">
              <Link
                href="/"
                className="hover:underline flex flex-row justify-between max-w-[200px]"
              >
                <Image
                  loading="lazy"
                  width={80}
                  height={80}
                  src={QrCode}
                  alt="qrcode"
                />
                <div className="flex flex-col">
                  <Image
                    loading="lazy"
                    width={110}
                    height={40}
                    src={Ggbanner}
                    alt="Ggbanner"
                  />
                  <Image
                    loading="lazy"
                    width={110}
                    height={40}
                    src={AppStore}
                    alt="AppStore"
                  />
                </div>
              </Link>
            </li>
            <li className="mb-4">
              <Link
                href="/"
                className="hover:underline flex flex-row justify-between max-w-[200px]"
              >
                <FacebookIcon size={20} />
                <Twitter size={20} />
                <Instagram size={20} />
                <LinkedinIcon size={20} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <p className="py-3 block text-sm text-gray-400 sm:text-center border-t-[0.01px] border-Neutral-50 border-opacity-5">
        © Copyright Rimel 2022. All right reserved
      </p>
    </footer>
  );
}

export default Footer;
