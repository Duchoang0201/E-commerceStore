/* eslint-disable @next/next/no-title-in-document-head */
import React from "react";
import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Exclusive E-commerce Shop</title>
        <meta
          name="description"
          content=" Where luxury meets exclusivity in a meticulously curated digital haven, offering rare treasures and bespoke experiences tailored to the most discerning tastes. Welcome to a realm of sophistication and personalized indulgence at your fingertips."
          key="desc"
        />
        <meta
          itemProp="og:image"
          content="../components/Layouts/IndexPage/HerroBanner/Banner.jpg"
        />
        <meta property="og:image:alt" content="Exclusive shop" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta content="@vercel" name="twitter:site" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
