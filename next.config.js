/** @type {import('next').NextConfig} */
const { i18n } = require("./i18n.config");

const nextConfig = {
  // experimental: {
  //   nextScriptWorkers: true,
  // },

  pageExtensions: ["js", "ts", "page.jsx", "page.tsx"],
  i18n,
  reactStrictMode: true,
  images: {
    domains: [
      "fakestoreapi.com",
      "swiperjs.com",
      "i.imgur.com",
      "placeimg.com",
      "st3.depositphotos.com",
      "api.escuelajs.co",
      "upload.wikimedia.org",
      "eduport.webestica.com",
      "www.google.com",
      "encrypted-tbn0.gstatic.com",
      "github.com",
      "t3.ftcdn.net",
      "images.saymedia-content.com",
      "prodimage.images-bn.com",
    ],
    remotePatterns: [
      {
        protocol: "https" || "http",
        hostname: "**",
      },
    ],
    loader: "default",
  },
};

module.exports = nextConfig;
