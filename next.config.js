/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'localhost',
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'yt3.ggpht.com',
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'i.ytimg.com',
                pathname: '**',
            },
        ],
    },
    reactStrictMode: false,
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: ['@svgr/webpack'],
        });

        return config;
    },
};

module.exports = nextConfig;
