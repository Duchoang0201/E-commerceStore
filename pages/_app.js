import React, { useEffect } from "react";
import { deleteCookie } from "cookies-next";
import PropTypes from "prop-types";

import AleartApp from "@/components/AleartApp/AleartApp";
import Footer from "@/components/Layouts/Footer/Footer";
import Header from "@/components/Layouts/Header/Header";
// import AleartApp from "@/components/AleartApp/AleartApp";
import MoveTop from "@/components/MoveTop/MoveTop";
import PhotoPreview from "@/components/PhotoPreview/PhotoPreview";

import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    window.addEventListener("beforeunload", (event) => {
      event.preventDefault();
      localStorage.clear();
      deleteCookie("token");
      deleteCookie("refreshToken");
    });
  }, []);
  return (
    <div className="font-poppins">
      <Header />
      <Component {...pageProps} />
      {/* FOOTER HAVE PROBLEM */}
      <Footer />
      <MoveTop />
      <AleartApp />
      <PhotoPreview />
    </div>
  );
}

App.propTypes = {
  Component: PropTypes.instanceOf(Object).isRequired,
  pageProps: PropTypes.instanceOf(Object).isRequired,
};
