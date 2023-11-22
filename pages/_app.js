import React from "react";
import PropTypes from "prop-types";

import AleartApp from "@/components/App/AleartApp/AleartApp";
// import AleartApp from "@/components/AleartApp/AleartApp";
import MoveTop from "@/components/App/AppMoveTop/MoveTop";
import PhotoPreview from "@/components/App/AppPhotoView/PhotoPreview";
import Footer from "@/components/Layouts/Footer/Footer";
import Header from "@/components/Layouts/Header/Header";

import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
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
