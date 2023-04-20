import Header from '../components/header';

import './global.css';

export const metadata = {
	title: 'Mary Wood',
	description: 'Author, Scholar'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body>
				<Header />
				{children}
			</body>
		</html>
	);
}
