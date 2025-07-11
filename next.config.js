const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    // Will be available on both server and client
    API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL
  }
};

module.exports = nextConfig;
