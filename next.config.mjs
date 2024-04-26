/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'images.ctfassets.net',
				port: '',
			},
		],
	},
	async redirects() {
		return [
			// Basic redirect
			{
				source: '/comfirmappointment',
				destination: '/',
				permanent: false,
			},
		];
	},
};

export default nextConfig;
