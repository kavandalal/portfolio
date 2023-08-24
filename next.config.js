/** @type {import('next').NextConfig} */
const nextConfig = {
	trailingSlash: true,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'img.shields.io',
				port: '',
				pathname: '/badge/**',
			},
		],
	},
};

module.exports = nextConfig;
