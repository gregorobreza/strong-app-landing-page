/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    GOOGLE_RECAPTCHA_SECRET_KEY: process.env.GOOGLE_RECAPTCHA_SECRET_KEY,
  },
}

module.exports = nextConfig
