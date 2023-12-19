// import { Theme, ThemePanel } from '@radix-ui/themes';

import { Header, Footer } from '@/components';
import { Providers } from '@/redux/provider';

import { Crimson_Text, Libre_Caslon_Text } from 'next/font/google';
// import '@radix-ui/themes/styles.css';
import './global.css';

const caslon = Libre_Caslon_Text({
	weight: ['400', '700'],
	subsets: ['latin'],
	variable: '--font-caslon'
});

const crimson = Crimson_Text({
	weight: ['400', '600', '700'],
	subsets: ['latin'],
	variable: '--font-crimson'
});

export const metadata = {
	title: 'Mary Wood',
	description: 'Writer, Teacher, Scholar'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en' className={`${crimson.variable} ${caslon.variable}`}>
			<body>
				<Providers>
					{/* <Theme> */}
					<Header />
					{children}
					<Footer />

					{/* <ThemePanel /> */}
					{/* </Theme> */}
				</Providers>
			</body>
		</html>
	);
}
