/** @type {import('next').NextConfig} */
//import MillionLint from "@million/lint";

let nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

// if (process.env.NODE_ENV === "development") {
//   nextConfig = MillionLint.next({ rsc: true })(nextConfig);
// }

export default nextConfig;
