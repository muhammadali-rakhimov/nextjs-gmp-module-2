/** @type {import('next').NextConfig} */

const withCSS = require('@zeit/next-css')
module.exports = withCSS({
  /* my next config */
  reactStrictMode: true,
  swcMinify: true,
})
