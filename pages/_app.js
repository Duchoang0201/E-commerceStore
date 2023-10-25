import React from "react";
import PropTypes from "prop-types";

import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";

import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

App.propTypes = {
  Component: PropTypes.instanceOf(Object).isRequired,
  pageProps: PropTypes.instanceOf(Object).isRequired,
};
