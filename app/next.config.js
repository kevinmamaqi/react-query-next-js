/** @type {import('next').NextConfig} */
const withTM = require("next-transpile-modules")(["@company-libs/queries"], {
  resolveSymlinks: false,
});

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = withTM(nextConfig);
