import { Header, Footer } from '@/components';
import { Providers } from '@/redux/provider';

import { Libre_Caslon_Text } from 'next/font/google';
import './global.css';

const caslon = Libre_Caslon_Text({
	weight: ['400', '700'],
	subsets: ['latin'],
	variable: '--font-caslon',
	display: 'swap'
});

export const metadata = {
	title: 'Mary Wood',
	description: 'Writer, Teacher, Scholar'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en' className={`${caslon.variable}`}>
			<body>
				<Providers>
					<Header />
					{children}
					<Footer />
				</Providers>
			</body>
		</html>
	);
}
