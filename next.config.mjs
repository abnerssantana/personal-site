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

  // Security by next-secure-headers

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
        }),
      },
    ]
  },
}

export const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};


export async function OPTIONS(req: NextRequest) {
  return NextResponse.json({}, { headers: corsHeaders });
}

export async function POST(req: NextRequest) {
  // ...

  return NextResponse.json({ foo: "bar" }, { headers: corsHeaders });
}
