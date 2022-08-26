/* eslint-disable @typescript-eslint/no-var-requires */
const runtimeCaching = require('next-pwa/cache')
const withPWA = require('next-pwa')({
  dest: 'public',
  runtimeCaching
})

/** @type {import('next').NextConfig} */
const config = {
  staticPageGenerationTimeout: 300,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false
    }
    return config
  },
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
    loader: 'akamai',
    path: '',
    formats: ['image/avif', 'image/webp'],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;"
  },
  poweredByHeader: false,
  reactStrictMode: true
}

module.exports = withPWA(config)
