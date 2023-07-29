/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  env: {
    urlapi: 'https://pokeapi.co/api/v2/pokemon',
    urlapipoke: 'http://localhost:8000/api/'
  }
}

export default nextConfig
