import jwt from 'jsonwebtoken';

const secret = process.env.JWT_SECRET || 'not secret';

const verifyToken = (token: string) => {
	try {
		const { exp } = jwt.verify(token, secret) as { exp: number };
		const expirationDatetimeInSeconds = exp * 1000;

		return Date.now() <= expirationDatetimeInSeconds;
	} catch (error) {
		console.error(error);

		return false;
	}
};

export default verifyToken;
