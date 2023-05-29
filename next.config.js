/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true
	},
	env: {
		BASE_URL: 'https://mwb.herokuapp.com'
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
