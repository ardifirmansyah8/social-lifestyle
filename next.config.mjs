/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.masjed.id",
        port: "",
        pathname: "/assets/icons/menus/**",
      },
    ],
  },
  rewrites: async () => {
    return [
      {
        source: "/api/:path*",
        destination: "http://lifestyle.eziswaf.net/api/v1/:path*",
      },
    ];
  },
};

export default nextConfig;
