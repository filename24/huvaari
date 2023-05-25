/* eslint-disable @typescript-eslint/no-var-requires */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})
const runtimeCaching = require('next-pwa/cache')
const withPWA = require('next-pwa')({
  dest: 'public',
  runtimeCaching,
  register: true,
  skipWaiting: true,
})
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const siteURL = process.env.NODE_ENV === 'development'
  ? process.env.NODE_ENV === 'development' ? `http://localhost:3000` : `https://anhgerel.vercel.app`
  : `https://${process.env.VERCEL_URL || `https://anhgerel.vercel.app`}`

/**
 * @type {import('next-offline').Config}
 */
module.exports = withPWA(withBundleAnalyzer({
  staticPageGenerationTimeout: 300,
  images: {
    domains: [
      'www.notion.so',
      'notion.so',
      'images.unsplash.com',
      'pbs.twimg.com',
      'abs.twimg.com',
      's3.us-west-2.amazonaws.com',
      'transitivebullsh.it'
    ],
    formats: ['image/avif', 'image/webp'],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;"
  }
}))
