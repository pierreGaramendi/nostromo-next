/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  env:{
    urlapi: 'https://pokeapi.co/api/v2/pokemon'
  }
}

export default nextConfig
