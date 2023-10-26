import React from "react";
import Link from "next/link";

import Commons from "./Columns/Commons";
import FormCommon from "./Columns/FormCommon";

function Footer() {
  const columnFirst = {
    title: "Support",
    list: [
      { name: "111 Bijoy sarani, Dhaka, DH 1515, Bangladesh." },
      { name: "exclusive@gmail.com" },
      { name: "+88015-88888-9999" },
    ],
  };
  const columnSecond = {
    title: "Account",
    list: [
      { name: "My Account" },
      { name: "Login / Register" },
      { name: "Cart" },
      { name: "Wishlist" },
      { name: "Shop" },
    ],
  };
  const columnThird = {
    title: "Quick Link",
    list: [
      { name: "Privacy Policy" },
      { name: "Terms Of Use" },
      { name: "FAQ" },
      { name: "Contact" },
    ],
  };
  return (
    <div className="text-white-0">
      <footer className="bg-black-0">
        <div className="mx-auto w-full max-w-screen-xl pt-20 bg-black ">
          <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-5 pb-16">
            <div>
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
                  <Link href="/" className="hover:underline">
                    Subscribe
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/" className="hover:underline">
                    Get 10% off your first order
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <span className="py-3 block text-sm text-gray-400 sm:text-center ">
            © Copyright Rimel 2022. All right reserved
          </span>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
