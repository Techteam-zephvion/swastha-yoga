import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // This Next.js version defaults to "attachment", which makes browsers
    // download optimized images instead of displaying them inline.
    contentDispositionType: "inline",
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },
};

export default nextConfig;
