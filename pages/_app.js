import React from "react";
import Head from "next/head";
// import dynamic from "next/dynamic";
import PropTypes from "prop-types";

// import AppAlert from "@/components/App/AppAlert/AppAlert";
// import MoveTop from "@/components/App/AppMoveTop/MoveTop";
// import PhotoPreview from "@/components/App/AppPhotoView/PhotoPreview";
// import CircleLoading from "@/components/App/CircleLoading/CircleLoading";
// import Footer from "@/components/Layouts/Footer/Footer";
// import Header from "@/components/Layouts/Header/Header";
import ToastProvider from "@/components/ToastContext/ToastProvider";

import "@/styles/globals.css";

// const Header = dynamic(() => import("@/components/Layouts/Header/Header"), {
//   ssr: false,
//   // loading: lazy,
// });
// const Footer = dynamic(() => import("@/components/Layouts/Footer/Footer"), {
// ssr: false,
// loading: lazy,
// });
// const MoveTop = dynamic(() => import("@/components/App/AppMoveTop/MoveTop"), {
//   ssr: false,
//   loading: () => {
//     <CircleLoading />;
//   },
// });
// const AppAlert = dynamic(() => import("@/components/App/AppAlert/AppAlert"), {
//   ssr: false,
//   loading: () => {
//     <CircleLoading />;
//   },
// });

// const PhotoPreview = dynamic(
//   () => import("@/components/App/AppPhotoView/PhotoPreview"),
//   {
//     ssr: false,
//     loading: () => {
//       <CircleLoading />;
//     },
//   },
// );
export default function App({ Component, pageProps }) {
  return (
    <div className="font-poppins" title="Exclusive">
      <Head>
        <title>Exclusive</title>
      </Head>

      <ToastProvider Component={Component} pageProps={pageProps}>
        <Component {...pageProps} />
        {/* FOOTER HAVE PROBLEM */}
      </ToastProvider>
    </div>
  );
}

App.propTypes = {
  Component: PropTypes.instanceOf(Object).isRequired,
  pageProps: PropTypes.instanceOf(Object).isRequired,
};
