/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: [
            'c0.iggcdn.com',
            'c1.iggcdn.com',
            'c2.iggcdn.com',
            'c3.iggcdn.com',
            'c4.iggcdn.com',
        ],
    },
}

module.exports = nextConfig
