/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true
	},
	env: {
		BASE_URL: 'https://mwb.herokuapp.com',

		JWT_SECRET: 'tacocat',

		USER_ID: 1,
		USER_NAME: 'mary',
		USER_PASSWORD: 'password',

		ADMIN_ID: 2,
		ADMIN_NAME: 'admin',
		ADMIN_PASSWORD: 'password'
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
