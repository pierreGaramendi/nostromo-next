/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  env: {
    urlapi: 'http://localhost:8000/api/'
  },
  images:{
    remotePatterns:[
      {
        hostname:'http2.mlstatic.com'
      }
    ]
  }
}

export default nextConfig
