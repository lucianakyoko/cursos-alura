/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // domains: [
    //     'raw.githubusercontent.com'
    // ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.githubusercontent.com",
        port: "",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "*.public.blob.vercel-storage.com",
        port: "",
        pathname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
