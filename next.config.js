/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["fakestoreapi.com"],
    loader: "default",
  },
};

module.exports = nextConfig;
