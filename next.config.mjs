import nextMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'
import rehypePrism from '@mapbox/rehype-prism'
import { createSecureHeaders } from 'next-secure-headers'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
  }
}

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypePrism],
  },
})

export default withMDX(nextConfig)

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
              styleSrc: ["'self'", "'unsafe-inline'"],
              scriptSrc: ["'self'", "'unsafe-inline'"],
              // Adicione outras diretivas conforme necessário
            },
          },
        }),
      },
    ]
  },
}