// external
import { Theme, ThemePanel } from '@radix-ui/themes';

// internal
import { Header } from './_sections';

// styles
import '@radix-ui/themes/styles.css';
import './styles/global.css';

type Props = {
	children: React.ReactNode;
};

export default function Admin({ children }: Props) {
	return (
		<Theme>
			{/* <Header /> */}
			<div className='admin_layout'>{children}</div>
			{/* <ThemePanel /> */}
		</Theme>
	);
}
