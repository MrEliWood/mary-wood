/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true
	},
	env: {
		BASE_URL: 'http://localhost:3001'
	},
	images: {
		remotePatterns: [
			{
				protocol: 'http',
				hostname: 'placekitten.com',
				port: '',
				pathname: '/**'
			}
		]
	}
};

module.exports = nextConfig;
