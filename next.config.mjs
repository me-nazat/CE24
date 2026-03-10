/** @type {import('next').NextConfig} */
const nextConfig = {
    // Enable React Compiler for massive performance gains
    reactCompiler: true,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "images.unsplash.com",
            },
            {
                protocol: "https",
                hostname: "i.pravatar.cc",
            },
        ],
    },
};

export default nextConfig;
