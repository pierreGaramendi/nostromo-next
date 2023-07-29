/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  env: {
    urlapipoke: 'https://pokeapi.co/api/v2/pokemon',
    urlapi: 'http://localhost:8000/api/'
  }
}

export default nextConfig
