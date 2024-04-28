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
			{
				source: '/comfirmappointment',
				destination: '/',
				permanent: false,
			},
			{
				source: '/comfirmemail',
				destination: '/',
				permanent: false,
			},
		];
	},
};

export default nextConfig;
