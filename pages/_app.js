import React from "react";
import PropTypes from "prop-types";

import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import MoveTop from "@/components/MoveTop/MoveTop";

import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div className="font-poppins">
      <Header />
      <Component {...pageProps} />
      {/* FOOTER HAVE PROBLEM */}
      <Footer />
      <MoveTop />
    </div>
  );
}

App.propTypes = {
  Component: PropTypes.instanceOf(Object).isRequired,
  pageProps: PropTypes.instanceOf(Object).isRequired,
};
