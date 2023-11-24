import React from "react";
import dynamic from "next/dynamic";
import PropTypes from "prop-types";

import AppAlert from "@/components/App/AppAlert/AppAlert";
import MoveTop from "@/components/App/AppMoveTop/MoveTop";
import PhotoPreview from "@/components/App/AppPhotoView/PhotoPreview";
import Footer from "@/components/Layouts/Footer/Footer";

// import Header from "@/components/Layouts/Header/Header";
import "@/styles/globals.css";

const Header = dynamic(() => import("@/components/Layouts/Header/Header"), {
  ssr: false,
});
export default function App({ Component, pageProps }) {
  return (
    <div className="font-poppins">
      <title>Exclusive E-commerce Shop</title>

      <Header />
      <Component {...pageProps} />
      {/* FOOTER HAVE PROBLEM */}
      <Footer />
      <MoveTop />
      <AppAlert />
      <PhotoPreview />
    </div>
  );
}

App.propTypes = {
  Component: PropTypes.instanceOf(Object).isRequired,
  pageProps: PropTypes.instanceOf(Object).isRequired,
};
