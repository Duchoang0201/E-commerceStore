/** @type {import('next').NextConfig} */
const { i18n } = require("./i18n.config");

const nextConfig = {
  i18n,
  reactStrictMode: true,
  images: {
    domains: ["fakestoreapi.com", "swiperjs.com"],
    loader: "default",
  },
};

module.exports = nextConfig;
