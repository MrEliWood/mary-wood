import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../secrets';

const secret = process.env.JWT_SECRET || JWT_SECRET;

const verifyToken = (token: string) => {
	try {
		const { exp } = jwt.verify(token, secret) as { exp: number };
		const expirationDatetimeInSeconds = exp * 1000;

		return Date.now() <= expirationDatetimeInSeconds;
	} catch (error) {
		return error;
	}
};

export default verifyToken;
