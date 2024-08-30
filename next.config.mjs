/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "lifestyle.eziswaf.net",
        port: "",
        pathname: "/api/v1/**",
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
