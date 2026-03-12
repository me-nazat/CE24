/** @type {import('next').NextConfig} */
const nextConfig = {
    // Enable React Compiler for massive performance gains
    reactCompiler: true,
    images: {
        formats: ['image/avif', 'image/webp'],
        minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
        remotePatterns: [
            {
                protocol: "https",
                hostname: "images.unsplash.com",
            },
        ],
    },
};

export default nextConfig;
