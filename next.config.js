const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  ...nextConfig,
  sassOptions: {
    includePath: [path.join(__dirname, 'styles')]
  }
}
