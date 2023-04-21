import Header from '../components/header';
import Sidebar from '../components/sidebar';

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
				<main>
					<Sidebar />
					{children}
				</main>
			</body>
		</html>
	);
}
