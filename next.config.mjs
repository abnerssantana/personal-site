import nextMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'
import rehypePrism from '@mapbox/rehype-prism'
import { createSecureHeaders } from 'next-secure-headers'

const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
  },
}

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypePrism],
  },
})

export default {
  ...withMDX(nextConfig),

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: createSecureHeaders({
          contentSecurityPolicy: {
            directives: {
              defaultSrc: "'self'",
              styleSrc: "'self'",
              scriptSrc: "'self'",
              frameSrc: ["'self'", 'www.youtube.com', 'youtube.com'],
              connectSrc: ["'self'"],
              xssProtection: "'sanitize'"
            },
          },
          referrerPolicy: 'same-origin',
          permissionsPolicy: {
            features: {
              accelerometer: "'none'",
              ambientLightSensor: "'none'",
              camera: "'none'",
              geolocation: "'none'",
              gyroscope: "'none'",
              magnetometer: "'none'",
              microphone: "'none'",
              payment: "'none'",
              usb: "'none'",
            },
          },
        }),
      },
    ]
  },
}