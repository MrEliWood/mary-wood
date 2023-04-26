import Header from '../components/header';
import Sidebar from '../components/sidebar';

import { Cormorant_Garamond, Raleway, Libre_Caslon_Text } from 'next/font/google';
import './global.css';

const cormorant = Cormorant_Garamond({
	weight: ['600'],
	subsets: ['latin'],
	variable: '--font-cormorant',
	display: 'swap'
});

const raleway = Raleway({
	subsets: ['latin'],
	variable: '--font-raleway',
	display: 'swap'
});

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
		<html lang='en' className={`${cormorant.variable} ${raleway.variable} ${caslon.variable}`}>
			<body>
				<Header />
				<main>
					<Sidebar />
					{children}
				</main>
			</body>
		</html>
	);
}
